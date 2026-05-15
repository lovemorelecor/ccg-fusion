import { SkipNav } from '@cmsgov/design-system'
import { useEffect, useRef } from 'react'
import { SiteHeader } from '../components/SiteHeader'

const initiatives = [
  {
    num: '01',
    tag: 'Product',
    tagGradient: 'linear-gradient(135deg, #2b7fff 0%, #615fff 100%)',
    title: 'Product Showcase',
    description:
      'Enhance the product showcase experience to streamline showcasing demos of applications that utilize our application programming interfaces, fostering better understanding and adoption.',
  },
  {
    num: '02',
    tag: 'AWS',
    tagGradient: 'linear-gradient(135deg, #615fff 0%, #ad46ff 100%)',
    title: 'AWS Commercial',
    description:
      'Migrate applications to AWS Commercial cloud for improved scalability and performance.',
  },
  {
    num: '03',
    tag: 'Azure',
    tagGradient: 'linear-gradient(135deg, #ad46ff 0%, #f6339a 100%)',
    title: 'Azure Commercial',
    description:
      'Expand cloud infrastructure capabilities through Azure Commercial integration.',
  },
  {
    num: '04',
    tag: 'Azure',
    tagGradient: 'linear-gradient(135deg, #f6339a 0%, #ff2056 100%)',
    title: 'Azure GCC High',
    description:
      'Implement Azure Government Cloud solutions for enhanced security compliance.',
  },
  {
    num: '05',
    tag: 'AWS',
    tagGradient: 'linear-gradient(135deg, #00b8db 0%, #2b7fff 100%)',
    title: 'AWS Govcloud',
    description:
      'Deploy government-specific cloud infrastructure using AWS GovCloud services.',
  },
  {
    num: '06',
    tag: 'Oracle',
    tagGradient: 'linear-gradient(135deg, #ff6900 0%, #fe9a00 100%)',
    title: 'Oracle Cloud (EOM)',
    description:
      'Manage end-of-migration activities for Oracle Cloud infrastructure transition.',
  },
  {
    num: '07',
    tag: 'Google',
    tagGradient: 'linear-gradient(135deg, #00bc7d 0%, #00bba7 100%)',
    title: 'Google Cloud (EOM)',
    description:
      'Complete migration and optimization of Google Cloud infrastructure.',
  },
]

const timeline = [
  {
    quarter: 'Q1',
    year: '2026',
    items: ['Product Showcase', 'AWS Commercial'],
    gradient: 'linear-gradient(135deg, #003a8f, #005ea2)',
  },
  {
    quarter: 'Q2',
    year: '2026',
    items: ['Azure Commercial', 'AWS GovCloud'],
    gradient: 'linear-gradient(135deg, #005ea2, #0076d6)',
  },
  {
    quarter: 'Q3',
    year: '2026',
    items: ['Azure GCC High'],
    gradient: 'linear-gradient(135deg, #0076d6, #ffb81c)',
  },
  {
    quarter: 'Q4',
    year: '2026',
    items: ['Oracle Cloud EOM', 'Google Cloud EOM'],
    gradient: 'linear-gradient(135deg, #ffb81c, #2e8540)',
  },
]

const whatsHappening = [
  {
    date: 'FALL 2024',
    title: 'Customer Survey Snapshot',
    description:
      'Get a snapshot of the results from the CMS Hybrid Cloud customer survey to help drive continuous improvement.',
    cta: 'Read more',
    borderColor: '#005ea2',
  },
  {
    date: 'FALL 2024',
    title: '2025 Infrastructure Capacity Planning',
    description:
      "Learn about the 2025 infrastructure capacity planning process and how to submit your application's capacity needs.",
    cta: 'Read more',
    borderColor: '#005ea2',
  },
  {
    date: 'ONGOING',
    title: 'Office Hours',
    description:
      'Join us for weekly office hours every Thursday from 2-3 PM ET to get your questions answered.',
    cta: 'Join now',
    borderColor: '#ffb81c',
  },
]

const learnConnectLinks = [
  { label: 'Team Support', icon: 'headset' },
  { label: 'Tools', icon: 'wrench' },
  { label: 'Events', icon: 'calendar' },
  { label: 'Training', icon: 'graduation' },
]

const gettingStartedCards = [
  {
    title: 'Ready to get started?',
    description:
      'Request access to CMS Hybrid Cloud and start building your application on our secure, compliant infrastructure.',
    cta: 'Request to use CMS Hybrid Cloud',
    ctaType: 'button' as const,
  },
  {
    title: 'Want to migrate?',
    description:
      'Already have an application? Learn how to migrate your existing workloads to CMS Hybrid Cloud with our migration guides.',
    cta: 'Sign up to get set up',
    ctaType: 'link' as const,
  },
  {
    title: 'Have more questions?',
    description:
      'A Hosting Coordinator can help answer questions and guide you through the process of getting started.',
    cta: 'Learn more',
    ctaType: 'link' as const,
  },
]

