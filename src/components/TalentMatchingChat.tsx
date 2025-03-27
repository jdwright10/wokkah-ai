
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, SendHorizontal, RefreshCw, Lock, Eye, EyeOff } from 'lucide-react';
import ChatMessage from '@/components/ChatMessage';
import { toast } from '@/components/ui/use-toast';

interface TalentMatchingChatProps {
  onProjectRequirementsComplete: (requirements: {
    description: string;
    budget: string;
    timeline: string;
    skills: string[];
    experienceLevel: string;
  }) => void;
}

const TalentMatchingChat: React.FC<TalentMatchingChatProps> = ({ 
  onProjectRequirementsComplete 
}) => {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { 
      role: 'assistant', 
      content: "Hi there! I'm your AI talent matching assistant. I'll help you find the perfect talent for your project. Could you tell me a bit about what you're looking to build or what problem you're trying to solve?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [requirements, setRequirements] = useState<{
    description: string;
    budget: string;
    timeline: string;
    skills: string[];
    experienceLevel: string;
    ready: boolean;
  }>({
    description: '',
    budget: '',
    timeline: '',
    skills: [],
    experienceLevel: '',
    ready: false
  });

  useEffect(() => {
    // Load API key from localStorage if available
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom of chat when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Check if we have enough information to generate talent matches
    if (requirements.description && 
        requirements.skills.length > 0 && 
        requirements.experienceLevel && 
        !requirements.ready) {
      setRequirements(prev => ({ ...prev, ready: true }));
      onProjectRequirementsComplete({
        description: requirements.description,
        budget: requirements.budget || 'flexible',
        timeline: requirements.timeline || 'flexible',
        skills: requirements.skills,
        experienceLevel: requirements.experienceLevel
      });
    }
  }, [requirements, onProjectRequirementsComplete]);

  const saveApiKey = () => {
    if (apiKey) {
      localStorage.setItem('openai_api_key', apiKey);
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved locally."
      });
    }
  };

  const toggleShowApiKey = () => {
    setShowApiKey(!showApiKey);
  };

  const resetChat = () => {
    setMessages([
      { 
        role: 'assistant', 
        content: "Hi there! I'm your AI talent matching assistant. I'll help you find the perfect talent for your project. Could you tell me a bit about what you're looking to build or what problem you're trying to solve?" 
      }
    ]);
    setRequirements({
      description: '',
      budget: '',
      timeline: '',
      skills: [],
      experienceLevel: '',
      ready: false
    });
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    try {
      if (!apiKey) {
        setIsTyping(false);
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I notice you haven't provided an OpenAI API key yet. Please add your API key above to continue our conversation. This will allow me to better understand your project needs and find the right talent match for you." 
        }]);
        return;
      }

      // Prepare the messages for OpenAI
      const messagesToSend = [
        {
          role: "system",
          content: "You are an AI assistant helping users find talent for their projects. Extract information about the project description, budget, timeline, skills needed, and experience level required. Be conversational and friendly. Ask clarifying questions when needed. You're trying to gather enough information to recommend talent."
        },
        ...messages.map(m => ({ role: m.role, content: m.content })),
        { role: "user", content: input }
      ];

      // Call OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: messagesToSend,
          temperature: 0.7,
          max_tokens: 1000
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to get a response from OpenAI');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0]?.message?.content || 'Sorry, I had trouble processing that. Could you rephrase?';
      
      // Add assistant response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);

      // Try to extract project information from the conversation
      extractProjectInfo([...messages, userMessage, { role: 'assistant', content: assistantMessage }]);
      
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm having trouble connecting to OpenAI. Please check your API key and try again." 
      }]);
      toast({
        title: "Error",
        description: "Failed to connect to OpenAI. Please check your API key.",
        variant: "destructive"
      });
    } finally {
      setIsTyping(false);
    }
  };

  const extractProjectInfo = async (conversationMessages: Array<{ role: 'user' | 'assistant'; content: string }>) => {
    if (!apiKey) return;
    
    try {
      // Call OpenAI to extract structured information
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: "system",
              content: `You are an AI assistant that extracts project requirements from a conversation. 
              Extract the following information from the conversation:
              1. Project description
              2. Budget (if mentioned)
              3. Timeline (if mentioned)
              4. Skills needed (list as array)
              5. Experience level (entry, mid, senior, expert)
              
              Return ONLY a JSON object with the following structure:
              {
                "description": "brief description of the project",
                "budget": "budget range or specific amount",
                "timeline": "project timeline",
                "skills": ["skill1", "skill2", "skill3"],
                "experienceLevel": "one of: entry, mid, senior, expert",
                "confidence": 0.1 to 1.0
              }
              
              The confidence field should indicate how confident you are in the extracted information, from 0.1 to 1.0.
              If no information was provided for a field, use an empty string or empty array as appropriate.
              `
            },
            ...conversationMessages.map(m => ({ role: m.role, content: m.content }))
          ],
          temperature: 0.1,
          max_tokens: 1000,
          response_format: { type: "json_object" }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to extract information');
      }

      const data = await response.json();
      let extractedInfo;
      
      try {
        extractedInfo = JSON.parse(data.choices[0]?.message?.content || '{}');
      } catch (e) {
        extractedInfo = data.choices[0]?.message?.content || {};
      }

      // Only update if we have high confidence and some fields filled
      if (extractedInfo.confidence >= 0.7 && 
          (extractedInfo.description || extractedInfo.skills.length > 0 || extractedInfo.experienceLevel)) {
        setRequirements(prev => ({
          description: extractedInfo.description || prev.description,
          budget: extractedInfo.budget || prev.budget,
          timeline: extractedInfo.timeline || prev.timeline,
          skills: extractedInfo.skills?.length ? extractedInfo.skills : prev.skills,
          experienceLevel: extractedInfo.experienceLevel || prev.experienceLevel,
          ready: false // Will be set to true by the effect if we have enough info
        }));
      }
    } catch (error) {
      console.error('Error extracting project info:', error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleDeleteMessage = (index: number) => {
    if (index > 0) { // Don't allow deletion of the first assistant message
      const newMessages = [...messages];
      newMessages.splice(index, 1);
      setMessages(newMessages);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4 p-4 rounded-lg border bg-white shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" />
            <h3 className="font-medium">OpenAI API Key</h3>
          </div>
          <Button variant="outline" size="sm" onClick={resetChat}>
            <RefreshCw className="h-3 w-3 mr-2" />
            Reset Chat
          </Button>
        </div>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type={showApiKey ? "text" : "password"}
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your OpenAI API key"
              className="pr-10"
            />
            <button
              type="button"
              onClick={toggleShowApiKey}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
            >
              {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          <Button onClick={saveApiKey} size="sm">Save</Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Your API key is stored locally in your browser and never sent to our servers.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto border rounded-lg bg-white shadow-sm mb-4 p-4">
        {messages.map((message, index) => (
          <ChatMessage 
            key={index} 
            message={message} 
            isLast={index === messages.length - 1}
            onDelete={message.role === 'user' ? () => handleDeleteMessage(index) : undefined}
          />
        ))}
        {isTyping && (
          <div className="flex items-center gap-2 p-4">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
            <span className="text-sm text-muted-foreground">AI assistant is thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your project needs..."
          className="flex-1"
        />
        <Button onClick={handleSendMessage} disabled={isTyping || !input.trim()}>
          <SendHorizontal className="h-4 w-4 mr-2" />
          Send
        </Button>
      </div>
    </div>
  );
};

export default TalentMatchingChat;
