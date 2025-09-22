// Multi-Speech-to-Text Service
// Supports multiple APIs with fallback mechanisms

import { API_KEYS } from '../config/apiKeys';

export interface TranscriptionResult {
  text: string;
  confidence?: number;
  language?: string;
  provider: string;
  duration?: number;
}

export class MultiSpeechToTextService {
  
  // Try multiple services in order of preference
  static async transcribe(audioBlob: Blob, videoBlob?: Blob): Promise<TranscriptionResult> {
    // Only try services that have API keys configured
    const services = [];
    
    // Check which services are available
    if (API_KEYS.DEEPGRAM !== 'YOUR_DEEPGRAM_API_KEY') {
      services.push({ name: 'Deepgram', fn: () => this.transcribeWithDeepgram(audioBlob) });
      if (videoBlob) {
        services.push({ name: 'Deepgram Video', fn: () => this.transcribeWithDeepgram(videoBlob) });
      }
    }
    
    if (API_KEYS.REV_AI !== 'YOUR_REV_AI_API_KEY') {
      services.push({ name: 'Rev AI', fn: () => this.transcribeWithRevAI(audioBlob) });
      if (videoBlob) {
        services.push({ name: 'Rev AI Video', fn: () => this.transcribeWithRevAI(videoBlob) });
      }
    }
    
    if (API_KEYS.GOOGLE_SPEECH !== 'YOUR_GOOGLE_SPEECH_API_KEY') {
      services.push({ name: 'Google Speech', fn: () => this.transcribeWithGoogle(audioBlob) });
    }
    
    if (API_KEYS.AZURE_SPEECH_KEY !== 'YOUR_AZURE_SPEECH_KEY') {
      services.push({ name: 'Azure Speech', fn: () => this.transcribeWithAzure(audioBlob) });
    }
    
    // Always try AssemblyAI as fallback
    services.push({ name: 'AssemblyAI', fn: () => this.transcribeWithAssemblyAI(audioBlob) });
    
    // If we have a video blob, also try direct video upload with AssemblyAI
    if (videoBlob) {
      services.push({ name: 'AssemblyAI Video', fn: () => this.transcribeWithAssemblyAI(videoBlob) });
    }

    console.log(`Available services: ${services.map(s => s.name).join(', ')}`);

    for (const service of services) {
      try {
        console.log(`Trying ${service.name}...`);
        const result = await service.fn();
        
        if (result.text && result.text.trim().length > 0) {
          console.log(`✅ ${service.name} succeeded:`, result.text.length, 'characters');
          return result;
        } else {
          console.log(`⚠️ ${service.name} returned empty result`);
        }
      } catch (error) {
        console.log(`❌ ${service.name} failed:`, error instanceof Error ? error.message : String(error));
      }
    }

    throw new Error('All available speech-to-text services failed');
  }

