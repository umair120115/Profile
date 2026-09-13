# Design System: Umair Ahmad — Executive Engineering Portfolio

## 1. Visual Theme & Atmosphere
A high-agency, executive engineering terminal fusing tactile cockpit density with modern editorial clarity. The atmosphere is confident, clean, and mathematically precise — dark obsidian surfaces, crisp 1px structural borders, and singular high-tech cyan accents communicating production reliability and AI-first engineering.
- **Density:** 6/10 (Cockpit Balanced — clear data hierarchies without visual clutter)
- **Variance:** 7/10 (Asymmetric split layouts, offset telemetry cards)
- **Motion:** 7/10 (Spring physics via Framer Motion, hardware-accelerated transforms, subtle radar telemetry loops)

## 2. Color Palette & Roles
- **Obsidian Canvas** (`#080C14`) — Main viewport background surface
- **Surface Elevation 1** (`#0D1322`) — Primary card and container fill
- **Surface Elevation 2** (`#131B30`) — Elevated interactive cards, pills, and dropdowns
- **High-Tech Cyan** (`#00D2FF`) — Primary brand accent, live telemetry badges, active links, focus rings
- **Live Emerald** (`#10B981`) — System health indicator, status badges, verification checkmarks
- **Pure White** (`#F8FAFC`) — Primary headlines, hero typography
- **Muted Slate** (`#94A3B8`) — Secondary descriptions, technical body copy
- **Subtle Border** (`rgba(255, 255, 255, 0.08)`) — 1px container dividers and borders
- **Banned:** Pure black (`#000000`), neon purple/magenta glows, and oversaturated rainbow gradients.

## 3. Typography Rules
- **Display / Headlines:** `Plus Jakarta Sans`, -0.03em tracking, weight-driven hierarchy (800 for title, 700 for section heads).
- **Body:** `Plus Jakarta Sans` / System Sans-Serif, relaxed line height (1.55), 65ch optimal reading width.
- **Monospace:** `JetBrains Mono` / Monospace for system telemetry, tech tags, latency figures, and code metrics.
- **Banned:** `Inter`, generic system fonts for display headers, and decorative serif fonts in dashboard interfaces.

## 4. Component Stylings
- **Buttons:** Tactile feedback on press (`translateY(1px)` / `scale(0.98)`). Accent fill with dark text for primary, translucent glass with 1px border for secondary.
- **Cards:** Rounded (`16px` to `24px`). Subtle inset highlight (`inset 0 1px 1px rgba(255,255,255,0.06)`). 1px border. Hover transitions with subtle -3px elevation.
- **Telemetry Badges:** Pill-shaped, semi-transparent background with live radar pulse rings.
- **Tabs & Filters:** Segmented control aesthetic with smooth active indicator.

## 5. Layout Principles
- **Grid Architecture:** CSS Grid and responsive flex layouts with max-width containment (1280px).
- **Mobile Responsiveness:** Strict single-column collapse below 768px with full touch targets (minimum 44px).
- **Asymmetric Balance:** Hero section with left-aligned typographic power and right-aligned telemetry card.

## 6. Motion & Interaction
- **Physics Engine:** Framer Motion spring physics (`stiffness: 120, damping: 20`).
- **Orchestration:** Staggered cascade reveals on scroll (`staggerChildren: 0.08`).
- **Telemetry Loops:** Infinite subtle pulsing on live status dots.

## 7. Anti-Patterns (Banned)
- No emojis as substitute for professional icons.
- No broken image links or empty placeholder cards.
- No filler marketing copy ("Elevate your business", "Seamless next-gen magic").
- No 3-column equal card grids; use asymmetric bento and hierarchical layout.
- No horizontal scroll on mobile.
