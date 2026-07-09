export const landingTemplatePath = '/resources/page-layouts/landing'

export const landingTemplateHero = {
  title: 'Landing Page Layout',
  titleAccent: 'Template',
  lede:
    'A composable landing page pattern with hero, sticky section navigation, and interchangeable content blocks for CMS Hybrid Cloud program pages.',
  primaryCta: { label: 'View section blocks', href: '#cards' },
  secondaryCta: { label: 'Layout library', href: '/resources/page-layouts' },
  navCta: { label: 'Get started', href: '#get-started' },
}

export const landingTemplateSectionNavLinks = [
  { label: 'Overview', href: `${landingTemplatePath}#overview` },
  { label: 'Cards', href: `${landingTemplatePath}#cards` },
  { label: 'Spotlight', href: `${landingTemplatePath}#spotlight` },
  { label: 'Metrics', href: `${landingTemplatePath}#metrics` },
  { label: 'Compare', href: `${landingTemplatePath}#compare` },
  { label: 'FAQ', href: `${landingTemplatePath}#faq` },
  { label: 'Timeline', href: `${landingTemplatePath}#timeline` },
  { label: 'Partners', href: `${landingTemplatePath}#partners` },
  { label: 'Get Started', href: `${landingTemplatePath}#get-started` },
] as const

function sectionIdFromNavHref(href: string): string {
  return href.split('#')[1] ?? 'overview'
}

export const landingTemplateSectionIds = landingTemplateSectionNavLinks.map((link) =>
  sectionIdFromNavHref(link.href),
)

export const landingFeatureCards = {
  title: 'Card layouts',
  lede: 'Switch between common card grid patterns for capabilities, services, or pathways. Use the tabs to preview two-up, three-up, four-up, and text-only variants.',
  layouts: [
    { id: 'three', label: '3 cards' },
    { id: 'two', label: '2 cards' },
    { id: 'four', label: '4 cards' },
    { id: 'text', label: 'Text grid' },
  ] as const,
  cards: [
    {
      id: 'card-1',
      title: 'Secure by design',
      body: 'Template copy for a primary capability. Replace with program-specific messaging about compliance and guardrails.',
      cta: 'Learn more',
    },
    {
      id: 'card-2',
      title: 'Built for teams',
      body: 'Describe collaboration patterns, shared services, or self-service workflows available to application teams.',
      cta: 'Explore tools',
    },
    {
      id: 'card-3',
      title: 'Scale with confidence',
      body: 'Summarize elastic capacity, automation, or operational support that helps teams grow workloads safely.',
      cta: 'View capabilities',
    },
    {
      id: 'card-4',
      title: 'Operate with clarity',
      body: 'Highlight observability, runbooks, and support channels that keep production workloads healthy after launch.',
      cta: 'See support',
    },
  ],
}

export const landingSpotlightSections = {
  title: 'Split media layouts',
  lede: 'Fifty-fifty sections with copy on one side and a visual placeholder on the other. Include a standard and reversed variant.',
  primary: {
    title: 'Text left, media right',
    body: 'Lead with narrative copy, bullets, or CTAs on the left. Place product screenshots, diagrams, or photography in the media frame on the right.',
    bullets: ['Section title and lede above the block', 'Primary and secondary actions supported', 'Responsive stack on smaller viewports'],
    cta: 'Primary action',
    secondaryCta: 'Secondary action',
    mediaLabel: 'Media placeholder — 4:3 ratio',
  },
  reverse: {
    title: 'Text right, media left',
    body: 'Mirror the layout to create rhythm down the page. Useful when alternating storytelling and visual proof points.',
    bullets: ['Reversed column order on large screens', 'Same typography and spacing tokens', 'Optional eyebrow or badge above title'],
    cta: 'See example',
    mediaLabel: 'Media placeholder — reversed',
  },
}

export const landingMetrics = {
  title: 'Metrics band',
  lede: 'Surface program outcomes, platform stats, or adoption numbers in a scannable row.',
  stats: [
    { value: '99.9%', label: 'Platform availability', detail: 'Rolling 12-month average' },
    { value: '120+', label: 'Applications onboarded', detail: 'Across hybrid environments' },
    { value: '24/7', label: 'Operational support', detail: 'Follow-the-sun coverage' },
    { value: '4', label: 'Cloud providers', detail: 'AWS, Azure, GCP, Oracle' },
  ],
}

