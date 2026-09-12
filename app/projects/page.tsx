'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: 'Autonomous Robotic Car', description: 'Designed and integrated a Raspberry Pi-based autonomous car with a multidisciplinary team. Prepared image datasets and trained, evaluated, and deployed a YOLOv5 model for real-time image recognition.', tech: 'Raspberry Pi · Python · YOLOv5 · Computer Vision' },
    { id: 2, title: 'Hawker Stalk', description: 'Built a full-stack platform for discovering hawker stalls and sharing reviews. Designed backend services and an Azure SQL database for location-based recommendations, stall registration, ratings, and reviews.', tech: 'HTML · CSS · JavaScript · PHP · Azure SQL' },
    { id: 3, title: 'Text-Based Hospital Management System', description: 'Developed a modular Java system to automate appointments, billing, and staff management. Implemented scheduling logic to improve resource allocation and reduce workflow bottlenecks.', tech: 'Java · Object-Oriented Design · Scheduling Algorithms' },
    { id: 4, title: 'Block-Pushing Puzzle Solver', description: 'Implemented and benchmarked seven search algorithms, including BFS, DFS, and A*, to solve a block-pushing puzzle under path constraints. Compared nodes explored and move efficiency to highlight algorithmic trade-offs.', tech: 'Python · BFS · DFS · A* · Algorithm Analysis' },
    { id: 5, title: 'Hackathon Prototypes', description: 'Finalist projects across three competitions: an AI-assisted air quality monitoring platform, a CNN-based medical waste classification system, and an AI-powered learning platform with chatbot course recommendations.', tech: 'AI/ML · CNNs · Chatbots · Data Science' },
  ];

  return (
    <div className="layout-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <h2 className="logo">🐠 Portfolio</h2>
          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">About Me</Link>
            </li>
            <li>
              <Link href="/projects" className="nav-link active">Projects</Link>
            </li>
            <li>
              <Link href="/resume" className="nav-link">Resume</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="page-section">
          <div className="page-title-row">
            <h1>Projects</h1>
            <Image className="watercolor-accent watercolor-shell" src="/images/watercolor-shell.svg" alt="" width={105} height={84} />
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article key={project.id} className="project-item">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p className="project-tech">{project.tech}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
