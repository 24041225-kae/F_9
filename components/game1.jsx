"use client";
import React, { useState } from "react";
import Game1Content from "./game1content";

const initialFishes = [
  { id: "fish1", label: "Emotional Abuse", isCorrect: false },
  { id: "fish2", label: "Physical Abuse", isCorrect: true },
  { id: "fish3", label: "Verbal Abuse", isCorrect: false },
];

export default function Game1() {
  const [fishes, setFishes] = useState(initialFishes);
  const [catState, setCatState] = useState("idle");
  const [message, setMessage] = useState("");
  const [rejectFishId, setRejectFishId] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [game1Content, setGame1Content] = useState(false);

  const handleDragStart = (e, fishId) => {
    e.dataTransfer.setData("text/plain", fishId);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const fishId = e.dataTransfer.getData("text/plain");
    if (!fishId) return;

    const fish = fishes.find((f) => f.id === fishId);
    if (!fish) return;

    if (fish.isCorrect) {
      setMessage("Yum! 😋 Correct answer!");
      setCatState("eat");
      setShowCelebration(true);
      setGame1Content(true);

      setFishes((prev) =>
        prev.map((f) =>
          f.id === fishId ? { ...f, eaten: true } : f
        )
      );

      setTimeout(() => {
        setFishes((prev) => prev.filter((f) => f.id !== fishId));
        setCatState("idle");
        setMessage("");
      }, 800);

      setTimeout(() => setShowCelebration(false), 1600);
    } else {
      setMessage("Nope! 😾 Try again.");
      setCatState("reject");
      setRejectFishId(fishId);

      setTimeout(() => {
        setCatState("idle");
        setRejectFishId(null);
        setMessage("");
      }, 600);
    }
  };

  if (game1Content) {
    return <Game1Content onBack={() => setGame1Content(false)} />;
  }

  return (
    <main className="min-h-screen bg-[#E8F5FF] px-6 py-10 flex flex-col items-center gap-10">

      {/* Case Study Box */}
      <section className="bg-white shadow-xl rounded-3xl p-8 max-w-3xl w-full border-[3px] border-[#B7DBFF]">
        <h1 className="text-3xl font-extrabold text-[#4A90E2] mb-2">Case Study 1</h1>

        <h2 className="text-xl font-semibold text-[#6BB9F0]">Physical Abuse</h2>

        <img
          src="/game1.png"
          alt="case study"
          className="w-48 mt-3 rounded-lg shadow"
        />

        <p className="text-gray-700 mt-4 leading-relaxed">
          Poodle, Boyboy, was harmed by a domestic helper. After receiving reports,
          SPCA contacted authorities and investigations began. CCTV showed Boyboy being
          struck repeatedly. The helper was later sentenced to nine months in jail.
          The helper had reportedly been instructed to punish Boyboy if he disobeyed.
        </p>

        <h2 className="text-xl font-semibold text-[#6BB9F0] mt-6">Question</h2>

        <p className="text-gray-700 text-lg">
          After reading the case study, what type of abuse is shown?
        </p>
      </section>

      {/* Game Section */}
      <section className="flex flex-col items-center max-w-4xl w-full">
        <p className="text-gray-700 mb-4 text-center">
          Drag the correct answer (fish) into the cat. If you're right, enjoy a celebration! 🎉
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-center">

          {/* Fish Options */}
          <div className="flex flex-col gap-4">
            {fishes.map((fish) => (
              <div
                key={fish.id}
                draggable={!fish.eaten}
                onDragStart={(e) => handleDragStart(e, fish.id)}
                className={[
                  "w-56 px-4 py-3 bg-white border-2 border-[#99b3ff] rounded-lg shadow cursor-pointer text-center text-gray-700 font-semibold transition-all select-none",
                  fish.eaten && "opacity-0 scale-50 pointer-events-none",
                  rejectFishId === fish.id && "animate-shake",
                ].join(" ")}
              >
                {fish.label}
              </div>
            ))}
          </div>

          {/* Cat Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={[
              "w-60 h-60 bg-[#fff7d1] border-4 border-[#f4b000] rounded-2xl shadow-lg flex flex-col justify-center items-center transition-all",
              catState === "eat" && "scale-110",
              catState === "reject" && "animate-shake",
            ].join(" ")}
          >
            <div className="text-7xl">🐱</div>
            <p className="text-gray-700 mt-2 font-medium">Drop your answer here</p>
            <div className="text-[#4A90E2] mt-2 font-semibold">{message}</div>
          </div>
        </div>
      </section>

      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl shadow-xl animate-pop">
            <div className="flex justify-center gap-4 text-3xl mb-2">
              🎉 🎊 🎉
            </div>
            <p className="font-bold text-gray-800">Well done! You chose the right action!</p>
          </div>

          {/* Confetti */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="absolute w-2 h-4 rounded bg-red-400 animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
