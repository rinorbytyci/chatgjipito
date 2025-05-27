"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Copy, RotateCcw, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
// Removed direct Google AI import - now using API endpoint
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  avatarSrc?: string; // Optional path to avatar image
}

interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}

// Helper function to get a random avatar
const getRandomAvatar = () => {
  return `/assets/avatars/${Math.floor(Math.random() * 6) + 1}.png`;
};

export function ChatgjipitoInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with a greeting from the AI
  useEffect(() => {
    const initializeChat = async () => {
      try {
        setIsInitializing(true);
        
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'Tungjatjeta',
            chatHistory: [],
          }),
        });

        if (response.ok) {
          const data = await response.json();
          
          const initialMessage: Message = {
            id: '1',
            content: data.response,
            role: 'assistant',
            timestamp: new Date(),
            avatarSrc: getRandomAvatar(),
          };

          setMessages([initialMessage]);
        } else {
          // Fallback to hardcoded message if API fails
          const fallbackMessage: Message = {
            id: '1',
            content: 'Përshëndetje! Unë jam Chatgjipito, asistenti juaj i AI. Jam këtu për t\'ju ndihmoj me çdo pyetje që mund të keni. Si mund t\'ju ndihmoj sot? 🇦🇱',
            role: 'assistant',
            timestamp: new Date(),
            avatarSrc: getRandomAvatar(),
          };
          setMessages([fallbackMessage]);
        }
      } catch (error) {
        console.error('Failed to initialize chat:', error);
        // Fallback to hardcoded message if initialization fails
        const fallbackMessage: Message = {
          id: '1',
          content: 'Përshëndetje! Unë jam Chatgjipito, asistenti juaj i AI. Jam këtu për t\'ju ndihmoj me çdo pyetje që mund të keni. Si mund t\'ju ndihmoj sot? 🇦🇱',
          role: 'assistant',
          timestamp: new Date(),
          avatarSrc: getRandomAvatar(),
        };
        setMessages([fallbackMessage]);
      } finally {
        setIsInitializing(false);
      }
    };

    initializeChat();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Convert messages to ChatMessage format for API
      const chatHistory: ChatMessage[] = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: msg.content,
      }));

      // Call the API endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          chatHistory: chatHistory,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Gabim në komunikim me serverin');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: 'assistant',
        timestamp: new Date(),
        avatarSrc: getRandomAvatar(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: error instanceof Error 
          ? error.message 
          : 'Më vjen keq, pata një problem duke procesuar mesazhin tuaj. Ju lutem provoni përsëri.',
        role: 'assistant',
        timestamp: new Date(),
        avatarSrc: getRandomAvatar(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-albanian-black via-gray-900 to-albanian-eagle text-white">
      {/* Albanian flag pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-albanian-red"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-albanian-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 opacity-20">
            {/* Simplified Albanian eagle silhouette */}
            <svg viewBox="0 0 100 100" className="w-full h-full fill-albanian-gold">
              <path d="M50 10 L60 25 L75 20 L65 35 L80 45 L65 50 L75 65 L60 60 L50 75 L40 60 L25 65 L35 50 L20 45 L35 35 L25 20 L40 25 Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-screen">
        {/* Header */}
        <motion.header 
          className="border-b border-albanian-gold/20 bg-black/50 backdrop-blur-sm"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-albanian-red to-albanian-gold rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-albanian-gold to-yellow-300 bg-clip-text text-transparent">
                  Chatgjipito
                </h1>
                <p className="text-sm text-gray-400">Asistent AI Shqiptar ma i Avancuar</p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="container mx-auto max-w-4xl space-y-6">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <ChatBubble variant={message.role === 'user' ? 'sent' : 'received'}>
                    <ChatBubbleAvatar
                      variant={message.role === 'user' ? 'sent' : 'received'}
                      fallback={message.role === 'user' ? 'U' : 'AI'}
                      src={message.role === 'assistant' ? message.avatarSrc : undefined}
                    />
                    <div className="flex-1">
                      <ChatBubbleMessage variant={message.role === 'user' ? 'sent' : 'received'}>
                        {message.content}
                      </ChatBubbleMessage>
                      {message.role === 'assistant' && (
                        <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-albanian-gold/10"
                            onClick={() => copyToClipboard(message.content)}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-albanian-gold/10"
                          >
                            <RotateCcw className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </ChatBubble>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group"
                >
                  <ChatBubble variant="received">
                    <ChatBubbleAvatar 
                      fallback="AI" 
                      src={getRandomAvatar()}
                    />
                    <ChatBubbleMessage isLoading />
                  </ChatBubble>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <motion.div 
          className="border-t border-albanian-gold/20 bg-black/50 backdrop-blur-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-4 max-w-4xl">
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative rounded-lg border border-albanian-gold/30 bg-gray-900/50 backdrop-blur-sm focus-within:ring-2 focus-within:ring-albanian-gold/50 focus-within:border-albanian-gold/50 transition-all">
                <ChatInput
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Shkruani mesazhin tuaj këtu... (Shtyp Enter për të dërguar)"
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 resize-none pr-12"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    "absolute right-2 bottom-2 h-8 w-8 transition-all",
                    input.trim() && !isLoading
                      ? "bg-albanian-red hover:bg-albanian-red/90 text-white border border-albanian-gold/30"
                      : "bg-gray-700 text-gray-400"
                  )}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Chatgjipito mund të bëjë gabime. Ju lutem verifikoni informacionin e rëndësishëm.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 