'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'COMPLETED':
        return 'text-retro-green border-retro-green bg-retro-green/10';
      case 'IN DEVELOPMENT':
        return 'text-retro-amber border-retro-amber bg-retro-amber/10';
      case 'EXPLORING':
        return 'text-retro-blue border-retro-blue bg-retro-blue/10';
      case 'PLANNED':
        return 'text-retro-charcoal/50 border-retro-charcoal/30 bg-retro-charcoal/5';
      default:
        return 'text-retro-charcoal border-retro-charcoal';
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "retro-bevel-out bg-retro-cream p-5 hover:bg-retro-beige/40 transition-all duration-150 cursor-pointer group flex flex-col justify-between h-full select-none",
        "hover:shadow-[4px_4px_8px_rgba(0,0,0,0.08)]"
      )}
    >
      <div>
        {/* Card Header: Project Code & Status */}
        <div className="flex items-center justify-between border-b border-retro-border pb-2.5 mb-4">
          <span className="font-mono text-xs text-retro-charcoal/60">
            PRJ-ID // {project.id}
          </span>
          <span className={cn(
            "font-mono text-[9px] font-bold px-2 py-0.5 border uppercase tracking-wider",
            getStatusColor(project.status)
          )}>
            {project.status}
          </span>
        </div>

        {/* Title & Category */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-retro-amber uppercase tracking-widest block">
            {project.category}
          </span>
          <h3 className="font-pixel text-xl text-retro-charcoal group-hover:text-retro-green transition-colors flex items-center gap-1">
            {project.title}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-0.5" />
          </h3>
        </div>

        {/* Short Description */}
        <p className="mt-3 text-sm text-retro-charcoal/70 leading-relaxed font-sans">
          {project.shortDescription}
        </p>
      </div>

      {/* Tech Tags Footer */}
      <div className="mt-6 pt-3 border-t border-retro-border/40 flex flex-wrap gap-1.5">
        {project.technology.slice(0, 4).map((tech) => (
          <span key={tech} className="font-mono text-[9px] text-retro-charcoal/60 bg-retro-beige px-1.5 py-0.5 border border-retro-border/20">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
