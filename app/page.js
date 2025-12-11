"use client";

import React, { useState } from 'react';
import Home from '../components/home.jsx';
import Welcome from '../components/welcome';
import Game1 from '../components/game1.jsx';

export default function HomePage() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [screen, setScreen] = useState("home"); // home | game1

  return (
    <div className="relative min-h-screen">
      
      {/* Welcome animation */}
      {showWelcome && (
        <Welcome onComplete={() => setShowWelcome(false)} />
      )}

      <div
        className={`transition-opacity duration-1000 ${
          showWelcome ? "opacity-0" : "opacity-100"
        }`}
      >

        {/* HOME INTRO SCREEN */}
        {screen === "home" && (
          <Home onStart={() => setScreen("game1")} />
        )}

        {/* GAME 1 SCREEN */}
        {screen === "game1" && (
          <Game1 />
        )}

      </div>
    </div>
  );
}

