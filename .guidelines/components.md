# AstroWind Components Reference

Complete guide to all available widgets and components in the AstroWind template.

## Layout Components

### PageLayout

Standard page layout with header, footer, and navigation.

```astro
<Layout metadata={{ title: 'Page Title', description: 'Page description' }}>
  <!-- Page content -->
</Layout>
```

### LandingLayout

Focused layout for landing pages without full navigation.

```astro
<LandingLayout metadata={{ title: 'Landing Page' }}>
  <!-- Landing content -->
</LandingLayout>
```

### MarkdownLayout

Layout for blog posts and markdown content.

```astro
<MarkdownLayout metadata={{ title: 'Post Title' }}>
  <!-- Markdown content -->
</MarkdownLayout>
```

## Hero Components

### Hero

Primary hero section with image, text, and actions.

```astro
<Hero
  title="Main Headline"
  subtitle="Supporting text and description"
  tagline="Optional Tagline"
  actions={[
    { variant: 'primary', text: 'Get Started', href: '/start', icon: 'tabler:rocket' },
    { text: 'Learn More', href: '#learn' },
  ]}
  image={{ src: '~/assets/images/hero.jpg', alt: 'Hero image' }}
/>
```

**Props:**

- `title` - Main headline (supports HTML)
- `subtitle` - Supporting text (supports HTML)
- `tagline` - Small text above title
- `actions[]` - Array of CTA buttons
- `image` - Hero image object {src, alt}
- `content` - Additional content via slot

### Hero2

Alternative hero layout with different styling.

```astro
<Hero2
  title="Alternative Hero Style"
  subtitle="Different visual treatment"
  actions={[{ variant: 'primary', text: 'Action', href: '#' }]}
  image={{ src: 'image-url', alt: 'Alt text' }}
/>
```

### HeroText

Text-focused hero without images.

```astro
<HeroText
  title="Text-Focused Hero"
  subtitle="Pure text hero section"
  actions={[{ variant: 'primary', text: 'Start', href: '#' }]}
/>
```

## Feature Components

### Features

Standard feature grid with icons and descriptions.

```astro
<Features
  title="Our Features"
  subtitle="Why choose our solution"
  tagline="Features"
  columns={3}
  items={[
    {
      title: 'Fast Performance',
      description: 'Lightning fast loading times',
      icon: 'tabler:rocket',
    },
    {
      title: 'Secure',
      description: 'Enterprise-grade security',
      icon: 'tabler:shield',
    },
  ]}
  defaultIcon="tabler:check"
/>
```

**Props:**

- `items[]` - Feature items with {title, description, icon, callToAction}
- `columns` - Grid columns (1-4)
- `defaultIcon` - Fallback icon for items without icons

### Features2

Compact feature grid with different styling.

```astro
<Features2
  title="Key Benefits"
  subtitle="What you get"
  items={[{ title: 'Benefit 1', description: 'Description', icon: 'flat-color-icons:approval' }]}
/>
```

### Features3

Feature list with different layout options.

```astro
<Features3 title="Advanced Features" items={[{ title: 'Feature', description: 'Description', icon: 'tabler:star' }]} />
```

## Content Components

### Content

Content sections with text and images.

```astro
<Content
  title="About Our Solution"
  subtitle="Learn more about what we offer"
  content="Detailed description of the content"
  isReversed={false}
  isAfterContent={false}
  items={[
    { title: 'Key Point 1', description: 'Explanation' },
    { title: 'Key Point 2', description: 'Explanation' },
  ]}
  image={{
    src: 'https://images.unsplash.com/photo-image',
    alt: 'Content image',
  }}
>
  <Fragment slot="content">
    <h3>Custom Content</h3>
    <p>Additional content via slots</p>
  </Fragment>

  <Fragment slot="bg">
    <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>
  </Fragment>
</Content>
```

**Props:**

- `isReversed` - Flip image and content positions
- `isAfterContent` - Styling for sections after other content
- `items[]` - List items with {title, description}

## Process Components

### Steps

Step-by-step process sections.

