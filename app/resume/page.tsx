import Image from 'next/image';
import SiteShell from '../components/SiteShell';
import { workEntries } from '../content/portfolio';

export default function ResumePage() {
  const projects = workEntries.filter((work) => work.group === 'Projects' && work.includeOnResume !== false);
  const hackathons = workEntries.filter((work) => work.group === 'Hackathons');

  return (
    <SiteShell activePage="resume">
      <div className="resume-page">
        <header className="resume-profile">
          <div className="resume-profile-heading">
            <div>
              <p className="eyebrow">Computer Science · NTU · Singapore</p>
              <h1>Xin Yee LAI</h1>
            </div>
            <Image className="page-art page-art--bubbles" src="/images/bubble.png" alt="" width={76} height={76} />
          </div>
          <ul className="resume-contact" aria-label="Contact details">
            <li><a href="tel:+6589313757">+65 89313757</a></li>
            <li><a href="mailto:C230032@e.ntu.edu.sg">C230032@e.ntu.edu.sg</a></li>
            <li><a href="https://linkedin.com/in/laixinyee" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://laixinyee.vercel.app" target="_blank" rel="noreferrer">Website</a></li>
            <li>MOE Grant Holder</li>
          </ul>
        </header>

        <section className="resume-section" aria-labelledby="education-heading">
          <div className="resume-section-heading"><h2 id="education-heading">Education</h2></div>
          <article className="resume-entry">
            <div className="resume-entry-heading">
              <h3>Nanyang Technological University, Singapore</h3>
              <p className="resume-meta">Aug 2023 - Jul 2027</p>
            </div>
            <p>Bachelor of Computing, Computer Science</p>
            <p><strong>GPA:</strong> 4.61/5.0 · Hons (Highest Distinction) · MOE Grant Holder</p>
            <p><strong>Relevant Courses:</strong> Software Engineering (A); Data Structures and Algorithms (A); Linear Algebra (A+); Neural Networks and Deep Learning (A); Introduction to Data Science and Artificial Intelligence (A)</p>
          </article>
        </section>

        <section className="resume-section" aria-labelledby="work-experience-heading">
          <div className="resume-section-heading"><h2 id="work-experience-heading">Work Experience</h2></div>
          <article className="resume-entry">
            <div className="resume-entry-heading">
              <h3>Satellite Research Centre (SaRC), Singapore</h3>
              <p className="resume-meta">Jul 2025 - Dec 2025 · Singapore</p>
            </div>
            <p className="resume-role">AI Engineering Intern</p>
            <ul>
              <li>Developed and deployed real-time geospatial image captioning on resource-constrained NVIDIA Jetson devices using prompt engineering and custom PyTorch builds, benchmarked five VLMs to guide model and hardware selection, achieving 36% lower Gemma3-4B inference latency on AGX Orin compared with ORNXS.</li>
              <li>Generated 100+ synthetic satellite images using diffusion and vision models and designed experiments to evaluate model generalization and training-data memorization.</li>
              <li>Evaluated and fine-tuned Vision-Language Models (Qwen2.5-VL, Gemma3) using QLoRA for downstream segmentation and scene classification tasks, increasing scene classification accuracy by 21.56%.</li>
            </ul>
          </article>
          <article className="resume-entry">
            <div className="resume-entry-heading">
              <h3>Gratitude Corporate Agency Sdn Bhd, Kuala Lumpur</h3>
              <p className="resume-meta">Feb 2023 - Jul 2023</p>
            </div>
            <p className="resume-role">Business Operations Intern</p>
            <ul>
              <li>Coordinated 2–3 roadshows monthly, estimated budgets, liaised with venues, and analysed performance KPIs, contributing to a 25% increase in roadshow profits.</li>
            </ul>
          </article>
        </section>

        <section className="resume-section" aria-labelledby="projects-heading">
          <div className="resume-section-heading"><h2 id="projects-heading">Projects</h2></div>
          <div className="resume-entries-grid">
            {projects.map((work) => (
              <article className="resume-entry resume-work-entry" key={work.id}>
                <div className="resume-entry-heading">
                  <h3>{work.title}</h3>
                  <p className="resume-meta">{work.period}</p>
                </div>
                <ul>
                  {(work.resumeBullets ?? [work.summary, work.detail]).map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="hackathons-heading">
          <div className="resume-section-heading"><h2 id="hackathons-heading">Hackathons</h2></div>
          <div className="resume-entries-grid resume-entries-grid--hackathons">
            {hackathons.map((work) => (
              <article className="resume-entry resume-work-entry" key={work.id}>
                <div className="resume-entry-heading">
                  <h3>{work.title}</h3>
                  <p className="resume-meta">{work.period}</p>
                </div>
                <ul>
                  {(work.resumeBullets ?? [work.summary]).map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="research-heading">
          <div className="resume-section-heading"><h2 id="research-heading">Research Experience</h2></div>
          <article className="resume-entry">
            <div className="resume-entry-heading">
              <h3>Undergraduate Research Experience on Campus (URECA)</h3>
              <p className="resume-meta">Sep 2024 - Jul 2025</p>
            </div>
            <p className="resume-role">Out-of-Distribution Detection of Tropical Rainforest Species</p>
            <ul>
              <li>Developed an energy-based pipeline to detect unseen tree species in multispectral remote sensing imagery using frozen DINOv2 embeddings and LDA, achieving 0.96 AUROC and 100% OOD recall at 95% precision in the evaluation.</li>
              <li>Evaluated three spectral band combinations for species recognition with limited labelled data, increasing clustering accuracy from 46.67% with visible-only inputs to 64.44% with a red-edge-containing combination across 45 samples and 11 species.</li>
            </ul>
          </article>
        </section>

        <section className="resume-section" aria-labelledby="leadership-heading">
          <div className="resume-section-heading"><h2 id="leadership-heading">Leadership Experience</h2></div>
          <article className="resume-entry">
            <div className="resume-entry-heading">
              <h3>Asia-Pacific Intervarsity Chinese Debate Tournament 2025</h3>
              <p className="resume-meta">Aug 2024 - Aug 2025</p>
            </div>
            <p className="resume-role">Chairperson</p>
            <ul>
              <li>Led a 32-member organizing committee to plan and execute an international Chinese debate tournament featuring 36 teams from 10 regions, attracting sign-ups from 111 university teams worldwide through targeted publication strategies.</li>
            </ul>
          </article>
        </section>

        <section className="resume-section" aria-labelledby="skills-heading">
          <div className="resume-section-heading"><h2 id="skills-heading">Skills</h2></div>
          <div className="resume-skills">
            <p><strong>Programming:</strong> Python, SQL, Java, C++, C, JavaScript, PHP</p>
            <p><strong>ML &amp; AI:</strong> PyTorch, TensorFlow, scikit-learn, Hugging Face (Transformers, Diffusers), OpenCV, YOLO, transfer learning, fine-tuning, LoRA/QLoRA, ensemble learning</p>
            <p><strong>Cloud &amp; Deployment:</strong> AWS (Amazon Bedrock, S3), Azure, Vercel</p>
            <p><strong>Development Tools &amp; Systems:</strong> Docker, Git, Linux</p>
            <p><strong>Databases:</strong> MySQL, SQL Server, DynamoDB</p>
            <p><strong>Web Development:</strong> HTML, CSS, React, Node.js</p>
            <p><strong>Languages:</strong> English, Chinese, Malay, French</p>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
