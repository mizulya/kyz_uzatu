last_updated: 2026-07-21T09:08:58Z
Architecture Design
System Overview
Premium one-page wedding invitation website for a traditional Kazakh “Qyz Uzatu” ceremony. Single-page React application with smooth scrolling, scroll-reveal animations, floating particles, sticky navigation, and a floating music toggle button.

Tech Stack
React 18 + TypeScript
Vite (build tool)
Tailwind CSS + shadcn/ui
Cormorant Garamond + Montserrat (Google Fonts)
Lucide React (icons)
IntersectionObserver API (scroll animations)
Module Design
Module	Responsibility	Key Files
Page	Main page composition and scroll observer	src/pages/Index.tsx
Navigation	Sticky nav with mobile hamburger	src/components/Navigation.tsx
Hero	Full-screen hero with names and CTA	src/components/HeroSection.tsx
Invitation	Family invitation message card	src/components/InvitationSection.tsx
Countdown	Live countdown timer to ceremony	src/components/CountdownSection.tsx
Event Details	Date, time, location cards	src/components/EventDetailsSection.tsx
Map	Embedded Google Map + navigation button	src/components/MapSection.tsx
Timeline	Program schedule with vertical timeline	src/components/TimelineSection.tsx
Dress Code	Dress code with SVG icons and color swatches	src/components/DressCodeSection.tsx
Gallery	Photo grid with lightbox modal	src/components/GallerySection.tsx
RSVP	Attendance form with validation	src/components/RsvpSection.tsx
Wishes	Guest wishes/gift preferences	src/components/WishesSection.tsx
Footer	Thank-you message and closing	src/components/FooterSection.tsx
Music	Floating audio toggle button	src/components/FloatingMusicButton.tsx
Particles	Animated gold particle background	src/components/ParticlesBackground.tsx
Tech Decisions
Decision	Choice	Rationale
Styling	Tailwind CSS with custom CSS variables	Consistent gold/blush/ivory palette across all components
Fonts	Cormorant Garamond + Montserrat	Elegant serif for headings, clean sans for body
Animations	CSS keyframes + IntersectionObserver	Performant scroll-reveal without JS animation libraries
Icons	Lucide React + custom SVGs	Lightweight, tree-shakeable icons
Layout	Single-page with section anchors	Wedding invitation best practice for mobile guests
File Tree Plan
src/
├── pages/Index.tsx
├── components/
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── InvitationSection.tsx
│   ├── CountdownSection.tsx
│   ├── EventDetailsSection.tsx
│   ├── MapSection.tsx
│   ├── TimelineSection.tsx
│   ├── DressCodeSection.tsx
│   ├── GallerySection.tsx
│   ├── RsvpSection.tsx
│   ├── WishesSection.tsx
│   ├── FooterSection.tsx
│   ├── FloatingMusicButton.tsx
│   └── ParticlesBackground.tsx
├── index.css
└── App.tsx
Implementation Guide
Design system defined in index.css (CSS variables) and tailwind.config.ts (custom colors, fonts, animations)
Each section is a self-contained component with reveal animation class
IntersectionObserver in Index.tsx handles scroll-triggered animations
Mobile-first responsive with Tailwind breakpoints (md:, lg:)
Gallery uses state-based lightbox modal
Countdown uses setInterval with cleanup on unmount
Navigation uses scroll event listener for sticky behavior
