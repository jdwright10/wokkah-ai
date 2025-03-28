
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  onSave: () => void;
}

const ApiKeyInput = ({ apiKey, setApiKey, onSave }: ApiKeyInputProps) => {
  const [showApiKey, setShowApiKey] = useState(false);
  
  const toggleShowApiKey = () => {
    setShowApiKey(!showApiKey);
  };

  return (
    <div className="mb-8 p-6 rounded-xl shadow-sm border border-neutral-100 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <Lock className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold">OpenAI API Key</h2>
      </div>
      <div className="flex gap-2 mb-2">
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
        <Button onClick={onSave}>Save Key</Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Your API key is stored locally and never sent to our servers. You can get an API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI</a>.
      </p>
    </div>
  );
};

export default ApiKeyInput;
