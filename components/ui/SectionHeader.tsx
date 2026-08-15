'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  idCode: string;
  className?: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  idCode,
  className,
  description,
}) => {
  return (
    <div className={cn("mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-retro-border pb-3 relative", className)}>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-retro-amber font-semibold tracking-widest">{idCode}</span>
          <div className="h-[1px] flex-1 bg-retro-border opacity-30 md:hidden" />
        </div>
        <h2 className="font-pixel text-2xl md:text-3xl tracking-wider text-retro-charcoal">
          {title}
        </h2>
        {description && (
          <p className="mt-1 font-mono text-xs text-retro-charcoal/60 max-w-xl">
            {description}
          </p>
        )}
      </div>
      
      {/* Decorative engineering details on larger screens */}
      <div className="hidden md:flex flex-col items-end shrink-0">
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-retro-charcoal/40">
          <span>ARCHIVE_SECT_SYS_INIT_v2.0</span>
          <div className="w-1.5 h-1.5 bg-retro-border" />
        </div>
        <div className="w-48 h-1 bg-retro-dither opacity-30 mt-1" />
      </div>
    </div>
  );
};
