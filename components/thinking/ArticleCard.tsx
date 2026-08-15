'use client';

import React from 'react';
import { Article } from '@/types/portfolio';
import { FileText, Calendar } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="retro-bevel-out bg-retro-cream p-4 hover:bg-retro-beige/40 transition-all cursor-pointer group flex items-start gap-4 select-none"
    >
      {/* File Icon */}
      <div className="w-10 h-10 shrink-0 retro-bevel-out bg-retro-beige flex items-center justify-center text-retro-amber group-hover:text-retro-green transition-colors">
        <FileText className="w-5 h-5" />
      </div>

      {/* Title / Summary */}
      <div className="flex-1 space-y-1">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <h4 className="font-mono text-sm font-semibold text-retro-charcoal group-hover:underline">
            {article.title}
          </h4>
          <span className="font-mono text-[9px] text-retro-amber bg-retro-beige/50 border border-retro-border/20 px-1.5 py-0.5 uppercase">
            {article.category}
          </span>
        </div>
        
        <p className="text-xs text-retro-charcoal/70 line-clamp-2 font-sans pt-1">
          {article.summary}
        </p>

        <div className="flex items-center gap-1 text-[9px] font-mono text-retro-charcoal/40 pt-1.5">
          <Calendar className="w-3 h-3" />
          <span>{formatDate(article.date)}</span>
        </div>
      </div>
    </div>
  );
};
