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
      'C++ DLL that hooks three credential-handling APIs inside mstsc via Microsoft Detours, stages target/user/password, and exfils over a localhost named pipe using Hell\'s Gate syscalls. No disk writes from the client; your implant hosts the pipe server. Rolling-ADD string obfuscation, runtime API resolution.',
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
