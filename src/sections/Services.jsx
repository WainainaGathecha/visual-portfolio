import { CodeXml, Gauge, LayoutTemplate, Store } from 'lucide-react';
import data from '../data/portfolioData.json';
import Card from '../components/Card';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Tag from '../components/Tag';

// turn json icon names into components
const ICONS = { layout: LayoutTemplate, code: CodeXml, gauge: Gauge, store: Store};

const {services} = data;

export default function Services() {
    if (services.enabled === false ) return null;

    return (
    <Section id="services">
      <SectionHeader eyebrow={services.eyebrow} title={services.title} />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.id} className="flex">
              <Card interactive className="flex w-full flex-col gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-lime-accent/30 text-brand-forest dark:bg-brand-forest dark:text-brand-lime-accent">
                  {Icon && <Icon className="size-5" aria-hidden="true" />}
                </span>
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-dark-bg/70 dark:text-brand-light-bg/70">
                  {item.description}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
