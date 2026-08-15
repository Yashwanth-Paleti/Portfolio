'use client';

import React from 'react';
import { PixelButton } from '../ui/PixelButton';
import { RetroWindow } from '../ui/RetroWindow';
import { Github, Linkedin, Terminal, Cpu, Database, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleExploreClick = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = workSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch py-6 md:py-12">
      {/* Left side: Main Profile Text */}
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs text-retro-amber bg-retro-cream px-2 py-0.5 retro-bevel-in">
              PORTFOLIO ARCHIVE v2.0
            </span>
            <div className="w-1.5 h-1.5 bg-retro-green rounded-full animate-ping" />
          </div>
          
          <h1 className="font-pixel text-4xl sm:text-5xl md:text-6xl text-retro-charcoal tracking-wide leading-none">
            YASHWANTH PALETI
          </h1>
          <p className="font-pixel text-xl sm:text-2xl text-retro-green mt-2 tracking-widest uppercase">
            SYSTEMS BUILDER
          </p>
        </div>

        {/* Focus areas tags */}
        <div className="flex flex-wrap gap-2 text-xs font-mono text-retro-charcoal/80">
          {['AI', 'DATA', 'FINANCE', 'SYSTEMS', 'ROBOTICS'].map((tag) => (
            <span key={tag} className="px-2.5 py-1 bg-retro-cream retro-bevel-out border border-retro-border/40 select-none">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-base sm:text-lg text-retro-charcoal/80 leading-relaxed max-w-xl font-sans">
          Exploring intelligent systems, data-driven problem solving, finance, and the intersection of technology and business. Focused on building high-performance architectures.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <PixelButton onClick={handleExploreClick} variant="accent" size="lg">
            EXPLORE WORK
          </PixelButton>
          <a
            href="https://github.com/yashwanthpaleti"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none"
          >
            <PixelButton variant="secondary" size="lg" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GITHUB
            </PixelButton>
          </a>
          <a
            href="https://linkedin.com/in/yashwanthpaleti"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none"
          >
            <PixelButton variant="secondary" size="lg" className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              LINKEDIN
            </PixelButton>
          </a>
        </div>
      </div>

      {/* Right side: Retro Diagnostics Workstation Panel */}
      <div className="lg:col-span-5 flex flex-col">
        <RetroWindow
          title="SYS_DIAGNOSTICS.EXE"
          subtitle="SYSTEM_MONITOR"
          statusText="CORE TEMP: 38C | VOLTAGE: 1.22V"
          className="h-full flex-1"
        >
          <div className="space-y-5 font-mono text-xs select-none">
            {/* Mock CPU Stats */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px] text-retro-charcoal/60">
                <span className="flex items-center gap-1"><Cpu className="w-3.5 h-3.5" /> CPU LOAD</span>
                <span>34.2%</span>
              </div>
              <div className="h-4 retro-bevel-in overflow-hidden relative flex bg-retro-beige/40">
                <div className="h-full bg-retro-green opacity-80" style={{ width: '34%' }} />
                {/* Horizontal Tick marks */}
                <div className="absolute inset-0 flex justify-between px-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-retro-border/40" />
                  ))}
                </div>
              </div>
            </div>

            {/* Mock Memory Stats */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px] text-retro-charcoal/60">
                <span className="flex items-center gap-1"><Database className="w-3.5 h-3.5" /> L1/L2 CACHE LOAD</span>
                <span>61.8%</span>
              </div>
              <div className="h-4 retro-bevel-in overflow-hidden relative flex bg-retro-beige/40">
                <div className="h-full bg-retro-amber opacity-75" style={{ width: '61%' }} />
                <div className="absolute inset-0 flex justify-between px-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-retro-border/40" />
                  ))}
                </div>
              </div>
            </div>

            {/* Dither pattern system description grid */}
            <div className="p-3 border border-retro-border/50 bg-retro-beige/20 space-y-2">
              <div className="flex justify-between border-b border-retro-border/30 pb-1">
                <span className="text-retro-charcoal/60">ARCHITECTURE</span>
                <span className="font-semibold text-retro-charcoal">x86_64 NEURAL</span>
              </div>
              <div className="flex justify-between border-b border-retro-border/30 pb-1">
                <span className="text-retro-charcoal/60">ACTIVE PROJECTS</span>
                <span className="font-semibold text-retro-charcoal">04 (STABLE)</span>
              </div>
              <div className="flex justify-between border-b border-retro-border/30 pb-1">
                <span className="text-retro-charcoal/60">COMPILER VERSION</span>
                <span className="font-semibold text-retro-charcoal">TSC v5.7 / PY v3.12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-retro-charcoal/60">SIGNAL QUALITY</span>
                <span className="font-semibold text-retro-green flex items-center gap-1">
                  <Activity className="w-3 h-3 animate-pulse" /> EXCELLENT
                </span>
              </div>
            </div>

            {/* Mini Terminal Logs */}
            <div className="space-y-1 bg-retro-charcoal text-retro-cream p-2.5 font-mono text-[9px] retro-bevel-in leading-relaxed">
              <p className="text-retro-green-light">SYS INIT: BOOTED SUCCESSFULLY</p>
              <p className="opacity-70">LOCATING ARCHIVE FILES... FOUND (4)</p>
              <p className="opacity-70">MOUNTING DATA/PORTFOLIO.TS ON /DATA</p>
              <p className="text-retro-amber-light">WARNING: UNRELEASED SYSTEMS DETECTED</p>
              <p className="opacity-50">AWAITING CONNECTION ON PORT 8080...</p>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};
