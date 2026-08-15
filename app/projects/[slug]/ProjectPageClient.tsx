'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ProjectWindow } from '@/components/work/ProjectWindow';
import { PixelButton } from '@/components/ui/PixelButton';
import { ArrowLeft } from 'lucide-react';

interface ProjectPageClientProps {
  project: any;
}

export default function ProjectPageClient({
  project,
}: ProjectPageClientProps) {
  const router = useRouter();

  const handleClose = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-retro-beige flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      <div className="absolute top-4 left-4 z-10">
        <PixelButton
          onClick={handleClose}
          variant="secondary"
          className="flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK
        </PixelButton>
      </div>

      <ProjectWindow
        project={project}
        onClose={handleClose}
      />
    </div>
  );
}