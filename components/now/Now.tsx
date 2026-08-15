'use client';

import React from 'react';
import { NowColumn } from './NowColumn';
import { SectionHeader } from '../ui/SectionHeader';
import { GraduationCap, Compass, Hammer, BookOpen } from 'lucide-react';

export const Now: React.FC = () => {
  return (
    <div>
      <SectionHeader
        title="NOW ARCHIVE"
        idCode="SYS_SUB_MODULE // NOW.EXE"
        description="A real-time snapshot of active focus areas, studies, and building logs."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Learning */}
        <NowColumn
          title="LEARNING"
          items={['Python & Core Libraries', 'Machine Learning Theories', 'Deep Learning Architectures', 'C++ System Syntax', 'Data Structures & Algorithms']}
          icon={<GraduationCap className="w-4.5 h-4.5" />}
          titleColor="green"
        />

        {/* Exploring */}
        <NowColumn
          title="EXPLORING"
          items={['AI Systems & Compilers', 'Quantitative Finance Regimes', 'Computer Vision Edge Inference', 'Robotics Kinematics & Control']}
          icon={<Compass className="w-4.5 h-4.5" />}
          titleColor="amber"
        />

        {/* Building */}
        <NowColumn
          title="BUILDING"
          items={['Personal System Archive UI', 'Core ML Algorithms from scratch', 'Corporate Risk Evaluator (DNA)']}
          icon={<Hammer className="w-4.5 h-4.5" />}
          titleColor="blue"
        />

        {/* Reading */}
        <NowColumn
          title="READING"
          items={['Designing Data-Intensive Apps', 'Introduction to Algorithms (CLRS)', 'SEC Financial Filings Logs']}
          icon={<BookOpen className="w-4.5 h-4.5" />}
          titleColor="charcoal"
        />

      </div>
    </div>
  );
};
