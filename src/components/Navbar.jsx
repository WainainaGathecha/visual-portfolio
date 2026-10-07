import data from '../data/portfolioData.json';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';

const {brand, nav} = data;

// only show links for sections that are switched on in the Json
const links = nav.links.filter((link) => data[link.id]?.enabled !==false);
const SECTION_IDS = links.map((link) => link.id);

export default function Navbar() {
    const active = useActiveSection(SECTION_IDS);

    return (
        <header className='sticky top-0 z-50 border-b border-brand-forest/15 bg-brand-light-bg/80 backdrop-blur-md dark:border-brand-forest dark:bg-brand-dark-bg/80'>
            <nav
                aria-label='Primary'
                className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-5 py-3 md:flex-nowrap md:py-4'
            >
                <a href="#top" className='font-display text-lg font-semibold tracking-tight'>
                    {brand.short}
                </a>

                {/* mobile: drops to its own full-width row. Desktop: sits between brand and actions */}
                <ul className='order-last flex w-full items-center justify-between md:order-none md:w-auto md:gap-8'>
                    {links.map((link) => (
                        <li key={link.id}>
                            <a 
                                href={`#${link.id}`}
                                aria-current={active === link.id ? 'location' : undefined}
                                className='text-xs font-medium text-brand-dark-bg/60 transition-colors hover:text-brand-dark-bg aria-[current=location]:text-brand-forest md:text-sm dark:text-brand-light-bg/60 dark:hover:text-brand-light-bg dark:aria[current=location]:text-brand-lime-accent'
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='flex items-center gap-3'>
                    <ThemeToggle />
                    <a href={nav.cta.href} className='interactive-button-click rounded-xl bg-brand-forest px-4 py-2 text-sm font-semibold text-brand-light-bg dark:bg-brand-lime-accent dark:text-brand-dark-bg'>
                        {nav.cta.label}
                    </a>

                </div>
            </nav>
        </header>
    );
}