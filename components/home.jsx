"use client";

import React from "react";

export default function Home({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-[#E8F5FF]">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-4xl text-center border-[3px] border-[#B7DBFF] mx-auto">

        <h1 className="text-5xl font-extrabold mb-6 text-[#4A90E2] whitespace-nowrap animate-[float_3s_ease-in-out_infinite]">
            🐾 Welcome to Animal Heroes!
        </h1>

        <p className="text-lg text-gray-600 mb-8 animate-[float_3s_ease-in-out_infinite]">
          Learn how to protect and care for animals through fun mini-games.
        </p>

        <div className="text-left space-y-6">

        <section>
            <h2 className="text-2xl font-bold text-[#6BB9F0] mb-2 animate-[float_3s_ease-in-out_infinite]">
                🐶 About Animal Abuse
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                Many animals experience harm because of unkind actions. This game helps you
                understand what animal abuse is and how kindness makes a big difference.
            </p>

            <h2 className="text-2xl font-bold text-[#6BB9F0] mb-2 animate-[float_3s_ease-in-out_infinite]">
                🐱 About Animal Hunting
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                Animal hunting can threaten wildlife by reducing their populations and disrupting
                natural ecosystems. Through this game, players will learn why protecting animals
                from harmful hunting is important and how we can keep nature safe.
            </p>
        </section>


        <section>
            <h2 className="text-2xl font-bold text-[#6BB9F0] mb-2 animate-[float_3s_ease-in-out_infinite]">
              🎮 How to Play
            </h2>
            <p className="text-gray-700 leading-relaxed">
              After reading the information, you'll answer a simple question.
              But instead of clicking, drag the <b className="text-[#4A90E2]">correct answer </b> 
              and <b className="text-[#4A90E2]">feed it to the cat</b>! If you're right, you move on to the next game.
            </p>
        </section>

        <section className="text-center pt-4">
            <h2 className="text-2xl font-bold text-[#6BB9F0] mb-3">
              ⭐ Are You Ready?
            </h2>
            <p className="text-gray-700 mb-6">
              Your adventure starts now. Let's help protect the animals!
            </p>

            <button
              onClick={onStart}
              className="px-8 py-3 text-lg font-semibold text-white bg-[#79BFFD] rounded-full shadow-md hover:bg-[#5CAAF4] transition-all active:scale-95"
            >
              I'm Ready!
            </button>
        </section>

        </div>
      </div>
    </div>
  );
}
