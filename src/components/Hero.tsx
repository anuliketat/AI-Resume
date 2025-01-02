import React from 'react';
import { Wand2 } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { FileUpload } from './upload/FileUpload';

interface HeroProps {
  onFileSelect: (file: File) => void;
}

export const Hero: React.FC<HeroProps> = ({ onFileSelect }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mb-6">
          Transform Your Resume with AI
        </h1>
        
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
          Leverage AI to optimize your resume, match with perfect jobs, and streamline your application process.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <FileUpload onFileSelect={onFileSelect} />
          <Button variant="secondary" size="lg">
            <Wand2 className="mr-2 h-5 w-5" />
            Try Demo
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'AI Resume Editing',
              description: 'Smart suggestions to enhance your resume content',
            },
            {
              title: 'Job Matching',
              description: 'Find relevant positions based on your profile',
            },
            {
              title: 'Mass Applications',
              description: 'Apply to multiple jobs with tailored resumes',
            },
          ].map((feature, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};