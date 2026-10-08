export default function Tag({ children }) {
  return (
    <span className="rounded-md border border-brand-forest/25 px-2 py-0.5 font-mono text-[11px] dark:border-brand-forest dark:text-brand-light-bg/80">
      {children}
    </span>
  );
}
