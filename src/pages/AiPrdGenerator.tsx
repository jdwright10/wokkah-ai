
import React, { useState, useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import BreadcrumbNav from '@/components/BreadcrumbNav';

// Custom hook
import { usePrdChat } from '@/hooks/usePrdChat';

// Components
import ApiKeyInput from '@/components/prd/ApiKeyInput';
import ChatInterface from '@/components/prd/ChatInterface';
import GeneratedPRDViewer from '@/components/prd/GeneratedPRDViewer';
import HowItWorks from '@/components/prd/HowItWorks';

const AiPrdGenerator = () => {
  const {
    messages,
    input,
    setInput,
    isTyping,
    generatedPrd,
    isGeneratingPrd,
    apiKey,
    setApiKey,
    handleSendMessage,
    handleGeneratePRD,
    handleReset,
    handleSaveApiKey,
    handleDeleteMessage
  } = usePrdChat();

  const [isFindingTalent, setIsFindingTalent] = useState(false);
  const navigate = useNavigate();

  // Breadcrumb items for navigation
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features/ai-prd' },
    { label: 'AI PRD Generator', isCurrent: true }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleFindTalent = async () => {
    if (!generatedPrd) {
      toast.error("Please generate a PRD first");
      return;
    }

    setIsFindingTalent(true);
    try {
      localStorage.setItem('prd_for_matching', generatedPrd);
      setTimeout(() => {
        navigate('/ai-matching', { state: { fromPrd: true } });
        setIsFindingTalent(false); // Reset the loading state after navigation
      }, 800);
    } catch (error) {
      console.error('Error finding talent:', error);
      toast.error('Failed to find matching talent');
      setIsFindingTalent(false);
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
          <BreadcrumbNav items={breadcrumbItems} className="mb-6" />
          
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

          <ApiKeyInput 
            apiKey={apiKey}
            setApiKey={setApiKey}
            onSave={handleSaveApiKey}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <ChatInterface 
                messages={messages}
                input={input}
                setInput={setInput}
                isTyping={isTyping}
                onSendMessage={handleSendMessage}
                onReset={handleReset}
                onDeleteMessage={handleDeleteMessage}
                onGeneratePRD={handleGeneratePRD}
                isGeneratingPrd={isGeneratingPrd}
              />
            </div>

            <div className="lg:col-span-5">
              <GeneratedPRDViewer
                generatedPrd={generatedPrd}
                onFindTalent={handleFindTalent}
                isFindingTalent={isFindingTalent}
              />
            </div>
          </div>

          <HowItWorks />
        </div>
      </section>
    </MainLayout>
  );
};

export default AiPrdGenerator;
