export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Red Team & Adversary Emulation',
    icon: 'lucide:swords',
    items: [
      'Active Directory attacks',
      'Kerberoasting / AS-REP roasting',
      'Lateral movement',
      'Persistence & privilege escalation',
      'C2 frameworks',
      'Assumed-breach engagements',
    ],
  },
  {
    title: 'Cloud Security',
    icon: 'lucide:cloud',
    items: [
      'Azure red teaming',
      'Entra ID / Azure AD abuse',
      'Managed identities & tokens',
      'Cloud IAM misconfigurations',
      'AzureHound / ROADtools',
      'Attack path mapping',
    ],
  },
  {
    title: 'Web Application Pentesting',
    icon: 'lucide:globe',
    items: [
      'OWASP Top 10 (deep)',
      'SSRF, SSTI, deserialization',
      'Authn / authz bypasses',
      'API testing (REST / GraphQL)',
      'Burp Suite Pro',
      'Custom tooling',
    ],
  },
  {
    title: 'Mobile & Binary',
    icon: 'lucide:smartphone',
    items: [
      'Android & iOS app testing',
      'Static & dynamic analysis',
      'Frida / Objection',
      'Reverse engineering basics',
    ],
  },
  {
    title: 'Threat Modeling & Architecture',
    icon: 'lucide:shield-alert',
    items: [
      'STRIDE / DREAD',
      'Attack trees',
      'Design reviews',
      'Risk-driven prioritization',
    ],
  },
  {
    title: 'Tooling & Automation',
    icon: 'lucide:terminal',
    items: [
      'Python (automation & tooling)',
      'Flask / FastAPI',
      'Bash / PowerShell',
      'CI/CD security',
      'Docker & Linux internals',
    ],
  },
];
