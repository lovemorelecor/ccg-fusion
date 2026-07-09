export type LandingSectionHeaderProps = {
  title: string
  lede?: string
  headingId?: string
  className?: string
}

export function LandingSectionHeader({
  title,
  lede,
  headingId,
  className = '',
}: LandingSectionHeaderProps) {
  return (
    <header className={`lpl-section__intro${className ? ` ${className}` : ''}`}>
      <h2 id={headingId} className="lpl-section__title">
        {title}
      </h2>
      {lede ? <p className="lpl-section__lede">{lede}</p> : null}
    </header>
  )
}
