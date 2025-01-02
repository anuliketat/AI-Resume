import React from 'react';
import { GlassCard } from '../GlassCard';
import { ResumeSection } from './ResumeSection';

const mockData = {
  name: "John Doe",
  title: "Senior Software Engineer",
  contact: {
    email: "john@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA"
  },
  summary: "Experienced software engineer with a passion for building scalable applications and leading development teams.",
  experience: [
    {
      company: "Tech Corp",
      position: "Senior Software Engineer",
      period: "2020 - Present",
      description: "Led development of cloud-native applications using React and Node.js"
    }
  ],
  education: [
    {
      school: "University of Technology",
      degree: "B.S. Computer Science",
      year: "2016"
    }
  ],
  skills: ["React", "TypeScript", "Node.js", "AWS", "Python", "Docker"]
};

export const ResumeViewer = () => {
  const handleEdit = (section: string) => {
    console.log(`Editing section: ${section}`);
    // TODO: Implement edit functionality
  };

  return (
    <div className="w-full max-w-4xl mx-auto perspective-1000">
      <div className="relative transform-3d animate-float">
        <GlassCard className="p-8">
          <div className="space-y-8">
            {/* Header */}
            <ResumeSection title="Profile" onEdit={() => handleEdit('profile')}>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">{mockData.name}</h1>
                <p className="text-xl text-purple-300">{mockData.title}</p>
              </div>
            </ResumeSection>

            {/* Contact */}
            <ResumeSection title="Contact" onEdit={() => handleEdit('contact')}>
              <div className="flex justify-center space-x-6 text-gray-300">
                <span>{mockData.contact.email}</span>
                <span>{mockData.contact.phone}</span>
                <span>{mockData.contact.location}</span>
              </div>
            </ResumeSection>

            {/* Summary */}
            <ResumeSection title="Summary" onEdit={() => handleEdit('summary')}>
              <p className="text-gray-300">{mockData.summary}</p>
            </ResumeSection>

            {/* Experience */}
            <ResumeSection title="Experience" onEdit={() => handleEdit('experience')}>
              {mockData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between text-gray-300">
                    <h4 className="font-semibold">{exp.company}</h4>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-purple-300">{exp.position}</p>
                  <p className="text-gray-400 mt-1">{exp.description}</p>
                </div>
              ))}
            </ResumeSection>

            {/* Education */}
            <ResumeSection title="Education" onEdit={() => handleEdit('education')}>
              {mockData.education.map((edu, index) => (
                <div key={index} className="flex justify-between text-gray-300">
                  <div>
                    <h4 className="font-semibold">{edu.school}</h4>
                    <p className="text-purple-300">{edu.degree}</p>
                  </div>
                  <span>{edu.year}</span>
                </div>
              ))}
            </ResumeSection>

            {/* Skills */}
            <ResumeSection title="Skills" onEdit={() => handleEdit('skills')}>
              <div className="flex flex-wrap gap-2">
                {mockData.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ResumeSection>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};