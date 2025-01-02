import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 shadow-xl ${className}`}>
      {children}
    </div>
  );
};