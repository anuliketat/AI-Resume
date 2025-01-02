import React, { useState } from 'react';
import { UserCircle2, MessageCircle, Volume2 } from 'lucide-react';
import { ToolButton } from './ToolButton';
import { PresetCard } from './PresetCard';

const PERSONALITY_PRESETS = [
  { title: 'Professional', description: 'Formal and business-oriented approach' },
  { title: 'Creative', description: 'Innovative and original expression' },
  { title: 'Technical', description: 'Detailed and precise communication' },
  { title: 'Friendly', description: 'Warm and approachable tone' },
  { title: 'Leadership', description: 'Authoritative and strategic voice' },
];

const COMMUNICATION_PRESETS = [
  { title: 'Direct', description: 'Clear and straightforward communication' },
  { title: 'Diplomatic', description: 'Tactful and considerate approach' },
  { title: 'Analytical', description: 'Data-driven and logical style' },
  { title: 'Collaborative', description: 'Team-oriented communication' },
  { title: 'Persuasive', description: 'Influential and compelling voice' },
];

const TONE_PRESETS = [
  { title: 'Confident', description: 'Strong and self-assured tone' },
  { title: 'Enthusiastic', description: 'Energetic and positive expression' },
  { title: 'Reserved', description: 'Measured and thoughtful approach' },
  { title: 'Empathetic', description: 'Understanding and supportive voice' },
  { title: 'Authoritative', description: 'Expert and knowledgeable tone' },
];

export const LeftSidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const renderPresets = (presets: typeof PERSONALITY_PRESETS) => (
    <div className="overflow-x-auto pb-4">
      <div className="flex animate-scroll">
        {presets.map((preset, index) => (
          <PresetCard key={index} {...preset} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-80 h-full bg-white/5 backdrop-blur-lg border-r border-white/10 p-4">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-2">Tools</h3>
          <div className="space-y-1">
            <ToolButton
              icon={<UserCircle2 className="w-5 h-5" />}
              label="Add Personality"
              isActive={activeSection === 'personality'}
              onClick={() => setActiveSection(activeSection === 'personality' ? null : 'personality')}
            />
            <ToolButton
              icon={<MessageCircle className="w-5 h-5" />}
              label="Communication Style"
              isActive={activeSection === 'communication'}
              onClick={() => setActiveSection(activeSection === 'communication' ? null : 'communication')}
            />
            <ToolButton
              icon={<Volume2 className="w-5 h-5" />}
              label="Tone"
              isActive={activeSection === 'tone'}
              onClick={() => setActiveSection(activeSection === 'tone' ? null : 'tone')}
            />
          </div>
        </div>

        {activeSection && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-400">Presets</h3>
            {activeSection === 'personality' && renderPresets(PERSONALITY_PRESETS)}
            {activeSection === 'communication' && renderPresets(COMMUNICATION_PRESETS)}
            {activeSection === 'tone' && renderPresets(TONE_PRESETS)}
          </div>
        )}
      </div>
    </div>
  );
};