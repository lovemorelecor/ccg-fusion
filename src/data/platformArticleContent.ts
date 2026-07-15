export type PlatformArticleMetadata = {
  updated: string
  owner: string
  cloud: string
  readingTime: string
}

export type PlatformArticleLeadItem = {
  label: string
  body: string
}

export type PlatformArticleTable = {
  intro?: string
  caption?: string
  headers: [string, string]
  rows: { category: string; value: string }[]
}

export type PlatformArticleSection =
  | {
      id: string
      navLabel: string
      heading: string
      type: 'leads'
      items: PlatformArticleLeadItem[]
    }
  | {
      id: string
      navLabel: string
      heading: string
      type: 'table'
      table: PlatformArticleTable
    }
  | {
      id: string
      navLabel: string
      heading: string
      type: 'prose'
      paragraphs: string[]
      links?: { label: string; href: string }[]
    }

export type PlatformArticlePage = {
  slug: string
  title: string
  heroSummary: string
  heroImageSrc: string
  heroImageAlt?: string
  metadata: PlatformArticleMetadata
  sectionIds: string[]
  sections: PlatformArticleSection[]
  lastUpdated: string
}

export const azureCommercialArticle: PlatformArticlePage = {
  slug: 'azure-commercial',
  title: 'Azure Commercial Enablement',
  heroSummary:
    'A secure, scalable cloud hosting option within the CMS multi-cloud ecosystem for applications migrating from government-specific Azure environments to Azure Commercial.',
  heroImageSrc: 'images/sections/new-bg-cloud.png',
  heroImageAlt: 'Soft cloud imagery in the background',
  metadata: {
    updated: 'June 1, 2025',
    owner: 'Cloud Enablement Team',
    cloud: 'Azure Commercial',
    readingTime: '6 min',
  },
  sectionIds: ['what-why-how-when', 'approved-services', 'operational-shared-services', 'getting-started'],
  sections: [
    {
      id: 'what-why-how-when',
      navLabel: 'What, Why, How, and When',
      heading: 'What, Why, How, and When',
      type: 'leads',
      items: [
        {
          label: 'What it is',
          body: 'Azure Commercial Enablement is the CMS Hybrid Cloud program path for hosting applications on Microsoft Azure Commercial. It provides a standardized onboarding model, approved service catalog, and shared operational services aligned to CMS security and compliance expectations.',
        },
        {
          label: 'Why it matters',
          body: 'Teams migrating from Azure Government environments benefit from broader service availability, simplified vendor support, and reduced friction between commercial and government cloud boundaries—while inheriting CMS guardrails for logging, monitoring, identity, and cost management.',
        },
        {
          label: 'How it works',
          body: 'Hosting coordinators work with the Customer Service Team (CST) to complete intake, architecture review, and sandbox validation. Approved services are provisioned through CMS-managed landing zones with tagging, policy, and monitoring applied by default.',
        },
        {
          label: 'When it is available',
          body: 'Azure Commercial onboarding is available for new workloads and migration candidates following program prioritization. Production cutover dates are coordinated with CST, security assessors, and application owners based on readiness milestones.',
        },
      ],
    },
    {
      id: 'approved-services',
      navLabel: 'Approved Services',
      heading: 'Approved Services',
      type: 'table',
      table: {
        intro:
          'The following Azure Commercial services are approved for CMS Hybrid Cloud workloads. Teams should request exceptions through the architecture review process before provisioning non-listed services.',
        caption: 'Approved Azure Commercial services by category',
        headers: ['Category', 'Approved services'],
        rows: [
          {
            category: 'Compute',
            value: 'Virtual Machines, VM Scale Sets, Azure Kubernetes Service (AKS), Azure Batch',
          },
          {
            category: 'Containers',
            value: 'Azure Container Instances, Azure Container Apps, Azure Container Registry',
          },
          {
            category: 'End-user computing',
            value: 'Azure Virtual Desktop, Windows 365 (where approved by mission owner)',
          },
          {
            category: 'Serverless',
            value: 'Azure Functions, Logic Apps, Event Grid',
          },
          {
            category: 'Automation',
            value: 'Automation Accounts, Update Management, Desired State Configuration',
          },
          {
            category: 'Storage',
            value: 'Blob Storage, Azure Files, Azure NetApp Files, managed disks',
          },
          {
            category: 'Networking',
            value: 'Virtual Network, Azure Firewall, Application Gateway, Private Link, ExpressRoute',
          },
          {
            category: 'Data protection',
            value: 'Azure Backup, Azure Site Recovery, Key Vault',
          },
        ],
      },
    },
    {
      id: 'operational-shared-services',
      navLabel: 'Operational Shared Services',
      heading: 'Operational Shared Services',
      type: 'table',
      table: {
        intro:
          'CMS Hybrid Cloud provides shared operational services across Azure Commercial subscriptions. These services reduce duplicate tooling and align teams to common observability, policy, and security patterns.',
        caption: 'Operational shared services available on Azure Commercial',
        headers: ['Category', 'Shared services'],
        rows: [
          {
            category: 'Monitoring & logging',
            value: 'Azure Monitor, Log Analytics, Application Insights, Azure Workbooks',
          },
          {
            category: 'Security & compliance',
            value: 'Microsoft Defender for Cloud, Azure Policy, Microsoft Sentinel (where enabled)',
          },
          {
            category: 'Identity & access',
            value: 'Microsoft Entra ID integration, Privileged Identity Management patterns, RBAC baselines',
          },
          {
            category: 'Cost management',
            value: 'Cost Management + Billing, tagging enforcement, FinOps reporting dashboards',
          },
          {
            category: 'Backup & recovery',
            value: 'Centralized backup policies, recovery vault standards, retention baselines',
          },
          {
            category: 'Automation & DevOps',
            value: 'Azure DevOps integration, pipeline templates, infrastructure-as-code guardrails',
          },
          {
            category: 'Networking',
            value: 'Hub-spoke connectivity, DNS standards, firewall rule review workflows',
          },
          {
            category: 'Support',
            value: 'CST engagement, office hours, escalation paths, incident coordination',
          },
        ],
      },
    },
    {
      id: 'getting-started',
      navLabel: 'Getting Started',
      heading: 'Getting Started',
      type: 'prose',
      paragraphs: [
        'Review prerequisites including EUA access, funding vehicle approval, and application classification before submitting a hosting request. Document integration points, data sensitivity, and operational requirements in the intake form.',
        'Coordinate with your Customer Service Team to schedule discovery, sandbox provisioning, and security assessment milestones. Use approved landing zone patterns and shared services rather than building isolated operational stacks.',
        'When your workload is ready for production, complete the cutover checklist with your CST and security partners. Ongoing changes to approved services or architecture should follow the standard architecture review process.',
      ],
      links: [
        { label: 'Contact the Customer Support Team', href: '/explore#getting-started' },
        { label: 'Get started with CMS Hybrid Cloud', href: '/explore#getting-started' },
      ],
    },
  ],
  lastUpdated: 'June 1, 2025',
}

const platformArticles: PlatformArticlePage[] = [azureCommercialArticle]

export function getPlatformArticleBySlug(slug: string): PlatformArticlePage | undefined {
  return platformArticles.find((page) => page.slug === slug)
}

export const platformArticleSlugs = new Set(platformArticles.map((page) => page.slug))
