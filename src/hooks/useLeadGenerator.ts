
import { useState, useEffect } from 'react';

interface UseLeadGeneratorProps {
  minTimeBetweenPopups?: number; // Time in milliseconds
}

export const useLeadGenerator = ({ minTimeBetweenPopups = 1000 * 60 * 60 * 24 }: UseLeadGeneratorProps = {}) => {
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  
  useEffect(() => {
    // Check if the user has already submitted their information
    const storedEmail = localStorage.getItem('leadGeneratorEmail');
    const storedName = localStorage.getItem('leadGeneratorName');
    
    if (storedEmail && storedName) {
      setHasSubmitted(true);
    }
    
    // Check when the popup was last shown
    const lastShownTime = localStorage.getItem('leadPopupLastShown');
    
    if (lastShownTime) {
      const timeSinceLastShown = Date.now() - parseInt(lastShownTime);
      if (timeSinceLastShown < minTimeBetweenPopups) {
        // Don't show the popup again if it's been shown recently
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
      }
    }
    
    // Record the current time as when the popup was last considered
    localStorage.setItem('leadPopupLastShown', Date.now().toString());
  }, [minTimeBetweenPopups]);
  
  const resetSubmission = () => {
    localStorage.removeItem('leadGeneratorEmail');
    localStorage.removeItem('leadGeneratorName');
    setHasSubmitted(false);
  };
  
  return {
    hasSubmitted,
    resetSubmission,
  };
};
