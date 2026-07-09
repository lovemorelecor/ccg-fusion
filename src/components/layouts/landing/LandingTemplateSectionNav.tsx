import { FusionButton } from '../../FusionButton'
import { InteriorSectionNav } from '../InteriorSectionNav'
import {
  landingTemplateSectionIds,
  landingTemplateSectionNavLinks,
} from '../../../data/landingPageTemplateContent'

function sectionIdFromNavHref(href: string): string {
  return href.split('#')[1] ?? 'overview'
}

const navItems = landingTemplateSectionNavLinks.map((link) => ({
  id: sectionIdFromNavHref(link.href),
  label: link.label,
}))

export function LandingTemplateSectionNav() {
  return (
    <InteriorSectionNav
      items={navItems}
      sectionIds={[...landingTemplateSectionIds]}
      ariaLabel="Landing page template sections"
      cta={
        <FusionButton href="#get-started" variation="solid">
          Get started
        </FusionButton>
      }
    />
  )
}
