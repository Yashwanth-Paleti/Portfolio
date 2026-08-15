'use client';

import React, { useState } from 'react';
import { BootScreen } from '@/components/boot/BootScreen';
import { Navigation } from '@/components/layout/Navigation';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Hero } from '@/components/hero/Hero';
import { Work } from '@/components/work/Work';
import { Experiments } from '@/components/experiments/Experiments';
import { InterestGraph } from '@/components/interests/InterestGraph';
import { Thinking } from '@/components/thinking/Thinking';
import { About } from '@/components/about/About';
import { Now } from '@/components/now/Now';
import { ResumeSection } from '@/components/resume/ResumeSection';
import { Connect } from '@/components/connect/Connect';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [bootCompleted, setBootCompleted] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!bootCompleted && (
          <BootScreen key="boot" onComplete={() => setBootCompleted(true)} />
        )}
      </AnimatePresence>

      {bootCompleted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col min-h-screen"

        >
          <div className="tech-grid pointer-events-none fixed inset-0 z-0" />
          {/* Persistent Navigation */}
          <Navigation />

          {/* Core Content Layout */}
          <main className="flex-1">
            {/* HERO SECTION */}
            <SectionWrapper id="hero" className="pt-8 md:pt-16 pb-12">
              <Hero />
            </SectionWrapper>

            {/* WORK / PROJECTS SECTION */}
            <SectionWrapper id="work">
              <Work />
            </SectionWrapper>

            {/* EXPERIMENT LAB SECTION */}
            <SectionWrapper id="experiments">
              <Experiments />
            </SectionWrapper>

            {/* INTEREST GRAPH SECTION */}
            <SectionWrapper id="interests">
              <InterestGraph />
            </SectionWrapper>

            {/* THINKING ARCHIVE SECTION */}
            <SectionWrapper id="thinking">
              <Thinking />
            </SectionWrapper>

            {/* ABOUT THE PERSON SECTION */}
            <SectionWrapper id="about">
              <About />
            </SectionWrapper>

            {/* NOW STATUS SECTION */}
            <SectionWrapper id="now">
              <Now />
            </SectionWrapper>

            {/* RESUME REGISTRY SECTION */}
            <SectionWrapper id="resume">
              <ResumeSection />
            </SectionWrapper>

            {/* CONNECT PORT SECTION */}
            <SectionWrapper id="connect">
              <Connect />
            </SectionWrapper>
          </main>

          {/* Footer details */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
