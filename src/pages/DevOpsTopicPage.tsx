import { SkipNav } from '@cmsgov/design-system'
import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/SiteHeader'

const heroStats = [
  { value: '10', label: 'Services Available' },
  { value: 'CI/CD', label: 'Automation' },
  { value: '24/7', label: 'Monitoring' },
]

const devOpsTopics: {
  title: string
  description: string
  icon: 'blue' | 'teal' | 'gold' | 'green'
  to?: string
}[] = [
  {
    title: 'Introduction to AWS Service Catalog',
    description:
      'Learn how to use AWS Service Catalog to create and manage approved catalogs of IT services for use on CMS Hybrid Cloud.',
    icon: 'blue',
  },
  {
    title: 'DevOps Services for MAG',
    description:
      'Comprehensive DevOps services and tools specifically designed for Medicare Advantage Group (MAG) applications.',
    icon: 'teal',
  },
  {
    title: 'Maven Integration for DevOps',
    description:
      'Maven plugin designed to streamline the integration of Maven builds with CMS Hybrid Cloud CI/CD pipelines.',
    icon: 'gold',
    to: '/learn/knowledge-center/devops/maven-integration',
  },
  {
    title: 'CI/CD',
    description:
      'Continuous Integration and Continuous Deployment pipelines, automation tools, and best practices for efficient software delivery.',
    icon: 'blue',
  },
  {
    title: 'Distributed Load Testing (DLTA)',
    description:
      'Scalable load testing framework to simulate real-world traffic patterns and ensure your applications can handle peak loads.',
    icon: 'teal',
  },
  {
    title: 'JFrog Platform',
    description:
      'Manage and store your build artifacts securely with JFrog Artifactory integration for version control and distribution.',
    icon: 'green',
  },
  {
    title: 'Selenium Box',
    description:
      'Automated browser testing framework for web applications with Selenium WebDriver integration and best practices.',
    icon: 'gold',
  },
  {
    title: 'Snyk',
    description:
      'Security vulnerability scanning and dependency management to identify and fix security issues in your code and dependencies.',
    icon: 'blue',
  },
  {
    title: 'SonarQube',
    description:
      'Code quality and security analysis platform for continuous inspection of code quality and technical debt management.',
    icon: 'teal',
  },
  {
    title: 'Testing as a Service (TaaS)',
    description:
      'Cloud-based testing services providing comprehensive test automation, performance testing, and quality assurance.',
    icon: 'green',
  },
]

const relatedResources = [
  {
    title: 'DevOps Best Practices',
    description: 'Learn industry-standard DevOps practices and methodologies.',
    cta: 'Read guide',
    href: '#',
  },
  {
    title: 'Security Guidelines',
    description: 'Ensure your DevOps pipeline meets security requirements.',
    cta: 'View policies',
    href: '#',
  },
  {
    title: 'Getting Help',
    description: 'Contact our support team for DevOps assistance.',
    cta: 'Contact support',
    href: '#',
  },
]

const cmsWebsites = ['CMS.gov', 'MyMedicare.gov', 'Medicare.gov', 'Medicaid.gov', 'CMS.gov', 'HHS.gov']

const additionalResources = [
  'CMS Design System',
  'Inspector General',
  'The Act Act',
  'Plain Writing',
  'USA.gov',
]

