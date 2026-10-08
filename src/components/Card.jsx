// `interactive` adds the lift-on-hover effect; use only for clickable or showcase cards.
export default function Card({ interactive = false, className = '', children }) {
  return (
    <div
      className={`rounded-xl border border-brand-forest/15 bg-brand-forest/5 p-6 dark:border-brand-forest dark:bg-brand-forest/20 ${
        interactive ? 'bento-card-transition' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
