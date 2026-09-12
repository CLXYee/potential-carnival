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
              <p><strong>Finalist:</strong> Asian Hackathon For Green Future 2026, UAiTED Innovation Competition 2025, NTU Women in Tech Hackathon 2025.</p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
