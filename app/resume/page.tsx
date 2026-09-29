'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ResumePage() {
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
              <Link href="/projects" className="nav-link">Projects</Link>
            </li>
            <li>
              <Link href="/resume" className="nav-link active">Resume</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="page-section">
          <div className="page-title-row">
            <h1>Resume</h1>
            <Image className="watercolor-accent watercolor-bubbles" src="/images/watercolor-bubbles.svg" alt="" width={90} height={90} />
          </div>
          <div className="resume-content">
            <section className="resume-section">
              <h2>Education</h2>
              <h3>Nanyang Technological University, Singapore</h3>
              <p>Bachelor of Computing, Computer Science | Aug 2023 - Jul 2027</p>
              <p><strong>GPA:</strong> 4.61/5.0 (First Class Honours)</p>
              <p><strong>Relevant courses:</strong> Software Engineering (A), Data Structures and Algorithms (A), Linear Algebra (A+), Neural Networks and Deep Learning (A), Introduction to Data Science and Artificial Intelligence (A)</p>
            </section>
            <section className="resume-section">
              <h2>Experience</h2>
              <h3>Research Engineer Intern, Satellite Research Centre (SaRC)</h3>
              <p className="resume-meta">Jul 2025 - Dec 2025 | Singapore</p>
              <ul>
                <li>Developed and deployed real-time edge AI systems for geospatial image captioning on NVIDIA Jetson devices.</li>
                <li>Generated synthetic satellite imagery with diffusion and vision models and evaluated generalization and training-data memorization.</li>
                <li>Evaluated and fine-tuned Qwen2.5-VL and Gemma3 with QLoRA for segmentation and scene classification.</li>
              </ul>
              <h3>Undergraduate Researcher, URECA</h3>
              <p className="resume-meta">Sep 2024 - Jul 2025</p>
              <p>Developed an energy-based out-of-distribution detection pipeline using frozen DINOv2 embeddings from 8-band multispectral imagery, improving few-shot generalization through band-stacking analysis.</p>
              <h3>Gratitude Corporate Agency Sdn Bhd, Kuala Lumpur</h3>
              <p className="resume-meta">Business Operations Intern | Feb 2023 - Jul 2023</p>
              <ul>
                <li>Coordinated 2-3 roadshows monthly, estimated budgets, liaised with venues, and analysed performance KPIs, contributing to a 25% increase in roadshow profits.</li>
              </ul>
            </section>
            <section className="resume-section">
              <h2>Hackathons</h2>
              <h3>Finalist, Asian Hackathon for Green Future 2026 (Top 30 of 439 teams)</h3>
              <p className="resume-meta">May 2026 - Jul 2026</p>
              <ul>
                <li>Developed an AI-assisted PM2.5 monitoring and forecasting platform for Hanoi government use, integrating open weather and human activity data and achieving a forecast error standard deviation of 6.7 µg/m³.</li>
              </ul>
              <h3>Finalist, UAiTED Innovation Competition 2025 (Top 6, NextGen Innovator)</h3>
              <p className="resume-meta">Mar 2025 - Aug 2025</p>
              <ul>
                <li>Built a CNN-based medical waste classification system to support disposal sorting, achieving 95% accuracy across six waste categories.</li>
              </ul>
              <h3>Finalist, NTU Women in Tech Hackathon 2025</h3>
              <p className="resume-meta">Feb 2025 - Feb 2025</p>
              <ul>
                <li>Developed an AI-powered learning platform integrating GPT-4o mini to help undergraduate students discover suitable courses through chatbot-based recommendations.</li>
              </ul>
            </section>
            <section className="resume-section">
              <h2>Projects</h2>
              <h3>Linking Writing Processes to Writing Quality (Kaggle Machine Learning Project)</h3>
              <p className="resume-meta">Jan 2026 - Apr 2026</p>
              <ul>
                <li>Preprocessed anonymised keystroke and mouse interaction logs and trained LightGBM, CatBoost, and ExtraTrees models to predict essay scores.</li>
                <li>Combined model predictions through ensemble learning, contributing to a team ranking of 134 out of 1,876 teams (top 7.14%) on the Kaggle public leaderboard.</li>
              </ul>
              <h3>Deep Learning for Flower Recognition</h3>
              <p className="resume-meta">Jan 2026 - Apr 2026</p>
              <ul>
                <li>Benchmarked ten models spanning CNNs, vision transformers, and a YOLO-based classifier on Oxford Flowers 102 with only 10 training images per class, using a unified training and evaluation pipeline.</li>
                <li>Compared training from scratch, transfer learning, and MixUp augmentation, achieving a best 97.7% top-1 accuracy with ViT-Base and identifying architecture-dependent effects of MixUp.</li>
              </ul>
              <h3>Autonomous Robotic Car Project</h3>
              <p className="resume-meta">Jan 2026 - Apr 2026</p>
              <ul>
                <li>Collaborated with a multidisciplinary team to design and integrate a Raspberry Pi-based system connecting hardware and software components for an autonomous robotic car.</li>
                <li>Prepared image datasets and trained, evaluated, and deployed a YOLOv5 model for real-time image recognition.</li>
              </ul>
              <h3>Hawker Stalk (Hawker Stall Recommendation Platform)</h3>
              <p className="resume-meta">Aug 2024 - Nov 2024</p>
              <ul>
                <li>Built a full-stack hawker stall recommendation platform using HTML, CSS, JavaScript, PHP, and Azure SQL Database for stall discovery and user reviews.</li>
                <li>Designed database and backend services supporting location-based recommendations, stall registration, and interactive ratings and reviews.</li>
              </ul>
              <h3>Text-Based Hospital Management System</h3>
              <p className="resume-meta">Aug 2024 - Nov 2024</p>
              <ul>
                <li>Developed a scalable Java-based system for automating hospital operations, including appointments, billing, and staff management.</li>
                <li>Focused on modular design and scheduling algorithms to optimize resource allocation and reduce workflow bottlenecks.</li>
              </ul>
              <h3>Block-Pushing Puzzle Solver and Search Algorithm Benchmarking</h3>
              <p className="resume-meta">Jan 2024 - Apr 2024</p>
              <ul>
                <li>Implemented and benchmarked seven search algorithms, including BFS, DFS, and A*, in Python to solve a block-pushing puzzle under path constraints.</li>
                <li>Evaluated performance based on nodes explored and move efficiency, highlighting algorithmic trade-offs.</li>
              </ul>
            </section>
            <section className="resume-section">
              <h2>Skills</h2>
              <p><strong>Languages:</strong> Python, Java, C, C++, JavaScript, SQL, PHP</p>
              <p><strong>ML/AI:</strong> PyTorch, Transformers, scikit-learn, Hugging Face, Diffusers</p>
              <p><strong>Tools:</strong> AWS, Azure, Docker, Git, React, Node.js</p>
              <p><strong>Databases:</strong> MySQL, SQL Server, DynamoDB</p>
            </section>
            <section className="resume-section">
              <h2>Leadership and Awards</h2>
              <h3>Chairperson, Asia-Pacific Intervarsity Chinese Debate Tournament 2025</h3>
              <p>Managed a 32-member committee to deliver an international tournament with 36 teams from 10 regions, attracting sign-ups from 111 university teams worldwide.</p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
