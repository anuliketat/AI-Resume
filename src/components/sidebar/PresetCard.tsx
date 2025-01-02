import React from 'react';
import { GlassCard } from '../GlassCard';

interface PresetCardProps {
  title: string;
  description: string;
}

export const PresetCard: React.FC<PresetCardProps> = ({ title, description }) => {
  return (
    <GlassCard className="p-4 min-w-[280px] mr-4 cursor-pointer hover:bg-white/10 transition-colors">
      <h4 className="text-purple-300 font-medium mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </GlassCard>
  );
};