export const landingTabs = {
  title: 'Tabbed comparison',
  lede: 'Organize related content into tabs when users need to compare options without leaving the page.',
  tabs: [
    {
      id: 'plans',
      label: 'Plans',
      title: 'Choose the right starting point',
      body: 'Use tabs for plan tiers, service levels, or deployment models. Keep panel copy concise and scannable.',
      bullets: ['Sandbox for discovery', 'Standard for production workloads', 'Enterprise for mission-critical systems'],
    },
    {
      id: 'capabilities',
      label: 'Capabilities',
      title: 'What each option includes',
      body: 'List capabilities that change between tabs—automation, monitoring, backup, identity integration, and more.',
      bullets: ['Infrastructure as code templates', 'Centralized logging and metrics', 'Security baseline controls'],
    },
    {
      id: 'support',
      label: 'Support',
      title: 'How teams get help',
      body: 'Describe support channels, office hours, and escalation paths associated with each tab selection.',
      bullets: ['Customer Service Team engagement', 'Knowledge base and runbooks', 'Incident management integration'],
    },
  ],
}

export const landingFaq = {
  title: 'FAQ with accordion',
  lede: 'Pair introductory copy with an accordion for detailed questions. CMS Design System accordion components keep interactions accessible.',
  intro:
    'Place a short paragraph or bullet list on the left to frame the topic. Stack accordion items on the right for expandable answers.',
  bullets: ['Keep answers focused and link out when needed', 'Default the first item open on desktop if helpful', 'Limit to 5–7 questions per section'],
  items: [
    {
      id: 'faq-1',
      heading: 'Who should use this landing layout?',
      content:
        'Program offices, platform teams, and initiative leads who need a long-form marketing-style page with in-page navigation and multiple content blocks.',
    },
    {
      id: 'faq-2',
      heading: 'Can sections be reordered or removed?',
      content:
        'Yes. Each block is composable. Keep the hero and sticky nav pattern, then include only the sections your page needs.',
    },
    {
      id: 'faq-3',
      heading: 'Does the sticky nav work on mobile?',
      content:
        'The pill navigation scrolls horizontally on small screens and pins beneath the site header when the user scrolls past the hero.',
    },
    {
      id: 'faq-4',
      heading: 'Which design system components are used?',
      content:
        'Fusion buttons, CMS.gov tabs, and accordion components are used where interactive patterns are demonstrated.',
    },
  ],
}

export type LandingTimelineStatus = 'completed' | 'current' | 'upcoming'

export const landingTimeline = {
  title: 'Release timeline',
  lede: 'Optional roadmap band for phased rollouts, milestones, or quarterly themes.',
  quarters: [
    {
      quarter: 'Q1',
      year: '2026',
      monthRange: 'Jan — Mar',
      status: 'completed' as LandingTimelineStatus,
      title: 'Template foundations',
      description: 'Establish hero, sticky nav, and core section blocks for landing pages.',
      tags: ['Completed', 'Layout library'],
    },
    {
      quarter: 'Q2',
      year: '2026',
      monthRange: 'Apr — Jun',
      status: 'current' as LandingTimelineStatus,
      title: 'Authoring guidance',
      description: 'Publish content guidelines and examples for each section variant.',
      tags: ['In progress', 'Documentation'],
    },
    {
      quarter: 'Q3',
      year: '2026',
      monthRange: 'Jul — Sep',
      status: 'upcoming' as LandingTimelineStatus,
      title: 'Pattern expansion',
      description: 'Add optional blocks such as video, quote carousel, and logo strips.',
      tags: ['Planned', 'Components'],
    },
  ],
}

export const landingPartners = {
  title: 'Partner strip',
  lede: 'Logo row for ecosystems, integrations, or stakeholder groups. Keep logos monochrome for visual consistency.',
  logos: ['CMS Hybrid Cloud', 'AWS', 'Azure', 'Google Cloud', 'Oracle', 'Fusion Toolkit'],
}

export const landingCtaBand = {
  title: 'Ready to build your landing page?',
  body: 'Combine these blocks to create program, platform, or initiative pages that match Explore and Fusion Toolkit patterns.',
  primaryCta: 'Back to layout library',
  primaryHref: '/resources/page-layouts',
  secondaryCta: 'View Explore page',
  secondaryHref: '/explore',
}
