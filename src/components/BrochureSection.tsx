import React from 'react';
import BrochureInstructors from './BrochureInstructors';

interface BrochureSectionProps {
  onLeadCaptureSuccess: () => void;
  isLoggedIn: boolean;
  hasProvidedLeadDetails: boolean;
}

const BrochureSection: React.FC<BrochureSectionProps> = ({ 
  onLeadCaptureSuccess, 
  isLoggedIn, 
  hasProvidedLeadDetails 
}) => {
  return (
    <BrochureInstructors 
      onLeadCaptureSuccess={onLeadCaptureSuccess}
      isLoggedIn={isLoggedIn}
      hasProvidedLeadDetails={hasProvidedLeadDetails}
    />
  );
};

export default BrochureSection;
