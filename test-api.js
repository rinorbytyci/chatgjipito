// Simple test script to verify API integration
const fetch = require('node-fetch');

async function testAPI() {
  try {
    console.log('🧪 Testing Chatgjipito API...\n');
    
    // Test GET endpoint
    console.log('📡 Testing GET /api/chat...');
    const getResponse = await fetch('http://localhost:3000/api/chat');
    const getResult = await getResponse.json();
    console.log('✅ GET Response:', getResult);
    
    // Test POST endpoint (this will require a running server with API key)
    console.log('\n📡 Testing POST /api/chat...');
    const postResponse = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Përshëndetje! Si je?',
        chatHistory: []
      }),
    });
    
    if (postResponse.ok) {
      const postResult = await postResponse.json();
      console.log('✅ POST Response:', postResult);
    } else {
      const error = await postResponse.json();
      console.log('❌ POST Error:', error);
    }
    
  } catch (error) {
    console.error('🚨 Test failed:', error.message);
    console.log('\n💡 Make sure to:');
    console.log('   1. Run "npm run dev" first');
    console.log('   2. Configure your .env.local with GOOGLE_AI_API_KEY');
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testAPI();
} 