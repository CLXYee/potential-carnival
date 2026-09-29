'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const TravelMap = dynamic(() => import('../components/TravelMap'), { ssr: false });

const lifeUpdates = [
  {
    date: 'Currently',
    title: 'Final Year Computer Science Student at NTU',
    description: 'Continuing my journey in Computer Science at Nanyang Technological University, with a focus on machine learning, computer vision, and intelligent systems.',
    details: 'I am completing my Bachelor of Computing in Computer Science with First Class Honours and preparing for full-time opportunities in AI/ML, data science, software engineering, and AI research or R&D.',
  },
  {
    date: 'Dec 2025',
    title: 'French Language Winter Exchange in Besançon',
    description: 'Studied French at Université de Franche-Comté in Besançon, completing A1 level and building a foundation for further learning.',
    details: 'The exchange gave me the opportunity to learn French through an immersive experience in France. After completing A1, I continued progressing toward intermediate French language proficiency through my studies at NTU.',
  },
  {
    date: 'Jul - Dec 2025',
    title: 'Research Engineer Intern at SaRC',
    description: 'Developed edge AI systems for geospatial image captioning and evaluated vision-language models on NVIDIA Jetson devices.',
    details: 'I optimised model inference through prompt engineering, custom PyTorch builds, and hardware profiling. I also generated synthetic satellite imagery with diffusion and vision models, and fine-tuned Qwen2.5-VL and Gemma3 using QLoRA.',
  },
  {
    date: 'Aug 2024 - Jul 2025',
    title: 'Chairperson of the 12th Asia-Pacific Intervarsity Chinese Debate Tournament',
    description: 'Led the organising committee and coordinated the planning and execution of an international Chinese debate tournament.',
    details: 'I managed a 32-member committee, planned a tournament featuring 36 teams from 10 regions, developed publication strategies, and helped attract sign-ups from 111 university teams worldwide.',
  },
  {
    date: 'Sep 2024 - Jul 2025',
    title: 'URECA Researcher',
    description: 'Explored out-of-distribution detection for tropical rainforest species using DINOv2 and multispectral remote sensing imagery.',
    details: 'I developed an energy-based out-of-distribution detection pipeline using frozen DINOv2 embeddings from 8-band imagery, and investigated band-stacking strategies to improve few-shot generalisation.',
  },
  {
    date: 'Jul 2023',
    title: 'Started Computer Science at NTU',
    description: 'Began my journey as a Computer Science student at Nanyang Technological University, Singapore.',
    details: 'My studies have built a strong foundation in software engineering, data structures and algorithms, linear algebra, neural networks, deep learning, data science, and artificial intelligence.',
  },
  {
    date: 'Feb - Jul 2023',
    title: 'Administrative Intern at Gratitude Corporate Agency Sdn Bhd',
    description: 'Managed data analysis tasks and assisted with event management operations.',
    details: 'This early professional experience developed my attention to detail, communication, organisation, and ability to support projects across different operational needs.',
  },
  {
    date: 'Jan 2023',
    title: 'Graduated from Chong Hwa Independent High School, Kuala Lumpur',
    description: 'Completed the Science Stream with full As in the UEC and SPM examinations.',
    details: 'My science-stream education strengthened my interest in analytical problem-solving and gave me the foundation to pursue Computer Science at university.',
  },
];

const playlist = [
  { artist: 'Sundial', song: 'Grass is Greener', query: 'Sundial Grass is Greener' },
  { artist: 'Roy Wang', song: '牧童', query: 'Roy Wang 牧童' },
  { artist: '王OK, 洪佩瑜', song: '这条小鱼在乎', query: '这条小鱼在乎' },
  { artist: 'Accusefive', song: 'Where I Lost Us', query: 'AccuseFive Where I Lost Us' },
  { artist: 'Jackson Yee', song: '4% vol的河', query: 'Jackson Yee 4%vol的河' },
  { artist: '郭顶', song: '凄美地', query: '郭顶 凄美地' },
];

const favouriteGames = [
  { title: 'Brass: Birmingham', id: '224517', theme: 'brass' },
  { title: 'Ark Nova', id: '342942', theme: 'ark' },
  { title: 'Dune: Imperium Uprising', id: '397598', theme: 'dune' },
  { title: 'The Lost Ruins of Arnak', id: '312484', theme: 'arnak' },
  { title: 'Root', id: '237182', theme: 'root' },
  { title: 'Cascadia', id: '295947', theme: 'cascadia' },
  { title: 'Azul', id: '230802', theme: 'azul' },
];

