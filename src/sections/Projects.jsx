import { ExternalLink } from "lucide-react";
import data from '../data/portfolioData.json';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import Tag from '../components/Tag';

const { projects } = data;
const featured = projects.items.filter((project) => project.featured);

const STATUS_LABELS = { 'in-progress': 'In progress', planned: 'Planned'};

export default function Projects() {
    if (projects.enabled === false) return null;

    return (
        <Section id='projects'>
            <SectionHeader eyebrow={projects.eyebrow} title={projects.title} />

            <ul className="mt-12 flex flex-col gap-16 md:gap-24">
                {featured.map((project, index) => {
                    const statusLabel = STATUS_LABELS[project.status];
                    const imageOnRight = index % 2 === 1;

                    return (
                        <li
                            key={project.id}
                            className={`grid items-center gap-8 md:gap-12 ${project.image ? 'md:grid-cols-2' : ''}`}
                        >
                            {project.image && (
                                <div className={`overflow-hidden rounded-xl border border-brand-forest/15 bg-brand-forest/10 dark:border-brand-forest ${imageOnRight ? 'md:order-last' : ''}`}>
                                    <img
                                     src={project.image.src}
                                     alt={project.image.alt}
                                     width={project.image.width}
                                     height={project.image.height}
                                     loading='lazy'
                                     decoding="async"
                                     className="aspect-16/10 w-full object-cover"
                                    />
                                </div>
                            )}

                            <div>
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    {statusLabel && (
                                        <span className="rounded-md bg-brand-lime-accent/40 px-2 py-0.5 font-mono text-[11px] text-brand-forest dark:bg-brand-forest dark:text-brand-lime-accent">
                                            {statusLabel}
                                        
                                        </span>
                                    )}
                                </div>

                                <p className="mt-3 leading-relaxed text-brand-dark-bg/70 dark:text-brand-light-bg/70">
                                    {project.description}
                                </p>

                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {projects.tags?.map((tag) => (
                                        <li key={tag}>
                                            <Tag>{tag}</Tag>
                                        </li>
                                    ))}
                                </ul>

                                {(project.liveUrl || project.repoUrl) && (
                                    <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-semibold">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="inline-flex items-center gap-1.5 text-brand-forest underline-offset-4 hover:underline dark:text-brand-lime-accent"
                                            >
                                                Explore Live Interface
                                                <ExternalLink className="size-3.5" aria-hidden='true' />
                                            </a>
                                        )}
                                        {project.repoUrl && (
                                            <a 
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline-offset-4 hover:underline"
                                            >
                                                View Code
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
}