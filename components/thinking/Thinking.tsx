'use client';

import React, { useState } from 'react';
import { articles } from '@/data/articles';
import { Article } from '@/types/portfolio';
import { ArticleCard } from './ArticleCard';
import { ArticleReader } from './ArticleReader';
import { SectionHeader } from '../ui/SectionHeader';

export const Thinking: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div>
      <SectionHeader
        title="THINKING ARCHIVE"
        idCode="SYS_SUB_MODULE // THINKING.EXE"
        description="Technical write-ups, analysis notes, systems philosophy, and strategy journals."
      />

      {/* Grid of Files */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            article={article}
            onClick={() => setSelectedArticle(article)}
          />
        ))}
      </div>

      {/* Article Reader overlay window */}
      {selectedArticle && (
        <ArticleReader
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
};
