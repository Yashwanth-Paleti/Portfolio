'use client';

import React from 'react';
import { timeline } from '@/data/timeline';

export const Timeline: React.FC = () => {
  return (
    <div className="space-y-8 relative before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-[1px] before:bg-retro-border/60">
      {timeline.map((entry) => (
        <div key={entry.id} className="relative pl-8 group">
          {/* Vertical Timeline Dot */}
          <div className="absolute top-1.5 left-1 w-4.5 h-4.5 retro-bevel-out rounded-full bg-retro-cream flex items-center justify-center group-hover:border-retro-green transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-retro-border group-hover:bg-retro-green transition-colors" />
          </div>

          <div className="retro-bevel-in p-4 bg-retro-cream/50 space-y-2">
            {/* Header: Role, Period, Company */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-retro-border/30 pb-2">
              <div>
                <h4 className="font-pixel text-base text-retro-charcoal">
                  {entry.role}
                </h4>
                <span className="font-mono text-xs text-retro-amber font-semibold">
                  {entry.company}
                </span>
              </div>
              <span className="font-mono text-[10px] bg-retro-beige px-2 py-0.5 border border-retro-border/25">
                {entry.period}
              </span>
            </div>

            {/* Description lines */}
            <ul className="list-none space-y-1.5 font-sans text-xs text-retro-charcoal/80">
              {entry.description.map((line, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-retro-amber font-mono font-bold mt-0.5">•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {/* Tags footer */}
            <div className="flex flex-wrap gap-1 pt-2">
              {entry.tags.map((tag) => (
                <span key={tag} className="font-mono text-[9px] text-retro-charcoal/50 bg-retro-beige/40 border border-retro-border/15 px-1.5 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
