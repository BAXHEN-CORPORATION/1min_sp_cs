---
name: Deep Logic Education
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#341100'
  on-tertiary-container: '#d95f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
  section-padding: 120px
---

## Brand & Style

The design system is engineered for the intersection of high-level education and computer science. The brand personality is **authoritative yet accessible**, projecting a sense of intellectual clarity and technical precision. The target audience consists of students and professionals seeking structured growth, necessitating a UI that feels reliable, focused, and high-value.

The visual style follows a **Modern Minimalist** approach. It leverages expansive whitespace to reduce cognitive load, allowing technical information to breathe. The aesthetic relies on crisp geometry, purposeful typography, and a "less but better" philosophy. While the foundation is sober and professional, a high-energy accent color is strategically deployed to drive conversions and provide visual momentum.

## Colors

The palette is anchored in technical sophistication. The **Primary** color is a deep Slate Navy, used for headers and foundational text to establish authority. The **Secondary** palette consists of muted blues and grays that define the "technical" environment of computer science education.

The **Tertiary** accent—a vibrant International Orange—is reserved exclusively for primary Calls to Action (CTAs) and urgent interaction points. This creates a powerful visual hierarchy where the path to conversion is unmistakable. Backgrounds utilize a very light cool-gray to provide a softer canvas than pure white, reducing eye strain during long reading sessions.

## Typography

This design system uses a triple-font strategy to balance character and utility. **Plus Jakarta Sans** provides a modern, geometric feel for headlines, offering high impact with a friendly, contemporary edge. **Inter** is the workhorse for body copy, chosen for its exceptional legibility in technical contexts. **JetBrains Mono** is used sparingly for labels and metadata to lean into the computer science theme.

Line heights are generous (1.5–1.6) to ensure readability of educational content. Display headings use tight letter spacing and heavy weights to command attention on sales landing pages.

## Layout & Spacing

The layout utilizes a **12-column fixed grid** for desktop, ensuring content remains centered and readable on ultra-wide monitors. A modular 8px spacing system governs all internal element relationships.

Vertical rhythm is critical: sections are separated by significant padding (120px) to create "chapters" of information. On mobile devices, the grid collapses to a single column with 16px side margins. Key technical information (like pricing or curriculum) should be housed in contained layouts that do not exceed 800px in width to maintain optimal line length for reading.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and extremely subtle **Ambient Shadows**. Most surfaces are flat, using 1px borders in a soft gray (#E2E8F0) to define boundaries.

Elevation is reserved for interactive elements:
1.  **Level 0 (Base):** The main background surface.
2.  **Level 1 (Cards):** Containers for course modules or checkout forms, using a subtle 1px border.
3.  **Level 2 (Floating):** Used for primary CTAs and active state inputs, featuring a soft, diffused shadow (0px 10px 15px -3px rgba(0,0,0,0.05)) to suggest "pressability" without breaking the minimalist aesthetic.

## Shapes

The shape language is **Refined and Structured**. We use a "Rounded" (0.5rem) standard for most UI components. This softens the technical nature of the computer science content, making the platform feel approachable and modern.

Buttons and form inputs share this corner radius to maintain a cohesive language. Larger containers, like feature cards, may scale up to "rounded-lg" (1rem) to emphasize their role as distinct content blocks.

## Components

### Buttons
- **Primary:** Vibrant Orange (#F97316) background, white text, bold weight. Use for "Buy Now" or "Enroll."
- **Secondary:** Slate Navy (#0F172A) outline or solid, used for "Learn More."
- **Ghost:** No background, Slate Gray text, used for secondary navigation.

### Inputs
Fields should use a 1px border (#E2E8F0). On focus, the border shifts to the Secondary Blue (#3B82F6) with a subtle outer glow. Labels use the "label-caps" mono font for a technical look.

### Cards & Feature Blocks
Cards are white with a subtle border. They should include generous internal padding (32px). Icons within cards should be simple line-art styles using the Primary Slate Navy.

### Progress Indicators & Lists
Checklists for "What you will learn" should use a customized Primary Blue checkmark. For multi-step checkout processes, use a horizontal step indicator with "JetBrains Mono" numbering.

### Trust Elements
Testimonials and "Guaranteed" badges should be placed in low-contrast containers (Secondary Blue at 5% opacity) to distinguish them from functional sales copy.