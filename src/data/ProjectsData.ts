export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  tags: string[];
  version: string;
  status: 'DEPLOYED' | 'IN_DEVELOPMENT' | 'ARCHIVED';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'PRJ-001',
    title: 'KINTSU',
    description:
      'Neural-Linguistic mediator. Reframes mission-stress protocols into heritage-value frameworks via AI to synchronize multi-generational crew communication and resolve conflicts.',
    thumbnail: 'projects/kintsu.png',
    githubUrl: 'https://github.com/alienworld1/kintsu',
    liveUrl: 'https://kintsu-theta.vercel.app/',
    videoUrl: 'https://youtu.be/ltpAnOagsRs',
    tags: ['REACT', 'SUPABASE', 'GOOGLE GEMINI', 'TYPESCRIPT'],
    version: 'v2.1.4',
    status: 'DEPLOYED',
  },
  {
    id: 'PRJ-002',
    title: 'MENDEL.AI',
    description:
      'Multi-agent autonomous swarm for bio-synthesis. Features MCP genomic data integration, simulation sub-agents, and cross-sector memory graphs for telegram-linked bio-logs.',
    thumbnail: 'projects/mendel-ai.png',
    githubUrl: 'https://github.com/alienworld1/mendel-ai',
    liveUrl: 'https://mendel-ai.vercel.app/',
    videoUrl: 'https://www.youtube.com/watch?v=s6PlPRs5JzI',
    tags: ['TYPESCRIPT', 'ADK-TS', 'AI AGENT', 'MCP'],
    version: 'v3.0.1',
    status: 'DEPLOYED',
  },
  {
    id: 'PRJ-003',
    title: 'BLOCKSMITH SHOWCASE',
    description:
      'Structural fabrication management protocol. Custom PaperMC engine designed for high-occupancy build-simulations. Scaled on-site LAN infrastructure to 22 active units.',
    thumbnail: 'projects/blocksmith-showcase.png',
    githubUrl: 'https://github.com/alienworld1/blocksmith-showcase',
    tags: ['JAVA', 'PAPERMC', 'SQL', 'MINECRAFT'],
    version: 'v1.5.0',
    status: 'ARCHIVED',
  },
  {
    id: 'PRJ-004',
    title: 'PERIPHERAL AWARENESS - VR',
    description:
      'Ocular diagnostic suite. Unity-based VR environment for peripheral field recalibration. Logs dynamic visual stimuli data for clinician review and visual reflex analysis.',
    thumbnail: '/projects/peripheral-awareness-vr.jpg',
    githubUrl: 'https://github.com/alienworld1/peripheral-awareness-vr',
    liveUrl: 'https://peripheral-awareness-vr.demo.com',
    videoUrl: 'https://youtube.com/watch?v=peripheral-awareness-vr',
    tags: ['UNITY', 'VR', 'ANDROID', 'HEALTHCARE TECH'],
    version: 'v1.2.0',
    status: 'IN_DEVELOPMENT',
  },
  {
    id: 'PRJ-005',
    title: 'MUSTAFAIR',
    description:
      'Universal identity registry. Cross-links multi-sector clearances via ERC-7231 and reputation-based ERC-721 protocols. Scaled to 230+ active units for verifiable access.',
    thumbnail: '/projects/mustafair.png',
    githubUrl: 'https://github.com/chrsnikhil/MustaFair',
    liveUrl: 'https://musta-fair.vercel.app/',
    tags: ['NEXT.JS', 'ETHEREUM', 'SOLIDITY', 'WEB3', 'TYPESCRIPT', 'REST API'],
    version: 'v0.9.2',
    status: 'ARCHIVED',
  },
];
