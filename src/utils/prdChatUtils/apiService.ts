
import { toast } from "sonner";
import { Message } from "@/types/prd";

// Function to call OpenAI API
export const callOpenAI = async (messages: Message[], apiKey: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API key is required");
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful PRD assistant. You help users create product requirement documents. Ask relevant follow-up questions based on their product idea to gather all necessary information. Be concise but thorough.'
          },
          ...messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to generate response');
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
};

// Function to generate PRD using OpenAI
export const generatePRDWithOpenAI = async (messages: Message[], apiKey: string): Promise<string> => {
  const systemPrompt = `
  You are an expert in creating Product Requirement Documents (PRDs).
  Based on the conversation history, create a comprehensive, well-structured PRD in markdown format.
  Include these sections:
  - Overview
  - Problem Statement
  - Target Users
  - Feature Requirements (prioritized)
  - Technical Requirements
  - Competitive Analysis
  - Success Metrics
  - Timeline
  - Appendix (if needed)
  
  Format it professionally with markdown. Be thorough but concise.
  `;
  
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to generate PRD');
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'No PRD generated';
  } catch (error) {
    console.error('Error generating PRD with OpenAI:', error);
    throw error;
  }
};
