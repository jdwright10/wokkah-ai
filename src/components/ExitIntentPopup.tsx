
import React, { useState, useEffect, useCallback } from 'react';
import LeadGeneratorPopup from './LeadGeneratorPopup';
import { useLeadGenerator } from '@/hooks/useLeadGenerator';

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { hasSubmitted } = useLeadGenerator();
  
  // Check if the user has already dismissed the popup in this session
  const [hasDismissed, setHasDismissed] = useState(() => {
    return sessionStorage.getItem('exitIntentDismissed') === 'true';
  });

  // Track mouse movements to detect exit intent
  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if the mouse is moving towards the top of the page
    if (e.clientY <= 0 && !hasSubmitted && !hasDismissed) {
      setShowPopup(true);
      // Record that we've shown the exit intent popup
      sessionStorage.setItem('exitIntentShown', 'true');
    }
  }, [hasSubmitted, hasDismissed]);

  // Timer to show popup after 10 seconds
  useEffect(() => {
    // Skip if user has already submitted info or dismissed popup
    if (hasSubmitted || hasDismissed) return;
    
    // Check if we've already shown the popup in this session
    const hasShown = sessionStorage.getItem('exitIntentShown') === 'true';
    if (hasShown) return;
    
    const timer = setTimeout(() => {
      setShowPopup(true);
      // Record that we've shown the popup
      sessionStorage.setItem('exitIntentShown', 'true');
    }, 10000); // 10 seconds
    
    return () => clearTimeout(timer);
  }, [hasSubmitted, hasDismissed]);

  // Setup exit intent detection
  useEffect(() => {
    // Skip if user has already submitted info or dismissed popup
    if (hasSubmitted || hasDismissed) return;

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave, hasSubmitted, hasDismissed]);

  // Handle popup close
  const handlePopupClose = (open: boolean) => {
    setShowPopup(open);
    
    if (!open) {
      // Record that the user dismissed the popup
      sessionStorage.setItem('exitIntentDismissed', 'true');
      setHasDismissed(true);
    }
  };

  return (
    <LeadGeneratorPopup 
      delay={0}
      open={showPopup}
      onOpenChange={handlePopupClose}
    />
  );
};

export default ExitIntentPopup;
