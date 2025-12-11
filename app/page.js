"use client";

import React, { useState } from 'react';
import Welcome from '../components/welcome';

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="relative min-h-screen">
      {showWelcome && (
        <Welcome onComplete={() => setShowWelcome(false)} />
      )}

      <div className={`transition-opacity duration-1000 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}>
        {/* Placeholder */}
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Save The World</h1>
          <p className="mb-8">Information</p>
        </div>

      </div>
    </div>
  );
}