```astro
<Steps
  title="How It Works"
  items={[
    {
      title: 'Step 1: <span class="font-medium">Setup</span>',
      description: 'Get started with initial setup',
      icon: 'tabler:package',
    },
    {
      title: 'Step 2: <span class="font-medium">Configure</span>',
      description: 'Customize to your needs',
      icon: 'tabler:settings',
    },
    {
      title: 'Ready!',
      icon: 'tabler:check',
    },
  ]}
  image={{ src: 'steps-image.jpg', alt: 'Process illustration' }}
/>
```

### Steps2

Alternative steps layout.

```astro
<Steps2
  title="Simple Process"
  items={[
    { title: 'Start', description: 'Begin your journey' },
    { title: 'Build', description: 'Create your solution' },
    { title: 'Launch', description: 'Go live' },
  ]}
/>
```

## Social Proof Components

### Testimonials

Customer testimonials and reviews.

```astro
<Testimonials
  title="What Our Customers Say"
  testimonials={[
    {
      testimonial: 'Amazing product! Highly recommend.',
      name: 'John Smith',
      job: 'CEO, Company Inc.',
      image: 'customer-photo.jpg',
    },
    {
      testimonial: 'Game-changing solution for our business.',
      name: 'Jane Doe',
      job: 'Marketing Director',
    },
  ]}
  callToAction={{
    variant: 'primary',
    text: 'Get Started',
    href: '#',
  }}
/>
```

### Stats

Statistics and metrics display.

```astro
<Stats
  stats={[
    { title: 'Users', amount: '10K+', icon: 'tabler:users' },
    { title: 'Countries', amount: '50+' },
    { title: 'Uptime', amount: '99.9%' },
    { title: 'Satisfaction', amount: '98%' },
  ]}
/>
```

### Brands

Logo/brand showcase.

```astro
<Brands
  title="Trusted by Leading Companies"
  images={[
    { src: 'brand1-logo.png', alt: 'Brand 1' },
    { src: 'brand2-logo.png', alt: 'Brand 2' },
  ]}
/>
```

## Pricing Components

### Pricing

Pricing tables and plans.

```astro
<Pricing
  title="Choose Your Plan"
  subtitle="Flexible pricing for every need"
  prices={[
    {
      title: 'Basic',
      subtitle: 'Perfect for starters',
      price: 29,
      period: 'per month',
      items: [{ title: '5 Projects' }, { title: '10GB Storage' }, { title: 'Email Support' }],
      callToAction: {
        text: 'Start Basic',
        href: '/signup?plan=basic',
      },
      hasRibbon: false,
    },
    {
      title: 'Pro',
      subtitle: 'Most popular choice',
      price: 79,
      period: 'per month',
      items: [
        { title: 'Unlimited Projects' },
        { title: '100GB Storage' },
        { title: 'Priority Support' },
        { title: 'Advanced Analytics' },
      ],
      callToAction: {
        text: 'Start Pro',
        href: '/signup?plan=pro',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
  ]}
/>
```

**Price Object:**

- `title` - Plan name
- `subtitle` - Plan description
- `price` - Price amount
- `period` - Billing period
- `items[]` - Feature list
- `callToAction` - CTA button
- `hasRibbon` - Show ribbon badge
- `ribbonTitle` - Ribbon text

## Interactive Components

### FAQs

Frequently asked questions with collapsible answers.

```astro
<FAQs
  title="Frequently Asked Questions"
  subtitle="Find answers to common questions"
  tagline="FAQ"
  items={[
    {
      title: 'How does it work?',
      description: 'Detailed explanation of how the product works...',
    },
    {
      title: 'What is included?',
      description: 'List of everything included in the package...',
    },
  ]}
  classes={{ container: 'max-w-6xl' }}
/>
```

### Contact

Contact forms and information.

```astro
<Contact
  title="Get in Touch"
  subtitle="We'd love to hear from you"
  inputs={[
    { type: 'text', name: 'name', label: 'Name', placeholder: 'Your name' },
    { type: 'email', name: 'email', label: 'Email', placeholder: 'Your email' },
  ]}
  textarea={{
    label: 'Message',
    name: 'message',
    placeholder: 'Your message',
    rows: 4,
  }}
  disclaimer={{
    label: 'By submitting this form, you agree to our terms.',
  }}
  button="Send Message"
/>
```

