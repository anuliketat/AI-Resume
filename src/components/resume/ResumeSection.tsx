import React from 'react';
import { Pencil } from 'lucide-react';

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  onEdit: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children, onEdit }) => {
  return (
    <div className="relative group">
      <button 
        onClick={onEdit}
        className="absolute -right-4 top-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Pencil className="w-4 h-4 text-purple-400 hover:text-purple-300" />
      </button>
      <h3 className="text-lg font-semibold text-purple-300 mb-2">{title}</h3>
      {children}
    </div>
  );
};