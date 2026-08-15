'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

export const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  active = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        "font-pixel tracking-wider uppercase transition-all duration-75 relative focus:outline-none",
        "retro-bevel-out active:shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1),inset_-2px_-2px_0px_rgba(255,255,255,0.25)] active:translate-y-[1px]",
        // Size Styles
        size === 'sm' && "px-3 py-1 text-xs",
        size === 'md' && "px-4 py-1.5 text-sm",
        size === 'lg' && "px-6 py-2.5 text-base",
        // Variant Styles
        variant === 'primary' && "bg-retro-cream text-retro-charcoal hover:bg-retro-beige",
        variant === 'secondary' && "bg-retro-beige text-retro-charcoal/80 hover:text-retro-charcoal hover:bg-retro-border/20",
        variant === 'accent' && "bg-retro-green text-retro-cream hover:bg-retro-green-light shadow-inner",
        variant === 'danger' && "bg-retro-amber text-retro-cream hover:bg-retro-amber-light",
        // Active Override
        active && "shadow-[inset_2px_2px_0px_rgba(0,0,0,0.15)] bg-retro-border/30 text-retro-charcoal translate-y-[1px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
