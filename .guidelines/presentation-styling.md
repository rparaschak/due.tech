# Presentation Styling Guide

## Overview

All presentations use reveal.js with the default black theme. Custom styling can be added as needed.

## Current Setup

- **Layout**: `src/layouts/PresentationLayout.astro`
- **Theme**: `reveal.js/dist/theme/black.css` (default)
- **Custom Theme**: `src/assets/styles/presentation-theme.css` (global overrides)
- **Guidelines**: See `.guidelines/presentation.md` for content structure

### Global Theme Customization

The custom presentation theme (`presentation-theme.css`) overrides default Reveal.js theme settings:

- **Background Color**: `#1a1f2e` (deep blue-gray) - Applied globally to all presentations
- **Typography**: Nunito font family (Regular 400, SemiBold 600, Bold 700) - Imported in PresentationLayout.astro
- Import order matters: Custom theme must be imported after the base Reveal.js theme to ensure proper override

#### Typography Guide

**Title Slide** (slides with `class="title-slide"` or `data-state="title"`):

- **Title (h1)**: Nunito Bold, 56pt (3.5rem), `#0ea5c1` (teal)
- **Subtitle (h2)**: Nunito Regular, 28pt (1.75rem), `#a0aec0` (gray-blue)

**Headings** (regular slides):

- **H1**: Nunito Bold, 40pt (2.5rem), `#0ea5c1` (teal)
- **H2**: Nunito SemiBold, 32pt (2rem), `#0ea5c1` (teal)
- **H3**: Nunito SemiBold, 24pt (1.5rem), `#e8eef2` (light gray)

**Body Text**:

- **Regular**: Nunito Regular, 20pt (1.25rem), `#e8eef2` (light gray), line height 1.6
- **Small**: Nunito Regular, 16pt (1rem), `#a0aec0` (gray-blue) - Use `<small>` tag or `.small` class

**Lists**:

- **Bullet points**: `#0ea5c1` (teal)
- **List items**: Nunito Regular, 20pt (1.25rem), `#e8eef2` (light gray)
- **Line spacing**: 1.5

**Emphasis**:

- **Strong/Bold**: Nunito Bold, same size as context, `#0ea5c1` (teal) - Use `<strong>` or `<b>` tag

## Available Reveal.js Themes

You can change the theme by editing `src/layouts/PresentationLayout.astro`:

```javascript
import 'reveal.js/dist/theme/black.css'; // Current
```

Available themes:

- `black.css` (default)
- `white.css`
- `league.css`
- `beige.css`
- `night.css`
- `serif.css`
- `simple.css`
- `solarized.css`
- `moon.css`
- `dracula.css`
- `sky.css`
- `blood.css`

## Custom Styling

Custom styles are defined in `src/assets/styles/presentation-theme.css` and automatically imported in `PresentationLayout.astro`.

To modify global presentation styles:

1. Edit `src/assets/styles/presentation-theme.css`
2. Changes will apply to all presentations automatically
3. Ensure CSS specificity targets `.reveal` class for global overrides

## Resources

- [Reveal.js Documentation](https://revealjs.com/)
- [Reveal.js Themes](https://revealjs.com/themes/)
- [Creating Custom Themes](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md)