function TopicIcon({ variant }: { variant: 'blue' | 'teal' | 'gold' | 'green' }) {
  return <div className={`ktd-topic-card__icon ktd-topic-card__icon--${variant}`} aria-hidden />
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function DevOpsTopicPage() {
  return (
    <>
      <SkipNav href="#main-content">Skip to main content</SkipNav>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <div className="ktd-breadcrumb-bar">
          <nav aria-label="Breadcrumb" className="ktd-breadcrumb-inner">
            <ol className="ktd-breadcrumb-list">
              <li>
                <Link to="/" className="ktd-breadcrumb-link">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="ktd-breadcrumb-sep">
                <ChevronRight />
              </li>
              <li>
                <Link to="/learn/knowledge-center" className="ktd-breadcrumb-link">
                  Knowledge Center
                </Link>
              </li>
              <li aria-hidden="true" className="ktd-breadcrumb-sep">
                <ChevronRight />
              </li>
              <li>
                <span className="ktd-breadcrumb-current">DevOps</span>
              </li>
            </ol>
          </nav>
        </div>

        <section className="ktd-hero">
          <div className="ktd-hero__inner">
            <h1 className="ktd-hero__title">DevOps</h1>
            <p className="ktd-hero__lead">
              DevOps brings together development and operations teams to improve collaboration and productivity by
              automating infrastructure, workflows, and continuously measuring application performance. Explore our
              comprehensive suite of DevOps tools and services designed for CMS Hybrid Cloud.
            </p>
            <div className="ktd-hero__stats">
              {heroStats.map((s) => (
                <div key={s.label} className="ktd-hero__stat">
                  <span className="ktd-hero__stat-value">{s.value}</span>
                  <span className="ktd-hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ktd-body">
          <div className="ktd-body__inner">
            <div className="ktd-pill">
              <span className="ktd-pill__dot" aria-hidden />
              <span className="ktd-pill__text">DevOps Services &amp; Tools</span>
            </div>
            <h2 className="ktd-section-title">Explore DevOps Topics</h2>
            <p className="ktd-section-lead">
              Select a topic below to learn more about each DevOps service, including setup guides, best practices, and
              integration instructions for CMS Hybrid Cloud.
            </p>

            <div className="ktd-topics-grid">
              {devOpsTopics.map((topic) => {
                const inner = (
                  <>
                    <TopicIcon variant={topic.icon} />
                    <div className="ktd-topic-card__body">
                      <h3 className="ktd-topic-card__title">{topic.title}</h3>
                      <p className="ktd-topic-card__desc">{topic.description}</p>
                      <span className="ktd-topic-card__cta">
                        Learn more
                        <ChevronRight className="ktd-topic-card__cta-icon" />
                      </span>
                    </div>
                  </>
                )
                return topic.to ? (
                  <Link key={topic.title} to={topic.to} className="ktd-topic-card">
                    {inner}
                  </Link>
                ) : (
                  <a key={topic.title} href="#" className="ktd-topic-card">
                    {inner}
                  </a>
                )
              })}
            </div>

            <div className="ktd-cta-panel">
              <div className="ktd-cta-panel__glow" aria-hidden />
              <div className="ktd-cta-panel__content">
                <h2 className="ktd-cta-panel__title">Ready to start with DevOps?</h2>
                <p className="ktd-cta-panel__text">
                  Get started with our DevOps services and streamline your development workflow on CMS Hybrid Cloud.
                </p>
                <div className="ktd-cta-panel__actions">
                  <a href="#" className="ktd-cta-panel__btn">
                    Request Access
                  </a>
                  <a href="#" className="ktd-cta-panel__link">
                    View Documentation
                    <ChevronRight className="ktd-cta-panel__link-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="ktd-related">
          <div className="ktd-related__inner">
            <h2 className="ktd-section-title ktd-related__heading">Related Resources</h2>
            <div className="ktd-related__grid">
              {relatedResources.map((r) => (
                <a key={r.title} href={r.href} className="ktd-related-card">
                  <h3 className="ktd-related-card__title">{r.title}</h3>
                  <p className="ktd-related-card__desc">{r.description}</p>
                  <span className="ktd-related-card__cta">
                    {r.cta}
                    <ChevronRight className="ktd-related-card__cta-icon" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="kc-footer-links">
          <div className="kc-footer-links__inner">
            <div className="kc-footer-links__col">
              <h3 className="kc-footer-links__heading">CMS &amp; HHS Websites</h3>
              <ul className="kc-footer-links__list">
                {cmsWebsites.map((site, i) => (
                  <li key={`${site}-${i}`}>
                    <a href="#" className="kc-footer-links__link">
                      {site}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="kc-footer-links__col">
              <h3 className="kc-footer-links__heading">Additional resources</h3>
              <ul className="kc-footer-links__list">
                {additionalResources.map((resource) => (
                  <li key={resource}>
                    <a href="#" className="kc-footer-links__link">
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
