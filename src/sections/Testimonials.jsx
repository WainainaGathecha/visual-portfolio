import { Building2, Star } from 'lucide-react';
import data from '../data/portfolioData.json';
import Card from '../components/Card';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';

const { testimonials } = data;

export default function Testimonials() {
  if (!testimonials.enabled || testimonials.items.length === 0) return null;

  return (
    <Section id="testimonials">
      <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} />

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <li key={item.id} className="flex">
            <Card className="flex w-full flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest">
                  <Building2 className="size-4" aria-hidden="true" />
                  {item.company}
                </span>
                <span role="img" aria-label={`${item.rating} out of 5 stars`} className="flex gap-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      className={`size-3.5 ${
                        i < item.rating
                          ? 'fill-brand-forest text-brand-forest dark:fill-brand-lime-accent dark:text-brand-lime-accent'
                          : 'text-brand-forest/30'
                      }`}
                    />
                  ))}
                </span>
              </div>

              <blockquote className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote>

              <div className="mt-auto flex items-center gap-3">
                {item.avatar ? (
                  <img
                    src={item.avatar}
                    alt=""
                    width="40"
                    height="40"
                    loading="lazy"
                    className="size-10 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full bg-brand-forest text-sm font-semibold text-brand-light-bg"
                  >
                    {item.name.charAt(0)}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-brand-dark-bg/70 dark:text-brand-light-bg/70">{item.role}</p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
