import { projects } from '@/data/projects';
import ProjectPageClient from './ProjectPageClient';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-retro-beige">
        <h1 className="font-pixel text-2xl text-retro-amber">
          ERROR 404: ARCHIVE NOT FOUND
        </h1>
      </div>
    );
  }

  return <ProjectPageClient project={project} />;
}