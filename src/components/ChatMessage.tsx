
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { Brain, User, Trash2 } from 'lucide-react';

interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
  };
  isLast?: boolean;
  onDelete?: () => void; // Delete handler
}

const ChatMessage = ({ message, isLast = false, onDelete }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div className={cn(
      "flex gap-3 p-4 group relative",
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
        "prose prose-sm dark:prose-invert flex-1 max-w-[80%] overflow-hidden break-words rounded-xl p-3 relative",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        {message.content}
        
        {isUser && onDelete && (
          <button 
            onClick={handleDelete}
            className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            aria-label="Delete message"
          >
            <Trash2 className="h-3 w-3" />
          </button>
        )}
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
