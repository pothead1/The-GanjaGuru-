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
    </div>
  );
}
