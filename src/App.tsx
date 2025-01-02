import React, { useState } from 'react';
import { Background } from './components/background/Background';
import { Hero } from './components/Hero';
import { MagicResume } from './pages/MagicResume';

export default function App() {
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const handleFileSelect = (file: File) => {
    setCurrentFile(file);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative">
      <Background />
      {currentFile ? (
        <MagicResume />
      ) : (
        <Hero onFileSelect={handleFileSelect} />
      )}
    </div>
  );
}