'use client';

import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-retro-beige border-t border-retro-border py-8 px-4 md:px-8 mt-16 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: System Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-pixel text-sm tracking-wider text-retro-charcoal">
            YASHWANTH PALETI // SYSTEMS BUILDER
          </span>
          <span className="font-mono text-[10px] text-retro-charcoal/50 mt-1">
            &copy; {currentYear} ALL ARCHIVES COMMITTED. NO RIGHTS PRESERVED TO MACHINES.
          </span>
        </div>

        {/* Middle: Schematic details */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="w-16 h-1 bg-retro-dither opacity-20" />
          <span className="font-mono text-[9px] text-retro-charcoal/40">
            LOC_LAT: 23.54N | DEV_SYS: NX.v16 | CLT_OS: WIN_V2
          </span>
          <div className="w-16 h-1 bg-retro-dither opacity-20" />
        </div>

        {/* Right Side: Status Details */}
        <div className="flex flex-col items-center md:items-end font-mono text-[10px] text-retro-charcoal/60">
          <span>COMPILED ON: 2026-08-14</span>
          <span>STATUS: ONLINE</span>
        </div>
      </div>
    </footer>
  );
};
