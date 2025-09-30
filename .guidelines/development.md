## Project Overview

AstroWind is a production-ready template built with **Astro 5.0** and **Tailwind CSS**. It provides pre-built components (widgets) for creating professional websites, landing pages, and blogs with excellent performance and SEO.

> **📖 Component Reference**: For detailed documentation on all available widgets and components, see [`.guidelines/components.md`](.guidelines/components.md)

## Key Directories

```
src/
├── components/widgets/     # Main UI components (Hero, Features, etc.)
├── components/ui/         # Base UI elements (Button, Form, etc.)
├── components/common/     # Shared components (Image, Metadata, etc.)
├── layouts/              # Page layouts (PageLayout, LandingLayout, MarkdownLayout)
├── pages/               # Route pages and blog system
├── data/post/           # Blog post content (Markdown/MDX)
├── utils/               # Utility functions
├── config.yaml          # Site configuration
└── navigation.ts        # Header/footer navigation
```

## Development Commands

IMPORTANT: After each task run `npm run fix && npm run check && npm run build` to make sure project builds

- `npm run dev` - Start development server (localhost:4321)
- `npm run build` - Build production site
- `npm run check` - Run type checking and linting
- `npm run fix` - Auto-fix ESLint and Prettier issues

## Site Configuration

### Primary Config (`src/config.yaml`)

```yaml
site:
  name: 'Your Site Name'
  site: 'https://yoursite.com'
  base: '/'

metadata:
  title:
    default: 'Your Site'
    template: '%s — Your Site'
  description: 'Your site description'

apps:
  blog:
    isEnabled: true
    postsPerPage: 6
```

### Navigation (`src/navigation.ts`)

Update `headerData.links` and `footerData.links` arrays to customize menus.

## Page Creation Patterns

### Landing Pages

Use `LandingLayout` for focused conversion pages:

```astro
---
import Layout from '~/layouts/LandingLayout.astro';
import Hero from '~/components/widgets/Hero.astro';
---

<Layout metadata={{ title: 'Landing Page' }}>
  <Hero
    title="Your Title"
    subtitle="Your subtitle"
    actions={[{ variant: 'primary', text: 'Get Started', href: '#' }]}
  />
</Layout>
```

### Content Pages

Use `PageLayout` for standard pages with header/footer:

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import Features from '~/components/widgets/Features.astro';
---

<Layout metadata={{ title: 'About' }}>
  <Features
    title="Our Features"
    items={[{ title: 'Feature 1', description: 'Description...', icon: 'tabler:rocket' }]}
  />
</Layout>
```

## Widget Composition Strategy

### Page Structure Pattern

1. **Hero** - Main headline and CTA
2. **Features/Content** - Key information sections
3. **Testimonials/Stats** - Social proof
4. **Pricing** - If applicable
5. **FAQs** - Address objections
6. **CallToAction** - Final conversion

### Widget Data Structure

Most widgets accept:

- `title`, `subtitle`, `tagline` - Headlines
- `items[]` - Array of content items
- `actions[]` - Call-to-action buttons
- `image` - Visual elements
- `classes` - Custom CSS classes

> **💡 Detailed Examples**: See [`.guidelines/components.md`](.guidelines/components.md) for complete usage examples and props for all widgets.

## Content Creation

### Blog Posts

Create `.md` or `.mdx` files in `src/data/post/`:

```markdown
---
publishDate: 2024-01-15T00:00:00Z
title: 'Your Post Title'
excerpt: 'Brief description'
image: ~/assets/images/post-image.jpg
category: tutorials
tags:
  - astro
  - tailwind
draft: false
---

Your content here...
```

### MDX Support

Use MDX for interactive content with components:

```mdx
import { YouTube } from 'astro-embed';

# My Post

<YouTube id="video-id" />
```

## Styling & Customization

### Theme Colors

Edit `src/assets/styles/tailwind.css` for global styles:

```css
:root {
  --aw-color-primary: rgb(1, 97, 254);
  --aw-color-secondary: rgb(1, 84, 207);
}
```

### Component Styling

Use `classes` prop for custom styling:

```astro
<Hero
  classes={{
    container: 'max-w-6xl',
    title: 'text-6xl font-bold',
  }}
/>
```

### Custom Components

Follow existing patterns in `src/components/widgets/` for new widgets.

## SEO & Performance

### Metadata Setup

Configure in component frontmatter:

```javascript
const metadata = {
  title: 'Page Title',
  description: 'Page description',
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '~/assets/images/og-image.jpg' }],
  },
};
```

### Image Optimization

Use the built-in Image component:

```astro
import Image from '~/components/common/Image.astro';

<Image src="~/assets/images/hero.jpg" alt="Description" width={800} height={600} />
```

## Icons

Uses **Tabler Icons** via astro-icon:

- Browse: https://tabler-icons.io/
- Usage: `icon: 'tabler:icon-name'`
- Examples: `tabler:rocket`, `tabler:check`, `tabler:arrow-right`

> **🎨 Icon Reference**: See [`.guidelines/components.md#icons`](.guidelines/components.md#icons) for complete icon usage and examples.

## Common Customization Tasks

### Change Homepage

Edit `src/pages/index.astro` - replace widgets and content as needed.

### Update Navigation

Modify `src/navigation.ts` - update links, actions, and footer data.

### Blog Configuration

Adjust blog settings in `src/config.yaml` under `apps.blog`.

### Color Scheme

Update CSS variables in `src/assets/styles/tailwind.css`.

### Analytics

Add Google Analytics ID in `src/config.yaml` under `analytics.vendors.googleAnalytics.id`.

## Deployment

- **Build**: `npm run build` creates `dist/` folder
- **Static**: Deploy `dist/` to any static hosting
- **Platforms**: Netlify, Vercel, GitHub Pages supported
- **Environment**: Set `NODE_ENV=production` for builds

## Performance Tips

- Images auto-optimized with Sharp
- Tailwind CSS purged in production
- Astro provides excellent Core Web Vitals scores
- Use `loading="lazy"` for images below fold
- Minimize JavaScript - template uses minimal client-side JS

## TypeScript Support

- Types defined in `src/types.d.ts`
- Widget props are strongly typed
- Run `npm run check:astro` for type validation

## Best Practices

- Keep widget data in frontmatter, not hardcoded
- Use semantic HTML structure provided by widgets
- Test responsive design across device sizes
- Validate markup and accessibility
- Optimize images before importing
- Follow consistent naming conventions
