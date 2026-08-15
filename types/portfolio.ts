export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: 'COMPLETED' | 'IN DEVELOPMENT' | 'EXPLORING' | 'PLANNED';
  shortDescription: string;
  objective: string;
  problem: string;
  approach: string;
  architecture: string[];
  technology: string[];
  implementation: string;
  results: string;
  challenges: string;
  learnings: string;
  futureImprovements: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experiment {
  id: string;
  title: string;
  category: string;
  status: 'LEARNING' | 'EXPLORING' | 'EXPERIMENTING' | 'TESTING' | 'PLANNED' | 'COMPLETED';
  objective: string;
  approach: string;
  result: string;
  lessons: string;
  next: string;
}

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Article {
  slug: string;
  title: string;
  category: 'AI & SYSTEMS' | 'DATA' | 'FINANCE' | 'TECHNOLOGY STRATEGY' | 'ENTREPRENEURSHIP' | 'LEARNING LOG';
  date: string;
  summary: string;
  content: string; // Markdown / MDX content string
}

export interface InterestNode {
  id: string;
  label: string;
  category: 'AI' | 'DATA' | 'SYSTEMS' | 'FINANCE';
  connections: string[];
  description: string;
}

export interface ResumeVersion {
  id: string;
  name: string;
  url: string;
}
