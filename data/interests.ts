import { InterestNode } from '../types/portfolio';

export const interestNodes: InterestNode[] = [
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    category: 'AI',
    connections: ['ml', 'dl', 'cv', 'systems'],
    description: 'Developing algorithms that perceive, reason, and act in complex environments.'
  },
  {
    id: 'data',
    label: 'Data Science & Analytics',
    category: 'DATA',
    connections: ['ml', 'finance'],
    description: 'Transforming unstructured and structured streams into predictive models and actionable systems.'
  },
  {
    id: 'systems',
    label: 'Systems Engineering',
    category: 'SYSTEMS',
    connections: ['ai', 'robotics', 'autonomous'],
    description: 'Designing high-performance, low-latency execution pipelines on edge and server hardware.'
  },
  {
    id: 'finance',
    label: 'Finance & Markets',
    category: 'FINANCE',
    connections: ['data', 'strategy'],
    description: 'Applying quantitative modeling, statistical analysis, and risk assessments to market dynamics.'
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    category: 'AI',
    connections: ['ai', 'data', 'dl'],
    description: 'Developing statistical models that learn structural patterns without explicit programming rules.'
  },
  {
    id: 'dl',
    label: 'Deep Learning',
    category: 'AI',
    connections: ['ml', 'cv'],
    description: 'Leveraging multi-layered neural networks for representation learning and function approximation.'
  },
  {
    id: 'cv',
    label: 'Computer Vision',
    category: 'AI',
    connections: ['dl', 'systems', 'robotics'],
    description: 'Processing and understanding high-dimensional visual feeds for localization and classification.'
  },
  {
    id: 'robotics',
    label: 'Robotics',
    category: 'SYSTEMS',
    connections: ['systems', 'cv', 'autonomous'],
    description: 'Building physical mechanisms that combine sensory perception, real-time control, and motion.'
  },
  {
    id: 'autonomous',
    label: 'Autonomous Systems',
    category: 'SYSTEMS',
    connections: ['systems', 'robotics'],
    description: 'Designing end-to-end self-navigating configurations mapping sensor data directly to actuator actions.'
  },
  {
    id: 'strategy',
    label: 'Technology Strategy',
    category: 'FINANCE',
    connections: ['finance'],
    description: 'Analyzing market conditions, scaling mechanics, and architectural choices to deploy technology effectively.'
  }
];
