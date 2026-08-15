import { TimelineEntry } from '../types/portfolio';

export const timeline: TimelineEntry[] = [
  {
    id: '01',
    role: 'Founder & Leadership',
    company: 'Data Science Society',
    period: '2024 - Present',
    description: [
      'Established student organization focused on democratizing data science learning and systems architecture.',
      'Organized peer study programs covering Python, statistical computing, and data analysis fundamentals.',
      'Designed technical workshops and speaker events to connect students with industry professionals and research peers.',
      'Established core infrastructure including open source project templates and collaborative version control guidelines.'
    ],
    tags: ['Leadership', 'Community Building', 'Education', 'Data Science']
  },
  {
    id: '02',
    role: 'Technical Operations / Client Success',
    company: 'Redlix',
    period: '2023 - 2024',
    description: [
      'Monitored client service operations and troubleshot technical issues in production systems.',
      'Analyzed ticket databases to identify common service failures, suggesting system improvements to product teams.',
      'Worked with cross-functional engineering teams to automate reporting processes, reducing manual verification overhead.',
      'Created standard operational procedures and documentation for service configurations and system alerts.'
    ],
    tags: ['Technical Operations', 'Operations Support', 'Database Querying', 'Client Success']
  }
];
