'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import { RetroWindow } from '../ui/RetroWindow';
import { PixelButton } from '../ui/PixelButton';
import { Github, ExternalLink, Code2, AlertCircle, Sparkles, BookOpen, Layers } from 'lucide-react';

interface ProjectWindowProps {
  project: Project;
  onClose: () => void;
}

export const ProjectWindow: React.FC<ProjectWindowProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-retro-charcoal/40 backdrop-blur-xs">
      <div className="w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <RetroWindow
          title={`PROJECT_SPEC: ${project.title.toUpperCase()}`}
          subtitle={`ARCHIVE_REF_${project.id}`}
          statusText={`METADATA INTEGRITY: VERIFIED | PATH: /work/${project.slug}`}
          onClose={onClose}
          className="h-full flex-1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full items-start">
            
            {/* Left Column: Spec Sheet Panel */}
            <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-0">
              <div className="retro-bevel-in p-4 space-y-3 bg-retro-beige/35">
                <span className="font-pixel text-xs text-retro-amber uppercase tracking-wider block border-b border-retro-border pb-1">
                  TECHNICAL METADATA
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-retro-border/30 pb-1">
                    <span className="text-retro-charcoal/50">PROJECT CODE</span>
                    <span className="font-semibold text-retro-charcoal">PRJ-{project.id}</span>
                  </div>
                  <div className="flex justify-between border-b border-retro-border/30 pb-1">
                    <span className="text-retro-charcoal/50">STATUS</span>
                    <span className="font-semibold text-retro-green">{project.status}</span>
                  </div>
                  <div className="flex justify-between border-b border-retro-border/30 pb-1">
                    <span className="text-retro-charcoal/50">CATEGORY</span>
                    <span className="font-semibold text-retro-charcoal">{project.category}</span>
                  </div>
                  <div className="space-y-1 pt-1">
                    <span className="text-retro-charcoal/50 block">STACK ENGINE</span>
                    <div className="flex flex-wrap gap-1">
                      {project.technology.map((tech) => (
                        <span key={tech} className="bg-retro-cream border border-retro-border/40 px-1.5 py-0.5 text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none"
                  >
                    <PixelButton variant="primary" className="w-full flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      SOURCE CODE
                    </PixelButton>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none"
                  >
                    <PixelButton variant="accent" className="w-full flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      EXPLORE LIVE
                    </PixelButton>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Dynamic case study document body */}
            <div className="lg:col-span-8 overflow-y-auto space-y-6 max-h-[50vh] lg:max-h-[68vh] pr-2 retro-bevel-in p-4 md:p-6 bg-retro-cream">
              
              {/* Objective */}
              <div className="space-y-1.5">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-retro-amber" /> 01 // OBJECTIVE
                </h4>
                <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans pl-5">
                  {project.objective}
                </p>
              </div>

              {/* Problem */}
              <div className="space-y-1.5">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-retro-amber" /> 02 // THE PROBLEM
                </h4>
                <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans pl-5">
                  {project.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-1.5">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-retro-amber" /> 03 // APPROACH & LOGIC
                </h4>
                <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans pl-5">
                  {project.approach}
                </p>
              </div>

              {/* Architecture diagram nodes */}
              <div className="space-y-2">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-retro-amber" /> 04 // PIPELINE ARCHITECTURE
                </h4>
                <div className="pl-5 space-y-1.5">
                  {project.architecture.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-retro-green bg-retro-green/10 border border-retro-green/20 px-1 py-0.5 rounded-sm">
                        NODE 0{idx + 1}
                      </span>
                      <span className="text-retro-charcoal/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Implementation */}
              <div className="space-y-1.5">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-retro-amber" /> 05 // SYSTEM IMPLEMENTATION
                </h4>
                <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans pl-5">
                  {project.implementation}
                </p>
              </div>

              {/* Results */}
              <div className="space-y-1.5">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-retro-amber" /> 06 // SYSTEM OUTCOMES
                </h4>
                <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans pl-5">
                  {project.results}
                </p>
              </div>

              {/* Challenges */}
              <div className="space-y-1.5">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-retro-amber" /> 07 // ARCHITECTURAL CHALLENGES
                </h4>
                <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans pl-5">
                  {project.challenges}
                </p>
              </div>

              {/* Learnings */}
              <div className="space-y-1.5">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-retro-amber" /> 08 // KEY SYSTEMS LEARNINGS
                </h4>
                <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans pl-5">
                  {project.learnings}
                </p>
              </div>

              {/* Future improvements */}
              <div className="space-y-1.5">
                <h4 className="font-pixel text-sm text-retro-charcoal flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-retro-amber" /> 09 // FUTURE UPGRADE MAP
                </h4>
                <ul className="list-none pl-5 space-y-1 font-mono text-xs text-retro-charcoal/70">
                  {project.futureImprovements.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <span>•</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </RetroWindow>
      </div>
    </div>
  );
};
