// The GanjaGuru: AI-powered, gravity-defying cannabis metaverse PWA
// Vision: Non-linear, anti-gravity interface, floating/orbital navigation, 3D/AR/VR, and interactive portals.
// AI-powered e-commerce, eco-friendly, fully automated, no inventory, auto-sourcing.

import React from 'react';
import FloatingMenu from './components/FloatingMenu';
import Portal from './components/Portal';
import './style.css';

export default function App() {
  return (
    <div className="gravity-gone-bg">
      <FloatingMenu />
      <Portal />
      <h1 className="title">The GanjaGuru</h1>
      <p className="subtitle">AI-powered, gravity-defying cannabis metaverse</p>
      <section className="vision">
        <h2>Vision</h2>
        <ul>
          <li>Non-linear, anti-gravity interface</li>
          <li>Floating/orbital navigation, 3D/AR/VR, interactive portals</li>
          <li>AI-powered e-commerce, eco-friendly, fully automated</li>
          <li>No inventory, auto-sourcing, legal compliance</li>
        </ul>
      </section>
    </div>
  );
}
