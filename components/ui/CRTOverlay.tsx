'use client';

import React, { useEffect, useState } from 'react';

export const CRTOverlay: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  // Allow toggling the effect for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'g') {
        e.preventDefault();
        setEnabled((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="crt-effect" />
      <div className="crt-scanlines" />
      <div className="screen-grain" />
      
      {/* Small floating hint in the corner about CRT toggle */}
      <div className="fixed bottom-2 right-2 text-[10px] font-mono text-retro-charcoal opacity-20 pointer-events-none z-50 select-none">
        CTRL+G to toggle screen grain
      </div>
    </>
  );
};
