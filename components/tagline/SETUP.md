# Setup Instructions

## Required Dependencies

The Tagline Section component requires tsParticles libraries. Install them with:

```bash
npm install @tsparticles/react @tsparticles/engine @tsparticles/slim
```

Or with yarn:
```bash
yarn add @tsparticles/react @tsparticles/engine @tsparticles/slim
```

Or with pnpm:
```bash
pnpm add @tsparticles/react @tsparticles/engine @tsparticles/slim
```

## File Structure

```
components/tagline/
├── TaglineSection.tsx    # Main section component
├── DissolveText.tsx      # Reusable text component with dissolve effect
├── particlesConfig.ts    # Particles configuration
├── index.ts              # Export file
├── README.md             # Documentation
└── SETUP.md              # This file
```

## Usage

Update your import in `app/page.tsx` or wherever you use TaglineSection:

```tsx
import { TaglineSection } from "@/components/tagline/TaglineSection";

// Or using the index file:
import { TaglineSection } from "@/components/tagline";

<TaglineSection tagline="Your tagline text here" />
```

## Features Implemented

✅ Enter Viewport Animation: Zoom-in + Fade-in (opacity: 0→1, scale: 0.9→1, translateY: 30px→0)  
✅ Leave Viewport Animation: Text dissolves into white particles that scatter outward  
✅ Full-screen section (100vh)  
✅ Vertical gradient background (#13151A → #1A1D25 → #13151A)  
✅ Responsive typography (32px mobile, 48px desktop)  
✅ Uses Cormorant Garamond font  


