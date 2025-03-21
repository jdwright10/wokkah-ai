
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { Brain, User } from 'lucide-react';

interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
  };
  isLast?: boolean;
}

const ChatMessage = ({ message, isLast = false }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={cn(
      "flex gap-3 p-4",
      isLast && "animate-in fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      {!isUser && (
        <div className="flex-shrink-0">
          <Avatar className="h-8 w-8 bg-primary/10">
            <Brain className="h-4 w-4 text-primary" />
          </Avatar>
        </div>
      )}
      <div className={cn(
        "prose prose-sm dark:prose-invert flex-1 max-w-[80%] overflow-hidden break-words rounded-xl p-3",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        {message.content}
      </div>
      {isUser && (
        <div className="flex-shrink-0">
          <Avatar className="h-8 w-8 bg-primary">
            <User className="h-4 w-4 text-primary-foreground" />
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
