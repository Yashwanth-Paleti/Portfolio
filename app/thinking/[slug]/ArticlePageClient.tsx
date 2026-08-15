'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArticleReader } from '@/components/thinking/ArticleReader';
import { PixelButton } from '@/components/ui/PixelButton';
import { ArrowLeft } from 'lucide-react';

interface ArticlePageClientProps {
  article: any;
}

export default function ArticlePageClient({
  article,
}: ArticlePageClientProps) {
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

      <ArticleReader
        article={article}
        onClose={handleClose}
      />
    </div>
  );
}