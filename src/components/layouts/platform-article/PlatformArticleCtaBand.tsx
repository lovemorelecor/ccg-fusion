import { FusionButton } from '../../FusionButton'

function CtaIconCloud() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 18h9.5a3.5 3.5 0 0 0 .2-7A4.8 4.8 0 0 0 7.4 8.5 3.5 3.5 0 0 0 7 18Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function CtaIconNews() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CtaIconSupport() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 10v4a2 2 0 0 0 2 2h1v3l3.5-3H17a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function PlatformArticleCtaBand() {
  return (
    <section className="pa-cta-band" aria-labelledby="pa-cta-band-heading">
      <div className="pa-cta-band__inner">
        <h2 id="pa-cta-band-heading" className="sr-only">
          Next steps
        </h2>
        <div className="pa-cta-band__grid">
          <article className="pa-cta-card">
            <span className="pa-cta-card__icon" aria-hidden>
              <CtaIconCloud />
            </span>
            <h3 className="pa-cta-card__title">Ready to get started?</h3>
            <p className="pa-cta-card__body">
              Request access to Azure Commercial and align your team with CST onboarding milestones.
            </p>
            <FusionButton href="/explore#getting-started" accent onDark className="pa-cta-card__btn">
              Request to use Azure Commercial
            </FusionButton>
          </article>

          <article className="pa-cta-card">
            <span className="pa-cta-card__icon" aria-hidden>
              <CtaIconNews />
            </span>
            <h3 className="pa-cta-card__title">Want updates?</h3>
            <p className="pa-cta-card__body">
              Follow program announcements, roadmap changes, and enablement releases.
            </p>
            <FusionButton href="/explore#whats-happening" variation="ghost" onDark className="pa-cta-card__btn pa-cta-card__btn--link">
              Go to News
            </FusionButton>
          </article>

          <article className="pa-cta-card">
            <span className="pa-cta-card__icon" aria-hidden>
              <CtaIconSupport />
            </span>
            <h3 className="pa-cta-card__title">Have questions?</h3>
            <p className="pa-cta-card__body">
              Connect with the Customer Service Team for platform guidance and support paths.
            </p>
            <FusionButton href="/explore#learn-connect" variation="ghost" onDark className="pa-cta-card__btn pa-cta-card__btn--link">
              Contact us
            </FusionButton>
          </article>
        </div>
      </div>
    </section>
  )
}
