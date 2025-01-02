import React, { memo } from 'react';

interface BlobProps {
  className?: string;
}

export const Blob: React.FC<BlobProps> = memo(({ className = '' }) => {
  return (
    <div 
      className={`absolute rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob ${className}`}
    />
  );
});