'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status?: string;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status = 'BUILDING',
  className,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 font-mono text-[10px] tracking-wider retro-bevel-in bg-retro-cream text-retro-charcoal/80",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-retro-green opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-retro-green"></span>
      </span>
      <span>SYSTEM STATUS: <strong className="text-retro-green">{status}</strong></span>
    </div>
  );
};
