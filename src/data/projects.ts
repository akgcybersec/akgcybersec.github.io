export type Project = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: 'Offensive Dev' | 'Red Team Tooling' | 'Recon & Reporting' | 'Utility';
  tech: string[];
  highlight?: boolean;
  writeup?: string;
};

export const projects: Project[] = [
  {
    name: 'Better-RDPThief',
    tagline: 'In-process RDP credential harvester for mstsc.exe',
    description:
      'C++ DLL that hooks six credential-handling APIs inside the Windows Remote Desktop client via Microsoft Detours, intercepts plaintext credentials after decryption, and logs them locally. Rolling-ADD string obfuscation, runtime API resolution, no IAT entries for hooked APIs.',
    url: 'https://github.com/akgcybersec/Better-RDPThief',
    category: 'Offensive Dev',
    tech: ['C++', 'Windows', 'Detours', 'MSVC'],
    highlight: true,
    writeup: '/blog/better-rdpthief',
  },
  {
    name: 'CMDvault',
    tagline: 'Personal command & notes vault',
    description:
      'TypeScript-based command and notes manager built for red teamers who are tired of grep-ing through five markdown files during an engagement. Search-first, tag-driven, keyboard-native.',
    url: 'https://github.com/akgcybersec/CMDvault',
    category: 'Utility',
    tech: ['TypeScript', 'React'],
  },
];
