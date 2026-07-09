export type SkillGroup = {
  title: string;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Red Team & Adversary Simulation',
    icon: 'lucide:swords',
    items: [
      'Assumed-breach & full-scope engagements',
      'Active Directory attacks (Kerberoasting, DCSync, ADCS, delegation)',
      'Lateral movement, persistence, privilege escalation',
      'C2 frameworks: Cobalt Strike, Sliver, Mythic',
      'MITRE ATT&CK-aligned TTPs & purple team collaboration',
      'OPSEC-aware payload delivery',
    ],
  },
  {
    title: 'Offensive Development',
    icon: 'lucide:binary',
    items: [
      'Malware development in C / C++ (loaders, droppers, hooks)',
      'EDR evasion: direct syscalls, unhooking, module stomping',
      'API hooking (Detours, inline, IAT) & Windows internals',
      'String obfuscation, runtime API resolution',
      'Custom implants & post-exploitation tooling',
      'Sektor7-trained: Malware Dev + Windows Evasion',
    ],
  },
  {
    title: 'Multi-Cloud Red Team',
    icon: 'lucide:cloud',
    items: [
      'Azure / Entra ID abuse (tokens, managed identities, app regs)',
      'AWS attack paths: IAM, STS chaining, IMDSv2, cross-account',
      'GCP compute & service account impersonation',
      'AzureHound, ROADtools, Pacu, Stormspotter',
      'Cross-tenant escalation & attack path mapping',
      'CMCRTA (AWS | Azure | GCP) certified',
    ],
  },
  {
    title: 'Kubernetes & Container Security',
    icon: 'lucide:container',
    items: [
      'Cluster attack surface: kubelet, etcd, API server',
      'RBAC abuse & service account escalation',
      'Container escapes: privileged pods, hostPath, capabilities',
      'Supply-chain attacks & image poisoning',
      'Network policy bypass & pod-to-pod pivoting',
      'K8S-RTA certified',
    ],
  },
  {
    title: 'Web & API Pentesting',
    icon: 'lucide:globe',
    items: [
      'REST + GraphQL API testing',
      'OWASP Top 10: deep, not checkbox',
      'Authn / authz bypasses, JWT + OAuth abuse',
      'SSRF, SSTI, deserialization chains',
      'Business logic & workflow flaws',
      'Burp Suite Pro + custom Python tooling',
    ],
  },
  {
    title: 'Threat Modeling & Tooling',
    icon: 'lucide:shield-alert',
    items: [
      'STRIDE / attack-tree design reviews',
      'Risk-driven prioritization for engineering teams',
      'Python / PowerShell / Bash automation',
      'CI/CD security & DevSecOps integration',
      'Detection engineering collaboration',
      'Docker, Linux internals, network fundamentals',
    ],
  },
];
