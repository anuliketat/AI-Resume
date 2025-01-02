import React from 'react';
import { GlassCard } from '../GlassCard';
import { MessageSquarePlus, Bot, ExternalLink } from 'lucide-react';

const jobRecommendations = [
  { title: 'Senior Software Engineer', company: 'Google', url: '#' },
  { title: 'Tech Lead', company: 'Microsoft', url: '#' },
  { title: 'Full Stack Developer', company: 'Amazon', url: '#' },
  { title: 'Frontend Architect', company: 'Meta', url: '#' },
  { title: 'Engineering Manager', company: 'Apple', url: '#' },
];

const resumeTemplates = [
  { name: 'Modern Professional', preview: '/templates/modern.png' },
  { name: 'Creative Portfolio', preview: '/templates/creative.png' },
  { name: 'Executive Brief', preview: '/templates/executive.png' },
  { name: 'Tech Minimal', preview: '/templates/tech.png' },
];

export const RightSidebar = () => {
  return (
    <div className="w-80 h-full bg-white/5 backdrop-blur-lg border-l border-white/10 p-4">
      <div className="space-y-6">
        {/* Job Recommendations - More compact version */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Top Job Recommendations</h3>
          <div className="space-y-2 max-h-[200px] overflow-y-auto">
            {jobRecommendations.map((job, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors"
              >
                <div className="flex-1">
                  <h4 className="text-purple-300 text-sm font-medium">{job.title}</h4>
                  <p className="text-xs text-gray-400">{job.company}</p>
                </div>
                <a
                  href={job.url}
                  className="text-xs px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-full transition-colors"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Template Suggestions - New section */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Suggested Templates</h3>
          <div className="flex space-x-3 overflow-x-auto pb-2 hide-scrollbar">
            {resumeTemplates.map((template, index) => (
              <div
                key={index}
                className="flex-none w-32 group cursor-pointer"
              >
                <div className="h-44 bg-white/5 rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-400/30 transition-all">
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">{template.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chat - Updated design */}
        <div>
          <h3 className="text-sm font-medium text-gray-400 mb-3">AI Assistant</h3>
          <GlassCard className="p-4 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-300">How can I help with your resume?</p>
                <p className="text-xs text-gray-400 mt-1">Click to start chatting</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};