# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 personal website for showcasing AI research in medicine (anesthesiology and intensive care). The site is built with TypeScript, React 18, and Tailwind CSS, using shadcn/ui components.

## Development Commands

- **Development server**: `pnpm dev` (or `npm run dev`)
- **Build**: `pnpm build` (or `npm run build`)
- **Production server**: `pnpm start` (or `npm run start`)
- **Lint**: `pnpm lint` (or `npm run lint`)

Note: The build process has `ignoreBuildErrors: true` and `ignoreDuringBuilds: true` set in `next.config.mjs`.

## Architecture

### Core Structure

- **App Router**: Uses Next.js 14 App Router architecture
- **Main page**: `app/page.tsx` - composed of section components imported from `components/`
- **Layout**: `app/layout.tsx` - contains metadata, structured data, Plausible analytics, and Vercel Analytics
- **Sections**: All page sections are separate components in `components/` directory

### Internationalization (i18n)

The site implements a custom bilingual system (English/Polish):

- **Context**: `contexts/language-context.tsx` provides `LanguageProvider` and `useLanguage` hook
- **Auto-detection**: Browser language is detected on mount and defaults to Polish for `pl-*` locales
- **Translation function**: `t(en: string, pl: string)` returns appropriate text based on current language
- **UI**: `LanguageSelector` component (floating, top-right) toggles between EN/PL

To add translations in components:
```tsx
const { t } = useLanguage()
// Usage: t("English text", "Polski tekst")
```

### Component System

- **UI Components**: Uses shadcn/ui (New York variant) in `components/ui/`
- **Path aliases**: Configured with `@/` prefix mapping to project root
- **Styling**: Tailwind CSS 4 with CSS variables, `cn()` utility in `lib/utils.ts` for class merging

### SEO & Analytics

- Comprehensive metadata in `app/layout.tsx` (OpenGraph, Twitter cards, robots)
- Structured data (JSON-LD) for Person schema
- `app/robots.ts` and `app/sitemap.ts` for SEO
- Plausible analytics (self-hosted at plausible.io)
- Vercel Analytics integrated

## Key Files

- `contexts/language-context.tsx` - Bilingual system implementation
- `components.json` - shadcn/ui configuration
- `app/layout.tsx` - Metadata and analytics configuration
- `lib/utils.ts` - Utility functions (mainly `cn()` for Tailwind)
