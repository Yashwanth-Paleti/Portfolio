'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface NowColumnProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  titleColor?: 'green' | 'amber' | 'blue' | 'charcoal';
}

export const NowColumn: React.FC<NowColumnProps> = ({
  title,
  items,
  icon,
  titleColor = 'charcoal',
}) => {
  const getHeaderColor = () => {
    switch (titleColor) {
      case 'green': return 'text-retro-green border-b-retro-green';
      case 'amber': return 'text-retro-amber border-b-retro-amber';
      case 'blue': return 'text-retro-blue border-b-retro-blue';
      default: return 'text-retro-charcoal border-b-retro-border';
    }
  };

  return (
    <div className="retro-bevel-out bg-retro-cream p-4 flex flex-col h-full select-none">
      {/* Title Header */}
      <div className={cn("flex items-center gap-2 border-b pb-2 mb-3 font-pixel text-sm", getHeaderColor())}>
        {icon}
        <span>{title}</span>
      </div>

      {/* Items list */}
      <ul className="space-y-2 font-mono text-xs text-retro-charcoal/80 flex-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 border-b border-retro-border/20 pb-1.5 last:border-b-0 last:pb-0">
            <span className="w-1.5 h-1.5 bg-retro-border shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
