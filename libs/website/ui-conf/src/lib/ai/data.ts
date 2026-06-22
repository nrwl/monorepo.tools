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
  // Wall-clock start/end in conference time (PT), kept for the default PT
  // display so it renders identically without any formatting.
  time: string;
  end: string;
  // Absolute UTC instants for the slot, the source of truth for converting
  // into a visitor's local timezone. June 23 2026 is PDT (UTC-7).
  startISO: string;
  endISO: string;
  title: string;
  track: string;
  speaker: string;
  desc: string;
};

export const AGENDA: AgendaItem[] = [
  {
    time: '9:00',
    end: '9:30',
    startISO: '2026-06-23T16:00:00Z',
    endISO: '2026-06-23T16:30:00Z',
    title: 'The Infrastructure That Removes the Agent Autonomy Ceiling',
    track: 'Keynote',
    speaker: 'Victor Savkin',
    desc: 'Jeff and Victor open the day with the Polygraph launch, then Victor on why agent autonomy is capped more by infrastructure and tooling than by model quality, and how the right infrastructure lifts the cap.',
  },
  {
    time: '9:30',
    end: '10:00',
    startISO: '2026-06-23T16:30:00Z',
    endISO: '2026-06-23T17:00:00Z',
    title: 'The Intersection of Open Source Monorepos and AI w/AnalogJS',
    track: 'Talk',
    speaker: 'Brandon Roberts',
    desc: 'AI agents now open PRs alongside us. Using Nx as a verification sandbox so agents test, catch errors, and self-correct before review.',
  },
  {
    time: '10:00',
    end: '10:30',
    startISO: '2026-06-23T17:00:00Z',
    endISO: '2026-06-23T17:30:00Z',
    title: 'How to Run 100 Agents in Parallel',
    track: 'Talk',
    speaker: 'Kiet Ho',
    desc: "More agents doesn't mean more output. A Lean Manufacturing framework for where to apply and tune agent usage at scale.",
  },
  {
    time: '10:30',
    end: '11:00',
    startISO: '2026-06-23T17:30:00Z',
    endISO: '2026-06-23T18:00:00Z',
    title: 'Self-Healing CI',
    track: 'Talk',
    speaker: 'James Henry',
    desc: 'Details coming soon.',
  },
  {
    time: '11:00',
    end: '11:30',
    startISO: '2026-06-23T18:00:00Z',
    endISO: '2026-06-23T18:30:00Z',
    title: "Killing Micro-Frontends: How Radical Simplification 10x'd Our Frontend Velocity",
    track: 'Talk',
    speaker: 'Nicolas Beaussart-Hatchuel',
    desc: 'PayFit ripped out micro-frontends across 15+ repos and cut CI from 45 to 5 minutes. The consolidation playbook.',
  },
  {
    time: '11:30',
    end: '12:00',
    startISO: '2026-06-23T18:30:00Z',
    endISO: '2026-06-23T19:00:00Z',
    title: 'The Last Software Engineer',
    track: 'Talk',
    speaker: 'Kent C. Dodds',
    desc: "If agents take over the implementation, judgment is what's left. What stays most human and valuable in an AI era.",
  },
  {
    time: '12:00',
    end: '12:30',
    startISO: '2026-06-23T19:00:00Z',
    endISO: '2026-06-23T19:30:00Z',
    title: "TanStack's Revolutionary Code Mode AI",
    track: 'Talk',
    speaker: 'Jack Herrington',
    desc: 'Code mode as a new approach to agentic AI: drastically fewer tokens, far higher accuracy.',
  },
  {
    time: '12:30',
    end: '1:00',
    startISO: '2026-06-23T19:30:00Z',
    endISO: '2026-06-23T20:00:00Z',
    title: "The Agentic Power User's Playbook",
    track: 'Talk',
    speaker: 'John Lindquist',
    desc: 'The daily playbook for running swarms of agents in parallel: tiled panes, fast-model routing, and the muscle memory of a true power user.',
  },
  {
    time: '1:00',
    end: '1:30',
    startISO: '2026-06-23T20:00:00Z',
    endISO: '2026-06-23T20:30:00Z',
    title: 'The Missing Paper Trail for Agentic Engineering',
    track: 'Talk',
    speaker: 'Rizèl Scarlett',
    desc: 'Commits, PRs, and CI logs are engineering’s paper trail, but agent sessions get thrown away. How sessions become procedural memory for AI-native monorepos: searchable prior work, reconstructable decisions, preserved handoff context.',
  },
  {
    time: '1:30',
    end: '2:00',
    startISO: '2026-06-23T20:30:00Z',
    endISO: '2026-06-23T21:00:00Z',
    title: 'Your CI Was Already Broken. AI Just Made It Obvious.',
    track: 'Talk',
    speaker: 'Altan Stalker',
    desc: 'AI means more code, more PRs, more CI runs. Why adding capacity is a workaround, not a fix, and how Nx Cloud makes CI faster and more efficient as throughput climbs.',
  },
];

