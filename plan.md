# Alijaj Hauswartung — Website Redesign Plan

## Product scope

Rebuild the source website as a modern German-language business website that preserves the available company, service, contact, legal and cookie information. Make navigation simple, mobile layouts comfortable, contact actions immediate, and motion understated. The source provides no named clients, case studies or testimonials; the reference/work presentation must not fabricate any.

## Design direction

- **Design Movement:** Contemporary Swiss editorial design, balancing architectural restraint with a warm, hands-on local-service character.
- **Core Principles:** Calm clarity; tangible service details; confident, neighborly trust; responsive accessibility first.
- **Color Philosophy:** Warm limestone and paper whites make long German text easy to scan; deep forest green signals care and reliability; muted sage and a restrained brass accent add natural warmth without visual noise.
- **Layout Paradigm:** Editorial, asymmetrical split compositions: large open typography and generous whitespace paired with offset photographic panels, horizontal service bands, and a compact fixed utility contact action on mobile. Avoid generic centered grids.
- **Signature Elements:** Fine architectural rules and numbered service labels; a bespoke leaf/roofline monogram; quiet pill-shaped contact cues.
- **Interaction Philosophy:** Clear affordances, direct click-to-call/email, a keyboard-usable mobile menu, and service links that show where they lead. Hover feedback is subtle and never the sole information carrier.
- **Animation:** Short, low-amplitude opacity/translate reveals and gentle button/icon transitions only; no parallax or looping motion. Respect `prefers-reduced-motion`, with content visible without animation.
- **Typography System:** Fraunces for expressive display headings paired with Manrope for navigation, body copy and controls. Use a restrained scale, strong contrast and readable line length; load via CSS with sensible system fallbacks.
- **Brand Essence:** Reliable, attentive property care for owners and property managers around Zürich, Winterthur and the Zürcher Oberland; **dependable, attentive, grounded**.
- **Brand Voice:** Direct, reassuring and service-minded. Example: “Ihre Liegenschaft. Sorgfältig betreut.” / “Rundum da – auch wenn es dringend ist.”
- **Wordmark & Logo:** A compact roofline/leaf mark drawn as a simple custom inline SVG beside a typographic ALIJAJ / HAUSWARTUNG wordmark; no stock mark.
- **Signature Brand Color:** Deep evergreen.

## Implementation approach

Build a static React + TypeScript + Vite website without a server or database: all required information is public and no authenticated or persistent behavior is requested. Use a small, readable component structure with route-aware page rendering for Home, Hauswartungen, Reinigungen, Gartenunterhalt and Impressum/Cookies; preserve conventional URLs and provide working in-app navigation. Use generated, original photography for the homepage hero and three distinct service areas; no generated image will be presented as a real client reference. Keep the complete legal/cookie notice accessible from the footer and cookie notice. Contact links use `tel:` and `mailto:`.

Use Vite’s static build to `dist` and the project's managed static publication. No backend, database or external integration is necessary. Provide a static route manifest at `/manus-routes.json` for every implemented page before starting the dev server. Register host-managed TypeScript diagnostics before the first application-code edit. Keep all browser-facing paths relative.

## Content map

- Home: Alijaj Hauswartung GmbH; dependable individualized property care; 24-hour service; mission text; Zürich, Winterthur and Zürcher Oberland; links to the three service pages; contact actions.
- Hauswartungen: preserve the complete original narrative and lists about technical property care, communication with tenants/management, common areas, seasonal maintenance, handovers/inspection, house rules, contractor appointments, technical housewartung and winter service.
- Reinigungen: preserve all eleven listed cleaning services.
- Gartenunterhalt: preserve all listed gardening tasks including the “and much more” statement.
- Impressum / Cookies: preserve company legal/contact information, disclaimers, third-party link disclaimer, original cookie explanation/browser management links, and original website design credit details as published.
- Shared footer/contact: Blumenbergstrasse 10A, 8633 Wolfhausen; info@alijaj-hauswartung.ch; +41 (0)79 624 52 44; copyright.

## Project structure

- `index.html`: document shell, language, font preconnects and basic metadata.
- `src/main.tsx`: application entry and global styles.
- `src/App.tsx`: route resolution, shared navigation/footer/cookie notice, page composition.
- `src/content.ts`: preserved German business and legal copy, structured for pages.
- `src/components/`: reusable logo, header/mobile menu, service cards, contact strip and footer.
- `src/pages/`: home, service detail pages, and legal/cookie page.
- `src/styles.css`: tokens, responsive editorial layouts, motion and reduced-motion behavior.
- `public/assets/`: original generated imagery.
- `public/manus-routes.json`: complete route manifest.
- `app.config.ts`: platform logo metadata.

## Constraints and decisions

The source site lists no specific references or testimonials. We will not invent them; service examples and original generated imagery are illustrative, not documentary photographs of Alijaj work. Preserve German-language Swiss spelling where present, and avoid promising extra services or claims not shown by the source.
