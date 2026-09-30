# Xin Yee Lai | Portfolio

Hi, I'm Xin Yee Lai, a Computer Science student at Nanyang Technological University in Singapore. I use this site to share the projects and research I've worked on, what I'm learning, and a little of what I enjoy outside of tech.

My interests include AI and machine learning, computer vision, data science, and building useful software. The watercolour goldfish is a small nod to the theme I wanted for the site: personal, calm, and still focused on the work.

## Explore

- **Home** introduces my current interests and selected work.
- **Work** brings together my projects and hackathon entries, with results, images, and links where available.
- **About** shares my journey, research, travel, music, reading, and board games.
- **Resume** has my education, experience, research, projects, leadership, and skills.

## Run locally

### With Docker

```bash
docker compose up --build
```

Open http://localhost:3000

### Without Docker

```bash
npm install
npm run dev
```

## Where things live

- Shared project and hackathon details: [app/content/portfolio.ts](app/content/portfolio.ts)
- Home: [app/page.tsx](app/page.tsx)
- About and life timeline: [app/about/page.tsx](app/about/page.tsx)
- Work: [app/projects/page.tsx](app/projects/page.tsx)
- Resume: [app/resume/page.tsx](app/resume/page.tsx)
- Watercolour art and project previews: [public/images/](public/images/)

The project cards and resume share the same project data, so titles, dates, and outcomes stay consistent. The puzzle project appears on Work but is intentionally left off the resume.

## Built with

- Next.js 16
- React and TypeScript
- SCSS
- Leaflet and React Leaflet for the travel map

## Deploy

```bash
vercel deploy
```

You can also connect the repository to Vercel for automatic deployments.
