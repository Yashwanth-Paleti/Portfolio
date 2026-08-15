import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: '001',
    slug: 'campusconnect',
    title: 'CampusConnect',
    category: 'AI / PRODUCT',
    status: 'COMPLETED',
    shortDescription: 'AI-driven student hub streamlining resource allocation and peer tutoring matches.',
    objective: 'To create a unified digital infrastructure for university campuses, improving student peer mentorship and event navigation.',
    problem: 'Campus resources and student collaboration channels are highly fragmented, leading to underutilized tutoring support and coordination overhead.',
    approach: 'Designed a graphs-based matchmaking system leveraging semantic compatibility between student profiles and course historical performance data.',
    architecture: [
      'React-based Client Application',
      'Node.js REST Services API Gateway',
      'Vector Embedding Pipeline (Cosine Similarity Matching)',
      'Relational Database Schema (SQL Engine)'
    ],
    technology: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    implementation: 'Built a modular web application structured with isolated service layers. Tuned query response latency to handle high concurrent connections during peak exam schedules.',
    results: 'Enabled peer matching with reduced scheduling friction. Peer reviews noted high satisfaction with the matches and ease of resource sharing.',
    challenges: 'Cold-start problem for new users who did not have detailed profile metrics or historical courses completed.',
    learnings: 'Semantic indexing alone is insufficient; context-specific filters (such as availability windows and study mode preferences) are critical for successful matches.',
    futureImprovements: [
      'Incorporate graph-based routing for multi-hop study group formation',
      'Add automated lecture note summarization using lightweight local models'
    ],
    githubUrl: 'https://github.com/yashwanthpaleti/campusconnect',
    liveUrl: 'https://campusconnect.yashwanth.dev'
  },
  {
    id: '002',
    slug: 'financial-intelligence',
    title: 'Financial Intelligence Engine',
    category: 'FINANCE / DATA',
    status: 'IN DEVELOPMENT',
    shortDescription: 'Credibility assessment platform utilizing corporate financial statements and news embeddings.',
    objective: 'To analyze public financial filings and sentiment vectors to evaluate operational risk and credit viability.',
    problem: 'Traditional financial analysis is lagging and overlooks qualitative risk indicators present in management discussions and local economic reports.',
    approach: 'Extracting balance sheet ratios alongside NLP embeddings of quarterly earnings call transcripts to build a composite credibility index.',
    architecture: [
      'SEC Filings Parser (XBRL Metadata)',
      'Feature Engineering Pipeline',
      'Sentiment Analysis Model (BERT-variant)',
      'Risk Score Visualisation Service'
    ],
    technology: ['Python', 'Pandas', 'scikit-learn', 'PyTorch', 'Next.js', 'Tailwind CSS'],
    implementation: 'Developing structured data extractors to fetch and clean quarterly reports. Building a sentiment scoring module to classify management tone and confidence indicators.',
    results: 'Early tests show credit risk indicators correlate with subsequent analyst ratings. Model is currently being tuned to reduce false-positive alarms.',
    challenges: 'High variance and lack of standardized formatting in footnote disclosures in older financial statements.',
    learnings: 'Financial reports are highly structured but qualitative notes contain crucial outliers. Standardizing text parsing remains the primary bottleneck.',
    futureImprovements: [
      'Incorporate real-time news APIs for intra-quarter trend alerts',
      'Expand training dataset to include international regulatory filings'
    ],
    githubUrl: 'https://github.com/yashwanthpaleti/financial-dna',
    liveUrl: 'https://financial-dna.yashwanth.dev'
  },
  {
    id: '003',
    slug: 'computer-vision',
    title: 'Computer Vision Systems',
    category: 'AI / SYSTEMS',
    status: 'EXPLORING',
    shortDescription: 'Edge detection, object classification, and spatial tracking pipeline targeting local hardware.',
    objective: 'To construct an optimized, low-latency visual inference pipeline capable of running on constraint-based edge devices.',
    problem: 'High-accuracy neural networks require substantial computing power, making them difficult to deploy on lightweight physical nodes or mobile hardware.',
    approach: 'Exploring Model Quantization (converting FP32 weights to INT8) and lightweight backbones like MobileNetV4 to accelerate edge inference.',
    architecture: [
      'Camera Input Ingestion Thread',
      'Pre-processing & Normalization Unit',
      'Quantized Inference Runtime',
      'Spatial Anchor Coordinate Output'
    ],
    technology: ['C++', 'OpenCV', 'ONNX Runtime', 'PyTorch', 'NVIDIA TensorRT'],
    implementation: 'Prototyping frame preprocessing pipelines in C++ to minimize CPU overhead before passing frames to the GPU inference thread.',
    results: 'Demonstrated real-time frame rates on edge hardware simulated environments with minimal loss in classification metrics.',
    challenges: 'Thermal throttling on edge modules during continuous video stream decoding.',
    learnings: 'Hardware acceleration features depend heavily on target compiler optimizations; writing portable yet performant vision code requires abstraction layers.',
    futureImprovements: [
      'Integrate ROS2 nodes for direct hardware telemetry and frame synchronization',
      'Implement multi-object tracking using Kalman filter motion estimation'
    ]
  },
  {
    id: '004',
    slug: 'autonomous-systems',
    title: 'Autonomous Systems & Robotics',
    category: 'AI / ROBOTICS',
    status: 'PLANNED',
    shortDescription: 'Planned exploration of pathfinding algorithms, sensor fusion (LiDAR/IMU), and actuator control.',
    objective: 'To develop simulated models of wheeled robots capable of navigating dynamic environments with obstacle avoidance.',
    problem: 'Physical robot control requires robust handling of uncertain sensor feeds, motor noise, and real-time path planning constraints.',
    approach: 'Will utilize ROS2 (Robot Operating System) with Gazebo simulator to experiment with SLAM and pathfinding configurations.',
    architecture: [
      'Telemetry Receiver Node (Sensor Fusion)',
      'SLAM Map Builder Core',
      'Local & Global Path Planner',
      'Actuator Command Generator'
    ],
    technology: ['ROS2', 'C++', 'Gazebo', 'Python', 'URDF'],
    implementation: 'Preparing simulation environments in Gazebo and building custom URDF models for custom chassis dimensions.',
    results: 'Simulation framework is defined. Node architecture has been mapped out in design docs.',
    challenges: 'Aligning visual maps with IMU drift during simulated acceleration phases.',
    learnings: 'Theoretical path planning assumes perfect wheel traction; real-world simulation requires modeling physical friction and inertia accurately.',
    futureImprovements: [
      'Incorporate Reinforcement Learning for dynamic obstacle avoidance',
      'Test behavior trees for complex mission execution sequences'
    ]
  }
];
