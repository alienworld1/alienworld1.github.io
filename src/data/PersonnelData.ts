const PERSONNEL_DATA = {
  // Identity Information
  identity: {
    subjectName: 'A B ADITYA',
    designation: 'WEB DEVELOPER // BACKEND ARCHITECT',
    sectorOrigin: 'SECTOR 7-G // EARTH',
    clearanceLevel: 'LEVEL 4',
    personnelId: 'WY-2077-0451',
    status: 'ACTIVE',
    biometricScan: '/profile.png', // Replace with your image path
  },

  // Background Logs (Bio)
  backgroundLogs: [
    '> INITIALIZING BACKGROUND QUERY...',
    '> DECRYPTING PERSONNEL RECORDS...',
    '',
    'Subject demonstrates exceptional proficiency in system architecture',
    'and interface development. First contact with programming systems',
    'occurred during early developmental cycles. Since then, subject has',
    'accumulated extensive experience across multiple technology stacks.',
    '',
    'Notable characteristics include: analytical problem-solving approach,',
    'preference for clean, maintainable code structures, and a documented',
    'obsession with optimizing system performance metrics.',
    '',
    'Current deployment focuses on web development with',
    'emphasis on React ecosystems and Node.js/Java infrastructure.',
    '',
    '> END OF FILE',
  ],

  // Technical Clearances (Skills)
  technicalClearances: {
    coreSystems: [
      { name: 'TYPESCRIPT', status: 'OPERATIONAL', level: 5 },
      { name: 'JAVASCRIPT', status: 'OPERATIONAL', level: 5 },
      { name: 'PYTHON', status: 'OPERATIONAL', level: 5 },
      { name: 'JAVA', status: 'OPERATIONAL', level: 4 },
      { name: 'C++', status: 'OPERATIONAL', level: 4 },
      { name: 'SQL', status: 'OPERATIONAL', level: 4 },
      { name: 'RUST', status: 'TRAINING', level: 3 },
      { name: 'C#', status: 'TRAINING', level: 2 },
    ],
    interface: [
      { name: 'REACT', status: 'OPERATIONAL', level: 5 },
      { name: 'NEXT.JS', status: 'OPERATIONAL', level: 5 },
      { name: 'TAILWIND', status: 'OPERATIONAL', level: 5 },
      { name: 'HTML/CSS', status: 'OPERATIONAL', level: 5 },
      { name: 'FRAMER MOTION', status: 'OPERATIONAL', level: 4 },
    ],
    infrastructure: [
      { name: 'NODE.JS', status: 'OPERATIONAL', level: 5 },
      { name: 'POSTGRESQL', status: 'OPERATIONAL', level: 4 },
      { name: 'DOCKER', status: 'OPERATIONAL', level: 3 },
      { name: 'GIT', status: 'OPERATIONAL', level: 5 },
      { name: 'WINDOWS API', status: 'TRAINING', level: 2 },
    ],
  },

  // Deployment History (Experience)
  deploymentHistory: [
    {
      missionId: 'DEP-2024-A',
      title: 'SENIOR DEVELOPER',
      organization: 'TECH CORP INDUSTRIES',
      period: '2023 - PRESENT',
      status: 'ACTIVE',
      briefing:
        'Lead development of enterprise web applications. Managed team of 4 engineers.',
    },
    {
      missionId: 'DEP-2022-B',
      title: 'FULL STACK DEVELOPER',
      organization: 'STARTUP VENTURES',
      period: '2021 - 2023',
      status: 'COMPLETED',
      briefing:
        'Built customer-facing platforms from ground up. Implemented CI/CD pipelines.',
    },
    {
      missionId: 'DEP-2020-C',
      title: 'JUNIOR DEVELOPER',
      organization: 'DIGITAL AGENCY',
      period: '2019 - 2021',
      status: 'COMPLETED',
      briefing:
        'Developed responsive websites and web applications for various clients.',
    },
  ],

  // Psych Profile (Interests)
  psychProfile: [
    {
      id: 'INT-001',
      label: 'MALWARE ANALYSIS',
      icon: '◇',
      category: 'TECHNICAL',
    },
    { id: 'INT-002', label: 'SYSTEM DESIGN', icon: '▣', category: 'TECHNICAL' },
    {
      id: 'INT-003',
      label: 'VIDEO EDITING',
      icon: '◈',
      category: 'PERSONAL',
    },
    {
      id: 'INT-004',
      label: 'SPACE EXPLORATION',
      icon: '◉',
      category: 'PERSONAL',
    },
    {
      id: 'INT-005',
      label: 'EMULATION',
      icon: '▦',
      category: 'TECHNICAL',
    },
  ],
};

export { PERSONNEL_DATA };
