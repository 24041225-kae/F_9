"use client";

import About from "./about";
import { useState } from "react";

export default function Ending() {
  const [goToAbout, setGoToAbout] = useState(false);

  if (goToAbout) {
    return <About />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-[#E8F5FF]">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-3xl text-center border-[3px] border-[#B7DBFF]">

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-[#4A90E2] mb-4">
          🎉 Congratulations!
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          You’ve completed all the activities and learned how important it is to protect
          animals from abuse and harmful hunting practices.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Thank you for taking the time to understand these issues. Every action you take
          — no matter how small — helps build a kinder and safer world for animals. 🐾💙
        </p>

        <div className="text-6xl mb-10">🐱🐾</div>

        {/* Volunteer / Donate Section */}
        <section className="bg-[#F0F7FF] border border-[#C8E2FF] rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-bold text-[#4A90E2] mb-3">
            💙 Want to Make an Even Bigger Impact?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Here are two meaningful ways you can continue helping animals:
          </p>

          <div className="flex flex-col gap-4">

            {/* Volunteer Button */}
            <a
              href="https://www.spca.org.sg/volunteer/"
              target="_blank"
              className="px-6 py-3 bg-[#79BFFD] text-white rounded-full font-semibold shadow hover:bg-[#5CAAF4] transition-transform transform hover:scale-105 active:scale-95"
            >
              🐾 Volunteer with SPCA
            </a>

            {/* Donate Button */}
            <a
              href="https://portal.spca.org.sg/Donation/DonateNow"
              target="_blank"
              className="px-6 py-3 bg-[#4A90E2] text-white rounded-full font-semibold shadow hover:bg-[#357ABD] transition-transform transform hover:scale-105 active:scale-95"
            >
              💖 Donate to Support Animal Rescue
            </a>

          </div>
        </section>

        {/* Final encouragement message */}
        <h2 className="text-2xl font-bold text-[#6BB9F0] mb-4">
          🌍 Let’s Save the World Together
        </h2>

        <p className="text-gray-700 leading-relaxed mb-10">
          Spread awareness, take action, and continue being a voice for animals.
          Together, we can make the world a better place — one paw at a time. 🐾✨
        </p>

        {/* About Us Button */}
        <button
          onClick={() => setGoToAbout(true)}
          className="px-8 py-3 bg-[#4A90E2] text-white font-bold rounded-full shadow-lg hover:bg-[#357ABD] transition-transform transform hover:scale-105 active:scale-95 text-lg"
        >
          About Us
        </button>

      </div>
    </div>
  );
}
