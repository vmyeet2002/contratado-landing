# Design System Documentation: Kinetic Electric

## 1. Overview & Creative North Star
**Creative North Star: "The High-Velocity Lab"**

This design system is engineered for high-performance environments where speed, precision, and technical authority are paramount. Moving beyond the "standard dark mode" template, this system utilizes a "High-Velocity" aesthetic—characterized by deep, obsidian-like depths contrasted against hyper-saturated neon kinetic energy. 

We break the traditional grid through **intentional asymmetry** and **layered luminosity**. Elements shouldn't just sit on a page; they should feel like high-end hardware interfaces or editorial spreads in a premium tech journal. By utilizing overlapping surfaces, aggressive typography scales, and a signature neon glow, we create a digital experience that feels less like a website and more like a specialized instrument.

---

## 2. Colors
The palette is rooted in a "Black Hole" philosophy: a foundation of absolute blacks and desaturated greys that allow the **Neon Orange** highlights to vibrate with electric intensity.

### Color Tokens (Material Design Convention)
*   **Primary (Neon Orange):** `#FF9062` (Core), `#FE5F00` (Electric Peak)
*   **Surface Foundation:** `#0E0E0E` (Base), `#000000` (Lowest)
*   **Surface Containers:** `#131313` (Low), `#1A1919` (Mid), `#262626` (Highest)
*   **Accents (Tertiary):** `#FFBD59` (Golden Amber for warning/subtle contrast)

### Strategic Application Rules
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for defining sections. Structural boundaries must be achieved through background shifts (e.g., a `surface-container-low` hero section transitioning into a `surface` body) or subtle tonal depth. 
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of obsidian. Use `surface-container-lowest` for deep background wells and `surface-container-highest` for interactive floating cards.
*   **The "Glass & Gradient" Rule:** To achieve a premium "technical" feel, floating elements should use Glassmorphism (semi-transparent surface colors with `backdrop-blur: 20px`). 
*   **Signature Textures:** Use subtle linear gradients for CTAs, transitioning from `primary_fixed_dim` (#FE5F00) to `primary` (#FF9062) at a 135-degree angle to simulate light-emissive hardware.

---

## 3. Typography
We utilize **Plus Jakarta Sans** for its geometric precision and modern, technical proportions. The hierarchy is designed to feel editorial and authoritative.

*   **Display (lg/md/sm):** 3.5rem / 2.75rem / 2.25rem. Use for high-impact hero statements. Tighten letter-spacing (-0.02em) for a more "locked-in" feel.
*   **Headline (lg/md/sm):** 2rem / 1.75rem / 1.5rem. Used for section titles. These should be high-contrast against the deep background.
*   **Title (lg/md/sm):** 1.375rem / 1.125rem / 1rem. Semi-bold weight to denote technical hierarchy.
*   **Body (lg/md/sm):** 1rem / 0.875rem / 0.75rem. Medium weight for readability. Use `on_surface_variant` (#ADAAAA) for secondary body text to reduce visual fatigue.
*   **Label (md/sm):** 0.75rem / 0.6875rem. Monospaced-style application (wide letter spacing) for technical data and micro-copy.

---

## 4. Elevation & Depth
Depth is not a shadow; it is a **Tonal Layer**. This system rejects heavy-handed drop shadows in favor of ambient luminescence.

*   **The Layering Principle:** Stack `surface-container` tiers to create hierarchy. A `surface-container-lowest` card nested within a `surface-container-low` section provides a recessed, "machined" look.
*   **Ambient Shadows:** When an element must float (e.g., a modal), use a shadow with a 64px blur and 6% opacity, using the `primary` color (#FF9062) instead of black. This creates a "Neon Underglow" effect.
*   **The "Ghost Border":** If a container requires containment, use a 1px border using `outline_variant` at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Navigation bars and floating menus must use `surface_container_low` at 70% opacity with a heavy backdrop blur to integrate the UI into the background "atmosphere."

---

## 5. Components

### Buttons
*   **Primary:** High-saturation `primary_fixed_dim` (#FE5F00) background. White text. `border-radius: 1rem` (Round Four). Apply a subtle outer glow on hover.
*   **Secondary:** Ghost style. `outline` color border at 20% opacity. Text in `primary`.
*   **Tertiary:** Text-only in `on_surface_variant`, shifting to `primary` on hover.

### Cards & Lists
*   **Cards:** No borders. Use `surface-container-high` against `surface` background. Padding should be generous (md: 1.5rem).
*   **Lists:** Forbid divider lines. Use `8px` of vertical white space between items and a `surface-container-low` hover state background.

### Input Fields
*   **States:** Default state uses `surface-container-highest`. Focus state triggers a 1px `primary` ghost border and a soft neon glow.
*   **Typography:** Labels use `label-md` in uppercase with 0.05em tracking for a "data-entry" feel.

### Additional: The "Kinetic Data" Component
For technical dashboards, use ultra-thin (1px) `primary` colored sparklines and progress bars. These should utilize a glow filter (`filter: drop-shadow(0 0 4px #FF5F00)`) to emphasize the "electric" nature of the data.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use extreme vertical whitespace to create an editorial feel.
*   **Do** use the Neon Orange sparingly for maximum impact; if everything is orange, nothing is electric.
*   **Do** overlap elements (e.g., a card slightly bleeding over a section break) to break the "boxy" web feel.
*   **Do** use `primary_container` for subtle backgrounds of chips or icons to create a tonal orange-on-black look.

### Don’t
*   **Don’t** use pure white (#FFFFFF) for long-form body text; use `on_surface_variant` to maintain the "Dark Lab" aesthetic.
*   **Don’t** use standard "Material" 2px shadows.
*   **Don’t** use 100% opaque borders to separate content; it disrupts the fluid, high-end feel.
*   **Don’t** use "Round Full" (Pill) for buttons unless they are floating action buttons; stick to "Round Four" (1rem) for the signature architectural look.