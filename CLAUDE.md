# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Environment Variables

Create `.env.local` with:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## Architecture

**Danistory** is a personal portfolio + blog site built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4. Deployed on Vercel with Supabase for auth and the guestbook.

### Routing structure

- `/` — homepage composed of section components from `components/sections/`
- `/blog` → `/blog/[category]` → `/blog/[category]/[slug]` — static blog from markdown files
- `/projects` → `/projects/[slug]` — portfolio projects
- `/guestbook` — client component backed by Supabase (`guestbook` table)
- `/login`, `/signup`, `/auth/callback` — Supabase OAuth flow (Google + Kakao; Naver not yet supported)

### Blog system

Blog posts live in `content/blog/*.md` with frontmatter:
```
---
title: ...
date: YYYY-MM-DD
description: ...
category: CategoryName
thumbnail: /img/...   # optional; falls back to first image in content
---
```

`lib/blog.ts` reads all posts at build time using `fs` + `gray-matter`. The `[category]` segment in the URL is used for filtering/listing only — `[slug]/page.tsx` reads the file directly by slug (filename without `.md`), so the category in the URL is decorative.

Markdown is rendered server-side via the `remark` → `remark-rehype` → `rehype-highlight` → `rehype-stringify` pipeline. Code blocks get syntax highlighting; `CodeBlockCopy` is a client component mounted after the HTML to add copy buttons.

### Project portfolio

All project data is hardcoded in `app/projects/projectData.ts` as a `projects: Project[]` array. To add a new project, append an entry there and optionally create a diagram component in `app/projects/components/`. The `[slug]/page.tsx` renders the project using `getProjectBySlug(slug)`.

### Auth flow

`lib/supabase.ts` exports a single Supabase client used across all client components. OAuth redirects to `/auth/callback?next=/guestbook`, handled by `AuthCallbackClient.tsx`. Only users who are logged in can post to the guestbook; users can only delete their own entries (enforced client-side by comparing `user.id` to `item.user_id`).

### Styling conventions

- Tailwind v4 utility classes only — no CSS modules, no separate stylesheet files
- `@tailwindcss/typography` (`prose` classes) for blog post content
- Inline `className` for all component styling
