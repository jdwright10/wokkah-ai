
import { Message } from '@/types/prd';
import { followUpQuestions } from './initialData';

// Mock response function for fallback
export const generateMockResponse = (messages: Message[]): Promise<string> => {
  return new Promise((resolve) => {
    // Simulating AI processing time
    setTimeout(() => {
      const userMessages = messages.filter(msg => msg.role === 'user');
      
      // Initial response to first user input
      if (userMessages.length === 1) {
        resolve(`Thanks for sharing your product idea! Let me help you expand on that.
        
${followUpQuestions[0]} And ${followUpQuestions[1]}`);
        return;
      }
      
      // Generate response based on conversation state
      const messageCount = userMessages.length;
      
      if (messageCount === 2) {
        resolve(`Great, that helps me understand the problem and users better. 
        
Now, ${followUpQuestions[2]}`);
        return;
      }
      
      if (messageCount === 3) {
        resolve(`Those features sound important. ${followUpQuestions[3]}
        
Also, ${followUpQuestions[4]}`);
        return;
      }
      
      if (messageCount === 4) {
        resolve(`I have enough information to start drafting your PRD. Would you like me to generate it now, or would you like to provide more details about ${followUpQuestions[5]} or ${followUpQuestions[6]}?`);
        return;
      }
      
      // Final response - ready to generate PRD
      resolve(`Thanks for all these details! I have everything I need to generate a comprehensive PRD for your product. Click the "Generate PRD" button when you're ready.`);
    }, 1000);
  });
};

// Template PRD generator as fallback
export const generateTemplatePRD = (messages: Message[]): string => {
  // Extract relevant information from chat
  const userMessages = messages.filter(msg => msg.role === 'user');
  
  // Basic template with information from chat
  const productName = "New Product"; // In a real implementation, you would extract this from the conversation
  
  return `# Product Requirements Document: ${productName}

## Overview
${userMessages[0]?.content || "A new innovative product aimed at solving user problems."}

## Problem Statement
${userMessages[1]?.content?.split('?')[1] || "The product aims to solve efficiency challenges in workflow management and collaboration."}

## Target Users
${userMessages[1]?.content?.split('?')[0] || "Professionals in technology and business sectors seeking to optimize their workflows."}

## Feature Requirements
${userMessages[2]?.content || `
- Core functionality to address primary user needs
- User-friendly interface design
- Seamless integration with existing systems
- Scalability to accommodate growing user base`}

## Technical Requirements
${userMessages[3]?.content?.split('?')[0] || `
- Cross-platform compatibility
- Secure data handling and storage
- API integrations
- Performance optimization`}

## Competitive Analysis
${userMessages[3]?.content?.split('?')[1] || `
- Differentiated by ease of use and specialized features
- Competitive pricing model
- Stronger focus on user experience
- More robust technical architecture`}

## Success Metrics
- User adoption rate
- Engagement metrics
- Customer satisfaction scores
- Revenue or conversion goals

## Timeline
- Initial prototype: 4-6 weeks
- Alpha testing: 2-3 months
- Beta launch: 4-5 months
- Public release: 6 months

## Appendix
This PRD is a living document and will be updated as the project evolves.
`;
};
