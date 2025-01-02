import React, { memo } from 'react';
import { Blob } from './Blob';
import { Grid } from './Grid';
import { Noise } from './Noise';

export const Background = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#0A0A0A]">
        {/* Animated blobs with improved performance */}
        <Blob className="bg-purple-500/20 -top-48 left-0 w-96 h-96 will-change-transform" />
        <Blob className="bg-blue-500/20 top-1/2 right-1/4 w-96 h-96 will-change-transform" />
        <Blob className="bg-cyan-500/20 bottom-0 right-1/3 w-96 h-96 will-change-transform" />
        
        {/* Grid overlay */}
        <Grid />
        
        {/* Noise texture with reduced opacity */}
        <Noise />
      </div>
    </div>
  );
});