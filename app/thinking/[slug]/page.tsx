'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { articles } from '@/data/articles';
import { ArticleReader } from '@/components/thinking/ArticleReader';
import { PixelButton } from '@/components/ui/PixelButton';
import { ArrowLeft } from 'lucide-react';

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-retro-beige font-mono text-center space-y-4">
        <h1 className="font-pixel text-2xl text-retro-amber">ERROR 404: DOCUMENT NOT FOUND</h1>
        <p className="text-sm text-retro-charcoal/70">The requested article text was not found in the journal logs.</p>
        <PixelButton onClick={() => router.push('/')} variant="primary">
          RETURN TO ROOT
        </PixelButton>
      </div>
    );
  }

  const handleClose = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-retro-beige flex flex-col items-center justify-center p-4">
      {/* Background blueprint details */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      
      {/* Back Button Floating */}
      <div className="absolute top-4 left-4 z-10">
        <PixelButton onClick={handleClose} variant="secondary" className="flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> BACK
        </PixelButton>
      </div>

      <ArticleReader article={article} onClose={handleClose} />
    </div>
  );
}
