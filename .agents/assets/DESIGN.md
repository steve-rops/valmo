# Design System Specification: Editorial Longevity

## 1. Overview & Creative North Star
**Creative North Star: "The Modern Sanctuary"**

This design system rejects the frantic, high-intensity tropes of traditional fitness UI. Instead, it adopts the persona of a high-end wellness curator. The experience should feel like walking into a light-filled, boutique studio: quiet, intentional, and premium. 

To break the "template" look, we utilize **Editorial Asymmetry**. By pairing oversized display typography with generous, unbalanced white space and overlapping tonal layers, we create a layout that feels designed rather than generated. We prioritize "Strength, Balance, and Longevity" through a visual language of stability and "breathing" compositions.

---

## 2. Colors: Tonal Atmosphere
The palette is rooted in nature and longevity, using low-chroma tones to reduce cognitive load and evoke a sense of calm.

### The "No-Line" Rule
**Explicit Instruction:** Traditional 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section should sit directly against a `surface` background to create a soft, structural change without the "crutch" of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, heavy-weight paper.
- **Base Layer:** `surface` (#fbf9f5) or `surface-container-lowest` (#ffffff).
- **Secondary Depth:** Use `surface-container-low` (#f5f4ee) for subtle content grouping.
- **Nesting:** Place a `surface-container-highest` (#e2e3db) card within a `surface-container-low` section to create a soft, natural lift.

### The Glass & Gradient Rule
To move beyond a flat "out-of-the-box" feel, use **Glassmorphism** for floating elements (e.g., sticky headers or navigation bars). Use semi-transparent `surface` colors with a 12px–20px backdrop-blur. 
- **Signature Polish:** For primary CTAs or hero backgrounds, apply a subtle linear gradient from `primary` (#5f604a) to `primary-dim` (#52543f) at a 45-degree angle to provide visual "soul" and depth.

---

## 3. Typography: Sophisticated Modernism
We use **Lexend** as our sole typeface, relying on extreme weight contrast and generous tracking to convey elegance.

*   **Display (lg/md):** Set at `font-weight: 300` (Light) or `400` (Regular) with `-0.02em` letter spacing. These are the "Art Pieces" of the page. Use them sparingly to anchor a layout.
*   **Headlines:** Set at `font-weight: 500` (Medium). Headlines should be the primary "anchors" for the eye.
*   **Body (lg/md):** Set at `font-weight: 300`. The light weight of Lexend at body sizes feels high-end and editorial. Ensure line-height is at least `1.6` for maximum readability and "air."
*   **Labels:** Use `font-weight: 600` (Semi-bold) in `label-sm` size, occasionally with `0.05em` letter spacing for a "caps-header" look in small metadata.

---

## 4. Elevation & Depth: Tonal Layering
We convey hierarchy through material depth rather than structural lines.

*   **The Layering Principle:** Depth is achieved by "stacking" the `surface-container` tiers. A `primary-container` (#e4e4c9) element on a `surface` background creates immediate focus without needing a shadow.
*   **Ambient Shadows:** When a "floating" effect is required (e.g., a modal or floating action button), use an extra-diffused shadow: `blur: 40px`, `y-offset: 12px`, and `opacity: 6%`. The shadow color must be a tinted version of `on-surface` (#31332e) to mimic natural light.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, it must be a **Ghost Border**: use `outline-variant` (#b1b3ab) at 15% opacity. Never use 100% opaque, high-contrast borders.

---

## 5. Components: Boutique UI
Components should feel light, tactile, and intentional.

*   **Buttons:**
    *   **Primary:** `primary` (#5f604a) background with `on-primary` text. Use `rounded-full` for a "smooth stone" feel.
    *   **Secondary:** `secondary-container` (#ece1d1) background. This "Sand Beige" tone provides a softer alternative to the Olive primary.
    *   **Padding:** Use `spacing-3` (1rem) vertical and `spacing-6` (2rem) horizontal for a premium, spacious feel.
*   **Cards:** Forbid divider lines. Separate content using `spacing-4` (1.4rem) or `spacing-5` (1.7rem). Cards should use `rounded-xl` (1.5rem) to maintain the "refined roundness" of the brand.
*   **Input Fields:** Ghost-style inputs are preferred. Use a `surface-container-high` background with no border. Upon focus, transition the background to `surface-container-highest`.
*   **Chips:** Use `secondary-fixed-dim` (#ddd3c3) for unselected states. These should feel like small, smooth pebbles.
*   **Progress Indicators:** Use ultra-thin (2px) lines for progress bars to maintain a "boutique" aesthetic. Thick bars feel too "athletic."

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace negative space. If a layout feels "full," remove an element or increase spacing.
*   **Do** use asymmetrical margins. Offsetting a text block to the right of a centered image creates an editorial, high-end look.
*   **Do** use the `primary` (Olive Green) as a "quiet accent"—it should represent growth and longevity, not aggression.

### Don't:
*   **Don't** use pure black (#000000). Always use `on-background` (#31332e) for text to maintain the soft, premium feel.
*   **Don't** use 1px dividers to separate list items. Use `spacing-3` gaps and subtle `surface-container` background shifts.
*   **Don't** use "gym" icons (dumbbells, sweating figures). Use abstract icons representing movement, flow, and balance (leaves, circles, waves).