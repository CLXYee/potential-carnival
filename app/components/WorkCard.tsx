import type { WorkEntry } from '../content/portfolio';
import MediaPlaceholder from './MediaPlaceholder';

export default function WorkCard({
  work,
  featured = false,
  showDetails = false,
}: {
  work: WorkEntry;
  featured?: boolean;
  showDetails?: boolean;
}) {
  const Heading = featured ? 'h2' : 'h3';
  const links = [
    ...(work.links ?? []),
    ...(work.previewCredit ? [work.previewCredit] : []),
  ];

  return (
    <article className={`work-card${featured ? ' work-card--featured' : ''}`}>
      <MediaPlaceholder
        label={work.previewLabel}
        src={work.previewImage}
        images={work.previewImages}
        fit={work.previewFit}
        tone={work.tone}
        className="work-card-visual"
      />
      <div className="work-card-copy">
        <p className="work-meta">{work.period} <span aria-hidden="true">·</span> {work.group === 'Hackathons' ? 'Hackathon' : 'Project'}</p>
        <Heading>{work.title}</Heading>
        <p className="work-summary">{work.summary}</p>
        <p className="work-result"><span>Outcome</span><strong>{work.result}</strong></p>
        {work.technologies.length > 0 && (
          <ul className="work-tags" aria-label="Technologies and methods">
            {work.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        )}
        {links.length > 0 && (
          <div className="work-links" aria-label="Project links">
            {links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
        {showDetails && (
          <details className="work-details">
            <summary>More detail</summary>
            <p>{work.detail}</p>
          </details>
        )}
      </div>
    </article>
  );
}