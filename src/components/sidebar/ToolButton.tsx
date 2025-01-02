import React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ToolButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const ToolButton: React.FC<ToolButtonProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all",
        "hover:bg-white/10",
        isActive ? "bg-white/10" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-400" />
    </button>
  );
};