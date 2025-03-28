
import { Message } from '@/types/prd';

// Initial messages to start the conversation
export const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: "Hi! I'm your PRD assistant. I'll help you craft a comprehensive Product Requirements Document. To get started, please tell me about your product idea or concept. You can provide as much or as little detail as you'd like, and I'll ask follow-up questions to help shape your PRD."
  }
];

// Questions to ask based on the conversation state
export const followUpQuestions = [
  "What problem does your product solve?",
  "Who are the target users for your product?",
  "What are the most important features your product needs to have?",
  "Are there any specific technical requirements or constraints?",
  "Do you have any competitors? What makes your product different?",
  "What is your timeline for development?",
  "What metrics will you use to measure success?",
];
