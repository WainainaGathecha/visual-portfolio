const base =
  'interactive-button-click inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold';

const variants = {
  primary:
    'bg-brand-forest text-brand-light-bg dark:bg-brand-lime-accent dark:text-brand-dark-bg',
  outline:
    'border border-brand-forest text-brand-forest dark:border-brand-lime-accent/50 dark:text-brand-light-bg',
};

export default function Button({
  href,
  variant = 'primary',
  external = false,
  className = '',
  children,
  ...rest
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
