'use client';

import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { PixelButton } from '../ui/PixelButton';
import { Github, Linkedin, Mail, Code, Terminal } from 'lucide-react';

export const Connect: React.FC = () => {
  return (
    <div>
      <SectionHeader
        title="CONNECT PORT"
        idCode="SYS_SUB_MODULE // CONNECT.EXE"
        description="Establish transmission links or schedule sync operations."
      />

      <div className="retro-bevel-out bg-retro-cream p-6 md:p-10 max-w-2xl mx-auto text-center space-y-6 select-none">
        
        {/* Connection Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-retro-beige font-mono text-[9px] text-retro-amber border border-retro-border/40 uppercase">
            <Terminal className="w-3.5 h-3.5" /> AWAITING HANDSHAKE...
          </div>
          
          <h3 className="font-pixel text-xl sm:text-2xl md:text-3xl text-retro-charcoal tracking-wide">
            HAVE AN INTERESTING PROBLEM?
          </h3>
          <p className="font-pixel text-lg sm:text-xl text-retro-green tracking-widest uppercase">
            LET'S TALK.
          </p>
        </div>

        {/* Links block */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          
          {/* Email */}
          <a
            href="mailto:yashwanth.paleti@example.com" // Placeholder email, Yashwanth can update
            className="focus:outline-none"
          >
            <PixelButton variant="primary" className="w-full flex items-center justify-center gap-2 text-xs py-2.5">
              <Mail className="w-4 h-4 text-retro-amber" />
              EMAIL
            </PixelButton>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yashwanthpaleti"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none"
          >
            <PixelButton variant="primary" className="w-full flex items-center justify-center gap-2 text-xs py-2.5">
              <Linkedin className="w-4 h-4 text-retro-blue-light" />
              LINKEDIN
            </PixelButton>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yashwanthpaleti"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none"
          >
            <PixelButton variant="primary" className="w-full flex items-center justify-center gap-2 text-xs py-2.5">
              <Github className="w-4 h-4 text-retro-charcoal" />
              GITHUB
            </PixelButton>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/yashwanthpaleti/" // Yashwanth can adjust path
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none"
          >
            <PixelButton variant="primary" className="w-full flex items-center justify-center gap-2 text-xs py-2.5">
              <Code className="w-4 h-4 text-retro-amber-light" />
              LEETCODE
            </PixelButton>
          </a>

        </div>

        {/* Technical connection details */}
        <div className="font-mono text-[9px] text-retro-charcoal/40 pt-4 border-t border-retro-border/30">
          SECURE CONNECTION VIA PORT 443 | PING: 12ms | SIGNAL: STRONG
        </div>

      </div>
    </div>
  );
};
