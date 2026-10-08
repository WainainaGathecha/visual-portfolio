export default function SectionHeader({ eyebrow, title }) {
  return (
    <div>
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase tracking-widest text-brand-forest dark:text-brand-lime-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
    </div>
  );
}