// Find the agenda slot for a speaker by name, so a speaker page can show the
// talk time when the schedule data is available.
export function agendaForSpeaker(name: string): AgendaItem | undefined {
  return AGENDA.find((a) => a.speaker === name);
}

// ---- Live stream ----------------------------------------------------------
// Drives the live banner on /conf and the dedicated /conf/live stream page.
// Flip `isLive` off after the event to retire both.
export const LIVE = {
  isLive: true,
  youtubeId: 'y8H-LeWQxlQ',
  watchUrl: 'https://youtube.com/live/y8H-LeWQxlQ',
  livePath: '/conf/live',
  // Red reads as "live" everywhere; kept distinct from the amber accent so the
  // LIVE state stays unmistakable against the rest of the conf palette.
  red: '#ef4444',
};

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
    id: 'victor-savkin',
    name: 'Victor Savkin',
    role: 'CTO & Co-Founder',
    org: 'Nx',
    topic: 'The Infrastructure That Removes the Agent Autonomy Ceiling',
    bio: 'Creator of Nx, the monorepo platform, Nx Cloud and Polygraph. Co-founder & CTO at Nx.',
    image: '/images/conf/speakers/victor-savkin.avif',
    socialUrl: 'https://x.com/victorsavkin',
    website: 'https://nx.dev',
    talkTitle: 'The Infrastructure That Removes the Agent Autonomy Ceiling',
    talkAbstract:
      'Agent autonomy is capped more by infrastructure and tooling than by model quality. This talk shows why, and how the right infrastructure lifts the cap.',
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
      "I'm not here to tell you software engineering is ending soon. Nobody can put a reliable date on that, and pretending otherwise is a distraction. But we also have to admit something humbling: a year ago, most of us would not have predicted coding agents would be this good. That should make us less confident about predicting what they'll be able to do one year, or five years, from now.\n\nSo let's use \"The Last Software Engineer\" as a thought exercise. If AI keeps taking over more of the implementation work, what remains most human and valuable for us to do? In this talk, we'll take one step back from the hypothetical end and focus on the durable skill that has always separated great engineers from merely productive ones: judgment.\n\nThe future belongs not to people who only know how to build, but to people who know what should be built. We'll talk about product engineering, accountability, trade-offs, constraints, evaluation, and how to keep making software worth having in an AI era.",
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
    role: 'Co-Founder',
    org: 'Superset',
    topic: 'How to Run 100 Agents in Parallel',
    bio: 'Building developer infrastructure at Superset. Background in compilers and distributed systems.',
    image: '/images/conf/speakers/kiet-ho.avif',
    socialUrl: 'https://x.com/FlyaKiet',
    website: 'https://superset.sh',
    talkTitle: 'How to Run 100 Agents in Parallel',
    talkAbstract:
      "At Superset, we work with many companies to help automate their software development lifecycle. Most agree that using more coding agents is good but results don't scale with usage. This results in a lot of waste: bad code gets written, huge PRs sit idle and never get merged. More money spent but productivity doesn't increase.\n\nWe propose a framework to identify where to correctly apply and tune your agent usage using the Lean Manufacturing methods.",
  },
  {
    id: 'john-lindquist',
    name: 'John Lindquist',
    role: 'Agentic Instructor',
    org: 'egghead.io',
    topic: "The Agentic Power User's Playbook",
    bio: 'Co-founder of egghead.io, where he has taught hundreds of thousands of devs through bite-sized video courses, and runs the Codex Power User workshop.',
    image: '/images/conf/speakers/john-lindquist.avif',
    socialUrl: 'https://x.com/johnlindquist',
    website: 'https://egghead.io',
    talkTitle: "The Agentic Power User's Playbook",
    talkAbstract:
      "This presentation is the playbook I use daily to run swarms of agents in parallel: the keyboard shortcuts, layout patterns, supervision habits, and fast-model tricks that turn chaos into a control surface.\n\nWe'll go hands-on: spawning a wall of agents across tiled panes, routing prompts to the right swarm with fast models, switching contexts in milliseconds, recovering when an agent goes off the rails, and building the muscle memory that separates a one-agent-at-a-time user from a true power user.",
  },
  {
    id: 'altan-stalker',
    name: 'Altan Stalker',
    role: 'Architect',
    org: 'Nx',
    topic: 'Your CI Was Already Broken. AI Just Made It Obvious.',
    bio: 'Nx Cloud core team member, working on backend and infrastructure.',
    image: '/images/conf/speakers/altan-stalker.avif',
    socialUrl: 'https://x.com/StalkAltan',
    talkTitle: 'Your CI Was Already Broken. AI Just Made It Obvious.',
    talkAbstract:
      "AI-assisted development means more code, more pull requests, and more CI runs. That extra volume puts pressure on problems teams have tolerated for years: cache inputs that are too broad or too narrow, runners that are only partly used, memory-heavy tasks that destabilize jobs, and distributed execution that still leaves machines waiting. In this talk, we'll look at why adding more CI capacity is an expensive workaround, not a fix. We'll show how Nx Cloud's task sandboxing, resource utilization views, assignment rules, and continuous task assignment help teams make CI faster, more predictable, and more efficient as throughput increases.",
  },
  {
    id: 'james-henry',
    name: 'James Henry',
    role: 'Director of Engineering',
    org: 'Nx',
    topic: 'Self-Healing CI',
    bio: 'Nx Cloud & Polygraph core team member and 5x Microsoft MVP. ESLint Team alum and typescript-eslint creator. Software he directly created has been installed over 37 billion times.',
    image: '/images/conf/speakers/james-henry.avif',
    socialUrl: 'https://x.com/MrJamesHenry',
    talkTitle: 'Self-Healing CI',
    // talkAbstract TBD — James to provide.
  },
  {
    id: 'nicolas-beaussart',
    name: 'Nicolas Beaussart-Hatchuel',
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
      "PayFit eliminated micro-frontends. Controversial? Absolutely. Effective? Our metrics speak: CI dropped from 45 to 5 minutes, deployments from days to 20 minutes, feature velocity up 75%.\n\nWe had four micro-frontend implementations across 15+ repos, each team solving problems differently. The complexity tax was killing us. This talk chronicles our consolidation: monorepo migration strategies, unified build systems with Nx, automated merge queues, and synthetic testing for confident continuous deployment.\n\nThe harder challenge? Our first monorepo attempt failed... teams abandoned it. Learn how we rebuilt trust, created social proof through wins, and made the platform so compelling that adoption became organic.\n\nA playbook for making bold architectural decisions and proving your convictions through execution.",
  },
  {
    id: 'brandon-roberts',
    name: 'Brandon Roberts',
    role: 'Principal Engineer',
    org: "Dick's Sporting Goods",
    topic: 'The Intersection of Open Source Monorepos and AI w/AnalogJS',
    bio: 'Creator of AnalogJS and an Angular GDE. Principal Engineer at Dick\'s Sporting Goods, building meta-frameworks and tooling for the Angular ecosystem.',
    image: '/images/conf/speakers/brandon-roberts.avif',
    socialUrl: 'https://x.com/brandontroberts',
    website: 'https://brandontroberts.dev',
    talkTitle: 'The Intersection of Open Source Monorepos and AI w/AnalogJS',
    talkAbstract:
      "Open-source monorepos aren't just for human devs anymore — AI agents are pulling tickets and submitting PRs right alongside us. AnalogJS already lives natively inside an Nx workspace, and has the surface to iterate on workflows that make AI less prone to slop. This session is all about using Nx as the ultimate automated verification sandbox: tight local feedback loops so agents can test their code, catch errors, and self-correct before they ever hit your review inbox.",
  },
  {
    id: 'rizel-scarlett',
    name: 'Rizèl Scarlett',
    role: 'Principal Developer Advocate',
    org: 'Entire',
    topic: 'The Missing Paper Trail for Agentic Engineering',
    bio: 'Principal Developer Advocate at Entire, focused on AI-native developer workflows. Writes at blackgirlbytes.dev and is a long-time advocate for making engineering more accessible.',
    image: '/images/conf/speakers/rizel-scarlett.avif',
    socialUrl: 'https://x.com/blackgirlbytes',
    website: 'https://blackgirlbytes.dev',
    talkTitle: 'The Missing Paper Trail for Agentic Engineering',
    talkAbstract:
      'For decades, software engineering has relied on a foundational necessity: a reliable paper trail. Commits, pull requests, CI logs, and reviews help teams understand what changed, why it changed, and whether it is safe to ship. We deliberately used this collaborative friction to maintain code quality.\n\nBut today, a new class of autonomous collaborators has disrupted the traditional engineering workflow. Coding agents can turn a single prompt into a full feature. The speed is exciting, but it creates a new problem: we can now produce code faster than we can understand it.\n\nFor an industry obsessed with artifacts, we often throw away the one record that explains agent-authored work: the session itself.\n\nJoin Rizèl to learn how agent sessions can become procedural memory for AI-native monorepos, helping humans and future agents search prior work, reconstruct decisions, preserve handoff context, and maintain trust as development accelerates.\n\nBecause in an AI-native world, the session is the story.',
  },
];

// The MC hosts the day but isn't a session speaker, so they live outside the
// SPEAKERS grid and render as a smaller "hosted by" item below it.
export const MC: Speaker = {
  id: 'jeff-cross',
  name: 'Jeff Cross',
  role: 'CEO & Co-Founder',
  org: 'Nx',
  topic: 'Host & MC',
  bio: 'Co-founded Nx after years on the Angular core team at Google. Spends his time thinking about how dev tooling scales across humans and agents. Your MC for the day.',
  image: '/images/conf/speakers/jeff-cross.avif',
  socialUrl: 'https://x.com/jeffbcross',
};
