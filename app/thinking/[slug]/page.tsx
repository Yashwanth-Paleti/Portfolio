import { articles } from '@/data/articles';
import ArticlePageClient from './ArticlePageClient';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-retro-beige font-mono text-center space-y-4">
        <h1 className="font-pixel text-2xl text-retro-amber">
          ERROR 404: DOCUMENT NOT FOUND
        </h1>
        <p className="text-sm text-retro-charcoal/70">
          The requested article text was not found in the journal logs.
        </p>
      </div>
    );
  }

  return <ArticlePageClient article={article} />;
}