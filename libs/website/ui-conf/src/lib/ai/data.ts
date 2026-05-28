// Palette leans on monorepo.tools' slate dark-mode tokens (slate-800/900/700)
// + yellow-500 as the site-wide accent, then keeps pink + cyan as
// conf-specific event colors to stay visually distinct.
export const PALETTE = {
  bg: '#1e293b', // slate-800 — matches site dark bg
  bgDeeper: '#0f172a', // slate-900 — deeper surfaces (footer, register)
  bgCard: '#334155', // slate-700 — elevated surface
  bgLine: '#475569', // slate-600 — subtle border on dark
  pink: '#F59E0B', // polygraph amber — conf primary accent
  pinkSoft: '#FCD34D',
  cyan: '#2ad4ff', // conf secondary accent
  cyanSoft: '#94e7ff',
  yellow: '#eab308', // yellow-500 — shared with rest of site
  lime: '#eab308', // alias for back-compat; same as yellow
  text: '#f8fafc', // slate-50 — matches site primary text on dark
  textDim: '#cbd5e1', // slate-300
  textMute: '#94a3b8', // slate-400
  grid: 'rgba(148,163,184,0.08)',
  gridStrong: 'rgba(148,163,184,0.18)',
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
  image?: string;
};

// `topic` carries a placeholder talk title for each speaker.
// Restore real titles once the schedule is locked in.
export const SPEAKERS: Speaker[] = [
  {
    id: 'jeff-cross',
    name: 'Jeff Cross',
    role: 'CEO & Co-Founder',
    org: 'Nx',
    topic: 'TBD',
    bio: 'Co-founded Nx after years on the Angular core team at Google. Spends his time thinking about how dev tooling scales across humans and agents.',
    image: '/images/conf/speakers/jeff-cross.avif',
  },
  {
    id: 'victor-savkin',
    name: 'Victor Savkin',
    role: 'CTO & Co-Founder',
    org: 'Nx',
    topic: 'TBD',
    bio: "Architect behind Nx's task graph and distributed execution. Ex-Angular team. Writes about the structural advantages monorepos give AI.",
    image: '/images/conf/speakers/victor-savkin.avif',
  },
  {
    id: 'kent-c-dodds',
    name: 'Kent C. Dodds',
    role: 'Software Engineer & Educator',
    org: 'Independent',
    topic: 'TBD',
    bio: 'Creator of Testing Library and Epic Web. Has been teaching JavaScript developers to write reliable software for over a decade.',
    image: '/images/conf/speakers/kent-c-dodds.avif',
  },
  {
    id: 'jack-herrington',
    name: 'Jack Herrington',
    role: 'Principal DevEx Engineer',
    org: 'Netlify',
    topic: 'TBD',
    bio: 'Host of Blue Collar Coder. Specializes in micro-frontends, monorepo architectures, and developer experience at scale.',
    image: '/images/conf/speakers/jack-herrington.avif',
  },
  {
    id: 'kiet-ho',
    name: 'Kiet Ho',
    role: 'CTO & Co-Founder',
    org: 'Superset',
    topic: 'TBD',
    bio: 'Building developer infrastructure at Superset. Background in compilers and distributed systems.',
    image: '/images/conf/speakers/kiet-ho.avif',
  },
  {
    id: 'john-lindquist',
    name: 'John Lindquist',
    role: 'Founder',
    org: 'egghead.io',
    topic: 'TBD',
    bio: 'Co-founder of egghead.io. Has taught hundreds of thousands of devs through bite-sized video courses.',
    image: '/images/conf/speakers/john-lindquist.avif',
  },
  {
    id: 'altan-stalker',
    name: 'Altan Stalker',
    role: 'Architect',
    org: 'Nx',
    topic: 'TBD',
    bio: "Works on the cross-repo tooling that powers Nx's synthetic monorepo support.",
    image: '/images/conf/speakers/altan-stalker.avif',
  },
  {
    id: 'james-henry',
    name: 'James Henry',
    role: 'Director of Engineering',
    org: 'Nx',
    topic: 'TBD',
    bio: 'TSC member of ESLint and typescript-eslint. Leads the platform team at Nx.',
    image: '/images/conf/speakers/james-henry.avif',
  },
  {
    id: 'nicolas-beaussart',
    name: 'Nicolas Beaussart',
    role: 'Staff Engineer',
    org: 'PayFit',
    topic: 'TBD',
    bio: 'Tinkerer, builder, and Nx power user. Writes about migrating large React codebases to monorepos, runtime ownership, and the front-end at scale.',
    image: '/images/conf/speakers/nicolas-beaussart.avif',
  },
  {
    id: 'juri-strumpflohner',
    name: 'Juri Strumpflohner',
    role: 'Director of Developer Experience',
    org: 'Nx',
    topic: 'Host & MC',
    bio: 'Google Developer Expert, conference speaker, and host of the Nx Show. Will be your MC for the day.',
    image: '/images/conf/speakers/juri-strumpflohner.avif',
  },
];
