
"use client";

import React from 'react';
import {animate} from "animejs"; //npm install animejs
// import about from '../components/about';
// import ending from '../components/ending';
// import footer from '../components/footer';
// import game1 from '../components/game1';
// import game2 from '../components/game2';
// import navbar from '../components/navbar';
// import quiz from '../components/quiz.jsx';
// import welcome from '../components/welcome';
import CatFishGame from '../components/cat-fish-game.jsx';

export default function HomePage() {
  return (
    <div>
      <CatFishGame />
    </div>
  );
}
