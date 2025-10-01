# AstroWind Website Components Reference

## Overview
AstroWind provides pre-built Astro components using Tailwind CSS. All components support dark mode, are responsive, and follow common prop patterns.

## Common Props Pattern
Most widgets share these props:
- `title` - Main heading (string or slot)
- `subtitle` - Supporting text (string or slot)
- `tagline` - Small text above title (string)
- `id` - HTML id for anchor links
- `isDark` - Dark background variant (boolean)
- `classes` - Custom CSS classes (object)
- `bg` - Background slot for custom backgrounds

## Widget Components (`~/components/widgets/`)

### Hero Sections

**Hero.astro** - Primary hero with image
```astro
<Hero
  title="Main Heading"
  subtitle="Supporting text"
  tagline="SMALL TEXT ABOVE"
  actions={[
    { variant: 'primary', text: 'CTA Button', href: '#', icon: 'tabler:icon' },
    { text: 'Secondary', href: '#' }
  ]}
  image={{ src: import('~/assets/image.jpg'), alt: 'Description' }}
/>
```

**Hero2.astro** - Alternative hero layout variant

**HeroText.astro** - Text-only hero without image

### Features

**Features.astro** - Grid of features with icons
```astro
<Features
  title="Feature Section Title"
  subtitle="Description"
  tagline="CATEGORY"
  columns={2}
  items={[
    {
      title: 'Feature Name',
      description: 'Feature description',
      icon: 'tabler:icon-name'
    }
  ]}
/>
```

**Features2.astro** - Alternative feature layout

**Features3.astro** - Third feature layout variant

### Content Sections

**Content.astro** - Content block with image and optional features grid
```astro
<Content
  title="Content Title"
  subtitle="Description"
  tagline="LABEL"
  isReversed={false}
  image={{ src: import('~/assets/image.jpg'), alt: 'Alt text' }}
  callToAction={{ text: 'Learn More', href: '#' }}
  items={[
    { title: 'Item', description: 'Details', icon: 'tabler:check' }
  ]}
/>
```
Props: `isReversed` (boolean) - flip image/text layout, `isAfterContent` (boolean) - reduce top padding

### Process/Steps

**Steps.astro** - Timeline/process steps with optional image
```astro
<Steps
  title="Process Title"
  items={[
    {
      title: 'Step 1',
      description: 'Step description',
      icon: 'tabler:number-1'
    }
  ]}
  image={{ src: import('~/assets/image.jpg'), alt: 'Process visual' }}
  isReversed={false}
/>
```

**Steps2.astro** - Alternative steps layout

### Social Proof

**Testimonials.astro** - Customer testimonial grid
```astro
<Testimonials
  title="What Customers Say"
  tagline="TESTIMONIALS"
  testimonials={[
    {
      title: 'Optional title',
      testimonial: 'Quote text here',
      name: 'Customer Name',
      job: 'Job Title',
      image: { src: import('~/assets/avatar.jpg'), alt: 'Name' }
    }
  ]}
  callToAction={{ text: 'More Reviews', href: '#' }}
/>
```

**Stats.astro** - Statistics display
```astro
<Stats
  title="By The Numbers"
  stats={[
    { amount: '132K', title: 'Downloads', icon: 'tabler:download' }
  ]}
/>
```

**Brands.astro** - Logo showcase grid

### Pricing

**Pricing.astro** - Pricing table
```astro
<Pricing
  title="Pricing Plans"
  prices={[
    {
      title: 'Basic',
      subtitle: 'For starters',
      price: 29,
      period: 'per month',
      items: [
        { description: 'Feature 1' },
        { description: 'Feature 2' }
      ],
      callToAction: { text: 'Get Started', href: '#' },
      hasRibbon: true,
      ribbonTitle: 'Popular'
    }
  ]}
/>
```

### FAQ

**FAQs.astro** - FAQ section
```astro
<FAQs
  title="Common Questions"
  columns={2}
  items={[
    {
      title: 'Question?',
      description: 'Answer text',
      icon: 'tabler:chevron-right'
    }
  ]}
/>
```

### Call to Action

**CallToAction.astro** - CTA banner
```astro
<CallToAction
  title="Ready to Get Started?"
  subtitle="Join thousands of users today"
  actions={[
    { variant: 'primary', text: 'Start Now', href: '#' }
  ]}
/>
```

