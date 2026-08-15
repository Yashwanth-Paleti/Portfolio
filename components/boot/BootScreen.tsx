'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [skipped, setSkipped] = useState(false);

  const bootSequence = [
    { text: 'YASH SYSTEM', delay: 200 },
    { text: 'SYSTEM INITIALIZATION...', delay: 370 },
    { text: 'DATA MODULE.............. OK', delay: 550 },
    { text: 'AI MODULE................ OK', delay: 850 },
    { text: 'SYSTEMS MODULE........... OK', delay: 1150 },
    { text: 'SYSTEM READY.', delay: 1400 },
    { text: 'C:\\YASH> run portfolio.exe', delay: 200 },
  ];

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    // Check if already booted in this session to prevent annoying loops
    const hasBooted = sessionStorage.getItem('yash-system-booted');
    if (hasBooted) {
      onComplete();
      return;
    }

    // Execute boot sequence
    const timers: NodeJS.Timeout[] = [];
    
    bootSequence.forEach((line) => {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, line.text]);
      }, line.delay);
      timers.push(timer);
    });

    // Complete the boot sequence
    const finalTimer = setTimeout(() => {
      handleComplete();
    }, 1800);
    timers.push(finalTimer);

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem('yash-system-booted', 'true');
    onComplete();
  };

  const handleSkip = () => {
    setSkipped(true);
    handleComplete();
  };

  if (skipped) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#121212] text-[#4ea87d] font-mono p-6 md:p-12 flex flex-col justify-between overflow-hidden select-none">
      
      {/* Boot terminal text output */}
      <div className="flex-1 max-w-2xl text-sm md:text-base space-y-2">
        {lines.map((line, index) => (
          <div key={index} className="flex items-center gap-1">
            {line === 'C:\\YASH> run portfolio.exe' ? (
              <>
                <span>{line}</span>
                <span className="w-2 h-4 bg-[#4ea87d] animate-pulse" />
              </>
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}
      </div>

      {/* Skip Controls */}
      <div className="flex items-center justify-between border-t border-[#4ea87d]/20 pt-4 text-xs md:text-sm text-[#4ea87d]/60">
        <span>INITIALIZING INTERACTIVE ARCHIVE...</span>
        <button
          onClick={handleSkip}
          className="px-3 py-1 border border-[#4ea87d]/40 hover:bg-[#4ea87d] hover:text-[#121212] transition-colors focus:outline-none"
        >
          SKIP (ESC)
        </button>
      </div>

      {/* Support Escape key to skip */}
      <EscapeListener onEscape={handleSkip} />
    </div>
  );
};

// Help helper component for key events inside client component
const EscapeListener: React.FC<{ onEscape: () => void }> = ({ onEscape }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEscape]);

  return null;
};
