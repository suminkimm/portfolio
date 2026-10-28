# Su Min Kim — Portfolio

Personal portfolio built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Structure

```
app/
  layout.tsx              Root layout: font, metadata, cursor, site frame
  page.tsx                Home (hero + project grid)
  about/page.tsx          About (bio, experience, photo gallery)
  work/[slug]/page.tsx    Project route; maps each slug to its case study
  work/[slug]/projects/   One component per case study
  images/                 Static images, grouped by page/project
  globals.css             Design tokens, base styles, motion, project-page styles

components/
  layout/                 Site chrome: SiteFrame, SideNavigation, Footer, PageContainer,
                          PageTransition, CustomCursor
  motion/                 Reusable animation wrappers: HeroReveal, RevealGroup, RollingTime
  home/                   Homepage pieces (WorkCard)
  project/                Case-study building blocks: ProjectLayout, ProjectChapter,
                          ProjectImage, ProjectToc, DocumentationLink

content/
  site.ts                 Name, contact details, navigation
  projects.ts             Project list shown on the homepage
  about.ts                Experience and gallery data for the About page
```

## Common edits

- **Add a project**: add an entry to `content/projects.ts`, create its case study in
  `app/work/[slug]/projects/`, and register it in `PROJECT_PAGES` in `app/work/[slug]/page.tsx`.
  TypeScript flags a missing registration.
- **Update experience or photos**: edit `content/about.ts`.
- **Change the accent color**: edit `--accent` in `app/globals.css`.

All motion respects `prefers-reduced-motion`.
