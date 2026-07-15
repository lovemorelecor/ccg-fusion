import { InteriorSectionNav } from '../InteriorSectionNav'

export type PlatformArticleSectionNavProps = {
  sectionIds: string[]
  items: { id: string; label: string }[]
}

export function PlatformArticleSectionNav({ sectionIds, items }: PlatformArticleSectionNavProps) {
  return (
    <InteriorSectionNav
      items={items}
      sectionIds={sectionIds}
      ariaLabel="Page sections"
    />
  )
}
