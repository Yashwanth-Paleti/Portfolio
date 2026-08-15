'use client';

import React from 'react';
import { Article } from '@/types/portfolio';
import { RetroWindow } from '../ui/RetroWindow';
import { formatDate } from '@/lib/utils';

interface ArticleReaderProps {
  article: Article;
  onClose: () => void;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  article,
  onClose,
}) => {
  // A simple markdown-to-React elements formatter for core tags used in our articles
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    let inList = false;
    let listItems: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const elements: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      // Handle table rows
      if (line.trim().startsWith('|')) {
        inTable = true;
        const cols = line.split('|').map(c => c.trim()).filter(c => c !== '');
        tableRows.push(cols);
        return;
      } else if (inTable) {
        // Table closed
        inTable = false;
        elements.push(
          <div key={`table-${index}`} className="my-4 overflow-x-auto retro-bevel-in bg-retro-cream p-1">
            <table className="w-full text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-retro-beige border-b border-retro-border">
                  {tableRows[0]?.map((col, idx) => (
                    <th key={idx} className="p-2 text-left font-semibold border-r border-retro-border/40 last:border-r-0">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(2).map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-retro-border/25 last:border-b-0">
                    {row.map((col, colIdx) => (
                      <td key={colIdx} className="p-2 border-r border-retro-border/25 last:border-r-0">
                        {col}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }

      // Handle bullet lists
      if (line.trim().startsWith('*') || line.trim().startsWith('-')) {
        inList = true;
        listItems.push(line.replace(/^[*-\s]+/, ''));
        return;
      } else if (inList) {
        inList = false;
        elements.push(
          <ul key={`list-${index}`} className="list-disc pl-5 my-3 text-sm space-y-1 font-sans text-retro-charcoal/80">
            {listItems.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }

      // Headers
      if (line.startsWith('## ')) {
        elements.push(
          <h3 key={index} className="font-pixel text-base md:text-lg text-retro-charcoal mt-6 mb-3 border-b border-retro-border/30 pb-1">
            {line.replace('## ', '')}
          </h3>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h4 key={index} className="font-mono text-sm font-bold text-retro-amber mt-4 mb-2">
            {line.replace('### ', '')}
          </h4>
        );
      }
      // Code block placeholders
      else if (line.startsWith('```')) {
        // Just skip start/end lines of code block
        return;
      }
      else if (line.includes('===>') || line.includes('+---')) {
        // Code layout lines - render as custom text block
        elements.push(
          <pre key={index} className="font-mono text-[10px] leading-relaxed text-retro-green bg-retro-charcoal/5 p-2 rounded-sm overflow-x-auto select-all my-2">
            {line}
          </pre>
        );
      }
      // Standard paragraphs
      else if (line.trim() !== '') {
        elements.push(
          <p key={index} className="text-sm text-retro-charcoal/80 leading-relaxed font-sans my-3">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-retro-charcoal/40 backdrop-blur-xs">
      <div className="w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        <RetroWindow
          title={`TECHNICAL_JOURNAL: ${article.title}`}
          subtitle={`ARCHIVE_DOC_${article.slug}`}
          statusText={`PUBLISHED: ${formatDate(article.date)} | CAT: ${article.category}`}
          onClose={onClose}
          className="h-full flex-1"
        >
          <div className="overflow-y-auto max-h-[65vh] pr-2 retro-bevel-in p-5 md:p-8 bg-retro-cream">
            {/* Header specifications */}
            <div className="border-b border-retro-border/50 pb-4 mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-retro-charcoal/50">
                <span>DOCUMENT: {article.title}</span>
                <span>METADATA_VERIFIED</span>
              </div>
              <h1 className="font-pixel text-2xl text-retro-charcoal mt-2">
                {article.title.replace('.MDX', '')}
              </h1>
              <p className="text-xs text-retro-amber font-mono mt-1">
                CATEGORY: {article.category} | PUBLICATION_DATE: {formatDate(article.date)}
              </p>
            </div>

            {/* Content Body */}
            <div className="prose max-w-none">
              {renderMarkdown(article.content)}
            </div>

          </div>
        </RetroWindow>
      </div>
    </div>
  );
};
