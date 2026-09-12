'use client';

import Link from 'next/link';
import Image from 'next/image';

const focusAreas = [
  {
    title: 'AI/ML Engineering',
    description: 'Building and evaluating practical machine learning systems with PyTorch, Transformers, and computer vision.',
  },
  {
    title: 'Data Science',
    description: 'Turning complex data into useful insights through experimentation, modelling, evaluation, and clear communication.',
  },
  {
    title: 'AI Research & R&D',
    description: 'Exploring new methods, testing ideas carefully, and translating research into reliable prototypes and deployable systems.',
  },
];

export default function HomePage() {
  return (
    <div className="layout-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <h2 className="logo">🐠 Portfolio</h2>
          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link active">Home</Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">About Me</Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link">Projects</Link>
            </li>
            <li>
              <Link href="/resume" className="nav-link">Resume</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-text">
            <h1 className="greeting">Hi, I&apos;m Xin Yee</h1>
            <p className="subgreeting">AI/ML enthusiast, researcher, and Computer Science student</p>
            <p>I build intelligent systems and explore data-driven ideas across machine learning, data science, and software engineering.</p>
            <div className="hero-actions">
              <Link href="/projects" className="primary-action">View my work <span aria-hidden="true">↗</span></Link>
              <Link href="/resume" className="secondary-action">Read my resume</Link>
            </div>
          </div>

          <div className="hero-media">
            <Image
              src="/images/goldfish-placeholder.svg"
              alt="Watercolor goldfish illustration"
              width={400}
              height={400}
              priority
            />
          </div>
        </section>

        <section className="career-strip" aria-label="Career snapshot">
          <div>
            <span className="strip-label">Currently</span>
            <strong>Final-year Computer Science student</strong>
          </div>
          <div>
            <span className="strip-label">Interested in</span>
            <strong>AI/ML · Data Science · Software Engineering</strong>
          </div>
          <div>
            <span className="strip-label">Based in</span>
            <strong>Singapore</strong>
          </div>
        </section>

        <section className="focus-section">
          <div className="section-heading">
            <span className="eyebrow">How I work</span>
            <h2>Curious by nature, practical by design.</h2>
          </div>
          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article key={area.title} className="focus-item">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div>
            <span className="eyebrow">Let&apos;s connect</span>
            <h2>Have an interesting problem to solve?</h2>
            <p>I&apos;m open to full-time opportunities in AI/ML, data science, software engineering, and AI research or R&amp;D.</p>
          </div>
          <a className="contact-action" href="mailto:laixinyee04@gmail.com">Email Xin Yee <span aria-hidden="true">↗</span></a>
        </section>
      </main>
    </div>
  );
}
