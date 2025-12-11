"use client";

import React from "react";

export default function Home({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-[#E8F5FF]">
      {/* Soft cloud-like card */}
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-2xl text-center border-[3px] border-[#B7DBFF]">

        <h1 className="text-4xl font-extrabold mb-6 text-[#4A90E2]">
          🐾 Welcome to Animal Heroes!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Learn how to protect and care for animals through fun mini-games.
        </p>

        <div className="text-left space-y-6">

          {/* About animal abuse */}
          <section>
            <h2 className="text-2xl font-bold text-[#6BB9F0] mb-2">
              🐶 About Animal Abuse
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Many animals experience harm because of unkind actions. This game helps you
              understand what animal abuse is and how kindness makes a big difference.
            </p>
          </section>

          {/* How to play */}
          <section>
            <h2 className="text-2xl font-bold text-[#6BB9F0] mb-2">
              🎮 How to Play
            </h2>
            <p className="text-gray-700 leading-relaxed">
              After reading the information, you'll answer a simple question.
              But instead of clicking, drag the <b className="text-[#4A90E2]">correct fish</b> 
              and feed it to the cat! If you're right, you move on to the next game.
            </p>
          </section>

          {/* Ready section */}
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
              I'm Ready! 🐱✨
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}
