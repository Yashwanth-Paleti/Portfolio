'use client';

import React from 'react';
import { Timeline } from './Timeline';
import { SectionHeader } from '../ui/SectionHeader';
import { User, Book, Code, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div>
      <SectionHeader
        title="THE PERSON BEHIND THE SYSTEM"
        idCode="SYS_SUB_MODULE // ABOUT.EXE"
        description="A look at core academic interests, language competencies, and professional background."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Bios & Specifications */}
        <div className="lg:col-span-5 space-y-6">
          <div className="retro-bevel-out bg-retro-cream p-5 space-y-5">
            <div className="flex items-center gap-2 border-b border-retro-border pb-3 mb-2">
              <User className="w-5 h-5 text-retro-amber" />
              <h3 className="font-pixel text-lg text-retro-charcoal">BIOGRAPHICAL_SPECS</h3>
            </div>

            <p className="text-sm text-retro-charcoal/80 leading-relaxed font-sans">
              I am a Computer Science student specializing in Data Science. I focus on studying intelligent systems, quantitative analytics, technology strategy, and systems engineering.
            </p>

            {/* Core Specs Tables */}
            <div className="space-y-4 pt-2">
              
              {/* Education */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-retro-charcoal/50 flex items-center gap-1 uppercase">
                  <Book className="w-3.5 h-3.5" /> EDUCATION
                </span>
                <div className="retro-bevel-in p-2.5 bg-retro-beige/30 font-mono text-xs">
                  <div className="font-semibold text-retro-charcoal">CSE — Data Science Focus</div>
                  <div className="text-[10px] text-retro-charcoal/60 mt-0.5">UNDERGRADUATE ARCHIVE</div>
                </div>
              </div>

              {/* Primary Languages */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-retro-charcoal/50 flex items-center gap-1 uppercase">
                  <Code className="w-3.5 h-3.5" /> PRIMARY LANGUAGES
                </span>
                <div className="retro-bevel-in p-2.5 bg-retro-beige/30 flex items-center gap-4 font-mono text-xs">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-retro-green" />
                    <span>Python</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-retro-amber" />
                    <span>C++</span>
                  </div>
                </div>
              </div>

              {/* Current Interests */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-retro-charcoal/50 flex items-center gap-1 uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> PRIMARY FIELDS OF STUDY
                </span>
                <div className="retro-bevel-in p-2.5 bg-retro-beige/30 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {['AI', 'Data Science', 'Finance', 'Systems', 'Robotics', 'Technology Strategy'].map((field) => (
                    <span key={field} className="bg-retro-cream border border-retro-border/40 px-1.5 py-0.5">
                      {field}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right column: Professional Timeline */}
        <div className="lg:col-span-7">
          <Timeline />
        </div>
      </div>
    </div>
  );
};
