
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { generateAssistantResponse, generatePRDFromChat, initialMessages } from '@/utils/prdChatUtils';
import { Message } from '@/types/prd';

export const usePrdChat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [generatedPrd, setGeneratedPrd] = useState<string | null>(null);
  const [isGeneratingPrd, setIsGeneratingPrd] = useState(false);
  const [apiKey, setApiKey] = useState('');

  // Load saved data on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('prd_chat_messages');
    const savedPrd = localStorage.getItem('generated_prd');
    
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        if (Array.isArray(parsedMessages) && parsedMessages.length > 0) {
          setMessages(parsedMessages);
        }
      } catch (e) {
        console.error('Error parsing saved messages:', e);
      }
    }
    
    if (savedPrd) {
      setGeneratedPrd(savedPrd);
    }
    
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0 && messages !== initialMessages) {
      localStorage.setItem('prd_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Save PRD to localStorage
  useEffect(() => {
    if (generatedPrd) {
      localStorage.setItem('generated_prd', generatedPrd);
    }
  }, [generatedPrd]);

  // Send a message
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    try {
      const responseContent = await generateAssistantResponse(
        [...messages, userMessage],
        input,
        apiKey
      );
      
      setMessages(prev => [...prev, { role: 'assistant', content: responseContent }]);
    } catch (error) {
      toast.error('Failed to generate response');
    } finally {
      setIsTyping(false);
    }
  };

  // Generate PRD from chat history
  const handleGeneratePRD = async () => {
    setIsGeneratingPrd(true);
    try {
      const prd = await generatePRDFromChat(messages, apiKey);
      setGeneratedPrd(prd);
      toast.success("PRD generated successfully!");
    } catch (error) {
      console.error('Error generating PRD:', error);
      toast.error('Failed to generate PRD');
    } finally {
      setIsGeneratingPrd(false);
    }
  };

  // Reset the chat and PRD
  const handleReset = () => {
    setMessages(initialMessages);
    setGeneratedPrd(null);
    localStorage.removeItem('prd_chat_messages');
    localStorage.removeItem('generated_prd');
    toast.info("Conversation reset");
  };

  // Save API key to localStorage
  const handleSaveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    toast.success('API key saved');
  };

  // Delete a message
  const handleDeleteMessage = (index: number) => {
    if (index >= 0 && index < messages.length) {
      const newMessages = [...messages];
      newMessages.splice(index, 1);
      setMessages(newMessages);
      toast.success("Message deleted");
    } else {
      toast.error("Could not delete message");
    }
  };

  return {
    messages,
    input,
    setInput,
    isTyping,
    generatedPrd,
    isGeneratingPrd,
    apiKey,
    setApiKey,
    handleSendMessage,
    handleGeneratePRD,
    handleReset,
    handleSaveApiKey,
    handleDeleteMessage
  };
};
