'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-20 px-4 md:px-8 relative overflow-hidden",
        className
      )}
    >

      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};
