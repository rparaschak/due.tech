# Presentation Styling Guide

## Overview

All presentations use reveal.js with the default black theme. Custom styling can be added as needed.

## Current Setup

- **Layout**: `src/layouts/PresentationLayout.astro`
- **Theme**: `reveal.js/dist/theme/black.css` (default)
- **Guidelines**: See `.guidelines/presentation.md` for content structure

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

To add custom styles, create `src/assets/styles/presentation-theme.css` and import it in `PresentationLayout.astro` after the reveal.js theme import.

## Resources

- [Reveal.js Documentation](https://revealjs.com/)
- [Reveal.js Themes](https://revealjs.com/themes/)
- [Creating Custom Themes](https://github.com/hakimel/reveal.js/blob/master/css/theme/README.md)
