"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Welcome = ({ onComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    anime.timeline({
      easing: "easeInOutQuad",
      duration: 1500,
    })
      .add({
        targets: ".cloud",
        translateX: -100,
        opacity: 0,
        scale: 1.5,
        delay: anime.stagger(100),
      }, 0)
      .add({
        targets: ".welcome-text",
        scale: 3,
        opacity: 0,
      }, 0)
      .add({
        targets: containerRef.current,
        opacity: 0,
        duration: 500,
        easing: "linear",
      }, "-=500");

    // ✅ GUARANTEED EXIT (THIS IS THE KEY)
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2200); // slightly longer than animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-300 overflow-hidden pointer-events-none"
    >
      <div className="cloud absolute top-1/4 left-1/4 w-64 h-32 bg-white rounded-full opacity-90 blur-xl" />
      <div className="cloud absolute top-1/2 left-3/4 w-96 h-48 bg-white rounded-full opacity-80 blur-2xl" />
      <div className="cloud absolute bottom-1/4 left-1/3 w-80 h-40 bg-white rounded-full opacity-90 blur-xl" />
      <div className="cloud absolute top-1/3 left-1/2 w-72 h-36 bg-white rounded-full opacity-85 blur-xl" />
      <div className="cloud absolute -bottom-20 -right-20 w-[500px] h-[300px] bg-white rounded-full opacity-95 blur-3xl" />

      <h1 className="welcome-text text-4xl font-bold text-white tracking-widest z-10">
        WELCOME
      </h1>
    </div>
  );
};

export default Welcome;
