// API Keys Configuration
// Get your free API keys from the respective services

export const API_KEYS = {
  // AssemblyAI - 3 hours free per month
  // Get from: https://www.assemblyai.com/
  ASSEMBLYAI: '8d72bab86553433eb5d465a0b1bd0232',
  
  // Google Speech-to-Text - 60 minutes free per month
  // Get from: https://cloud.google.com/speech-to-text
  GOOGLE_SPEECH: 'YOUR_GOOGLE_SPEECH_API_KEY',
  
  // Azure Speech Services - 5 hours free per month
  // Get from: https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/
  AZURE_SPEECH_KEY: 'YOUR_AZURE_SPEECH_KEY',
  AZURE_SPEECH_REGION: 'eastus', // or your preferred region
  
  // Deepgram - 45,000 minutes free per month
  // Get from: https://deepgram.com/
  DEEPGRAM: 'YOUR_DEEPGRAM_API_KEY',
  
  // Rev AI - 5 hours free per month
  // Get from: https://www.rev.ai/
  REV_AI: 'YOUR_REV_AI_API_KEY',
};

// Instructions for setup:
export const SETUP_INSTRUCTIONS = {
  ASSEMBLYAI: {
    name: 'AssemblyAI',
    freeLimit: '3 hours per month',
    steps: [
      '1. Visit https://www.assemblyai.com/',
      '2. Sign up for free account',
      '3. Go to Dashboard → API Keys',
      '4. Copy your API key',
      '5. Replace YOUR_ASSEMBLYAI_API_KEY in this file'
    ],
    pros: ['Easy setup', 'Good accuracy', 'Simple API'],
    cons: ['Lower free limit']
  },
  
  GOOGLE_SPEECH: {
    name: 'Google Speech-to-Text',
    freeLimit: '60 minutes per month',
    steps: [
      '1. Visit https://cloud.google.com/speech-to-text',
      '2. Create Google Cloud account',
      '3. Enable Speech-to-Text API',
      '4. Create API key in Console',
      '5. Replace YOUR_GOOGLE_SPEECH_API_KEY in this file'
    ],
    pros: ['High accuracy', 'Reliable', 'Google quality'],
    cons: ['More complex setup', 'Requires Google Cloud account']
  },
  
  AZURE_SPEECH: {
    name: 'Azure Speech Services',
    freeLimit: '5 hours per month',
    steps: [
      '1. Visit https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/',
      '2. Create Azure account',
      '3. Create Speech Services resource',
      '4. Get subscription key and region',
      '5. Replace keys in this file'
    ],
    pros: ['Highest free limit', 'Enterprise grade', 'Good accuracy'],
    cons: ['Requires Azure account', 'More complex setup']
  },
  
  DEEPGRAM: {
    name: 'Deepgram',
    freeLimit: '45,000 minutes per month',
    steps: [
      '1. Visit https://deepgram.com/',
      '2. Sign up for free account',
      '3. Go to API Keys section',
      '4. Copy your API key',
      '5. Replace YOUR_DEEPGRAM_API_KEY in this file'
    ],
    pros: ['Massive free limit', 'Excellent accuracy', 'Fast processing', 'Great for video'],
    cons: ['Newer service']
  },
  
  REV_AI: {
    name: 'Rev AI',
    freeLimit: '5 hours per month',
    steps: [
      '1. Visit https://www.rev.ai/',
      '2. Sign up for free account',
      '3. Go to API Keys section',
      '4. Copy your API key',
      '5. Replace YOUR_REV_AI_API_KEY in this file'
    ],
    pros: ['Human-level accuracy', 'Great for difficult audio', 'Reliable'],
    cons: ['Lower free limit']
  }
};
