import Image from 'next/image';
import Link from 'next/link';
import SiteShell from './components/SiteShell';
import WorkCard from './components/WorkCard';
import MediaPlaceholder from './components/MediaPlaceholder';
import { portfolioMedia, workEntries } from './content/portfolio';

export default function HomePage() {
  const featuredWork = workEntries[0];
  const supportingWork = workEntries.slice(1, 3);

  return (
    <SiteShell activePage="home">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science · AI/ML</p>
          <h1 id="home-title">Xin Yee Lai</h1>
          <p className="hero-role">Computer Science student at NTU</p>
          <p className="hero-intro">I build and evaluate AI systems, from geospatial edge inference to applied machine-learning projects.</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button--primary">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link href="/resume" className="button button--secondary">View resume</Link>
          </div>
        </div>
        <div className="hero-illustration">
          <Image
            src="/images/goldfish.png"
            alt="Watercolour goldfish illustration"
            width={390}
            height={390}
            priority
          />
        </div>
      </section>

      <ul className="identity-line" aria-label="Identity">
        <li>NTU</li>
        <li>Computer Science</li>
        <li>Singapore</li>
      </ul>

      <section className="home-section selected-work" aria-labelledby="selected-work-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="selected-work-title">Research, models, and useful systems.</h2>
          </div>
          <Link className="text-link" href="/projects">All work <span aria-hidden="true">↗</span></Link>
        </div>
        {featuredWork && <WorkCard work={featuredWork} featured />}
        <div className="supporting-work-grid">
          {supportingWork.map((work) => <WorkCard key={work.id} work={work} />)}
        </div>
      </section>

      <section className="home-section current-focus" aria-labelledby="current-focus-title">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Current focus</p>
            <h2 id="current-focus-title">Research with a strong engineering foundation.</h2>
          </div>
        </div>
        <div className="focus-list">
          <p><strong>Applied AI/ML</strong><span>Building and evaluating machine-learning and computer-vision systems, from prototypes to deployment.</span></p>
          <p><strong>Data and research</strong><span>Experimenting, comparing models, and communicating results clearly.</span></p>
          <p><strong>Software and R&amp;D</strong><span>Interested in research that translates into reliable software and useful systems.</span></p>
        </div>
      </section>

      <section className="home-section personal-preview" aria-labelledby="personal-title">
        <MediaPlaceholder
          label={portfolioMedia.portrait.label}
          src={portfolioMedia.portrait.src}
          tone="coral"
          className="portrait-preview"
        />
        <div>
          <p className="eyebrow">A little beyond the work</p>
          <h2 id="personal-title">Curious about people, places, and ideas.</h2>
          <p>Outside Computer Science, I enjoy learning languages, travelling, reading, and playing strategy board games.</p>
          <Link className="text-link" href="/about">More about me <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let&apos;s make something useful.</h2>
          <p>I&apos;m open to opportunities across AI/ML, data science, software engineering, and AI research or R&amp;D.</p>
        </div>
        <a className="button button--primary" href="mailto:laixinyee04@gmail.com">Email Xin Yee <span aria-hidden="true">↗</span></a>
      </section>
    </SiteShell>
  );
}
