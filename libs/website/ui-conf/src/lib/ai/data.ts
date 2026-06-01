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
  registerUrl: 'https://ti.to/nx-conf/2026-ai-monorepos-conf-online',
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

// Find the agenda slot for a speaker by name, so a speaker page can show the
// talk time when the schedule data is available.
export function agendaForSpeaker(name: string): AgendaItem | undefined {
  return AGENDA.find((a) => a.speaker === name);
}

export type Speaker = {
  id: string;
  name: string;
  role: string;
  org: string;
  topic: string;
  bio: string;
  twitter?: string;
  image?: string;
  socialUrl?: string;
  website?: string;
  talkTitle?: string;
  talkAbstract?: string;
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
    socialUrl: 'https://x.com/jeffbcross',
  },
  {
    id: 'victor-savkin',
    name: 'Victor Savkin',
    role: 'CTO & Co-Founder',
    org: 'Nx',
    topic: 'TBD',
    bio: 'Creator of Nx, the monorepo platform, Nx Cloud and Polygraph. Co-founder & CTO at Nx.',
    image: '/images/conf/speakers/victor-savkin.avif',
    socialUrl: 'https://x.com/victorsavkin',
  },
  {
    id: 'kent-c-dodds',
    name: 'Kent C. Dodds',
    role: 'Software Engineer & Educator',
    org: 'Independent',
    topic: 'The Last Software Engineer',
    bio: 'Creator of Testing Library and Epic Web. Has been teaching JavaScript developers to write reliable software for over a decade.',
    image: '/images/conf/speakers/kent-c-dodds.avif',
    website: 'https://kentcdodds.com',
    socialUrl: 'https://x.com/kentcdodds',
    talkTitle: 'The Last Software Engineer',
    talkAbstract:
      "I'm not here to tell you software engineering is ending soon. Nobody can put a reliable date on that, and pretending otherwise is a distraction. But we also have to admit something humbling: a year ago, most of us would not have predicted coding agents would be this good. That should make us less confident about predicting what they'll be able to do one year, or five years, from now. So let's use \"The Last Software Engineer\" as a thought exercise. If AI keeps taking over more of the implementation work, what remains most human and valuable for us to do? In this talk, we'll take one step back from the hypothetical end and focus on the durable skill that has always separated great engineers from merely productive ones: judgment. The future belongs not to people who only know how to build, but to people who know what should be built. We'll talk about product engineering, accountability, trade-offs, constraints, evaluation, and how to keep making software worth having in an AI era.",
  },
  {
    id: 'jack-herrington',
    name: 'Jack Herrington',
    role: 'Principal Dev/Rel',
    org: 'Netlify',
    topic: "TanStack's Revolutionary Code Mode AI",
    bio: 'Host of Blue Collar Coder. Specializes in micro-frontends, monorepo architectures, and developer experience at scale.',
    image: '/images/conf/speakers/jack-herrington.avif',
    website: 'https://youtube.com/@jherr',
    socialUrl: 'https://x.com/jherr',
    talkTitle: "TanStack's Revolutionary Code Mode AI",
    talkAbstract:
      "I'll cover how code mode is a revolutionary approach to agentic AI use. It leverages the best of your tools and your LLM. The results speak for themselves; drastically lower token use, and high accuracy results. If you are using LLMs for reporting, analytics, dashboards, etc. you'll want to watch this talk.",
  },
  {
    id: 'kiet-ho',
    name: 'Kiet Ho',
    role: 'CTO & Co-Founder',
    org: 'Superset',
    topic: 'TBD',
    bio: 'Building developer infrastructure at Superset. Background in compilers and distributed systems.',
    image: '/images/conf/speakers/kiet-ho.avif',
    socialUrl: 'https://x.com/FlyaKiet',
    website: 'https://superset.sh',
  },
  {
    id: 'john-lindquist',
    name: 'John Lindquist',
    role: 'Founder',
    org: 'egghead.io',
    topic: 'TBD',
    bio: 'Co-founder of egghead.io, where he has taught hundreds of thousands of devs through bite-sized video courses. Now publishes short, practical tutorials at dev.build and runs the Codex Power User workshop.',
    image: '/images/conf/speakers/john-lindquist.avif',
    socialUrl: 'https://x.com/johnlindquist',
    website: 'https://dev.build',
  },
  {
    id: 'altan-stalker',
    name: 'Altan Stalker',
    role: 'Architect',
    org: 'Nx',
    topic: 'TBD',
    bio: 'Nx Cloud core team member, working on backend and infrastructure.',
    image: '/images/conf/speakers/altan-stalker.avif',
    socialUrl: 'https://x.com/StalkAltan',
  },
  {
    id: 'james-henry',
    name: 'James Henry',
    role: 'Director of Engineering',
    org: 'Nx',
    topic: 'TBD',
    bio: 'Nx Cloud & Polygraph core team member and 5x Microsoft MVP. ESLint Team alum and typescript-eslint creator. Software he directly created has been installed over 37 billion times.',
    image: '/images/conf/speakers/james-henry.avif',
    socialUrl: 'https://x.com/MrJamesHenry',
  },
  {
    id: 'nicolas-beaussart',
    name: 'Nicolas Beaussart',
    role: 'Senior Staff Engineer',
    org: 'PayFit',
    topic: "Killing Micro-Frontends: How Radical Simplification 10x'd Our Frontend Velocity",
    bio: 'Tinkerer, builder, and Nx power user. Writes about migrating large React codebases to monorepos, runtime ownership, and the front-end at scale.',
    image: '/images/conf/speakers/nicolas-beaussart.avif',
    socialUrl: 'https://x.com/beaussan',
    website: 'https://beaussan.io',
    talkTitle:
      "Killing Micro-Frontends: How Radical Simplification 10x'd Our Frontend Velocity",
    talkAbstract:
      "PayFit eliminated micro-frontends. Controversial? Absolutely. Effective? Our metrics speak: CI dropped from 45 to 5 minutes, deployments from days to 20 minutes, feature velocity up 75%. We had four micro-frontend implementations across 15+ repos, each team solving problems differently. The complexity tax was killing us. This talk chronicles our consolidation: monorepo migration strategies, unified build systems with Nx, automated merge queues, and synthetic testing for confident continuous deployment. The harder challenge? Our first monorepo attempt failed... teams abandoned it. Learn how we rebuilt trust, created social proof through wins, and made the platform so compelling that adoption became organic. A playbook for making bold architectural decisions and proving your convictions through execution.",
  },
  {
    id: 'zack-derose',
    name: 'Zack DeRose',
    role: 'Developer Productivity Engineer',
    org: 'Nx',
    topic: 'Host & MC',
    bio: 'Developer Productivity Engineer at Nx. Your MC for the day.',
    image: '/images/conf/speakers/zack-derose.avif',
    socialUrl: 'https://x.com/zackderose',
  },
  {
    id: 'juri-strumpflohner',
    name: 'Juri Strumpflohner',
    role: 'Director of Developer Experience',
    org: 'Nx',
    topic: 'TBD',
    bio: 'Google Developer Expert and conference speaker.',
    image: '/images/conf/speakers/juri-strumpflohner.avif',
    socialUrl: 'https://x.com/juristr',
    website: 'https://juri.dev',
  },
];