const cmsWebsites = [
  'CMS.gov',
  'MyMedicare.gov',
  'Medicare.gov',
  'Medicaid.gov',
  'CMS.gov',
  'HHS.gov',
]

const additionalResources = [
  'CMS Design System',
  'Inspector General',
  'The Act Act',
  'Plain Writing',
  'USA.gov',
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const elements = container.querySelectorAll('.kc-reveal')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('kc-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('kc-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

function LearnIcon({ type }: { type: string }) {
  if (type === 'headset') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.5} aria-hidden>
        <path d="M3 18v-6a9 9 0 0118 0v6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (type === 'wrench') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.5} aria-hidden>
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (type === 'calendar') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.5} aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.5} aria-hidden>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function InitiativesPage() {
  const revealRef = useScrollReveal()

  return (
    <>
      <SkipNav href="#main-content">Skip to main content</SkipNav>
      <SiteHeader />

      <main id="main-content" tabIndex={-1} ref={revealRef}>
        {/* Breadcrumb Bar */}
        <div className="kc-breadcrumb-bar">
          <nav aria-label="Breadcrumb" className="kc-breadcrumb-inner">
            <ol className="kc-breadcrumb-list">
              <li>
                <a href="/" className="kc-breadcrumb-link">Home</a>
              </li>
              <li aria-hidden="true" className="kc-breadcrumb-sep">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
              <li>
                <a href="#" className="kc-breadcrumb-link">Infrastructure</a>
              </li>
              <li aria-hidden="true" className="kc-breadcrumb-sep">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </li>
              <li>
                <span className="kc-breadcrumb-current">Initiatives</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="init-hero">
          <img
            src="/images/initiatiaves-hero2.png"
            alt=""
            className="init-hero__bg-img"
            decoding="async"
            fetchPriority="high"
          />
          <div className="init-hero__scrim" aria-hidden />
          <div className="init-hero__orb init-hero__orb--1" aria-hidden />
          <div className="init-hero__orb init-hero__orb--2" aria-hidden />
          <div className="init-hero__orb init-hero__orb--3" aria-hidden />

          <div className="init-hero__inner">
            <div className="init-hero__text">
              <h1 className="init-hero__heading">
                Infrastructure Hosting{' '}
                <span className="init-hero__heading-accent">Initiatives</span>
              </h1>
              <p className="init-hero__description">
                The CMS Hybrid Cloud Infrastructure Hosting Team has a number of initiatives
                planned for 2026, focusing on cloud migration, infrastructure optimization,
                and enhanced service delivery.
              </p>
              <div className="init-hero__actions">
                <a href="#initiatives" className="init-btn init-btn--gold">
                  View All Initiatives
                  <ArrowIcon />
                </a>
                <a href="#contact" className="init-btn init-btn--outline">
                  Contact Team
                </a>
              </div>
            </div>
          </div>

          <div className="init-hero__stats">
            <div className="init-hero__stats-inner">
              <div className="init-hero__stat">
                <span className="init-hero__stat-number">7</span>
                <span className="init-hero__stat-label">Active Initiatives</span>
              </div>
              <div className="init-hero__stat">
                <span className="init-hero__stat-number">4</span>
                <span className="init-hero__stat-label">Cloud Platforms</span>
              </div>
              <div className="init-hero__stat">
                <span className="init-hero__stat-number">Q4</span>
                <span className="init-hero__stat-label">Target Completion</span>
              </div>
              <div className="init-hero__stat">
                <span className="init-hero__stat-number">01</span>
                <span className="init-hero__stat-label">Zero Trust</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <div className="kc-content">
          {/* 2026 Initiatives Section */}
          <section className="kc-section kc-reveal" id="initiatives">
            <h2 className="kc-section-heading">2026 Initiatives</h2>
            <p className="kc-section-subtitle">
              Our strategic initiatives for 2026 focus on expanding cloud capabilities,
              improving infrastructure resilience, and delivering enhanced services to our stakeholders.
            </p>
            <div className="init-cards-grid">
              {initiatives.map((item) => (
                <div key={item.num} className="init-card">
                  <span className="init-card__num">{item.num}</span>
                  <div className="init-card__tag">
                    <span className="init-card__tag-dot" style={{ background: item.tagGradient }} />
                    <span className="init-card__tag-text">{item.tag}</span>
                  </div>
                  <h3 className="init-card__title">{item.title}</h3>
                  <p className="init-card__body">{item.description}</p>
                  <a href="#" className="init-card__cta">
                    Learn more
                    <ArrowIcon />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="kc-section kc-reveal">
            <h2 className="kc-section-heading">Consolidated Initiative Timeline</h2>
            <p className="kc-section-subtitle">
              Track our progress throughout the year
            </p>
            <div className="init-timeline">
              <div className="init-timeline__bar" />
              <div className="init-timeline__quarters">
                {timeline.map((q) => (
                  <div key={q.quarter} className="init-timeline__quarter">
                    <div className="init-timeline__badge" style={{ background: q.gradient }}>
                      <span className="init-timeline__badge-q">{q.quarter}</span>
                      <span className="init-timeline__badge-year">{q.year}</span>
                    </div>
                    <div className="init-timeline__card">
                      {q.items.map((item) => (
                        <div key={item} className="init-timeline__item">
                          <span className="init-timeline__dot" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What's Happening Section */}
          <section className="kc-section kc-reveal">
            <h2 className="kc-section-heading">What&rsquo;s Happening?</h2>
            <p className="kc-section-subtitle">
              Stay informed with the latest updates and opportunities
            </p>
            <div className="init-happening">
              {whatsHappening.map((item) => (
                <div key={item.title} className="init-happening__card" style={{ borderLeftColor: item.borderColor }}>
                  <span className="init-happening__date">{item.date}</span>
                  <h3 className="init-happening__title">{item.title}</h3>
                  <p className="init-happening__body">{item.description}</p>
                  <a href="#" className="init-happening__cta">
                    {item.cta}
                    <ArrowIcon />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Learn & Connect */}
          <section className="kc-section kc-reveal">
            <div className="init-bottom-grid">
              <div className="init-learn">
                <div className="init-learn__icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.5} aria-hidden>
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="init-learn__heading">Learn &amp; Connect</h2>
                <p className="init-learn__description">
                  Access training, tools, and collaboration opportunities to support your infrastructure journey.
                </p>
                <div className="init-learn__links">
                  {learnConnectLinks.map((link) => (
                    <a key={link.label} href="#" className="init-learn__link">
                      <LearnIcon type={link.icon} />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="init-get-started" id="contact">
                <h2 className="init-get-started__heading">Get Started</h2>
                <div className="init-get-started__steps">
                  <div className="init-step">
                    <div className="init-step__num">1</div>
                    <div className="init-step__content">
                      <h3 className="init-step__title">Explore Resources</h3>
                      <p className="init-step__desc">Review documentation and guidelines</p>
                    </div>
                  </div>
                  <div className="init-step">
                    <div className="init-step__num">2</div>
                    <div className="init-step__content">
                      <h3 className="init-step__title">Connect with Team</h3>
                      <p className="init-step__desc">Join office hours or reach out directly</p>
                    </div>
                  </div>
                  <div className="init-step">
                    <div className="init-step__num">3</div>
                    <div className="init-step__content">
                      <h3 className="init-step__title">Start Your Journey</h3>
                      <p className="init-step__desc">Begin migration and modernization</p>
                    </div>
                  </div>
                </div>
                <a href="#" className="init-btn init-btn--primary init-btn--full">
                  Contact Us
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Getting Started Section */}
        <section className="kc-getting-started kc-reveal">
          <div className="kc-getting-started__bg-orb kc-getting-started__bg-orb--gold" />
          <div className="kc-getting-started__bg-orb kc-getting-started__bg-orb--blue" />
          <div className="kc-getting-started__inner">
            <h2 className="kc-getting-started__heading">Getting started with CMS Hybrid Cloud</h2>
            <div className="kc-getting-started__grid">
              {gettingStartedCards.map((card) => (
                <div key={card.title} className="kc-glass-card">
                  <h3 className="kc-glass-card__title">{card.title}</h3>
                  <p className="kc-glass-card__body">{card.description}</p>
                  {card.ctaType === 'button' ? (
                    <a href="#" className="kc-glass-card__cta-btn">{card.cta}</a>
                  ) : (
                    <a href="#" className="kc-glass-card__cta-link">
                      {card.cta}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Links */}
        <section className="kc-footer-links kc-reveal">
          <div className="kc-footer-links__inner">
            <div className="kc-footer-links__col">
              <h3 className="kc-footer-links__heading">CMS &amp; HHS Websites</h3>
              <ul className="kc-footer-links__list">
                {cmsWebsites.map((site, i) => (
                  <li key={`${site}-${i}`}>
                    <a href="#" className="kc-footer-links__link">{site}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="kc-footer-links__col">
              <h3 className="kc-footer-links__heading">Additional resources</h3>
              <ul className="kc-footer-links__list">
                {additionalResources.map((resource) => (
                  <li key={resource}>
                    <a href="#" className="kc-footer-links__link">{resource}</a>
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
