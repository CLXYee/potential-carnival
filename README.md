# potential-carnival

A goldfish-themed personal portfolio website for Xin Yee.

## Features

✨ **Goldfish Theme** - Light blue and pastel orange color palette
🎯 **Two-Column Layout** - Left navigation sidebar, right main content
📱 **Responsive Design** - Works seamlessly on all devices
🎵 **BGM Toggle** - Add your own background music
📅 **Timeline Section** - Showcase your recent life updates
🔗 **Multi-Page Navigation** - Home, About, Projects, Resume

## Project Structure

```
app/
├── styles/           # SCSS modules
├── components/       # Reusable UI components
├── content/          # MDX content (for future use)
├── about/            # About page
├── projects/         # Projects showcase page
├── resume/           # Resume page
├── layout.tsx        # Root layout
└── page.tsx          # Home page

public/
├── images/           # Image placeholders
│   ├── goldfish-placeholder.svg
│   ├── hero-placeholder.svg
│   ├── profile-placeholder.svg
│   └── project-placeholder.svg
└── audio/            # BGM files
    └── bgm-placeholder.mp3 (to be added)
```

## Design Theme

**Colors:**
- Primary Blue: `#0088cc`
- Pastel Orange: `#ff9f63`
- Light Blue Background: `#e0f4ff`
- Light Orange: `#ffc299`

**Typography:**
- Headings: Bold, Color Blue
- Body: Regular, Color Gray-Blue

## Quick Start

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

## Customization Guide

### 1. Replace Images

- **Goldfish**: Replace [public/images/goldfish-placeholder.svg](public/images/goldfish-placeholder.svg) with your own image
- Update the src path in [app/page.tsx](app/page.tsx)

### 2. Add BGM

- Place your audio file in [public/audio/](public/audio/)
- Update the src in [app/page.tsx](app/page.tsx) to point to your audio file
- Supported formats: MP3, WAV, OGG, M4A

### 3. Update Timeline

- Edit the `timelineEvents` array in [app/page.tsx](app/page.tsx)
- Add your own life updates with dates and descriptions

### 4. Customize Pages

- **About**: Edit [app/about/page.tsx](app/about/page.tsx)
- **Projects**: Edit [app/projects/page.tsx](app/projects/page.tsx)
- **Resume**: Edit [app/resume/page.tsx](app/resume/page.tsx)

## Tech Stack

- Next.js 16.2
- TypeScript 5.8
- SCSS Modules
- React Icons
- Vercel deployment ready

## Deploy to Vercel

### GitHub integration

1. Push the `deployment` branch to GitHub.
2. Import the repository in the [Vercel dashboard](https://vercel.com/new).
3. Keep the detected Next.js framework, `npm install` settings, and project root defaults.
4. Deploy the project.

Vercel will run `npm ci` and `npm run build` using the configuration in [vercel.json](vercel.json). Future pushes to the connected branch will create new deployments.

### Vercel CLI

```bash
npm install --global vercel
vercel login
vercel
```
