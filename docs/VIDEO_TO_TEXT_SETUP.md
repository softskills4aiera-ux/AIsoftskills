# 🎯 Video-to-Text Conversion Setup Guide

## 🚀 **Free Speech-to-Text API Options**

### **1. AssemblyAI (Recommended) ⭐**
- **Free**: 3 hours per month
- **Setup**: Very easy
- **Quality**: Excellent
- **Best for**: Quick setup and good results

**Setup Steps:**
1. Visit [AssemblyAI](https://www.assemblyai.com/)
2. Sign up for free account
3. Go to Dashboard → API Keys
4. Copy your API key
5. Replace `YOUR_ASSEMBLYAI_API_KEY` in `src/config/apiKeys.ts`

---

### **2. Google Speech-to-Text**
- **Free**: 60 minutes per month
- **Setup**: Moderate (requires Google Cloud)
- **Quality**: Excellent
- **Best for**: High accuracy needs

**Setup Steps:**
1. Visit [Google Cloud Speech-to-Text](https://cloud.google.com/speech-to-text)
2. Create Google Cloud account
3. Enable Speech-to-Text API
4. Create API key in Console
5. Replace `YOUR_GOOGLE_SPEECH_API_KEY` in `src/config/apiKeys.ts`

---

### **3. Azure Speech Services**
- **Free**: 5 hours per month
- **Setup**: Moderate (requires Azure account)
- **Quality**: Very good
- **Best for**: Highest free limit

**Setup Steps:**
1. Visit [Azure Speech Services](https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/)
2. Create Azure account
3. Create Speech Services resource
4. Get subscription key and region
5. Replace keys in `src/config/apiKeys.ts`

---

## 🔧 **Implementation**

### **Option 1: AssemblyAI (Easiest)**

1. **Get API Key** from AssemblyAI
2. **Update config file**:
   ```typescript
   // In src/config/apiKeys.ts
   export const API_KEYS = {
     ASSEMBLYAI: 'your_actual_api_key_here',
   };
   ```

3. **Update component**:
   ```typescript
   // In src/components/EnhancedCommunicationModule.tsx
   import { VideoToTextService } from '../services/videoToTextService';
   import { API_KEYS } from '../config/apiKeys';
   
   const videoToTextService = new VideoToTextService(API_KEYS.ASSEMBLYAI);
   
   const convertVideoToText = async (videoBlob: Blob, subtopic: any) => {
     try {
       const transcript = await videoToTextService.convertVideoToText(videoBlob);
       // Use transcript for AI analysis
     } catch (error) {
       // Handle error
     }
   };
   ```

### **Option 2: Google Speech-to-Text**

1. **Get API Key** from Google Cloud
2. **Update config file**:
   ```typescript
   export const API_KEYS = {
     GOOGLE_SPEECH: 'your_google_api_key_here',
   };
   ```

3. **Use Google service**:
   ```typescript
   import { GoogleSpeechToTextService } from '../services/videoToTextService';
   
   const googleService = new GoogleSpeechToTextService(API_KEYS.GOOGLE_SPEECH);
   ```

### **Option 3: Azure Speech Services**

1. **Get keys** from Azure
2. **Update config file**:
   ```typescript
   export const API_KEYS = {
     AZURE_SPEECH_KEY: 'your_azure_key_here',
     AZURE_SPEECH_REGION: 'eastus',
   };
   ```

3. **Use Azure service**:
   ```typescript
   import { AzureSpeechService } from '../services/videoToTextService';
   
   const azureService = new AzureSpeechService(API_KEYS.AZURE_SPEECH_KEY, API_KEYS.AZURE_SPEECH_REGION);
   ```

---

## 🎯 **My Recommendation**

**Start with AssemblyAI** because:
- ✅ **Easiest setup** (just API key)
- ✅ **Good free limit** (3 hours/month)
- ✅ **Excellent accuracy**
- ✅ **Simple integration**

**If you need more free usage**, try **Azure Speech Services** (5 hours/month).

---

## 🚀 **Quick Start**

1. **Get AssemblyAI API key** (5 minutes)
2. **Update `src/config/apiKeys.ts`** with your key
3. **Import and use** the service in your component
4. **Test with a video** - it will automatically convert to text!

---

## 💡 **Alternative: Browser-Based Solutions**

If you prefer not to use external APIs, you can also use:

### **Web Speech API (Browser Built-in)**
- **Free**: Unlimited
- **Quality**: Variable (depends on browser)
- **Limitations**: Requires user interaction, not always reliable

### **Whisper.js (Client-side)**
- **Free**: Unlimited
- **Quality**: Good
- **Limitations**: Large file size, slower processing

---

## 🔧 **Current Status**

Your app currently shows setup instructions when you record a video. Once you add an API key, it will automatically convert videos to text!

**Next Steps:**
1. Choose an API provider
2. Get your free API key
3. Update the config file
4. Test video-to-text conversion
