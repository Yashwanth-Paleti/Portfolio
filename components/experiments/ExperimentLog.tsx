'use client';

import React from 'react';
import { Experiment } from '@/types/portfolio';
import { RetroWindow } from '../ui/RetroWindow';

interface ExperimentLogProps {
  experiment: Experiment;
  onClose: () => void;
}

export const ExperimentLog: React.FC<ExperimentLogProps> = ({
  experiment,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-retro-charcoal/40 backdrop-blur-xs">
      <div className="w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <RetroWindow
          title={`LAB_LOG: ${experiment.id} // ${experiment.title.toUpperCase()}`}
          subtitle={`ARCHIVE_LOG_${experiment.id}`}
          statusText={`LAB STATUS: ${experiment.status}`}
          onClose={onClose}
          className="h-full flex-1"
        >
          <div className="space-y-5 font-mono text-xs overflow-y-auto max-h-[60vh] pr-2 retro-bevel-in p-4 bg-retro-cream">
            
            {/* Metadata Banner */}
            <div className="p-3 bg-retro-beige/40 border border-retro-border/50 text-[10px] space-y-1">
              <div><span className="text-retro-charcoal/50">EXP TYPE:</span> {experiment.category}</div>
              <div><span className="text-retro-charcoal/50">ID HASH:</span> {experiment.id}-MD5-CHECKED</div>
            </div>

            {/* Objective */}
            <div className="space-y-1">
              <span className="text-retro-amber font-semibold tracking-wider block border-b border-retro-border/20 pb-0.5">
                [OBJECTIVE]
              </span>
              <p className="text-retro-charcoal/80 leading-relaxed pl-2 font-sans text-sm">
                {experiment.objective}
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-1">
              <span className="text-retro-amber font-semibold tracking-wider block border-b border-retro-border/20 pb-0.5">
                [APPROACH]
              </span>
              <p className="text-retro-charcoal/80 leading-relaxed pl-2 font-sans text-sm">
                {experiment.approach}
              </p>
            </div>

            {/* Result */}
            <div className="space-y-1">
              <span className="text-retro-amber font-semibold tracking-wider block border-b border-retro-border/20 pb-0.5">
                [RESULT]
              </span>
              <p className="text-retro-charcoal/80 leading-relaxed pl-2 font-sans text-sm">
                {experiment.result}
              </p>
            </div>

            {/* Lessons */}
            <div className="space-y-1">
              <span className="text-retro-amber font-semibold tracking-wider block border-b border-retro-border/20 pb-0.5">
                [LESSONS]
              </span>
              <p className="text-retro-charcoal/80 leading-relaxed pl-2 font-sans text-sm">
                {experiment.lessons}
              </p>
            </div>

            {/* Next */}
            <div className="space-y-1">
              <span className="text-retro-amber font-semibold tracking-wider block border-b border-retro-border/20 pb-0.5">
                [NEXT ACTION]
              </span>
              <p className="text-retro-charcoal/80 leading-relaxed pl-2 font-sans text-sm">
                {experiment.next}
              </p>
            </div>

          </div>
        </RetroWindow>
      </div>
    </div>
  );
};
