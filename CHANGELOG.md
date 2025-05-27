# Changelog - Chatgjipito

## [1.2.0] - Random Avatar Update

### ✨ Added
- **Random Avatar System**: Each AI response now uses a different random avatar
- **Avatar Directory**: Created `public/assets/avatars/` for user avatar images
- **Dynamic Image Loading**: Avatar selection handled by `getRandomAvatar()` helper

### 🔧 Improved
- **Visual Distinctiveness**: Each message from AI has its own visual identity
- **Cultural Connection**: Added support for Albanian-themed avatars
- **Customizability**: Users can replace default avatars with their own images

## [1.1.0] - API Integration Update

### 🔄 Changed
- **Architecture Improvement**: Updated `chatgjipito-interface.tsx` to use API endpoints instead of direct Google AI service calls
- **Better Error Handling**: Enhanced error messages in Albanian with proper API error handling
- **Model Update**: Switched from `gemini-pro` to `gemini-1.5-flash` for better performance

### ✨ Added
- **API Endpoint Integration**: Frontend now communicates with `/api/chat` endpoint
- **Proper HTTP Handling**: Added proper request/response handling with status codes
- **Test Script**: Added `test-api.js` for API testing
- **npm Test Command**: Added `npm run test:api` command

### 🏗️ Technical Details

#### Before (Direct Integration)
```typescript
// Frontend directly imported GoogleAIService
import { GoogleAIService } from "@/lib/google-ai";
const aiService = new GoogleAIService();
const response = await aiService.sendMessage(message, history);
```

#### After (API Integration)
```typescript
// Frontend calls API endpoint
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message, chatHistory })
});
const data = await response.json();
```

### 🔧 Configuration
No changes needed to existing `.env.local` configuration. The same environment variables work:
- `GOOGLE_AI_API_KEY`: Your Google AI API key
- `CUSTOM_PROMPT`: Custom Albanian prompt (optional)

### 🚀 Usage

1. **Setup** (if not done already):
   ```bash
   npm run setup
   ```

2. **Start the application**:
   ```bash
   npm run dev
   ```

3. **Test the API** (optional):
   ```bash
   npm run test:api
   ```

### 🎯 Benefits of API Integration

1. **Security**: API keys are only server-side, never exposed to client
2. **Scalability**: Can add rate limiting, caching, and monitoring
3. **Flexibility**: Can switch AI providers without changing frontend
4. **Error Handling**: Centralized error handling with proper HTTP status codes
5. **Development**: Easier debugging and testing with API endpoints

### 🔄 Migration Guide

If you have an existing installation:
1. Pull the latest changes
2. No additional configuration needed
3. Your existing `.env.local` will continue to work
4. Test with `npm run test:api` (optional)

### 🐛 Bug Fixes
- Fixed TypeScript errors related to direct AI service imports
- Improved error messages in Albanian language
- Better handling of API connection failures

---

## [1.0.0] - Initial Release

### ✨ Features
- Albanian-themed ChatGPT-like interface
- Google Generative AI integration
- Real-time chat with smooth animations
- Responsive design with Tailwind CSS
- Custom Albanian prompts
- Copy message functionality
- Interactive setup script 