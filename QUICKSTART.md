# 🚀 Quick Start Guide - Chatgjipito

## 1. Get Your Google AI API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key

## 2. Setup the Project

### Option A: Automated Setup (Recommended)
```bash
npm run setup
```
Follow the prompts to enter your API key and optional custom prompt.

### Option B: Manual Setup
1. Copy the example environment file:
   ```bash
   cp env.example .env.local
   ```

2. Edit `.env.local` and add your API key:
   ```env
   GOOGLE_AI_API_KEY=your_api_key_here
   CUSTOM_PROMPT=Ti je Chatgjipito, një asistent i zgjuar AI që flet shqip dhe ndihmon përdoruesit me pyetjet e tyre. Ji miqësor, i dobishëm dhe krenar për kulturën shqiptare.
   ```

## 3. Run the Application

```bash
npm run dev
```

## 4. Open Your Browser

Go to [http://localhost:3000](http://localhost:3000)

## 🎉 That's it!

You should now see the Chatgjipito interface with Albanian theming. Start chatting in Albanian or any language you prefer!

## 🔧 Troubleshooting

- **API Key Error**: Make sure your Google AI API key is valid and has proper permissions
- **Environment Variables**: Ensure `.env.local` exists and contains the correct variables
- **Dependencies**: Run `npm install` if you encounter module errors

## 📱 Features to Try

- Ask questions in Albanian: "Si je sot?"
- Request help: "Mund të më ndihmosh me..."
- Try creative writing: "Shkruaj një poezi për Shqipërinë"
- Ask for translations: "Përkthe këtë në anglisht..."

Enjoy your Albanian AI assistant! 🇦🇱 