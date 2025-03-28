
import { Message } from '@/types/prd';
import { toast } from "sonner";
import { initialMessages, followUpQuestions } from './initialData';
import { generateMockResponse, generateTemplatePRD } from './mockResponses';
import { callOpenAI, generatePRDWithOpenAI } from './apiService';

// Function to generate assistant response using OpenAI
export const generateAssistantResponse = async (
  messages: Message[],
  userInput: string,
  apiKey: string
): Promise<string> => {
  try {
    if (!apiKey) {
      // Fallback to mock responses if no API key is provided
      return generateMockResponse(messages);
    }
    
    return await callOpenAI(messages, apiKey);
  } catch (error) {
    console.error('Error generating assistant response:', error);
    toast.error('Failed to generate response. Please check your API key.');
    return "I'm having trouble connecting to my AI services. Please check your API key or try again later.";
  }
};

// Function to generate the actual PRD based on the chat history and OpenAI
export const generatePRDFromChat = async (messages: Message[], apiKey: string): Promise<string> => {
  try {
    if (!apiKey) {
      // Fallback to template PRD if no API key is provided
      return generateTemplatePRD(messages);
    }
    
    return await generatePRDWithOpenAI(messages, apiKey);
  } catch (error) {
    console.error('Error generating PRD:', error);
    toast.error('Failed to generate PRD. Please check your API key.');
    return generateTemplatePRD(messages);
  }
};

export { initialMessages, followUpQuestions };
