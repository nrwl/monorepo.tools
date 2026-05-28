export const PALETTE = {
  bg: '#0a1628',
  bgDeeper: '#06101e',
  bgCard: '#15263f',
  bgLine: '#1f3354',
  pink: '#ff4d8d',
  pinkSoft: '#ffa3c4',
  cyan: '#2ad4ff',
  cyanSoft: '#94e7ff',
  lime: '#b8ff5d',
  text: '#f1f4fa',
  textDim: '#8a96ad',
  textMute: '#5b6a85',
  grid: 'rgba(132,160,210,0.08)',
  gridStrong: 'rgba(132,160,210,0.18)',
};

export const FONTS = {
  display: `"Space Grotesk", "Inter", system-ui, sans-serif`,
  body: `"Inter", system-ui, -apple-system, sans-serif`,
  mono: `"JetBrains Mono", "IBM Plex Mono", ui-monospace, Menlo, monospace`,
};

export const CONF = {
  name: 'AI ❤️ Monorepos',
  edition: 'Conf 2026',
  date: 'June 23, 2026',
  dateShort: '06.23.2026',
  format: 'Online · Free · Half-day',
  targetISO: '2026-06-23T16:00:00Z',
  tagline:
    "Most AI coding tools see one repo at a time. Most teams don't work in one repo. We're fixing that.",
  registerUrl: '#register',
};

export type AgendaItem = {
  time: string;
  end: string;
  title: string;
  track: string;
  speaker: string;
  desc: string;
};

export const AGENDA: AgendaItem[] = [
  {
    time: '9:00',
    end: '9:30',
    title: 'Opening Keynote',
    track: 'Keynote',
    speaker: 'Nx Team',
    desc: "The state of monorepos in 2026 — why repo boundaries are AI's biggest blind spot, and what we're doing about it.",
  },
  {
    time: '9:30',
    end: '10:00',
    title: 'Monorepos + CI + AI',
    track: 'Talk',
    speaker: 'Victor Savkin',
    desc: 'How modern CI infrastructure changes when agents start contributing PRs. Atomic commits, affected detection, and the new feedback loop.',
  },
  {
    time: '10:00',
    end: '10:30',
    title: 'Agentic Reliability',
    track: 'Talk',
    speaker: 'Kent C. Dodds',
    desc: "Building AI workflows that don't ship flakes. Test isolation, deterministic replay, and quarantine patterns for autonomous agents.",
  },
  {
    time: '10:30',
    end: '11:00',
    title: 'MCPs in Practice',
    track: 'Talk',
    speaker: 'John Lindquist',
    desc: 'What the Model Context Protocol unlocks once your dependency graph is queryable. Live demos with real repos.',
  },
  {
    time: '11:00',
    end: '11:30',
    title: 'Testing at Scale',
    track: 'Talk',
    speaker: 'Jack Herrington',
    desc: 'Distributed test execution, task splitting, and deflaking strategies that hold up when a fleet of agents is hammering main.',
  },
  {
    time: '11:30',
    end: '12:00',
    title: 'Closing Panel',
    track: 'Panel',
    speaker: 'Jeff Cross + Nx Team',
    desc: 'Open Q&A with the panel. Bring hard questions about adopting monorepos in polyrepo orgs and integrating agents into review.',
  },
];

export type Speaker = {
  id: string;
  name: string;
  role: string;
  org: string;
  topic: string;
  bio: string;
  twitter?: string;
};

export const SPEAKERS: Speaker[] = [
  {
    id: 'jeff-cross',
    name: 'Jeff Cross',
    role: 'CEO & Co-Founder',
    org: 'Nx',
    topic: 'Closing Panel',
    bio: 'Co-founded Nx after years on the Angular core team at Google. Spends his time thinking about how dev tooling scales across humans and agents.',
  },
  {
    id: 'victor-savkin',
    name: 'Victor Savkin',
    role: 'CTO & Co-Founder',
    org: 'Nx',
    topic: 'Monorepos + CI + AI',
    bio: "Architect behind Nx's task graph and distributed execution. Ex-Angular team. Writes about the structural advantages monorepos give AI.",
  },
  {
    id: 'kent-c-dodds',
    name: 'Kent C. Dodds',
    role: 'Software Engineer & Educator',
    org: 'Independent',
    topic: 'Agentic Reliability',
    bio: 'Creator of Testing Library and Epic Web. Has been teaching JavaScript developers to write reliable software for over a decade.',
  },
  {
    id: 'jack-herrington',
    name: 'Jack Herrington',
    role: 'Principal DevEx Engineer',
    org: 'Netlify',
    topic: 'Testing at Scale',
    bio: 'Host of Blue Collar Coder. Specializes in micro-frontends, monorepo architectures, and developer experience at scale.',
  },
  {
    id: 'kiet-ho',
    name: 'Kiet Ho',
    role: 'CTO & Co-Founder',
    org: 'Superset',
    topic: 'Lightning Talk',
    bio: 'Building developer infrastructure at Superset. Background in compilers and distributed systems.',
  },
  {
    id: 'john-lindquist',
    name: 'John Lindquist',
    role: 'Founder',
    org: 'egghead.io',
    topic: 'MCPs in Practice',
    bio: 'Co-founder of egghead.io. Has taught hundreds of thousands of devs through bite-sized video courses.',
  },
  {
    id: 'altan-stalker',
    name: 'Altan Stalker',
    role: 'Architect',
    org: 'Nx',
    topic: 'Synthetic Monorepos',
    bio: "Works on the cross-repo tooling that powers Nx's synthetic monorepo support.",
  },
  {
    id: 'james-henry',
    name: 'James Henry',
    role: 'Director of Engineering',
    org: 'Nx',
    topic: 'Tooling Deep Dive',
    bio: 'TSC member of ESLint and typescript-eslint. Leads the platform team at Nx.',
  },
  {
    id: 'juri-strumpflohner',
    name: 'Juri Strumpflohner',
    role: 'Director of Developer Experience',
    org: 'Nx',
    topic: 'Host & MC',
    bio: 'Google Developer Expert, conference speaker, and host of the Nx Show. Will be your MC for the day.',
  },
];