export default function AboutPage() {
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
              <Link href="/about" className="nav-link active">About Me</Link>
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
        <section className="page-section">
          <div className="page-title-row">
            <h1>About Me</h1>
            <Image className="watercolor-accent watercolor-bubbles" src="/images/watercolor-bubbles.svg" alt="" width={90} height={90} />
          </div>
          <div className="content-placeholder">
            <p>
              I&apos;m Xin Yee Lai, a Computer Science undergraduate at Nanyang Technological University, Singapore, pursuing a Bachelor of Computing with First Class Honours. I enjoy turning research ideas into reliable, useful software.
            </p>
            <p>
              My primary interests are artificial intelligence and machine learning, followed by data science and software engineering. I enjoy working across the full journey from investigating a research question and analysing data to building, evaluating, and deploying a useful system.
            </p>
            <p>
              During my internship at the Satellite Research Centre, I developed real-time edge AI systems for geospatial image captioning and worked with vision-language models, diffusion models, and NVIDIA Jetson hardware. I am also open to AI research and R&amp;D roles where careful experimentation can lead to new capabilities.
            </p>
            <p>
              At NTU, my research has focused on out-of-distribution detection for tropical rainforest species using multispectral remote sensing imagery. I care about thoughtful experimentation, strong engineering foundations, and building technology that can support people and the environment.
            </p>
            <div className="about-details">
              <div><strong>Based in</strong><span>Singapore</span></div>
              <div><strong>Languages</strong><span>English, Chinese, Malay, French</span></div>
              <div><strong>Contact</strong><a href="mailto:laixinyee04@gmail.com">laixinyee04@gmail.com</a></div>
            </div>
            <section className="timeline-section about-timeline-section">
              <div className="timeline-heading">
                <div>
                  <span className="eyebrow">My journey</span>
                  <h2>Life Updates</h2>
                </div>
                <span className="timeline-hint">Select an entry to read more</span>
              </div>
              <div className="timeline">
                {lifeUpdates.map((event) => (
                  <div key={event.title} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <details className="timeline-content">
                      <summary>
                        <span className="timeline-summary-copy">
                          <span className="timeline-date">{event.date}</span>
                          <span className="timeline-title">{event.title}</span>
                          <span className="timeline-preview">{event.description}</span>
                        </span>
                        <span className="timeline-chevron" aria-hidden="true">⌄</span>
                      </summary>
                      <p>{event.details}</p>
                    </details>
                  </div>
                ))}
              </div>
            </section>
            <section className="hobbies-section">
              <div className="section-heading">
                <span className="eyebrow">Beyond the screen</span>
                <h2>Hobbies</h2>
                <Image className="watercolor-accent watercolor-shell" src="/images/watercolor-shell.svg" alt="" width={105} height={84} />
              </div>
              <div className="hobbies-layout">
                <div className="hobby-list">
                  <details className="hobby-detail">
                    <summary className="hobby-item"><span>Music</span><span className="hobby-chevron" aria-hidden="true">⌄</span></summary>
                    <div className="hobby-detail-content">
                      <div className="playlist-heading">
                        <div><span className="playlist-kicker">Xin Yee&apos;s playlist</span><h3>On repeat</h3></div>
                        <span className="playlist-note">Open in YouTube ↗</span>
                      </div>
                      <p>I enjoy discovering music and following the work of Roy Wang, Karry Wang, and Jackson Yee.</p>
                      <div className="playlist-grid">
                        {playlist.map((track, index) => (
                          <a key={`${track.artist}-${track.song}`} className="playlist-track" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(track.query)}`} target="_blank" rel="noreferrer">
                            <span className="track-index">{String(index + 1).padStart(2, '0')}</span>
                            <span className="track-play" aria-hidden="true">▶</span>
                            <span className="track-copy"><strong>{track.song}</strong><small>{track.artist}</small></span>
                            <span className="track-arrow" aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </details>
                  <details className="hobby-detail">
                    <summary className="hobby-item"><span>Board Games</span><span className="hobby-chevron" aria-hidden="true">⌄</span></summary>
                    <div className="hobby-detail-content">
                      <p>I enjoy challenging and complex games that reward strategic thinking, careful planning, and adapting to other players.</p>
                      <div className="games-shelf">
                        {favouriteGames.map((game) => (
                          <a key={game.title} className={`game-box game-box-${game.theme}`} href={`https://boardgamegeek.com/boardgame/${game.id}`} target="_blank" rel="noreferrer" aria-label={`View ${game.title} on BoardGameGeek`}>
                            <span className="game-cover" aria-hidden="true"><small>Favourite game</small><strong>{game.title}</strong><i>↗</i></span>
                            <span className="game-box-title">{game.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </details>
                  <details className="hobby-detail">
                    <summary className="hobby-item"><span>Reading</span><span className="hobby-chevron" aria-hidden="true">⌄</span></summary>
                    <div className="hobby-detail-content">
                      <p>Reading gives me a slower way to explore unfamiliar ideas, worlds, and questions beyond my technical work.</p>
                      <div className="bookshelf">
                        <article className="book-spine book-three-body"><span>The Three-Body Problem</span><small>Liu Cixin</small></article>
                        <article className="book-spine book-yili"><span>《在伊犁》</span><small>王蒙</small></article>
                        <article className="book-spine book-changan"><span>The Longest Day in Chang&apos;an</span><small>Ma Boyong</small></article>
                        <article className="book-spine book-namiya"><span>Keajaiban Toko Kelontong Namiya</span><small>Keigo Higashino</small></article>
                      </div>
                    </div>
                  </details>
                  <details className="travel-hobby-detail">
                    <summary className="hobby-item">
                      <span>Travelling</span>
                      <span className="hobby-chevron" aria-hidden="true">⌄</span>
                    </summary>
                    <div className="travel-hobby-content">
                      <h3>Places I&apos;ve Explored</h3>
                      <Image className="watercolor-accent watercolor-seagrass" src="/images/watercolor-seagrass.svg" alt="" width={90} height={96} />
                      <TravelMap />
                      <p className="map-caption">A few places that have shaped my perspective, from Southeast Asia to Europe.</p>
                    </div>
                  </details>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
