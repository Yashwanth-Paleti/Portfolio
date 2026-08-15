'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { X, Minimize2, Square } from 'lucide-react';

interface RetroWindowProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleBarClassName?: string;
  onClose?: () => void;
  statusText?: string;
  showActions?: boolean;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({
  title,
  subtitle,
  children,
  className,
  titleBarClassName,
  onClose,
  statusText,
  showActions = true,
}) => {
  return (
    <div
      className={cn(
        "retro-bevel-out bg-retro-cream text-retro-charcoal flex flex-col overflow-hidden w-full",
        className
      )}
    >
      {/* Title Bar */}
      <div
        className={cn(
          "h-9 px-3 bg-retro-beige border-b border-retro-border flex items-center justify-between select-none shrink-0",
          titleBarClassName
        )}
      >
        <div className="flex items-center gap-2 overflow-hidden mr-4">
          {/* Classic Win95-style dots / dither strip */}
          <div className="flex flex-col gap-0.5 w-6 shrink-0 opacity-40">
            <div className="h-0.5 w-full bg-retro-charcoal" />
            <div className="h-0.5 w-full bg-retro-charcoal" />
            <div className="h-0.5 w-full bg-retro-charcoal" />
          </div>
          
          <span className="font-pixel text-lg tracking-wider text-retro-charcoal whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </span>
          {subtitle && (
            <span className="font-mono text-[10px] uppercase text-retro-charcoal/60 whitespace-nowrap overflow-hidden text-ellipsis ml-2 border-l border-retro-border pl-2">
              {subtitle}
            </span>
          )}
        </div>

        {showActions && (
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              className="w-5 h-5 flex items-center justify-center retro-bevel-out bg-retro-beige active:shadow-[inset_1px_1px_0px_#4f4c44,inset_-1px_-1px_0px_#fff] p-0.5 group focus:outline-none"
              title="Minimize"
            >
              <Minimize2 className="w-3 h-3 text-retro-charcoal/70 group-active:translate-x-0.5 group-active:translate-y-0.5" />
            </button>
            <button
              type="button"
              className="w-5 h-5 flex items-center justify-center retro-bevel-out bg-retro-beige active:shadow-[inset_1px_1px_0px_#4f4c44,inset_-1px_-1px_0px_#fff] p-0.5 group focus:outline-none"
              title="Maximize"
            >
              <Square className="w-2.5 h-2.5 text-retro-charcoal/70 group-active:translate-x-0.5 group-active:translate-y-0.5" />
            </button>
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="w-5 h-5 flex items-center justify-center retro-bevel-out bg-retro-beige active:shadow-[inset_1px_1px_0px_#4f4c44,inset_-1px_-1px_0px_#fff] p-0.5 text-retro-amber hover:bg-retro-amber hover:text-retro-cream active:bg-retro-amber-light group transition-colors duration-75 focus:outline-none"
                title="Close"
              >
                <X className="w-3 h-3 group-active:translate-x-0.5 group-active:translate-y-0.5" />
              </button>
            ) : (
              <div className="w-5 h-5" />
            )}
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 min-h-0 relative">
        {children}
      </div>

      {/* Window Status Bar / Footer */}
      {statusText && (
        <div className="h-6 px-3 bg-retro-beige border-t border-retro-border flex items-center justify-between text-[11px] font-mono text-retro-charcoal/70 select-none shrink-0">
          <span>{statusText}</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-retro-green animate-pulse" />
            SYSTEM LOGGED
          </span>
        </div>
      )}
    </div>
  );
};
