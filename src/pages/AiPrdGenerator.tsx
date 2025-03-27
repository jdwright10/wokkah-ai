
import React, { useState, useRef, useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Helmet } from 'react-helmet';
import { Brain, Copy, Download, SendHorizontal, RefreshCw, Lock, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import ChatMessage from '@/components/ChatMessage';
import { initialMessages, generateAssistantResponse, generatePRDFromChat } from '@/utils/prdChatUtils';
import { ScrollArea } from '@/components/ui/scroll-area';

const AiPrdGenerator = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [generatedPrd, setGeneratedPrd] = useState<string | null>(null);
  const [hasCopied, setHasCopied] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [isGeneratingPrd, setIsGeneratingPrd] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent default form submission behavior
      handleSendMessage();
    }
  };

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

  const handleCopyToClipboard = () => {
    if (generatedPrd) {
      navigator.clipboard.writeText(generatedPrd);
      setHasCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setHasCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (generatedPrd) {
      const element = document.createElement("a");
      const file = new Blob([generatedPrd], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `PRD-Document.md`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      toast.success("PRD downloaded successfully!");
    }
  };

  const handleReset = () => {
    setMessages(initialMessages);
    setGeneratedPrd(null);
    toast.info("Conversation reset");
  };

  const handleSaveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    toast.success('API key saved');
  };

  const toggleShowApiKey = () => {
    setShowApiKey(!showApiKey);
  };

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

  return (
    <MainLayout>
      <Helmet>
        <title>AI PRD Generator | Wokkah</title>
        <meta 
          name="description" 
          content="Generate comprehensive product requirement documents with our AI-powered PRD generator." 
        />
      </Helmet>

      <section className="pt-32 pb-16">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              AI-Powered Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI PRD Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chat with our AI assistant to craft the perfect Product Requirements Document for your idea.
            </p>
          </div>

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
              <Button onClick={handleSaveApiKey}>Save Key</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Your API key is stored locally and never sent to our servers. You can get an API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">PRD Assistant</h2>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReset}
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
                        onDelete={message.role === 'user' ? () => handleDeleteMessage(index) : undefined}
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
                    onClick={handleSendMessage}
                    disabled={isTyping || !input.trim()}
                  >
                    <SendHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  className="w-full" 
                  onClick={handleGeneratePRD}
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

            <div className="lg:col-span-5 bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Generated PRD</h2>
                </div>
                {generatedPrd && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyToClipboard}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownload}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {generatedPrd ? (
                <ScrollArea className="bg-neutral-50 p-4 rounded-lg h-[500px]">
                  <div className="font-mono text-sm whitespace-pre-wrap pr-4">
                    {generatedPrd}
                  </div>
                </ScrollArea>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <Brain className="h-16 w-16 text-neutral-300 mb-4" />
                  <p className="text-neutral-500">Your PRD will appear here after generation</p>
                  <p className="text-sm text-neutral-400 mt-2">Chat with the assistant to create your PRD</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-bold mb-6">How Our Chat-Based PRD Generator Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <SendHorizontal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">1. Chat About Your Idea</h3>
                <p className="text-muted-foreground">
                  Describe your product concept to our AI assistant and answer its questions
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">2. AI Guides You</h3>
                <p className="text-muted-foreground">
                  Our AI helps refine your concept with targeted questions and suggestions
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">3. Get Your PRD</h3>
                <p className="text-muted-foreground">
                  Generate a structured PRD based on your conversation, ready to download
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AiPrdGenerator;
