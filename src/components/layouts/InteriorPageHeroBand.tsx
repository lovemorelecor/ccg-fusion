import type { ReactNode } from 'react'

export type InteriorPageHeroBandProps = {
  breadcrumbs: ReactNode
  pageTitle: string
  pageSubtext: string
  titleId?: string
}

function HeroGlobeDecoration() {
  return (
    <div className="tpl-2col-hero__viz" aria-hidden>
      <svg className="tpl-2col-hero__globe" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="160" cy="160" r="118" stroke="url(#interior-globe-ring)" strokeWidth="1.5" opacity="0.9" />
        <circle cx="160" cy="160" r="88" stroke="url(#interior-globe-ring)" strokeWidth="1" opacity="0.5" />
        <ellipse cx="160" cy="160" rx="118" ry="42" stroke="url(#interior-globe-line)" strokeWidth="1" opacity="0.65" />
        <ellipse cx="160" cy="160" rx="118" ry="72" stroke="url(#interior-globe-line)" strokeWidth="1" opacity="0.45" />
        <ellipse cx="160" cy="120" rx="88" ry="118" stroke="url(#interior-globe-line)" strokeWidth="1" opacity="0.35" transform="rotate(28 160 160)" />
        <ellipse cx="160" cy="200" rx="88" ry="118" stroke="url(#interior-globe-line)" strokeWidth="1" opacity="0.35" transform="rotate(-28 160 160)" />
        <circle cx="160" cy="160" r="6" fill="url(#interior-globe-core)" />
        <circle cx="228" cy="108" r="4" fill="var(--color-primary-light)" opacity="0.9" />
        <circle cx="98" cy="212" r="3" fill="var(--color-accent-primary)" opacity="0.85" />
        <defs>
          <linearGradient id="interior-globe-ring" x1="40" y1="40" x2="280" y2="280">
            <stop stopColor="color-mix(in srgb, var(--color-primary-light) 80%, #ffffff)" />
            <stop offset="1" stopColor="var(--color-primary-light)" />
          </linearGradient>
          <linearGradient id="interior-globe-line" x1="0" y1="0" x2="320" y2="320">
            <stop stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="1" stopColor="var(--color-primary-light)" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="interior-globe-core" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 160) scale(12)">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="var(--color-primary-light)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export function InteriorPageHeroBand({
  breadcrumbs,
  pageTitle,
  pageSubtext,
  titleId = 'interior-hero-title',
}: InteriorPageHeroBandProps) {
  return (
    <header className="tpl-2col-hero-band">
      <div className="tpl-2col-breadcrumb-bar">{breadcrumbs}</div>
      <section className="tpl-2col-hero po-hero" aria-labelledby={titleId}>
        <div className="po-hero__glow" aria-hidden />
        <div className="tpl-2col-hero__frame">
          <div className="tpl-2col-hero__copy">
            <h1 id={titleId} className="tpl-2col-hero__title init-hero__heading">
              {pageTitle}
            </h1>
            <p className="tpl-2col-hero__subtext init-hero__description">{pageSubtext}</p>
          </div>
          <HeroGlobeDecoration />
        </div>
      </section>
    </header>
  )
}
