import Image from 'next/image';
import SiteShell from '../components/SiteShell';
import WorkCard from '../components/WorkCard';
import { workEntries } from '../content/portfolio';

export default function ProjectsPage() {
  return (
    <SiteShell activePage="work">
      <section className="work-page" aria-labelledby="work-page-title">
        <header className="page-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h1 id="work-page-title">Work</h1>
            <p>Applied machine learning, research, and software projects from coursework, competitions, and internships.</p>
          </div>
          <Image className="page-art page-art--shell" src="/images/shell.png" alt="" width={104} height={84} />
        </header>

        {(['Projects', 'Hackathons'] as const).map((group) => {
          const entries = workEntries.filter((work) => work.group === group);
          const headingId = group === 'Projects' ? 'projects-heading' : 'hackathons-heading';

          return (
            <section className="work-group" key={group} aria-labelledby={headingId}>
              <div className="work-group-heading">
                <h2 id={headingId}>{group}</h2>
                <span>{String(entries.length).padStart(2, '0')} entries</span>
              </div>
              <div className="work-grid">
                {entries.map((work) => <WorkCard key={work.id} work={work} showDetails />)}
              </div>
            </section>
          );
        })}
      </section>
    </SiteShell>
  );
}
