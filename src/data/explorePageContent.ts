export const explorePath = '/explore'

export type ExploreNavLink = {
  label: string
  href: string
}

export const exploreSectionNavLinks: ExploreNavLink[] = [
  { label: 'Overview', href: `${explorePath}#overview` },
  { label: 'Platforms', href: `${explorePath}#platforms` },
  { label: 'Roadmap', href: `${explorePath}#roadmap` },
  { label: "What's Happening", href: `${explorePath}#whats-happening` },
  { label: 'Learn & Connect', href: `${explorePath}#learn-connect` },
  { label: 'Get Started', href: `${explorePath}#getting-started` },
]

function sectionIdFromNavHref(href: string): string {
  const hash = href.split('#')[1]
  return hash ?? 'overview'
}

export const exploreSectionIds = exploreSectionNavLinks.map((link) =>
  sectionIdFromNavHref(link.href),
)
