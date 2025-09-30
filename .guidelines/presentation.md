# Presentation Guidelines

## Structure

- Presentations use Reveal.js framework
- Presentations should be made using markup/HTML
- Required hierarchy: `.reveal > .slides > section`
- Presentation content is wrapped by `<div class="slides">`
- Each slide is separated by `<section>` element
- ALWAYS prefer markup(html) over markdown

## Slide Types

### Horizontal Slides

- Direct `<section>` elements under `.slides`
- Navigate left/right (arrow keys or swipe)

### Vertical Slides

- Nested `<section>` elements within a parent `<section>`
- Navigate up/down (arrow keys or swipe)
- First vertical slide is considered the "root"

Example:

```html
<div class="slides">
  <section>Horizontal Slide 1</section>
  <section>
    <section>Vertical Slide 1</section>
    <section>Vertical Slide 2</section>
  </section>
  <section>Horizontal Slide 2</section>
</div>
```

## Slide Attributes

- `data-state="state-name"` - Applies CSS classes to viewport based on current slide
- Use for title slides, special backgrounds, or custom styling
- Example: `<section data-state="title">` for title slide styling

## Styling Classes

Available utility classes:

- `.title-slide` - Apply title slide styling
- `.callout` - Highlighted callout box with teal border
- `.highlight` - Light teal background for emphasis
- `.metric` - Large, bold numbers in brand teal
- `.success` - Green color for positive states
- `.warning` - Warm accent color for alerts
- `hr.accent` - Teal-colored horizontal divider

## Best Practices

- Keep one main idea per slide
- Use vertical slides for related subtopics
- Leverage fragments for progressive disclosure (add `class="fragment"` to elements)
- Use consistent heading hierarchy (H2 for slide titles, H3 for subsections)
- Apply `data-state` attributes for slides requiring special styling

## Reference

Full documentation: https://revealjs.com/markup/
