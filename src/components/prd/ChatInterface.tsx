
import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Brain, RefreshCw, SendHorizontal } from 'lucide-react';
import ChatMessage from '@/components/ChatMessage';
import { Message } from '@/types/prd';

interface ChatInterfaceProps {
  messages: Message[];
  input: string;
  setInput: (input: string) => void;
  isTyping: boolean;
  onSendMessage: () => void;
  onReset: () => void;
  onDeleteMessage: (index: number) => void;
  onGeneratePRD: () => void;
  isGeneratingPrd: boolean;
}

const ChatInterface = ({
  messages,
  input,
  setInput,
  isTyping,
  onSendMessage,
  onReset,
  onDeleteMessage,
  onGeneratePRD,
  isGeneratingPrd
}: ChatInterfaceProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [messages, isTyping]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">PRD Assistant</h2>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <div className="flex flex-col h-[500px]">
        <ScrollArea className="flex-1 mb-4">
          <div className="space-y-2 pr-4">
            {messages.map((message, index) => (
              <ChatMessage 
                key={index} 
                message={message} 
                isLast={index === messages.length - 1}
                onDelete={message.role === 'user' ? () => onDeleteMessage(index) : undefined}
              />
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 px-4 py-2">
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
        </ScrollArea>

        <div className="flex items-center gap-2 pt-2 border-t">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="min-h-[60px] resize-none"
          />
          <Button
            type="button"
            size="icon"
            onClick={onSendMessage}
            disabled={isTyping || !input.trim()}
          >
            <SendHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6">
        <Button 
          className="w-full" 
          onClick={onGeneratePRD}
          disabled={messages.length < 3 || isGeneratingPrd}
        >
          {isGeneratingPrd ? (
            <>
              <div className="animate-spin mr-2">
                <RefreshCw className="h-4 w-4" />
              </div>
              Generating...
            </>
          ) : (
            <>
              Generate PRD
              <Brain className="ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ChatInterface;
