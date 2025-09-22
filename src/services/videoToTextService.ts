// Video-to-Text Conversion Service using AssemblyAI
// Free tier: 3 hours per month
// Get your API key from: https://www.assemblyai.com/

export class VideoToTextService {
  private apiKey: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Convert video to audio and transcribe using AssemblyAI
  async convertVideoToText(videoBlob: Blob): Promise<string> {
    try {
      // Step 1: Convert video to audio using Web Audio API
      const audioBlob = await this.convertVideoToAudio(videoBlob);
      
      // Step 2: Send audio to AssemblyAI for transcription
      const transcript = await this.transcribeWithAssemblyAI(audioBlob);
      
      return transcript;
    } catch (error) {
      throw new Error(`Video-to-text conversion failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // Convert video to audio using Web Audio API
  private async convertVideoToAudio(videoBlob: Blob): Promise<Blob> {
    return new Promise((resolve, reject) => {
      try {
        const video = document.createElement('video');
        const videoUrl = URL.createObjectURL(videoBlob);
        video.src = videoUrl;
        video.muted = false;
        video.volume = 1.0;
        
        video.onloadedmetadata = () => {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          const source = audioContext.createMediaElementSource(video);
          const destination = audioContext.createMediaStreamDestination();
          
          source.connect(destination);
          
          const mediaRecorder = new MediaRecorder(destination.stream);
          const audioChunks: Blob[] = [];
          
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              audioChunks.push(event.data);
            }
          };
          
          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            URL.revokeObjectURL(videoUrl);
            resolve(audioBlob);
          };
          
          mediaRecorder.onerror = (error) => {
            URL.revokeObjectURL(videoUrl);
            reject(new Error(`Audio conversion failed: ${error}`));
          };
          
          // Start recording audio
          mediaRecorder.start();
          
          // Play video to capture audio
          video.play().then(() => {
            // Stop recording when video ends
            video.onended = () => {
              setTimeout(() => {
                mediaRecorder.stop();
              }, 1000);
            };
          }).catch(error => {
            URL.revokeObjectURL(videoUrl);
            reject(new Error(`Video playback failed: ${error.message}`));
          });
        };
        
        video.onerror = () => {
          URL.revokeObjectURL(videoUrl);
          reject(new Error('Video loading failed'));
        };
        
        video.load();
      } catch (error) {
        reject(new Error(`Audio conversion setup failed: ${error instanceof Error ? error.message : String(error)}`));
      }
    });
  }

  // Transcribe audio using AssemblyAI API
  private async transcribeWithAssemblyAI(audioBlob: Blob): Promise<string> {
    try {
      // Upload audio file to AssemblyAI
      const uploadResponse = await fetch('https://api.assemblyai.com/v2/upload', {
        method: 'POST',
        headers: {
          'authorization': this.apiKey,
        },
        body: audioBlob
      });
      
      if (!uploadResponse.ok) {
        throw new Error(`Upload failed: ${uploadResponse.statusText}`);
      }
      
      const { upload_url } = await uploadResponse.json();
      
      // Start transcription
      const transcriptResponse = await fetch('https://api.assemblyai.com/v2/transcript', {
        method: 'POST',
        headers: {
          'authorization': this.apiKey,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          audio_url: upload_url,
          language_code: 'en_us'
        })
      });
      
      if (!transcriptResponse.ok) {
        throw new Error(`Transcription request failed: ${transcriptResponse.statusText}`);
      }
      
      const { id } = await transcriptResponse.json();
      
      // Poll for completion
      let transcript = '';
      let attempts = 0;
      const maxAttempts = 30; // 30 seconds timeout
      
      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
        
        const statusResponse = await fetch(`https://api.assemblyai.com/v2/transcript/${id}`, {
          headers: {
            'authorization': this.apiKey,
          }
        });
        
        if (!statusResponse.ok) {
          throw new Error(`Status check failed: ${statusResponse.statusText}`);
        }
        
        const statusData = await statusResponse.json();
        
        if (statusData.status === 'completed') {
          transcript = statusData.text || '';
          break;
        } else if (statusData.status === 'error') {
          throw new Error(`Transcription failed: ${statusData.error}`);
        }
        
        attempts++;
      }
      
      if (attempts >= maxAttempts) {
        throw new Error('Transcription timeout');
      }
      
      return transcript;
    } catch (error) {
      throw new Error(`AssemblyAI transcription failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}

// Alternative: Google Speech-to-Text API (60 minutes free per month)
export class GoogleSpeechToTextService {
  private apiKey: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async convertVideoToText(videoBlob: Blob): Promise<string> {
    try {
      const audioBlob = await this.convertVideoToAudio(videoBlob);
      const transcript = await this.transcribeWithGoogle(audioBlob);
      return transcript;
    } catch (error) {
      throw new Error(`Google Speech-to-Text failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private async convertVideoToAudio(videoBlob: Blob): Promise<Blob> {
    // Same implementation as AssemblyAI
    return new Promise((resolve, reject) => {
      // Implementation similar to AssemblyAI service
      // ... (same video to audio conversion logic)
    });
  }

  private async transcribeWithGoogle(audioBlob: Blob): Promise<string> {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob);
      
      const response = await fetch(
        `https://speech.googleapis.com/v1/speech:recognize?key=${this.apiKey}`,
        {
          method: 'POST',
          body: JSON.stringify({
            config: {
              encoding: 'WEBM_OPUS',
              sampleRateHertz: 48000,
              languageCode: 'en-US',
            },
            audio: {
              content: await this.blobToBase64(audioBlob)
            }
          })
        }
      );
      
      if (!response.ok) {
        throw new Error(`Google Speech API failed: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.results?.[0]?.alternatives?.[0]?.transcript || '';
    } catch (error) {
      throw new Error(`Google transcription failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private async blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]); // Remove data:audio/wav;base64, prefix
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}

// Alternative: Azure Speech Services (5 hours free per month)
export class AzureSpeechService {
  private subscriptionKey: string;
  private region: string;
  
  constructor(subscriptionKey: string, region: string = 'eastus') {
    this.subscriptionKey = subscriptionKey;
    this.region = region;
  }

  async convertVideoToText(videoBlob: Blob): Promise<string> {
    try {
      const audioBlob = await this.convertVideoToAudio(videoBlob);
      const transcript = await this.transcribeWithAzure(audioBlob);
      return transcript;
    } catch (error) {
      throw new Error(`Azure Speech failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private async convertVideoToAudio(videoBlob: Blob): Promise<Blob> {
    // Same implementation as other services
    return new Promise((resolve, reject) => {
      // Implementation similar to AssemblyAI service
      // ... (same video to audio conversion logic)
    });
  }

  private async transcribeWithAzure(audioBlob: Blob): Promise<string> {
    try {
      const response = await fetch(
        `https://${this.region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-US`,
        {
          method: 'POST',
          headers: {
            'Ocp-Apim-Subscription-Key': this.subscriptionKey,
            'Content-Type': 'audio/wav; codecs=audio/pcm; samplerate=16000',
          },
          body: audioBlob
        }
      );
      
      if (!response.ok) {
        throw new Error(`Azure Speech API failed: ${response.statusText}`);
      }
      
      const data = await response.json();
      return data.DisplayText || '';
    } catch (error) {
      throw new Error(`Azure transcription failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
}
