'use client';

import React, { useState } from 'react';
import { experiments } from '@/data/experiments';
import { Experiment } from '@/types/portfolio';
import { ExperimentCard } from './ExperimentCard';
import { ExperimentLog } from './ExperimentLog';
import { SectionHeader } from '../ui/SectionHeader';

export const Experiments: React.FC = () => {
  const [selectedExperiment, setSelectedExperiment] = useState<Experiment | null>(null);

  return (
    <div>
      <SectionHeader
        title="YASH LABORATORY"
        idCode="SYS_SUB_MODULE // LAB.EXE"
        description="Index of technical experiments, ongoing studies, and conceptual log files."
      />

      {/* Experiments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiments.map((exp) => (
          <ExperimentCard
            key={exp.id}
            experiment={exp}
            onClick={() => setSelectedExperiment(exp)}
          />
        ))}
      </div>

      {/* Log Detail Modal */}
      {selectedExperiment && (
        <ExperimentLog
          experiment={selectedExperiment}
          onClose={() => setSelectedExperiment(null)}
        />
      )}
    </div>
  );
};
