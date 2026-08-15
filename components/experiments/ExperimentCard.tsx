'use client';

import React from 'react';
import { Experiment } from '@/types/portfolio';
import { cn } from '@/lib/utils';

interface ExperimentCardProps {
  experiment: Experiment;
  onClick: () => void;
}

export const ExperimentCard: React.FC<ExperimentCardProps> = ({
  experiment,
  onClick,
}) => {
  const getStatusColor = (status: Experiment['status']) => {
    switch (status) {
      case 'COMPLETED':
        return 'text-retro-green bg-retro-green/10 border-retro-green/30';
      case 'EXPERIMENTING':
      case 'TESTING':
        return 'text-retro-amber bg-retro-amber/10 border-retro-amber/30';
      case 'EXPLORING':
      case 'LEARNING':
        return 'text-retro-blue bg-retro-blue/10 border-retro-blue/30';
      case 'PLANNED':
        return 'text-retro-charcoal/40 bg-retro-charcoal/5 border-retro-border/20';
      default:
        return 'text-retro-charcoal border-retro-border';
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "retro-bevel-out bg-retro-cream p-4 hover:bg-retro-beige/30 transition-all cursor-pointer select-none flex flex-col justify-between h-40",
        "border-l-4 border-l-retro-border hover:border-l-retro-amber"
      )}
    >
      <div>
        <div className="flex items-center justify-between text-[10px] font-mono text-retro-charcoal/50 border-b border-retro-border/30 pb-1.5 mb-2.5">
          <span>{experiment.id}</span>
          <span className="uppercase text-retro-amber font-semibold">{experiment.category}</span>
        </div>
        
        <h4 className="font-pixel text-base text-retro-charcoal line-clamp-2">
          {experiment.title}
        </h4>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="text-[10px] font-mono text-retro-charcoal/40">
          LOGFILE.LOG
        </span>
        <span className={cn(
          "font-mono text-[9px] px-1.5 py-0.5 border uppercase tracking-wider",
          getStatusColor(experiment.status)
        )}>
          {experiment.status}
        </span>
      </div>
    </div>
  );
};