  // Deepgram - Best for video content
  private static async transcribeWithDeepgram(audioBlob: Blob): Promise<TranscriptionResult> {
    const apiKey = API_KEYS.DEEPGRAM;
    if (apiKey === 'YOUR_DEEPGRAM_API_KEY') {
      throw new Error('Deepgram API key not configured');
    }

    const response = await fetch('https://api.deepgram.com/v1/listen', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': audioBlob.type || 'audio/webm',
      },
      body: audioBlob
    });

    if (!response.ok) {
      throw new Error(`Deepgram API error: ${response.statusText}`);
    }

    const data = await response.json();
    const text = data.results?.channels?.[0]?.alternatives?.[0]?.transcript || '';
    const confidence = data.results?.channels?.[0]?.alternatives?.[0]?.confidence;

    return {
      text,
      confidence,
      provider: 'Deepgram',
      duration: data.metadata?.duration
    };
  }

  // Rev AI - Human-level accuracy
  private static async transcribeWithRevAI(audioBlob: Blob): Promise<TranscriptionResult> {
    const apiKey = API_KEYS.REV_AI;
    if (apiKey === 'YOUR_REV_AI_API_KEY') {
      throw new Error('Rev AI API key not configured');
    }

    // Upload file
    const formData = new FormData();
    formData.append('media', audioBlob);
    formData.append('options', JSON.stringify({
      punctuation: true,
      language: 'en'
    }));

    const uploadResponse = await fetch('https://api.rev.ai/speechtotext/v1/jobs', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
      body: formData
    });

    if (!uploadResponse.ok) {
      throw new Error(`Rev AI upload error: ${uploadResponse.statusText}`);
    }

    const uploadData = await uploadResponse.json();
    const jobId = uploadData.id;

    // Poll for completion
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      attempts++;

      const statusResponse = await fetch(`https://api.rev.ai/speechtotext/v1/jobs/${jobId}`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        }
      });

      const statusData = await statusResponse.json();

      if (statusData.status === 'transcribed') {
        // Get transcript
        const transcriptResponse = await fetch(`https://api.rev.ai/speechtotext/v1/jobs/${jobId}/transcript`, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Accept': 'text/plain'
          }
        });

        const text = await transcriptResponse.text();
        return {
          text: text.trim(),
          provider: 'Rev AI'
        };
      } else if (statusData.status === 'failed') {
        throw new Error('Rev AI transcription failed');
      }
    }

    throw new Error('Rev AI transcription timeout');
  }

  // Google Speech-to-Text
  private static async transcribeWithGoogle(audioBlob: Blob): Promise<TranscriptionResult> {
    const apiKey = API_KEYS.GOOGLE_SPEECH;
    if (apiKey === 'YOUR_GOOGLE_SPEECH_API_KEY') {
      throw new Error('Google Speech API key not configured');
    }

    // Convert blob to base64
    const arrayBuffer = await audioBlob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    const base64Audio = btoa(String.fromCharCode.apply(null, Array.from(uint8Array)));

    const response = await fetch(`https://speech.googleapis.com/v1/speech:recognize?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        config: {
          encoding: 'WEBM_OPUS',
          sampleRateHertz: 48000,
          languageCode: 'en-US',
          enableAutomaticPunctuation: true,
        },
        audio: {
          content: base64Audio
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Google Speech API error: ${response.statusText}`);
    }

    const data = await response.json();
    const text = data.results?.[0]?.alternatives?.[0]?.transcript || '';
    const confidence = data.results?.[0]?.alternatives?.[0]?.confidence;

    return {
      text,
      confidence,
      provider: 'Google Speech'
    };
  }

  // Azure Speech Services
  private static async transcribeWithAzure(audioBlob: Blob): Promise<TranscriptionResult> {
    const apiKey = API_KEYS.AZURE_SPEECH_KEY;
    const region = API_KEYS.AZURE_SPEECH_REGION;
    
    if (apiKey === 'YOUR_AZURE_SPEECH_KEY') {
      throw new Error('Azure Speech API key not configured');
    }

    // Get access token
    const tokenResponse = await fetch(`https://${region}.api.cognitive.microsoft.com/sts/v1.0/issuetoken`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to get Azure access token');
    }

    const accessToken = await tokenResponse.text();

    // Transcribe audio
    const response = await fetch(`https://${region}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-US&format=detailed`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': audioBlob.type || 'audio/webm',
        'Accept': 'application/json'
      },
      body: audioBlob
    });

    if (!response.ok) {
      throw new Error(`Azure Speech API error: ${response.statusText}`);
    }

    const data = await response.json();
    const text = data.DisplayText || '';
    const confidence = data.Confidence;

    return {
      text,
      confidence,
      provider: 'Azure Speech'
    };
  }

  // AssemblyAI (fallback)
  private static async transcribeWithAssemblyAI(audioBlob: Blob): Promise<TranscriptionResult> {
    const apiKey = API_KEYS.ASSEMBLYAI;
    if (apiKey === 'YOUR_ASSEMBLYAI_API_KEY') {
      throw new Error('AssemblyAI API key not configured');
    }

    // Upload file
    const uploadResponse = await fetch('https://api.assemblyai.com/v2/upload', {
      method: 'POST',
      headers: {
        'authorization': apiKey,
      },
      body: audioBlob
    });

    if (!uploadResponse.ok) {
      throw new Error(`AssemblyAI upload error: ${uploadResponse.statusText}`);
    }

    const uploadData = await uploadResponse.json();

    // Try multiple AssemblyAI configurations
    const configs = [
      {
        name: 'Auto Language Detection',
        config: {
          audio_url: uploadData.upload_url,
          language_detection: true,
          punctuate: true,
          format_text: true
        }
      },
      {
        name: 'English with Boost',
        config: {
          audio_url: uploadData.upload_url,
          language_code: 'en_us',
          punctuate: true,
          format_text: true,
          word_boost: ['active listening', 'communication', 'skills', 'practice', 'feedback'],
          boost_param: 'default'
        }
      },
      {
        name: 'Minimal Settings',
        config: {
          audio_url: uploadData.upload_url,
          language_code: 'en_us',
          punctuate: false,
          format_text: false
        }
      }
    ];

    for (const config of configs) {
      try {
        console.log(`Trying AssemblyAI with ${config.name}...`);
        
        // Start transcription
        const transcriptResponse = await fetch('https://api.assemblyai.com/v2/transcript', {
          method: 'POST',
          headers: {
            'authorization': apiKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify(config.config)
        });

        if (!transcriptResponse.ok) {
          console.log(`AssemblyAI ${config.name} request failed: ${transcriptResponse.statusText}`);
          continue;
        }

        const transcriptData = await transcriptResponse.json();
        const jobId = transcriptData.id;

        // Poll for completion
        let attempts = 0;
        const maxAttempts = 20;

        while (attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 2000));
          attempts++;

          const statusResponse = await fetch(`https://api.assemblyai.com/v2/transcript/${jobId}`, {
            headers: {
              'authorization': apiKey,
            }
          });

          const statusData = await statusResponse.json();

          if (statusData.status === 'completed') {
            const text = statusData.text || '';
            if (text.trim().length > 0) {
              console.log(`✅ AssemblyAI ${config.name} succeeded:`, text.length, 'characters');
              return {
                text,
                confidence: statusData.confidence,
                language: statusData.language_code,
                provider: 'AssemblyAI'
              };
            } else {
              console.log(`⚠️ AssemblyAI ${config.name} returned empty result`);
              break; // Try next config
            }
          } else if (statusData.status === 'error') {
            console.log(`❌ AssemblyAI ${config.name} error: ${statusData.error}`);
            break; // Try next config
          }
        }
      } catch (error) {
        console.log(`❌ AssemblyAI ${config.name} failed:`, error instanceof Error ? error.message : String(error));
      }
    }

    throw new Error('AssemblyAI all configurations failed');
  }
}
