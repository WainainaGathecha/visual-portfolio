import { ArrowRight} from 'lucide-react';
import data from '../data/portfolioData.json';
import Button from '../components/Button';

const { hero } = data

export default function Hero() {
    return (
        <section className='mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-2 md:pb-28 md:pt-20'>
            <div>
                <p className='mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest'>
                    <span aria-hidden='true' className='h-0.5 w-3 bg-brand-forest dark:bg-brand-lime-accent'/>
                    {hero.eyebrow}

                </p>

                <h1 className='text-4xl font-extrabold leading-[1.1] md:text-5xl'>
                    {hero.title}
                </h1>

                <p className='mt-5 max-w-xl text-base leading-relaxed text-brand-dark-bg/70 dark:text-brand-light-bg/70'>
                    {hero.subtitle}

                </p>

                <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                    <Button href={hero.primaryCta.href} className='w-full sm:w-auto'>
                        <ArrowRight className='size-4' aria-hidden='true'/>
                    </Button>
                    <Button href={hero.secondaryCta.href} variant='outline' download className='w-full sm:w-auto'>
                        {hero.secondaryCta.label}
                    </Button>
                </div>
            </div>

            {hero.image && (
                <div className='relative'>
                    <div
                        aria-hidden='true'
                        className='absolute inset-0 translate-x-2 translate-y-2 rounded-xl border border-brand-forest dark:border-brand-lime-accent'
                    />

                    <img 
                        src={hero.image.src}
                        alt={hero.image.alt}
                        width={hero.image.width}
                        height={hero.image.height}
                        fetchPriority='high'
                        decoding='async'
                        className='relative aspect-square w-full rounded-xl bg-brand-forest/10 object-cover' />
                </div>
            )}

        </section>
    );
}