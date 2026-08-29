import type { Content } from './components/Sections';

export const content: Content = {
  name: 'Arjun Nair',
  role: 'Technical Support Engineer',
  tagline: 'Debugging problems, restoring uptime',
  photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  email: 'arjun@fix-it.dev',
  phone: '+91 99000 45123',
  location: 'Bengaluru, India',
  languages: ['English', 'Malayalam', 'Hindi'],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Portfolio', href: 'https://example.com' },
  ],
  about: [
    'I am a technical support engineer who turns confusing error logs into working systems. I diagnose hardware, software and network issues with a methodical, test-first mindset.',
    'When users are blocked, I want to know why at the root. I reproduce, isolate and fix problems — then document the fix so the next ticket never happens. Escalation to me is often the last stop, and I treat every ticket as an opportunity to make the whole stack more reliable.',
  ],
  services: [
    { title: 'Remote Diagnostics', desc: 'Rapid root-cause analysis of server, network and application faults across the stack.', icon: '🖥️' },
    { title: 'Network Troubleshooting', desc: 'Resolving VPN, routing, DNS and latency issues that break connectivity and productivity.', icon: '🌐' },
    { title: 'System Administration', desc: 'Windows, Linux and macOS administration including patching, permissions and config.', icon: '⚙️' },
    { title: 'Automation & Scripting', desc: 'PowerShell and shell scripts that eliminate repetitive tickets and reduce resolution time.', icon: '🤖' },
    { title: 'Knowledge Management', desc: 'Clear KB articles and runbooks that let tier-1 and users self-resolve common issues.', icon: '📚' },
    { title: 'Onboarding & L2 Escalation', desc: 'Deep-dive escalation point for sticky tickets, plus mentoring junior engineers.', icon: '🧑‍🏫' },
  ],
  skills: [
    { name: 'Troubleshooting', level: 97, note: 'Root-cause analysis' },
    { name: 'Networking', level: 92, note: 'TCP/IP, DNS, VPN' },
    { name: 'OS & System Admin', level: 93, note: 'Windows, Linux, macOS' },
    { name: 'Hardware', level: 90, note: 'PC, servers, peripherals' },
    { name: 'Automation', level: 85, note: 'Scripts & remoting' },
  ],
  skillsIcons: [
    { name: 'Diagnostics', note: 'Efficient & accurate' },
    { name: 'Remote Support', note: 'RDP, remote tools' },
    { name: 'Documentation', note: 'Clear KB articles' },
    { name: 'Ticketing', note: 'Jira, ServiceNow' },
  ],
  stats: [
    { label: 'Tickets resolved', value: 22000, suffix: '+' },
    { label: 'First-call fix rate', value: 84, suffix: '%' },
    { label: 'Avg resolution', value: 45, suffix: 'min' },
    { label: 'Uptime maintained', value: 99.9, suffix: '%' },
  ],
  experience: [
    {
      role: 'Technical Support Engineer',
      company: 'NetServe',
      period: '2021 — Present',
      desc: 'Resolve tier-2 tickets across networks and systems, automate fixes and maintain a 99.9% server uptime record.',
    },
    {
      role: 'Support Engineer',
      company: 'ByteWorks',
      period: '2019 — 2021',
      desc: 'Handled hardware and OS issues for 500+ users, cutting resolution time with remote scripting.',
    },
    {
      role: 'IT Support Analyst',
      company: 'TechDesk',
      period: '2018 — 2019',
      desc: 'First-line incident resolution and hardware deployment across multiple sites.',
    },
  ],
  education: [
    {
      degree: 'B.Tech – Computer Science',
      school: 'Visvesvaraya Technological University',
      period: '2014 — 2018',
      desc: 'Networking, operating systems and software foundations with hands-on lab work.',
    },
    {
      degree: 'Diploma in IT Infrastructure',
      school: 'Global Institute of IT (online)',
      period: '2019 — 2020',
      desc: 'Focused on server administration, virtualisation and enterprise networking.',
    },
  ],
  certificates: [
    'CompTIA A+',
    'CompTIA Network+',
    'Microsoft Certified: Azure Fundamentals (AZ-900)',
    'ITIL 4 Foundation',
  ],
  awards: [
    { title: 'Support Engineer of the Year', detail: 'Awarded for the highest customer-satisfaction and first-call-fix scores in the team.', year: '2023' },
    { title: 'Zero-Escalation Champion', detail: 'Recognised for owning complex tickets to resolution with no re-openings for a quarter.', year: '2022' },
    { title: 'Knowledge Contributor', detail: 'Honoured for authoring the most-cited KB articles across the support organisation.', year: '2021' },
  ],
  cards: [
    {
      title: 'Network Outage Log',
      desc: 'Diagnosed a recurring VPN outage to a misconfigured gateway, restoring access for 300 users in under an hour.',
      stack: 'Networking',
      metric: 'resolved <60m',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    },
    {
      title: 'Auto-fix Scripts',
      desc: 'Automated 40% of repetitive tickets with PowerShell and remote scripts, cutting average resolution to 45 min.',
      stack: 'Automation',
      metric: '-40% tickets',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    },
    {
      title: 'Knowledge Base',
      desc: 'Authored 200+ KB articles that let users and tier-1 resolve issues without escalation.',
      stack: 'Docs · Process',
      metric: '200 articles',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
    },
  ],
  projects: [
    {
      title: 'VPN Root-Cause Fix',
      desc: 'Isolated a recurring outage to gateway misconfiguration and rolled out a permanent fix.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
      tags: ['Networking', 'Root-cause'],
    },
    {
      title: 'Auto-remediation Toolkit',
      desc: 'PowerShell scripts that automated repetitive fixes and cut ticket volume 40%.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop',
      tags: ['Automation', 'Scripting'],
    },
    {
      title: 'Self-Service KB Portal',
      desc: 'A structured knowledge base that resolved a third of tier-1 tickets before escalation.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
      tags: ['Knowledge', 'Documentation'],
    },
  ],
  hobbies: [
    { name: 'Homelab', note: 'Self-hosted servers & networking', icon: '🗄️' },
    { name: 'Gaming', note: 'Competitive FPS & strategy', icon: '🎮' },
    { name: 'Fixing Gadgets', note: 'Repairing old hardware', icon: '🔧' },
    { name: 'Cycling', note: 'Weekend rides', icon: '🚴' },
  ],
  testimonials: [
    {
      quote:
        'Arjun does not just fix the ticket — he finds the reason it existed at all. Our team sleeps better because of him.',
      author: 'Ravi Shankar',
      role: 'IT Manager, NetServe',
    },
    {
      quote:
        'Fast, precise and brilliantly documented. Easily the most reliable engineer we have.',
      author: 'Lena Fischer',
      role: 'Head of IT, ByteWorks',
    },
  ],
  footnote: '© Arjun Nair · React, TypeScript & Framer Motion',
  ticker: ['Troubleshooting', 'Networking', 'Remote Support', 'Automation', 'System Admin', 'Knowledge Base'],

  blogPosts: [
    { title: 'Effective Troubleshooting Methodologies', excerpt: 'A systematic approach to diagnosing and resolving technical issues.', date: '2024-01-05', tags: ['Troubleshooting', 'Support'], readTime: '8 min' },
    { title: 'Knowledge Base Management', excerpt: 'Creating and maintaining technical documentation that helps customers help themselves.', date: '2023-12-21', tags: ['Documentation', 'Self-Service'], readTime: '7 min' },
  ],

  faqItems: [
    { question: 'What technical products do you support?', answer: 'I support SaaS platforms, APIs, cloud services, and enterprise software with complex integrations.' },
    { question: 'How do you handle escalations?', answer: 'I follow a structured escalation process, involving engineering when needed while keeping customers informed.' },
    { question: 'What is your approach to root cause analysis?', answer: 'I use systematic debugging, log analysis, and collaboration with engineering to identify underlying issues.' },
    { question: 'How do you improve support processes?', answer: 'I analyze ticket trends, identify common issues, and create documentation and automation to prevent recurring problems.' },
  ],

  skillsDetailed: [
    { category: 'Technical', items: [
      { name: 'API Troubleshooting', level: 95 },
      { name: 'Database Support', level: 88 },
      { name: 'System Administration', level: 85 },
    ]},
    { category: 'Soft Skills', items: [
      { name: 'Technical Communication', level: 92 },
      { name: 'Customer Empathy', level: 90 },
      { name: 'Knowledge Sharing', level: 88 },
    ]},
  ],

  contactMethods: [
    { type: 'Email', value: 'techsupport@company.com', icon: '📧', href: 'mailto:techsupport@company.com' },
    { type: 'Support Portal', value: 'support.company.com', icon: '🎫', href: 'https://support.company.com' },
  ],
};