### Contact

**Contact.astro** - Contact form
```astro
<Contact
  title="Get In Touch"
  inputs={[
    { type: 'text', name: 'name', label: 'Name' },
    { type: 'email', name: 'email', label: 'Email' }
  ]}
  textarea={{ label: 'Message', name: 'message' }}
  disclaimer={{ label: 'I agree to terms' }}
  button="Send Message"
  description="We'll respond within 24 hours"
/>
```

### Header/Footer

**Header.astro** - Site header with navigation (configured in `src/navigation.js`)

**Footer.astro** - Site footer (configured in `src/navigation.js`)

### Blog

**BlogLatestPosts.astro** - Display recent blog posts

**BlogHighlightedPosts.astro** - Display featured blog posts

### Utility

**Note.astro** - Note/announcement box

**Announcement.astro** - Announcement banner

## UI Components (`~/components/ui/`)

**Button.astro** - Button component
```astro
<Button
  variant="primary"  // 'primary' | 'secondary' | 'tertiary' | 'link'
  text="Click Me"
  icon="tabler:arrow-right"
  href="/page"
  type="button"  // for form buttons
/>
```

**Headline.astro** - Standardized heading block
```astro
<Headline
  title="Title"
  subtitle="Subtitle"
  tagline="TAGLINE"
  classes={{ title: 'text-4xl', subtitle: 'text-lg' }}
/>
```

**Timeline.astro** - Timeline UI (used by Steps widgets)

**ItemGrid.astro** / **ItemGrid2.astro** - Item grid layouts
```astro
<ItemGrid
  items={[{ title: '', description: '', icon: '' }]}
  columns={2}
  defaultIcon="tabler:check"
/>
```

**Form.astro** - Form container (used by Contact widget)

**Background.astro** - Background decoration

**WidgetWrapper.astro** - Section wrapper (used internally by widgets)

## Blog Components (`~/components/blog/`)

**Grid.astro** / **GridItem.astro** - Blog post grid layout

**List.astro** / **ListItem.astro** - Blog post list layout

**SinglePost.astro** - Single post page layout

**Tags.astro** - Tag display

**Pagination.astro** - Pagination controls

**RelatedPosts.astro** - Related posts widget

**Headline.astro** - Blog-specific headline

## Common Components (`~/components/common/`)

**Image.astro** - Optimized image wrapper (use instead of `<img>`)
```astro
<Image
  src={import('~/assets/image.jpg')}
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

**ToggleTheme.astro** - Dark/light mode toggle

**ToggleMenu.astro** - Mobile menu toggle

**SocialShare.astro** - Social sharing buttons

**Analytics.astro** - Analytics integration

**Metadata.astro** - SEO metadata (used in layouts)

## Icons

Uses `astro-icon` package with Tabler icons. Common icons:
- `tabler:check` - Checkmark
- `tabler:arrow-right` - Arrow
- `tabler:calendar` - Calendar
- `tabler:mail` - Email
- `tabler:phone` - Phone
- Browse more: https://tabler.io/icons

## Usage Examples

### Basic Landing Page Structure
```astro
---
import Layout from '~/layouts/PageLayout.astro';
import Hero from '~/components/widgets/Hero.astro';
import Features from '~/components/widgets/Features.astro';
import CallToAction from '~/components/widgets/CallToAction.astro';
---

<Layout metadata={{ title: 'Page Title' }}>
  <Hero title="Welcome" />
  <Features title="Our Features" items={[...]} />
  <CallToAction title="Get Started" />
</Layout>
```

### Adding Custom Backgrounds
```astro
<Hero>
  <Fragment slot="title">My Title</Fragment>
  <Fragment slot="bg">
    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"></div>
  </Fragment>
</Hero>
```

## Best Practices

1. **Always use slots for HTML content** (titles with formatting, custom markup)
2. **Use Image component for all images** for optimization
3. **Leverage Tailwind classes** via `classes` prop for customization
4. **Use semantic IDs** for anchor navigation (`id="features"`)
5. **Keep icon names consistent** using tabler icons
6. **Test dark mode** by toggling theme
7. **Import from aliases**: Use `~/components/` not relative paths
