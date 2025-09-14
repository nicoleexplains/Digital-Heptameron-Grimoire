import React, { useState, useRef, useEffect } from 'react';
import { generateResponse } from '../services/geminiService';
import type { Message } from '../types';
import LoadingSpinner from './LoadingSpinner';

const AskGrimoire: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: "Ask me anything about the Heptameron." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await generateResponse(input);
      const aiMessage: Message = { sender: 'ai', text: aiResponse };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      const errorMessage: Message = { sender: 'ai', text: "I'm sorry, I encountered an error. Please try again." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!isOpen) {
    return (
        <button 
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-4 rounded-full shadow-lg transition-transform transform hover:scale-110 font-cinzel"
            aria-label="Open Ask the Grimoire chat"
        >
            Ask the Grimoire
        </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[400px] h-[550px] bg-gray-900/80 backdrop-blur-md border border-amber-800/50 rounded-lg shadow-2xl flex flex-col z-50" role="dialog" aria-modal="true" aria-labelledby="chat-title">
        <div className="flex justify-between items-center p-3 border-b border-amber-800/30">
            <h3 id="chat-title" className="font-cinzel text-amber-300 text-lg">Ask the Grimoire</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-2xl leading-none" aria-label="Close chat">&times;</button>
        </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-amber-800/60 text-white' : 'bg-gray-700 text-gray-200'}`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-xs md:max-w-sm px-4 py-2 rounded-lg bg-gray-700 text-gray-200">
              <LoadingSpinner />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-3 border-t border-amber-800/30">
        <div className="flex items-center bg-gray-800 rounded-lg">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What is the perfume for Sunday?"
            className="flex-1 bg-transparent px-4 py-2 text-gray-200 focus:outline-none"
            disabled={isLoading}
            aria-label="Your question"
          />
          <button type="submit" disabled={isLoading} className="p-2 text-amber-300 hover:text-amber-100 disabled:text-gray-500" aria-label="Send message">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AskGrimoire;