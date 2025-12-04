# Tagline Section with Dissolve Effect

## Installation

This component requires the following dependencies:

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

## Usage

```tsx
import { TaglineSection } from "@/components/tagline/TaglineSection";

<TaglineSection tagline="Your tagline text here" />
```

## Components

- **TaglineSection**: Main section component with full-screen height and gradient background
- **DissolveText**: Reusable text component with dissolve particle effect
- **particlesConfig**: Configuration for tsParticles fountain effect

## Features

- ✅ Zoom-in + fade-in animation when entering viewport
- ✅ Dissolve into particles when leaving viewport
- ✅ Full-screen section with vertical gradient
- ✅ Responsive typography (32px mobile, 48px desktop)
- ✅ Uses Cormorant Garamond serif font


