"use client";

import React, { useState } from 'react';
import Home from '../components/home.jsx'; 
import Welcome from '../components/welcome';

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [screen, setScreen] = useState("home"); 

  return (
    <div className="relative min-h-screen">
      {showWelcome && (
        <Welcome onComplete={() => setShowWelcome(false)} />
      )}

      <div
        className={`transition-opacity duration-1000 ${
          showWelcome ? "opacity-0" : "opacity-100"
        }`}
      >

        {screen === "home" && (
          <Home onStart={() => setScreen("game1")} />
        )}

        {screen === "game1" && (
          <CatFishGame />
        )}

      </div>
    </div>
  );
}
