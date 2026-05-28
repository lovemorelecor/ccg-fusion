import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { InteriorPageHeroBand } from './InteriorPageHeroBand'

export type TwoColumnNavItem = {
  id: string
  label: string
  href?: string
  to?: string
  active?: boolean
  onClick?: () => void
}

export type TwoColumnPageLayoutProps = {
  breadcrumbs: ReactNode
  pageTitle: string
  pageSubtext: string
  navLabel?: string
  navItems: TwoColumnNavItem[]
  contentTitle: string
  children: ReactNode
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NavRow({ item, onNavigate }: { item: TwoColumnNavItem; onNavigate?: () => void }) {
  const className = item.active
    ? 'ddoc-side-nav__row ddoc-side-nav__row--active tpl-2col-nav__row'
    : 'ddoc-side-nav__row tpl-2col-nav__row'

  const label = <span className="ddoc-side-nav__label">{item.label}</span>

  const handleActivate = () => {
    item.onClick?.()
    onNavigate?.()
  }

  if (item.to) {
    return (
      <Link
        to={item.to}
        className={className}
        aria-current={item.active ? 'page' : undefined}
        onClick={onNavigate}
      >
        {label}
      </Link>
    )
  }

  if (item.href) {
    return (
      <a
        href={item.href}
        className={className}
        aria-current={item.active ? 'page' : undefined}
        onClick={onNavigate}
      >
        {label}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={handleActivate}>
      {label}
    </button>
  )
}

export function TwoColumnPageLayout({
  breadcrumbs,
  pageTitle,
  pageSubtext,
  navLabel = 'Section navigation',
  navItems,
  contentTitle,
  children,
}: TwoColumnPageLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1100px)')
    const onChange = () => {
      if (!mq.matches) setMobileNavOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <div className="tpl-2col-shell">
      <InteriorPageHeroBand
        breadcrumbs={breadcrumbs}
        pageTitle={pageTitle}
        pageSubtext={pageSubtext}
        titleId="tpl-2col-hero-title"
      />

        <div className="tpl-2col-body">
          <div className="tpl-2col-body__inner">
            <button
              type="button"
              className="ddoc-mobile-nav-toggle tpl-2col-mobile-toggle"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {navLabel}
              <ChevronRight className={mobileNavOpen ? 'ddoc-mobile-nav-toggle__chev--open' : undefined} />
            </button>

            <div className={`tpl-2col-layout${mobileNavOpen ? ' tpl-2col-layout--nav-open' : ''}`}>
              <aside className="ddoc-sidebar tpl-2col-sidebar" aria-label={navLabel}>
                <div className="ddoc-sidebar__sticky-stack tpl-2col-sidebar__stack">
                  <div className="ddoc-sidebar__card tpl-2col-sidebar__nav-card">
                    <nav className="ddoc-side-nav tpl-2col-nav">
                      {navItems.map((item) => (
                        <NavRow key={item.id} item={item} onNavigate={() => setMobileNavOpen(false)} />
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>

              <article className="tpl-2col-content">
                <header className="tpl-2col-content__header">
                  <h2 className="tpl-2col-content__title">{contentTitle}</h2>
                </header>
                <div className="tpl-2col-content__body">
                  <div className="tpl-2col-content__prose">{children}</div>
                </div>
              </article>
            </div>
          </div>
        </div>
    </div>
  )
}
