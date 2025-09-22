// Sound Effects Service for Gen Z EdTech App
// Provides audio feedback for user interactions and animations

interface SoundConfig {
  volume: number;
  enabled: boolean;
}

class SoundService {
  private config: SoundConfig = {
    volume: 0.3,
    enabled: true
  };

  private audioContext: AudioContext | null = null;
  private sounds: { [key: string]: AudioBuffer } = {};

  constructor() {
    this.initializeAudioContext();
  }

  private async initializeAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      await this.loadSounds();
    } catch (error) {
      console.warn('Audio context not supported:', error);
    }
  }

  private async loadSounds() {
    if (!this.audioContext) return;

    // Generate synthetic sounds using Web Audio API
    this.sounds = {
      click: this.generateClickSound(),
      success: this.generateSuccessSound(),
      confetti: this.generateConfettiSound(),
      badge: this.generateBadgeSound(),
      typing: this.generateTypingSound(),
      hover: this.generateHoverSound(),
      error: this.generateErrorSound(),
      levelUp: this.generateLevelUpSound(),
      streak: this.generateStreakSound()
    };
  }

  // Generate synthetic sounds using Web Audio API
  private generateClickSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.1, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.sin(2 * Math.PI * 800 * i / 44100) * Math.exp(-i / 44100 * 20) * 0.1;
    }
    
    return buffer;
  }

  private generateSuccessSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.3, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / 44100;
      const freq1 = 523.25; // C5
      const freq2 = 659.25; // E5
      const freq3 = 783.99; // G5
      
      data[i] = (
        Math.sin(2 * Math.PI * freq1 * t) * 0.3 +
        Math.sin(2 * Math.PI * freq2 * t) * 0.2 +
        Math.sin(2 * Math.PI * freq3 * t) * 0.1
      ) * Math.exp(-t * 3) * 0.2;
    }
    
    return buffer;
  }

  private generateConfettiSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.5, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / 44100;
      const freq = 1000 + Math.sin(t * 20) * 200;
      data[i] = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 2) * 0.15;
    }
    
    return buffer;
  }

  private generateBadgeSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.4, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / 44100;
      const freq = 440 + t * 200; // Rising frequency
      data[i] = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 2) * 0.2;
    }
    
    return buffer;
  }

  private generateTypingSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.05, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() - 0.5) * 0.1 * Math.exp(-i / 44100 * 50);
    }
    
    return buffer;
  }

  private generateHoverSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.1, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / 44100;
      data[i] = Math.sin(2 * Math.PI * 600 * t) * Math.exp(-t * 10) * 0.05;
    }
    
    return buffer;
  }

  private generateErrorSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.2, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / 44100;
      data[i] = Math.sin(2 * Math.PI * 200 * t) * Math.exp(-t * 5) * 0.1;
    }
    
    return buffer;
  }

  private generateLevelUpSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.6, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / 44100;
      const freq1 = 261.63; // C4
      const freq2 = 329.63; // E4
      const freq3 = 392.00; // G4
      const freq4 = 523.25; // C5
      
      data[i] = (
        Math.sin(2 * Math.PI * freq1 * t) * 0.2 +
        Math.sin(2 * Math.PI * freq2 * t) * 0.2 +
        Math.sin(2 * Math.PI * freq3 * t) * 0.2 +
        Math.sin(2 * Math.PI * freq4 * t) * 0.2
      ) * Math.exp(-t * 1.5) * 0.15;
    }
    
    return buffer;
  }

  private generateStreakSound(): AudioBuffer {
    if (!this.audioContext) return new AudioBuffer({ length: 1, sampleRate: 44100 });
    
    const buffer = this.audioContext.createBuffer(1, 44100 * 0.3, 44100);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < data.length; i++) {
      const t = i / 44100;
      const freq = 800 + Math.sin(t * 30) * 100;
      data[i] = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 2) * 0.1;
    }
    
    return buffer;
  }

  // Play sound methods
  public playSound(soundName: string): void {
    if (!this.config.enabled || !this.audioContext || !this.sounds[soundName]) return;

    try {
      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();
      
      source.buffer = this.sounds[soundName];
      gainNode.gain.value = this.config.volume;
      
      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      source.start();
    } catch (error) {
      console.warn('Error playing sound:', error);
    }
  }

  // Convenience methods for common sounds
  public playClick(): void {
    this.playSound('click');
  }

  public playSuccess(): void {
    this.playSound('success');
  }

  public playConfetti(): void {
    this.playSound('confetti');
  }

  public playBadge(): void {
    this.playSound('badge');
  }

  public playTyping(): void {
    this.playSound('typing');
  }

  public playHover(): void {
    this.playSound('hover');
  }

  public playError(): void {
    this.playSound('error');
  }

  public playLevelUp(): void {
    this.playSound('levelUp');
  }

  public playStreak(): void {
    this.playSound('streak');
  }

  // Configuration methods
  public setVolume(volume: number): void {
    this.config.volume = Math.max(0, Math.min(1, volume));
  }

  public setEnabled(enabled: boolean): void {
    this.config.enabled = enabled;
  }

  public getVolume(): number {
    return this.config.volume;
  }

  public isEnabled(): boolean {
    return this.config.enabled;
  }

  // Resume audio context (required for user interaction)
  public async resumeContext(): Promise<void> {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }
}

// Create singleton instance
const soundService = new SoundService();

export default soundService;
