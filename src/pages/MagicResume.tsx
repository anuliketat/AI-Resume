import React, { useState, useEffect } from 'react';
import { ProcessingAnimation } from '../components/magic/ProcessingAnimation';
import { ResumeViewer } from '../components/resume/ResumeViewer';
import { LeftSidebar } from '../components/sidebar/LeftSidebar';
import { RightSidebar } from '../components/sidebar/RightSidebar';

export const MagicResume = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
      setTimeout(() => setShowContent(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <LeftSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className={`transition-opacity duration-500 ${isProcessing ? 'opacity-100' : 'opacity-0'}`}>
          {isProcessing && <ProcessingAnimation />}
        </div>
        <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {!isProcessing && <ResumeViewer />}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <RightSidebar />
      </div>
    </div>
  );
};