**Form Props:**

- `inputs[]` - Form input fields
- `textarea` - Message textarea
- `disclaimer` - Terms/privacy text
- `button` - Submit button text

## Call-to-Action Components

### CallToAction

Conversion-focused sections.

```astro
<CallToAction
  actions={[
    {
      variant: 'primary',
      text: 'Get Started Now',
      href: '/signup',
      icon: 'tabler:rocket',
    },
    {
      text: 'Learn More',
      href: '/about',
    },
  ]}
>
  <Fragment slot="title"> Ready to Get Started? </Fragment>

  <Fragment slot="subtitle"> Join thousands of satisfied customers today. </Fragment>
</CallToAction>
```

## Blog Components

### BlogLatestPosts

Display recent blog posts.

```astro
<BlogLatestPosts title="Latest from Our Blog" information="Stay updated with our latest insights and tips" />
```

### BlogHighlightedPosts

Showcase featured blog posts.

```astro
<BlogHighlightedPosts title="Featured Articles" postIds={['post-slug-1', 'post-slug-2']} />
```

## Utility Components

### Note

Announcement or notification banners.

```astro
<Note title="New Feature Available" description="Check out our latest updates and improvements" />
```

### Announcement

Top-of-page announcements.

```astro
<Announcement text="🎉 New version released! Get 50% off today." href="/offer" target="_blank" />
```

## Common Props

### Actions Array

Used in multiple components for buttons:

```javascript
actions: [
  {
    variant: 'primary' | 'secondary' | 'tertiary' | 'link',
    text: 'Button Text',
    href: '/url',
    target: '_blank' | '_self',
    icon: 'tabler:icon-name',
    classes: { button: 'custom-class' },
  },
];
```

### Image Object

Standard image format:

```javascript
image: {
  src: '~/assets/images/photo.jpg' | 'https://...',
  alt: 'Alt text description',
  width: 800,    // optional
  height: 600    // optional
}
```

### Classes Object

Custom styling for components:

```javascript
classes: {
  container: 'max-w-6xl custom-class',
  title: 'text-4xl font-bold',
  subtitle: 'text-lg text-gray-600'
}
```

### Widget Wrapper Props

Base props available on most widgets:

- `id` - HTML id attribute
- `isDark` - Dark theme variant
- `bg` - Background content via slot
- `classes` - Custom CSS classes

## Icons

### Tabler Icons

Primary icon set: https://tabler-icons.io/

```astro
icon: 'tabler:rocket' // Rocket icon icon: 'tabler:check' // Check mark icon: 'tabler:arrow-right' // Arrow right icon:
'tabler:star' // Star icon: 'tabler:users' // Users
```

### Flat Color Icons

Colorful icons for specific use cases:

```astro
icon: 'flat-color-icons:approval' icon: 'flat-color-icons:gallery' icon: 'flat-color-icons:document'
```

## Responsive Design

### Grid Columns

Most components support responsive columns:

```astro
columns={3} // 3 columns on desktop
columns={1} // Single column (mobile-friendly)
```

### Classes for Responsive

```javascript
classes: {
  container: 'max-w-4xl sm:max-w-6xl lg:max-w-7xl',
  title: 'text-2xl sm:text-3xl lg:text-4xl'
}
```

## Best Practices

### Content Structure

1. Start with Hero for main message
2. Follow with Features or Content for details
3. Add social proof (Testimonials, Stats)
4. Include Pricing if applicable
5. Address concerns (FAQs)
6. End with CallToAction

### Performance

- Optimize images before using
- Use appropriate image sizes
- Lazy load images below fold
- Minimize custom JavaScript

### Accessibility

- Always include alt text for images
- Use semantic HTML structure
- Ensure sufficient color contrast
- Test with keyboard navigation

### SEO

- Use descriptive titles and subtitles
- Include relevant keywords naturally
- Structure content hierarchically
- Add meta descriptions to pages
