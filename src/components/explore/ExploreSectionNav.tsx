import { FusionButton } from '../FusionButton'
import { InteriorSectionNav } from '../layouts/InteriorSectionNav'
import { exploreSectionIds, exploreSectionNavLinks } from '../../data/explorePageContent'

function sectionIdFromNavHref(href: string): string {
  const hash = href.split('#')[1]
  return hash ?? 'overview'
}

const navItems = exploreSectionNavLinks.map((link) => ({
  id: sectionIdFromNavHref(link.href),
  label: link.label,
}))

export function ExploreSectionNav() {
  return (
    <InteriorSectionNav
      items={navItems}
      sectionIds={exploreSectionIds}
      ariaLabel="Explore page sections"
      cta={
        <FusionButton href="#learn-connect" accent>
          Contact Team
        </FusionButton>
      }
    />
  )
}
