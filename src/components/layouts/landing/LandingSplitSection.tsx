import { useId, useState } from 'react'
import { FusionButton } from '../../FusionButton'
import { LandingSectionHeader } from './LandingSectionHeader'

export type LandingSplitClassicVariant = {
  id: string
  label: string
  description: string
  type: 'classic'
  reverse?: boolean
  title: string
  body: string
  bullets?: string[]
  cta?: string
  secondaryCta?: string
  mediaLabel: string
}

export type LandingSplitFeatureIcon = 'shield' | 'server' | 'bolt' | 'check'

export type LandingSplitFeature = {
  id: string
  title: string
  body: string
  icon: LandingSplitFeatureIcon
}

export type LandingSplitSpotlightVariant = {
  id: string
  label: string
  description: string
  type: 'spotlight'
  badge: string
  mediaTitle: string
  imageSrc: string
  imageAlt?: string
  features: LandingSplitFeature[]
  cta: { label: string; href: string }
}

export type LandingSplitVariant = LandingSplitClassicVariant | LandingSplitSpotlightVariant

export type LandingSplitSectionProps = {
  id: string
  title: string
  lede: string
  variants: LandingSplitVariant[]
}

function heroImageUrl(imageSrc: string) {
  return `${import.meta.env.BASE_URL}${imageSrc.replace(/^\//, '')}`
}

function SplitFeatureIcon({ icon }: { icon: LandingSplitFeatureIcon }) {
  switch (icon) {
    case 'shield':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3.5 5 6.5v5.8c0 4.1 2.8 7.9 7 9.2 4.2-1.3 7-5.1 7-9.2V6.5L12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'server':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="4" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8" cy="7" r="1" fill="currentColor" />
          <circle cx="8" cy="17" r="1" fill="currentColor" />
        </svg>
      )
    case 'bolt':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M13 2 5 13h6l-1 9 8-11h-6l1-9Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'check':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8.5 12.2 10.8 14.5 15.5 9.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

function LandingSplitClassicBlock({
  variant,
}: {
  variant: LandingSplitClassicVariant
}) {
  const { reverse, title, body, bullets = [], cta, secondaryCta, mediaLabel } = variant

  return (
    <div className={`lpl-split${reverse ? ' lpl-split--reverse' : ''}`}>
      <div className="lpl-split__copy">
        <h3 className="lpl-split__title">{title}</h3>
        <p className="lpl-split__body">{body}</p>
        {bullets.length > 0 ? (
          <ul className="lpl-split__list">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {(cta || secondaryCta) && (
          <div className="lpl-split__actions">
            {cta ? (
              <FusionButton href="#" variation="solid">
                {cta}
              </FusionButton>
            ) : null}
            {secondaryCta ? (
              <FusionButton href="#" variation="ghost" className="ft-btn-secondary">
                {secondaryCta}
              </FusionButton>
            ) : null}
          </div>
        )}
      </div>
      <div className="lpl-split__media" aria-hidden>
        <div className="lpl-split__media-frame">
          <span className="lpl-split__media-label">{mediaLabel}</span>
        </div>
      </div>
    </div>
  )
}

function LandingSplitSpotlightBlock({
  variant,
  headingId,
}: {
  variant: LandingSplitSpotlightVariant
  headingId: string
}) {
  return (
    <article className="lpl-split-spotlight" aria-labelledby={headingId}>
      <div className="lpl-split-spotlight__visual">
        <img
          src={heroImageUrl(variant.imageSrc)}
          alt={variant.imageAlt ?? ''}
          className="lpl-split-spotlight__image"
          decoding="async"
        />
        <div className="lpl-split-spotlight__visual-scrim" aria-hidden />
        <div className="lpl-split-spotlight__visual-copy">
          <span className="lpl-split-spotlight__badge">{variant.badge}</span>
          <h3 id={headingId} className="lpl-split-spotlight__media-title">
            {variant.mediaTitle}
          </h3>
        </div>
      </div>

      <div className="lpl-split-spotlight__panel">
        <ul className="lpl-split-spotlight__features">
          {variant.features.map((feature) => (
            <li key={feature.id} className="lpl-split-spotlight__feature">
              <span className="lpl-split-spotlight__feature-icon" aria-hidden>
                <SplitFeatureIcon icon={feature.icon} />
              </span>
              <div className="lpl-split-spotlight__feature-copy">
                <h4 className="lpl-split-spotlight__feature-title">{feature.title}</h4>
                <p className="lpl-split-spotlight__feature-body">{feature.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <FusionButton href={variant.cta.href} variation="solid" className="lpl-split-spotlight__cta">
          {variant.cta.label}
        </FusionButton>
      </div>
    </article>
  )
}

export function LandingSplitSection({ id, title, lede, variants }: LandingSplitSectionProps) {
  const baseId = useId()
  const [variantId, setVariantId] = useState(variants[0]?.id ?? '')
  const activeVariant = variants.find((variant) => variant.id === variantId) ?? variants[0]
  const panelHeadingId = `${id}-${activeVariant?.id ?? 'split'}-panel-heading`

  if (!activeVariant) return null

  return (
    <section
      id={id}
      className="lpl-section lpl-section--split fusion-section-reveal"
      aria-labelledby={`${id}-heading`}
      tabIndex={-1}
    >
      <div className="lpl-container">
        <LandingSectionHeader title={title} lede={lede} headingId={`${id}-heading`} />

        <div className="lpl-ms-tabs lpl-ms-tabs--split">
          <div className="lpl-ms-tabs__bar" role="tablist" aria-label="Split media spotlight variants">
            {variants.map((variant) => {
              const isSelected = variant.id === activeVariant.id
              return (
                <button
                  key={variant.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-${variant.id}-tab`}
                  aria-selected={isSelected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={isSelected ? 0 : -1}
                  className={`lpl-ms-tabs__tab${isSelected ? ' lpl-ms-tabs__tab--active' : ''}`}
                  onClick={() => setVariantId(variant.id)}
                >
                  {variant.label}
                </button>
              )
            })}
          </div>

          <p className="lpl-split-variant__description">{activeVariant.description}</p>
        </div>
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-${activeVariant.id}-tab`}
        className="lpl-ms-tabs__panel lpl-ms-tabs__panel--split"
      >
        <div className="lpl-container">
          {activeVariant.type === 'spotlight' ? (
            <LandingSplitSpotlightBlock variant={activeVariant} headingId={panelHeadingId} />
          ) : (
            <LandingSplitClassicBlock variant={activeVariant} />
          )}
        </div>
      </div>
    </section>
  )
}
