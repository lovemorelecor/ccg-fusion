import type { PlatformArticlePage } from './platformArticleContent'
import { sharedServicesPath } from './sharedServicesContent'

export type SharedServiceArticlePage = PlatformArticlePage & {
  categoryId: string
  categoryLabel: string
  status?: 'Required' | 'Optional'
  availableIn: string[]
}

export const sharedServiceSectionHero = {
  title: 'Shared Services',
  summary:
    'Explore our broad portfolio of CMS Hybrid Cloud approved managed technologies, tools, and services below. The list below contains both required services you get automatically to support your cloud hosting experience, and optional services you can use within your application for a more streamlined experience.',
  imageSrc: 'images/sections/azure-commercial-hero.png',
  imageAlt: 'Isometric cloud security illustration with glowing cubes and a locked shield',
} as const

export function sharedServiceArticlePath(categoryId: string, serviceId: string): string {
  return `${sharedServicesPath}/${categoryId}/${serviceId}`
}

export const ipAddressManagementArticle: SharedServiceArticlePage = {
  slug: 'ip-address-management',
  categoryId: 'network',
  categoryLabel: 'Network',
  status: 'Required',
  availableIn: ['AWS Commercial', 'AWS GovCloud'],
  title: 'IP Address Management',
  heroSummary:
    'Managed IP addressing and allocation for CMS Hybrid Cloud. The CMS DIN team provides centralized control so applications receive unique, conflict-free addresses across approved environments.',
  introParagraphs: [
    'The CMS DIN team offers a vital service for managing private IP space within the CMS Cloud environment, ensuring that unique IPv4 addresses are allocated and tracked efficiently. By utilizing BTDiamond as the centralized database for IP address management, this solution simplifies the assignment and tracking of IPv4 addresses, ensuring consistency and preventing conflicts across the network.',
  ],
  heroImageSrc: sharedServiceSectionHero.imageSrc,
  heroImageAlt: sharedServiceSectionHero.imageAlt,
  metadata: {
    updated: 'January 13, 2026',
    owner: 'CMS DIN Team',
    cloud: 'Network',
    readingTime: '4 min',
  },
  sectionIds: ['overview', 'benefits', 'associated-cost', 'availability', 'getting-started'],
  lastUpdated: 'January 13, 2026',
  sections: [
    {
      id: 'benefits',
      navLabel: 'Benefits',
      heading: 'Benefits',
      type: 'leads',
      items: [
        {
          label: 'Centralized Management',
          body: 'BTDiamond acts as the system of record for IP inventory, so allocations stay consistent across CMS Hybrid Cloud environments.',
        },
        {
          label: 'Avoids Conflicts',
          body: 'Coordinated assignment prevents overlapping ranges that can break routing, peering, or hybrid connectivity.',
        },
        {
          label: 'Operational Efficiency',
          body: 'Standard request and allocation workflows reduce ad-hoc spreadsheet tracking and accelerate onboarding.',
        },
        {
          label: 'Scalability',
          body: 'IP plans can grow with your application footprint while remaining aligned to CMS network architecture.',
        },
      ],
    },
    {
      id: 'associated-cost',
      navLabel: 'Associated Cost',
      heading: 'Associated Cost',
      type: 'prose',
      paragraphs: [
        'There is no additional charge for IP Address Management. The service is included as part of CMS Hybrid Cloud shared services.',
      ],
    },
    {
      id: 'availability',
      navLabel: 'Availability',
      heading: 'Availability',
      type: 'table',
      table: {
        headers: ['Detail', 'Value'],
        rowHeaderColumn: true,
        rows: [
          ['Category', 'Network'],
          ['Status', 'Required'],
          ['Available in', 'AWS Commercial, AWS GovCloud'],
        ],
      },
    },
    {
      id: 'getting-started',
      navLabel: 'Getting Started',
      heading: 'Getting Started',
      type: 'prose',
      paragraphs: [
        'If you are onboarding a new application or expanding an existing environment, request IP Address Management as part of your CMS Hybrid Cloud hosting plan. Your Customer Support Team or Hosting Coordinator can help confirm requirements and submit the allocation request to CMS DIN.',
      ],
      links: [
        { label: 'Back to Shared Services', href: sharedServicesPath },
        { label: 'Network services', href: `${sharedServicesPath}#network` },
        { label: 'Get started with CMS Hybrid Cloud', href: '/explore#getting-started' },
      ],
    },
  ],
}

const sharedServiceArticles: SharedServiceArticlePage[] = [ipAddressManagementArticle]

export function getSharedServiceArticle(
  categoryId: string,
  serviceSlug: string,
): SharedServiceArticlePage | undefined {
  return sharedServiceArticles.find(
    (article) => article.categoryId === categoryId && article.slug === serviceSlug,
  )
}
