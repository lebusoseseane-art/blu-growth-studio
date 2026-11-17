# TRU BLU Website Redevelopment

## Goal
Bring the existing TRU BLU website in line with the uploaded master brief while preserving authentic business details, existing portfolio work, working page URLs, and the enquiry flow.

## Work
- Refresh the shared visual system to the brief's restrained cobalt, burnt-orange, ivory, ink, and white direction; retain existing logos and real project photography.
- Refine the homepage positioning, navigation, copy, service hierarchy, AI-versus-professional-marketing message, strategic approach, portfolio presentation, and conversion paths without inventing capabilities or results.
- Add an accessible, responsive five-position mini-video showcase under Our Work. Give every bay a stable identity, leave sources empty until clips are supplied, load only the selected clip, and support user-initiated viewing and reduced motion.
- Align portfolio detail pages and the contact journey with the same identity. Preserve the existing form integration and contact details, and make the enquiry privacy disclosure clear without inventing a broader data policy.
- Review per-page SEO metadata and existing technical discovery files; preserve established URLs and add only supported structured data.

## Validation
Check the homepage, contact page, and both project pages at desktop and mobile sizes; inspect video bays, navigation, form validation/confirmation states, metadata, image loading, accessibility basics, and build/runtime logs. The five players will remain empty pending the user's video uploads; real form delivery cannot be verified while the Web3Forms key is still a placeholder.

## Technical decisions
Keep TanStack Start and current URLs. Implement the video showcase as a focused, data-driven frontend component with five explicit source slots, native deferred video playback, keyboard-accessible viewing controls, and semantic theme tokens.
