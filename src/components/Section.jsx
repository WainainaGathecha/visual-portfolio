// Shared wrapper: consistent width, padding and the id the navbar links to.
export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}
