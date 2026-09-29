'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const projectGroups = [
    {
      title: 'Projects',
      entries: [
        { id: 'writing-quality', title: 'Linking Writing Processes to Writing Quality (Kaggle Machine Learning Project)', period: 'Jan 2026 - Apr 2026', description: 'Preprocessed anonymised keystroke and mouse interaction logs and trained LightGBM, CatBoost, and ExtraTrees models to predict essay scores. Combined model predictions through ensemble learning, contributing to a team ranking of 134 out of 1,876 teams (top 7.14%) on the Kaggle public leaderboard.', tech: 'Python · LightGBM · CatBoost · ExtraTrees · Ensemble Learning' },
        { id: 'flower-recognition', title: 'Deep Learning for Flower Recognition', period: 'Jan 2026 - Apr 2026', description: 'Benchmarked ten models spanning CNNs, vision transformers, and a YOLO-based classifier on Oxford Flowers 102 with only 10 training images per class, using a unified training and evaluation pipeline. Compared training from scratch, transfer learning, and MixUp augmentation, achieving a best 97.7% top-1 accuracy with ViT-Base and identifying architecture-dependent effects of MixUp.', tech: 'CNNs · Vision Transformers · YOLO · MixUp · Oxford Flowers 102' },
        { id: 'robotic-car', title: 'Autonomous Robotic Car Project', period: 'Jan 2026 - Apr 2026', description: 'Collaborated with a multidisciplinary team to design and integrate a Raspberry Pi-based system connecting hardware and software components for an autonomous robotic car. Prepared image datasets and trained, evaluated, and deployed a YOLOv5 model for real-time image recognition.', tech: 'Raspberry Pi · Python · YOLOv5 · Computer Vision' },
        { id: 'hawker-stalk', title: 'Hawker Stalk (Hawker Stall Recommendation Platform)', period: 'Aug 2024 - Nov 2024', description: 'Built a full-stack hawker stall recommendation platform using HTML, CSS, JavaScript, PHP, and Azure SQL Database for stall discovery and user reviews. Designed database and backend services supporting location-based recommendations, stall registration, and interactive ratings and reviews.', tech: 'HTML · CSS · JavaScript · PHP · Azure SQL Database' },
        { id: 'hospital-management', title: 'Text-Based Hospital Management System', period: 'Aug 2024 - Nov 2024', description: 'Developed a scalable Java-based system for automating hospital operations, including appointments, billing, and staff management. Focused on modular design and scheduling algorithms to optimize resource allocation and reduce workflow bottlenecks.', tech: 'Java · Modular Design · Scheduling Algorithms' },
        { id: 'puzzle-solver', title: 'Block-Pushing Puzzle Solver and Search Algorithm Benchmarking', period: 'Jan 2024 - Apr 2024', description: 'Implemented and benchmarked seven search algorithms, including BFS, DFS, and A*, in Python to solve a block-pushing puzzle under path constraints. Evaluated performance based on nodes explored and move efficiency, highlighting algorithmic trade-offs.', tech: 'Python · BFS · DFS · A* · Search Algorithm Benchmarking' },
      ],
    },
    {
      title: 'Hackathons',
      entries: [
        { id: 'green-future', title: 'Finalist, Asian Hackathon for Green Future 2026 (Top 30 of 439 teams)', period: 'May 2026 - Jul 2026', description: 'Developed an AI-assisted PM2.5 monitoring and forecasting platform for Hanoi government use, integrating open weather and human activity data and achieving a forecast error standard deviation of 6.7 µg/m³.', tech: 'AI-Assisted Forecasting · PM2.5 · Weather and Human Activity Data' },
        { id: 'uaited', title: 'Finalist, UAiTED Innovation Competition 2025 (Top 6, NextGen Innovator)', period: 'Mar 2025 - Aug 2025', description: 'Built a CNN-based medical waste classification system to support disposal sorting, achieving 95% accuracy across six waste categories.', tech: 'CNN · Image Classification · Medical Waste Sorting' },
        { id: 'women-in-tech', title: 'Finalist, NTU Women in Tech Hackathon 2025', period: 'Feb 2025 - Feb 2025', description: 'Developed an AI-powered learning platform integrating GPT-4o mini to help undergraduate students discover suitable courses through chatbot-based recommendations.', tech: 'GPT-4o mini · AI Chatbot · Course Recommendations' },
      ],
    },
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
          <div className="projects-content">
            {projectGroups.map((group) => (
              <section className="projects-group" key={group.title}>
                <h2 className="projects-group-title">{group.title}</h2>
                <div className="projects-list">
                  {group.entries.map((project) => (
                    <article key={project.id} className="project-item">
                      <div className="project-heading">
                        <h3>{project.title}</h3>
                        <p className="project-period">{project.period}</p>
                      </div>
                      <p className="project-description">{project.description}</p>
                      <p className="project-tech"><strong>Tech Stack:</strong> {project.tech}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
