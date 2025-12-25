// ============================================================================
// CONTACT LINKS DATA - Update your URLs here
// ============================================================================

export interface ContactChannel {
  id: string;
  accessCode: string;
  label: string;
  sublabel: string;
  url: string;
  protocol: string;
  status: 'ACTIVE' | 'STANDBY' | 'OFFLINE';
}

export const CONTACT_LINKS: ContactChannel[] = [
  {
    id: 'CH-001',
    accessCode: '01',
    label: 'GITHUB',
    sublabel: 'Primary source code archive',
    url: 'https://github.com/alienworld1',
    protocol: 'HTTPS/GIT',
    status: 'ACTIVE',
  },
  {
    id: 'CH-002',
    accessCode: '02',
    label: 'LINKEDIN',
    sublabel: 'Professional network credentials',
    url: 'https://www.linkedin.com/in/aditya-a-b-762453290/',
    protocol: 'HTTPS/OAUTH',
    status: 'ACTIVE',
  },
  {
    id: 'CH-003',
    accessCode: '03',
    label: 'EMAIL_UPLINK',
    sublabel: 'Direct communication channel',
    url: 'mailto:aditya.27csa@licet.ac.in',
    protocol: 'SMTP/TLS',
    status: 'ACTIVE',
  },
  {
    id: 'CH-004',
    accessCode: '04',
    label: 'DISCORD',
    sublabel: 'Real-time relay network',
    url: 'https://discord.gg/.alienworld',
    protocol: 'WSS/DISCORD',
    status: 'STANDBY',
  },
  {
    id: 'CH-005',
    accessCode: '05',
    label: 'X (FORMERLY TWITTER)',
    sublabel: 'Open frequency transmissions',
    url: 'https://x.com/alienworl1',
    protocol: 'HTTPS/API',
    status: 'ACTIVE',
  },
];

// System telemetry data
export const SYSTEM_TELEMETRY = {
  signalStrength: 98,
  encryption: 'AES-256',
  encryptionStatus: 'ACTIVE',
  frequency: '2.4 GHz',
  latency: '127ms',
  uptime: '99.7%',
  lastSync: new Date().toISOString(),
};
