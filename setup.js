#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🇦🇱 Mirë se erdhët në Chatgjipito Setup! / Welcome to Chatgjipito Setup!');
console.log('=====================================\n');

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function setup() {
  try {
    console.log('📝 Let\'s configure your environment variables...\n');
    
    // Ask for Google AI API Key
    const apiKey = await askQuestion('Enter your Google AI API Key (get it from https://makersuite.google.com/app/apikey): ');
    
    if (!apiKey || apiKey.trim() === '') {
      console.log('❌ API Key is required. Please get one from Google AI Studio.');
      process.exit(1);
    }
    
    // Ask for custom prompt (optional)
    console.log('\n📋 Custom prompt (optional):');
    console.log('Default: "Ti je Chatgjipito, një asistent i zgjuar AI që flet shqip dhe ndihmon përdoruesit me pyetjet e tyre. Ji miqësor, i dobishëm dhe krenar për kulturën shqiptare."');
    
    const customPrompt = await askQuestion('\nEnter custom prompt (or press Enter to use default): ');
    
    const finalPrompt = customPrompt.trim() || 'Ti je Chatgjipito, një asistent i zgjuar AI që flet shqip dhe ndihmon përdoruesit me pyetjet e tyre. Ji miqësor, i dobishëm dhe krenar për kulturën shqiptare.';
    
    // Create .env.local file
    const envContent = `# Google Generative AI API Key
# Get your API key from: https://makersuite.google.com/app/apikey
GOOGLE_AI_API_KEY=${apiKey.trim()}

# Custom system prompt for the AI assistant (in Albanian)
CUSTOM_PROMPT=${finalPrompt}
`;

    fs.writeFileSync('.env.local', envContent);
    
    console.log('\n✅ Environment variables configured successfully!');
    console.log('📁 Created .env.local file');
    console.log('\n🚀 You can now run the application with:');
    console.log('   npm run dev');
    console.log('\n🌐 Then open http://localhost:3000 in your browser');
    console.log('\n🎉 Gëzuar! / Congratulations! Your Chatgjipito is ready!');
    
  } catch (error) {
    console.error('❌ Error during setup:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run setup if this file is executed directly
if (require.main === module) {
  setup();
}

module.exports = { setup }; 