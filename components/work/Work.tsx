'use client';

import React, { useState } from 'react';
import { projects } from '@/data/projects';
import { Project } from '@/types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectWindow } from './ProjectWindow';
import { SectionHeader } from '../ui/SectionHeader';

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>
      <SectionHeader
        title="PROJECT ARCHIVE"
        idCode="SYS_SUB_MODULE // WORK.EXE"
        description="Index of technical developments, structured products, and algorithmic exploration."
      />

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Interactive Project Specs Window overlay */}
      {selectedProject && (
        <ProjectWindow
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};
