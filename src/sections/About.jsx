import data from '../data/portfolioData.json';
import Card from '../components/Card';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

const { about } = data;
const stats = about.stats.enabled ? about.stats.items.filter((item) => item.value) : [];

export default function About() {
  if (about.enabled === false) return null;

  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <SectionHeader eyebrow={about.eyebrow} title={about.title} />
          <p className="mt-5 max-w-xl leading-relaxed text-brand-dark-bg/70 dark:text-brand-light-bg/70">
            {about.body}
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-brand-forest dark:text-brand-lime-accent">
            {about.processTitle}
          </p>
          <ol className="mt-3 grid gap-3 sm:grid-cols-3">
            {about.process.map((item) => (
              <li key={item.step}>
                <Card className="h-full p-4">
                  <span className="font-mono text-[11px] text-brand-forest dark:text-brand-lime-accent">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-dark-bg/70 dark:text-brand-light-bg/70">
                    {item.description}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {stats.length > 0 && (
        <Card className="mt-12">
          <dl className="grid grid-cols-3 gap-4 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-xs text-brand-dark-bg/70 dark:text-brand-light-bg/70">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-brand-forest md:text-5xl dark:text-brand-lime-accent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Card>
      )}
    </Section>
  );
}
