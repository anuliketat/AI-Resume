import React from 'react';
import { Wand2 } from 'lucide-react';

export const ProcessingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="relative">
        <Wand2 className="h-16 w-16 animate-bounce text-purple-500" />
        <div className="absolute inset-0 animate-ping-slow bg-purple-500/20 rounded-full"></div>
      </div>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">AI Magic in Progress</h2>
        <p className="text-gray-400">Transforming your resume with AI-powered optimization</p>
      </div>
      <div className="flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
};