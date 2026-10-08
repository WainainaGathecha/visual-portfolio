import data from '../data/portfolioData.json';
import {navLinks} from '../utils/navLinks';
import SocialIcon from './SocialIcon';

const {brand, footer, contact} = data;

// skip socials with no url
const socials = contact.socials.filter((social) => social.url);

export default function Footer() {
    return (
        <footer className='border-t border-brand-forest/15 dark:border-brand-forest'>
            <div className='mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10'>
                <div className='flex items-center justify-between'>
                    <a href="#top" className='font-display text-lg font-extrabold tracking-tight'>
                        {brand.short}

                    </a>
                    {socials.length > 0 && (
                        <ul className='flex items-center gap-4'>
                            {socials.map((social) => (
                                <li key={social.id}>
                                    <a href={social.url}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className='grid size-9 place-items-center rounded-xl text-brand-dark-bg/60 transistion-colors hover:text-brand-forest dark:text-brand-light-bg/60 dark:hover:text-brand-lime-accent'>
                                            <SocialIcon name={social.id} />

                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Mobile order : links, then copyright. Desktop: copyright left links right */}
                <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
                    <p className='order-last text-xs text-brand-dark-bg/60 md:order-first dark:text-brand-light-bg/60'>
                        &copy; { new Date().getFullYear()} {footer.copyright}
                    </p>

                    <nav aria-label='Footer'>
                        <ul className='flex items-center justify-between gap-6 md:justify-end md:gap-8'>
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={`#${link.id}`} className='text-xs font-medium text-brand-dark-bg/60 transition-colors hover:text-brand-dark-bg dark:text-brand-light-bg/60 dark:hover:text-brand-lime-accent'>
                                        {link.label}
                                    </a>
                                </li>
                            ))}

                        </ul>

                    </nav>

                </div>
            </div>
        </footer>
    );
}