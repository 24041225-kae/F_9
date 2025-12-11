"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger, createTimeline } from "animejs";

const Welcome = ({ onComplete }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = createTimeline({
      defaults: {
        ease: "inOutQuad",
        duration: 1500,
      },
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    tl.add(".cloud", {
      translateX: -100,
      opacity: 0,
      scale: 1.5,
      delay: stagger(100),
    })
      // fade out entire screen slightly overlapping
      .add(
        containerRef.current,
        {
          opacity: 0,
          duration: 500,
          ease: "linear",
        },
        "-=500" // start 500ms before previous ends
      );
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-300 overflow-hidden pointer-events-none"
    >
      {/* Cloud 1 */}
      <div className="cloud absolute top-1/4 left-1/4 w-64 h-32 bg-white rounded-full opacity-90 blur-xl transform -translate-x-1/2 -translate-y-1/2" />

      {/* Cloud 2 */}
      <div className="cloud absolute top-1/2 left-3/4 w-96 h-48 bg-white rounded-full opacity-80 blur-2xl" />

      {/* Cloud 3 */}
      <div className="cloud absolute bottom-1/4 left-1/3 w-80 h-40 bg-white rounded-full opacity-90 blur-xl" />

      {/* Cloud 4 */}
      <div className="cloud absolute top-1/3 left-1/2 w-72 h-36 bg-white rounded-full opacity-85 blur-xl" />

      {/* Cloud 5 */}
      <div className="cloud absolute -bottom-20 -right-20 w-[500px] h-[300px] bg-white rounded-full opacity-95 blur-3xl" />

      <h1 className="cloud text-4xl font-bold text-white tracking-widest drop-shadow-lg z-10">
        WELCOME
      </h1>
    </div>
  );
};

export default Welcome;
