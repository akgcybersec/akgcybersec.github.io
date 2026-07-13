export type BlogReference = { title: string; url: string };
export type BlogRelated = { title: string; href: string };

export type BlogReferenceEntry = {
  references: BlogReference[];
  related?: BlogRelated[];
};

/** External sources and related on-site posts, keyed by blog post id (filename without .mdx). */
export const blogReferences: Record<string, BlogReferenceEntry> = {
  'pe-internals': {
    references: [
      { title: 'PE-Bear', url: 'https://github.com/hasherezade/pe-bear' },
      { title: 'Microsoft PE format documentation', url: 'https://learn.microsoft.com/en-us/windows/win32/debug/pe-format' },
      { title: 'dumpbin reference', url: 'https://learn.microsoft.com/en-us/cpp/build/reference/dumpbin-reference' },
      { title: 'x64dbg', url: 'https://x64dbg.com/' },
    ],
    related: [
      { title: 'The Import Address Table', href: '/blog/iat-internals/' },
      { title: 'PEB & TEB', href: '/blog/peb-teb-internals/' },
      { title: 'Reflective loader walkthrough', href: '/blog/reflective-loader-walkthrough/' },
    ],
  },
  'iat-internals': {
    references: [
      { title: 'PE-Bear', url: 'https://github.com/hasherezade/pe-bear' },
      { title: 'Microsoft PE format documentation', url: 'https://learn.microsoft.com/en-us/windows/win32/debug/pe-format' },
    ],
    related: [
      { title: 'PE internals', href: '/blog/pe-internals/' },
      { title: 'PEB & TEB', href: '/blog/peb-teb-internals/' },
      { title: 'API hooking: Detours and IAT hooks', href: '/blog/api-hooking-detours-and-iat/' },
    ],
  },
  'peb-teb-internals': {
    references: [
      { title: 'WinDbg documentation', url: 'https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/' },
      { title: 'PEB structure (winternl.h)', url: 'https://learn.microsoft.com/en-us/windows/win32/api/winternl/ns-winternl-peb' },
    ],
    related: [
      { title: 'PE internals', href: '/blog/pe-internals/' },
      { title: 'Reflective loader walkthrough', href: '/blog/reflective-loader-walkthrough/' },
      { title: 'WoW64 and Heaven\'s Gate', href: '/blog/wow64-heavens-gate-notes/' },
    ],
  },
  'payload-storage-patterns': {
    references: [
      { title: 'Microsoft RC preprocessor', url: 'https://learn.microsoft.com/en-us/windows/win32/menurc/using-rc-the-rc-command-line-preprocessor' },
      { title: 'Microsoft PE format documentation', url: 'https://learn.microsoft.com/en-us/windows/win32/debug/pe-format' },
    ],
    related: [
      { title: 'Shellcode in image carriers', href: '/blog/shellcode-in-image-carriers/' },
      { title: 'PE internals', href: '/blog/pe-internals/' },
      { title: 'Code injection patterns', href: '/blog/code-injection-patterns/' },
    ],
  },
  'shellcode-in-image-carriers': {
    references: [
      { title: 'xxd manual', url: 'https://linux.die.net/man/1/xxd' },
    ],
    related: [
      { title: 'Payload storage patterns', href: '/blog/payload-storage-patterns/' },
      { title: 'Backdooring PE files', href: '/blog/backdooring-pe-files-practical-notes/' },
      { title: 'Code injection patterns', href: '/blog/code-injection-patterns/' },
    ],
  },
  'code-injection-patterns': {
    references: [
      { title: 'MITRE ATT&CK: Process Injection (T1055)', url: 'https://attack.mitre.org/techniques/T1055/' },
    ],
    related: [
      { title: 'Payload storage patterns', href: '/blog/payload-storage-patterns/' },
      { title: 'Reflective loader walkthrough', href: '/blog/reflective-loader-walkthrough/' },
      { title: 'WoW64 and Heaven\'s Gate', href: '/blog/wow64-heavens-gate-notes/' },
    ],
  },
  'backdooring-pe-files-practical-notes': {
    references: [
      { title: 'Cminer', url: 'https://github.com/Ben-Lichtman/Cminer' },
      { title: 'PE-Bear', url: 'https://github.com/hasherezade/pe-bear' },
      { title: 'x64dbg', url: 'https://x64dbg.com/' },
    ],
    related: [
      { title: 'PE internals', href: '/blog/pe-internals/' },
      { title: 'Shellcode in image carriers', href: '/blog/shellcode-in-image-carriers/' },
      { title: 'Code injection patterns', href: '/blog/code-injection-patterns/' },
    ],
  },
  'reflective-loader-walkthrough': {
    references: [
      { title: 'Reflective DLL Injection (Stephen Fewer)', url: 'https://github.com/stephenfewer/ReflectiveDLLInjection' },
      { title: 'sRDI', url: 'https://github.com/monoxgas/sRDI' },
      { title: 'PE-Bear', url: 'https://github.com/hasherezade/pe-bear' },
    ],
    related: [
      { title: 'PE internals', href: '/blog/pe-internals/' },
      { title: 'PEB & TEB', href: '/blog/peb-teb-internals/' },
      { title: 'Code injection patterns', href: '/blog/code-injection-patterns/' },
    ],
  },
  'wow64-heavens-gate-notes': {
    references: [
      { title: 'System Informer (Process Hacker)', url: 'https://github.com/winsiderss/systeminformer' },
      { title: 'x32dbg', url: 'https://x32dbg.com/' },
      { title: 'WoW64 implementation details', url: 'https://learn.microsoft.com/en-us/windows/win32/winprog64/wow64-implementation-details' },
    ],
    related: [
      { title: 'Code injection patterns', href: '/blog/code-injection-patterns/' },
      { title: 'PEB & TEB', href: '/blog/peb-teb-internals/' },
      { title: 'API hooking: Detours and IAT hooks', href: '/blog/api-hooking-detours-and-iat/' },
    ],
  },
  'api-hooking-detours-and-iat': {
    references: [
      { title: 'Microsoft Detours', url: 'https://github.com/microsoft/Detours' },
      { title: 'Detours project (Microsoft Research)', url: 'https://www.microsoft.com/en-us/research/project/detours/' },
    ],
    related: [
      { title: 'The Import Address Table', href: '/blog/iat-internals/' },
      { title: 'Better-RDPThief', href: '/blog/better-rdpthief/' },
      { title: 'PE internals', href: '/blog/pe-internals/' },
    ],
  },
  'better-rdpthief': {
    references: [
      { title: 'RdpThief (original)', url: 'https://github.com/0x09AL/RdpThief' },
      { title: 'Better-RDPThief', url: 'https://github.com/akgcybersec/Better-RDPThief' },
      { title: 'Microsoft Detours', url: 'https://github.com/microsoft/Detours' },
      { title: 'sRDI', url: 'https://github.com/monoxgas/sRDI' },
    ],
    related: [
      { title: 'API hooking: Detours and IAT hooks', href: '/blog/api-hooking-detours-and-iat/' },
      { title: 'Code injection patterns', href: '/blog/code-injection-patterns/' },
      { title: 'Reflective loader walkthrough', href: '/blog/reflective-loader-walkthrough/' },
    ],
  },
  'kubernetes-attack-surface': {
    references: [
      { title: 'Kubernetes ports and protocols', url: 'https://kubernetes.io/docs/reference/networking/ports-and-protocols/' },
      { title: 'etcd documentation', url: 'https://etcd.io/docs/' },
    ],
    related: [
      { title: 'Anonymous kubelet API', href: '/blog/kubernetes-anonymous-kubelet/' },
      { title: 'MicroK8s attack chain', href: '/blog/kubernetes-microk8s-attack-chain/' },
      { title: 'Abusing the Kubernetes API with curl', href: '/blog/kubernetes-api-curl-abuse/' },
    ],
  },
  'kubernetes-anonymous-kubelet': {
    references: [
      { title: 'Kubelet authentication and authorization', url: 'https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/' },
      { title: 'Kubelet reference', url: 'https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/' },
    ],
    related: [
      { title: 'Kubernetes attack surface', href: '/blog/kubernetes-attack-surface/' },
      { title: 'MicroK8s attack chain', href: '/blog/kubernetes-microk8s-attack-chain/' },
      { title: 'Service account tokens and kubeconfig abuse', href: '/blog/kubernetes-service-account-kubeconfig/' },
    ],
  },
  'kubernetes-microk8s-attack-chain': {
    references: [
      { title: 'MicroK8s', url: 'https://microk8s.io/' },
      { title: 'CVE-2019-15789 advisory (Pulse Security)', url: 'https://pulsesecurity.co.nz/advisories/microk8s-privilege-escalation' },
    ],
    related: [
      { title: 'Kubernetes attack surface', href: '/blog/kubernetes-attack-surface/' },
      { title: 'Anonymous kubelet API', href: '/blog/kubernetes-anonymous-kubelet/' },
      { title: 'Kubernetes pod escapes', href: '/blog/kubernetes-pod-escapes/' },
    ],
  },
  'kubernetes-api-curl-abuse': {
    references: [
      { title: 'Kubernetes API reference', url: 'https://kubernetes.io/docs/reference/kubernetes-api/' },
      { title: 'RFC 6902 JSON Patch', url: 'https://datatracker.ietf.org/doc/html/rfc6902' },
    ],
    related: [
      { title: 'Kubernetes attack surface', href: '/blog/kubernetes-attack-surface/' },
      { title: 'Service account tokens and kubeconfig abuse', href: '/blog/kubernetes-service-account-kubeconfig/' },
      { title: 'Kubernetes RBAC misconfigs', href: '/blog/kubernetes-rbac-misconfigs/' },
    ],
  },
  'kubernetes-docker-runtime-escape': {
    references: [
      { title: 'Docker Engine API', url: 'https://docs.docker.com/engine/api/' },
      { title: 'containerd', url: 'https://github.com/containerd/containerd' },
      { title: 'nerdctl', url: 'https://github.com/containerd/nerdctl' },
    ],
    related: [
      { title: 'Docker pentest playbook', href: '/blog/docker-pentest-playbook/' },
      { title: 'Kubernetes pod escapes', href: '/blog/kubernetes-pod-escapes/' },
      { title: 'Kubernetes attack surface', href: '/blog/kubernetes-attack-surface/' },
    ],
  },
  'kubernetes-service-account-kubeconfig': {
    references: [
      { title: 'Kubernetes service accounts', url: 'https://kubernetes.io/docs/concepts/security/service-accounts/' },
      { title: 'Kubernetes Dashboard', url: 'https://github.com/kubernetes/dashboard' },
      { title: 'GKE cluster access for kubectl', url: 'https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl' },
    ],
    related: [
      { title: 'Kubernetes RBAC misconfigs', href: '/blog/kubernetes-rbac-misconfigs/' },
      { title: 'Abusing the Kubernetes API with curl', href: '/blog/kubernetes-api-curl-abuse/' },
      { title: 'Kubernetes pod escapes', href: '/blog/kubernetes-pod-escapes/' },
    ],
  },
  'kubernetes-pod-escapes': {
    references: [
      { title: 'Kubernetes Pod Security Standards', url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/' },
      { title: 'Linux capabilities (man7)', url: 'https://man7.org/linux/man-pages/man7/capabilities.7.html' },
    ],
    related: [
      { title: 'Docker pentest playbook', href: '/blog/docker-pentest-playbook/' },
      { title: 'Container runtime escape via exposed Docker API', href: '/blog/kubernetes-docker-runtime-escape/' },
      { title: 'Kubernetes post-exploitation', href: '/blog/kubernetes-post-exploitation/' },
    ],
  },
  'kubernetes-rbac-misconfigs': {
    references: [
      { title: 'Kubernetes RBAC documentation', url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/' },
      { title: 'kubectl auth can-i', url: 'https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#auth' },
    ],
    related: [
      { title: 'Service account tokens and kubeconfig abuse', href: '/blog/kubernetes-service-account-kubeconfig/' },
      { title: 'Kubernetes post-exploitation', href: '/blog/kubernetes-post-exploitation/' },
      { title: 'Abusing the Kubernetes API with curl', href: '/blog/kubernetes-api-curl-abuse/' },
    ],
  },
  'kubernetes-post-exploitation': {
    references: [
      { title: 'Docker Hub', url: 'https://hub.docker.com/' },
      { title: 'GCP Compute Engine metadata', url: 'https://cloud.google.com/compute/docs/metadata/querying-metadata' },
      { title: 'AWS EC2 instance metadata', url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html' },
      { title: 'Azure Instance Metadata Service', url: 'https://learn.microsoft.com/en-us/azure/virtual-machines/instance-metadata-service' },
    ],
    related: [
      { title: 'Kubernetes RBAC misconfigs', href: '/blog/kubernetes-rbac-misconfigs/' },
      { title: 'Docker pentest playbook', href: '/blog/docker-pentest-playbook/' },
      { title: 'Kubernetes pod escapes', href: '/blog/kubernetes-pod-escapes/' },
    ],
  },
  'docker-pentest-playbook': {
    references: [
      { title: 'dockerrootplease', url: 'https://github.com/chrisfosterelli/dockerrootplease' },
      { title: 'docker-privesc', url: 'https://github.com/flast101/docker-privesc' },
      { title: 'Docker Bench for Security', url: 'https://github.com/docker/docker-bench-security' },
      { title: 'amicontained', url: 'https://github.com/genuinetools/amicontained' },
      { title: 'Falco', url: 'https://github.com/falcosecurity/falco' },
      { title: 'runc', url: 'https://github.com/opencontainers/runc' },
      { title: 'containerd', url: 'https://github.com/containerd/containerd' },
    ],
    related: [
      { title: 'Container runtime escape via exposed Docker API', href: '/blog/kubernetes-docker-runtime-escape/' },
      { title: 'Kubernetes pod escapes', href: '/blog/kubernetes-pod-escapes/' },
      { title: 'Kubernetes post-exploitation', href: '/blog/kubernetes-post-exploitation/' },
    ],
  },
};
