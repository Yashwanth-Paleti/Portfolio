'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PixelButton } from '../ui/PixelButton';
import { FileText, Download, Eye, HardDrive } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<'ai' | 'finance' | 'general'>('ai');

  const resumeVersions = [
    {
      id: 'ai',
      name: 'AI / ENGINEERING VERSION',
      filename: 'yashwanth_paleti_ai_systems.pdf',
      description: 'Optimized for machine learning, data engineering, systems development, and computer vision roles.',
      tags: ['Python', 'C++', 'PyTorch', 'Systems']
    },
    {
      id: 'finance',
      name: 'FINANCE / ANALYTICS VERSION',
      filename: 'yashwanth_paleti_quant_finance.pdf',
      description: 'Focuses on financial analytics, mathematical modeling, quantitative coding, and Technology Strategy.',
      tags: ['Pandas', 'Backtesting', 'Strategy', 'Data']
    },
    {
      id: 'general',
      name: 'GENERALIST VERSION',
      filename: 'yashwanth_paleti_systems_builder.pdf',
      description: 'A comprehensive summary of academic milestones, leadership records, and general software capabilities.',
      tags: ['Full-stack', 'Leadership', 'CSE', 'Data Science']
    }
  ];

  const currentResume = resumeVersions.find(v => v.id === selectedVersion)!;

  return (
    <div>
      <SectionHeader
        title="RESUME REGISTRY"
        idCode="SYS_SUB_MODULE // RESUME.EXE"
        description="Select and retrieve targeted CV logs containing specialized skills and operational experience."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Version selector */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="retro-bevel-in p-3 bg-retro-beige/40 text-[10px] font-mono text-retro-charcoal/50 flex items-center gap-1.5 select-none">
            <HardDrive className="w-3.5 h-3.5" />
            <span>MOUNTED RESUME VOLUMES</span>
          </div>

          {resumeVersions.map((version) => (
            <button
              key={version.id}
              onClick={() => setSelectedVersion(version.id as any)}
              className={`w-full text-left p-4 retro-bevel-out transition-all focus:outline-none flex items-center justify-between group ${
                selectedVersion === version.id
                  ? 'bg-retro-cream border-retro-green shadow-inner border-l-4 border-l-retro-green'
                  : 'bg-retro-cream/60 hover:bg-retro-beige/40 border-l-4 border-l-retro-border'
              }`}
            >
              <div className="space-y-1">
                <span className="font-pixel text-xs text-retro-charcoal block group-hover:text-retro-green transition-colors">
                  {version.name}
                </span>
                <span className="font-mono text-[9px] text-retro-charcoal/40 block">
                  FILE: {version.filename}
                </span>
              </div>
              <FileText className={`w-4 h-4 shrink-0 transition-colors ${
                selectedVersion === version.id ? 'text-retro-green' : 'text-retro-charcoal/40'
              }`} />
            </button>
          ))}
        </div>

        {/* Right Side: Active details & CTA */}
        <div className="lg:col-span-7 flex">
          <div className="retro-bevel-out bg-retro-cream p-6 flex flex-col justify-between w-full">
            <div className="space-y-4">
              <div className="border-b border-retro-border pb-3 flex items-center justify-between">
                <span className="font-pixel text-sm text-retro-green uppercase">
                  ACTIVE_VOLUME: {currentResume.id.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-retro-charcoal/50 select-none">
                  READY_FOR_RETRIEVAL
                </span>
              </div>

              <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans">
                {currentResume.description}
              </p>

              <div className="space-y-2">
                <span className="font-mono text-[10px] text-retro-charcoal/50 block">KEY REGISTRY TAGS:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentResume.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] bg-retro-beige/60 border border-retro-border/20 px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-retro-border/40 mt-6">
              <a
                href={`/resume/${currentResume.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none"
              >
                <PixelButton variant="accent" className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  VIEW RESUME
                </PixelButton>
              </a>
              <a
                href={`/resume/${currentResume.filename}`}
                download
                className="focus:outline-none"
              >
                <PixelButton variant="primary" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  DOWNLOAD RESUME
                </PixelButton>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
