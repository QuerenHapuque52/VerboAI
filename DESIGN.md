# Design System Document: VerboAI
## 1. Overview & Creative North Star
This design system is built to transform a biblical content generator from a utility into a sanctuary. Our Creative North Star is **"The Illuminated Digital"**—an editorial-first approach that marries the timeless authority of sacred manuscripts with the fluid, breathing room of high-end modern minimalism.

We break the "template" look by rejecting rigid grids in favor of **intentional asymmetry** and **tonal depth**. This system prioritizes the "Selah" (the pause)—using generous white space to let deep theological concepts breathe. We avoid "app-y" clutter, opting instead for a layout that feels like a premium digital journal or a curated gallery.

---

## 2. Colors & Tonal Depth
Our palette uses deep blues to represent the infinite and the stable, while soft golds evoke divinity and wisdom.

### The "No-Line" Rule
To achieve a premium, seamless feel, **1px solid borders are strictly prohibited** for sectioning content. Visual boundaries must be defined exclusively through:
* **Background Shifts:** Placing a `surface_container_lowest` card on a `surface_container_low` background.
* **Tonal Transitions:** Using the hierarchy of `surface` tokens to define zones of importance.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine vellum.
* **Base:** `surface` (#f8f9fa) or `background` (#f8f9fa).
* **Sectioning:** Use `surface_container_low` (#f3f4f5) for large structural areas.
* **Focus Elements:** Use `surface_container_lowest` (#ffffff) for primary interactive cards to create a "lifted" effect.

### The "Glass & Gold" Rule
For floating elements (like bottom navigation or high-level modals), use **Glassmorphism**. Apply `surface` at 80% opacity with a `backdrop-blur` of 20px.
* **Signature Textures:** For primary CTAs or headers, use a subtle linear gradient from `primary` (#002045) to `primary_container` (#1a365d) at a 135-degree angle. This adds a "soul" to the color that flat hex codes cannot achieve.

---

## 3. Typography
We use a high-contrast typographic scale to create an editorial rhythm.

* **Display & Headlines (`notoSerif`):** These are our "traditional" anchors. Use `display-lg` for daily verses and `headline-md` for section titles. The serif conveys authority and history.
* **Body & Labels (`manrope`):** A clean, modernist sans-serif. Use `body-lg` for generated content to ensure maximum readability and `label-md` for metadata.
* **Editorial Intent:** Always pair a large `headline-lg` with a much smaller `label-md` in `on_surface_variant` (#43474e) to create a sophisticated, high-fashion hierarchy.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We move away from heavy Material Design shadows toward **Tonal Layering**.

* **The Layering Principle:** Rather than adding a shadow to a card, place a `surface_container_lowest` card on a `surface_container` background. The subtle 2% shift in brightness is enough for the human eye to perceive depth without adding visual noise.
* **Ambient Shadows:** If an element must float (e.g., a FAB or a prompt modal), use an ultra-diffused shadow: `y: 8px, blur: 24px, color: rgba(0, 32, 69, 0.06)`. Note the use of the `primary` blue in the shadow tint—never use pure black for shadows.
* **The "Ghost Border":** If a container requires a border for accessibility, use `outline_variant` (#c4c6cf) at **15% opacity**. It should be a whisper of a line, barely perceptible.

---

## 5. Components

### Cards & Vessels
* **Style:** No borders. Use `xl` (0.75rem) rounded corners.
* **Separation:** Strictly forbid divider lines. Use `1.5rem` to `2rem` of vertical white space to separate content blocks.
* **Background:** Use `surface_container_lowest` for cards containing text to maximize contrast.

### Buttons
* **Primary:** Fill with `primary` (#002045). Text in `on_primary` (#ffffff). Shape: `full` (pill).
* **Secondary (The Gold Touch):** Fill with `secondary_container` (#fed65b). Text in `on_secondary_container` (#745c00). Use this for "Generate" or "Share" actions to evoke inspiration.
* **Tertiary:** No background. Use `notoSerif` for the label to make it feel like a literary link.

### Selection Chips (Audience Profiles)
* **Inactive:** `surface_container_high` (#e7e8e9) with `on_surface_variant` text.
* **Active:** `primary` (#002045) background with `on_primary` text.
* **Shape:** `md` (0.375rem) roundedness to contrast with the pill-shaped buttons.

### Progress Indicators
* Avoid "loading bars." Use a thin (2px) line in `secondary_fixed_dim` (#e9c349) that tracks across the very top of the surface or a circular stroke that uses a `primary` to `primary_fixed` gradient.

### Input Fields
* **Style:** Underline-only or subtle "Ghost Border" containers.
* **Focus State:** The label should transition to `secondary` gold to indicate active "wisdom-seeking."

---

## 6. Do’s and Don’ts

### Do:
* **Do** use asymmetrical margins (e.g., a wider left margin for quotes) to create a "journal" feel.
* **Do** use `on_surface_variant` (#43474e) for secondary text to reduce visual weight.
* **Do** allow images to bleed to the edges of the screen while keeping text comfortably inset.

### Don’t:
* **Don’t** use pure black (#000000) for text. Always use `on_surface` (#191c1d) to maintain a soft, premium feel.
* **Don’t** use 1px dividers. They "trap" the content and stop the flow of thought.
* **Don’t** use standard "vibrant" blues. Stick to the `primary` (#002045) for a sense of deep, theological trust.
* **Don’t** crowd the interface. If you think there is enough space, add 8px more. Space is a luxury.