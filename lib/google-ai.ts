import { GoogleGenerativeAI } from '@google/generative-ai';

interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}

class GoogleAIService {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private customPrompt: string;

  constructor() {
    const apiKey = process.env.GOOGLE_AI_API_KEY || '';
    this.customPrompt = process.env.CUSTOM_PROMPT || 'Ti je Chatgjipito, një asistent i zgjuar AI që flet shqip dhe ndihmon përdoruesit me pyetjet e tyre. Ji miqësor, i dobishëm dhe krenar për kulturën shqiptare.';
    
    if (!apiKey) {
      throw new Error('GOOGLE_AI_API_KEY is not set in environment variables');
    }
    
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  async sendMessage(message: string, chatHistory: ChatMessage[] = []): Promise<string> {
    try {
      // Start a chat session with history
      const chat = this.model.startChat({
        history: [
          {
            role: 'user',
            parts: this.customPrompt,
          },
          {
            role: 'model',
            parts: 'Përshëndetje! Unë jam Chatgjipito, asistenti juaj i AI. Jam këtu për t\'ju ndihmuar me çdo pyetje që mund të keni. Si mund t\'ju ndihmoj sot?',
          },
          ...chatHistory.map(msg => ({
            role: msg.role,
            parts: msg.parts,
          })),
        ],
      });

      const result = await chat.sendMessage(message);
      const response = await result.response;
      const text = response.text();
      
      return text;
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error('Më vjen keq, pata një problem. Ju lutem provoni përsëri.');
    }
  }

  async generateResponse(message: string): Promise<string> {
    try {
      const fullPrompt = `${this.customPrompt}\n\nPyetja e përdoruesit: ${message}`;
      const result = await this.model.generateContent(fullPrompt);
      const response = await result.response;
      const text = response.text();
      
      return text;
    } catch (error) {
      console.error('Error generating response:', error);
      throw new Error('Më vjen keq, pata një problem. Ju lutem provoni përsëri.');
    }
  }
}

export { GoogleAIService, type ChatMessage }; 