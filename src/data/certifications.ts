export type Cert = {
  code: string;
  name: string;
  issuer: string;
  year: string;
  category: 'Red Team' | 'Cloud' | 'Defense';
};

export const certifications: Cert[] = [
  {
    code: 'OSCP',
    name: 'Offensive Security Certified Professional',
    issuer: 'OffSec',
    year: '2021',
    category: 'Red Team',
  },
  {
    code: 'CRTE',
    name: 'Certified Red Team Expert',
    issuer: 'Altered Security',
    year: '2023',
    category: 'Red Team',
  },
  {
    code: 'CRTP',
    name: 'Certified Red Team Professional',
    issuer: 'Pentester Academy',
    year: '2021',
    category: 'Red Team',
  },
  {
    code: 'MDI',
    name: 'Malware Development Intermediate',
    issuer: 'Sektor7',
    year: '2023',
    category: 'Red Team',
  },
  {
    code: 'Windows Evasion',
    name: 'Windows Evasion',
    issuer: 'Sektor7',
    year: '2024',
    category: 'Red Team',
  },
  {
    code: 'CMCRTA',
    name: 'Certified Multi-Cloud Red Team Analyst (AWS | Azure | GCP)',
    issuer: 'CyberWarFare Labs',
    year: '2026',
    category: 'Cloud',
  },
  {
    code: 'K8S-RTA',
    name: 'Kubernetes Red Team Analyst',
    issuer: 'CyberWarFare Labs',
    year: '2026',
    category: 'Cloud',
  },
  {
    code: 'CARTP',
    name: 'Certified Azure Red Team Professional',
    issuer: 'Pentester Academy',
    year: '2021',
    category: 'Cloud',
  },
  {
    code: 'AZ-500',
    name: 'Azure Security Engineer Associate',
    issuer: 'Microsoft',
    year: '2021',
    category: 'Cloud',
  },
  {
    code: 'FortiSASE',
    name: 'Fortinet FortiSASE 23 Administrator',
    issuer: 'Fortinet',
    year: '2024',
    category: 'Defense',
  },
];
