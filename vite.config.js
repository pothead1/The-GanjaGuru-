// The GanjaGuru: AI-powered, gravity-defying cannabis metaverse PWA
// Vision: Non-linear, anti-gravity interface, floating/orbital navigation, 3D/AR/VR, and interactive portals.
// AI-powered e-commerce, eco-friendly, fully automated, no inventory, auto-sourcing.
//
// This config sets up Vite for a React-based PWA.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
});
