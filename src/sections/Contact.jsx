import { ArrowRight } from 'lucide-react';
import data from '../data/portfolioData.json';
import Button from '../components/Button';
import Card from '../components/Card';
import Section from '../components/Section';

const { contact } = data;

// Prefer email; fall back to the first social profile; hide the button if neither exists.
const primaryHref = contact.email
  ? `mailto:${contact.email}`
  : contact.socials.find((social) => social.url)?.url;

export default function Contact() {
  return (
    <Section id="contact" className="pt-0 md:pt-0">
      <Card className="px-6 py-14 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">{contact.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-dark-bg/70 dark:text-brand-light-bg/70">
          {contact.body}
        </p>

        {primaryHref && (
          <Button href={primaryHref} external={primaryHref.startsWith('http')} className="mt-8">
            {contact.cta.label}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        )}

        {contact.email && (
          <p className="mt-5">
            <a
              href={`mailto:${contact.email}`}
              className="font-mono text-sm text-brand-forest underline underline-offset-4 dark:text-brand-lime-accent"
            >
              {contact.email}
            </a>
          </p>
        )}
      </Card>
    </Section>
  );
}
