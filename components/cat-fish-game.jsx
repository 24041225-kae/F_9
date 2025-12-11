import React, { useState } from "react";

const initialFishes = [
  { id: "fish1", label: "🐟 Fish 1", isCorrect: false },
  { id: "fish2", label: "🐠 Fish 2 (Correct)", isCorrect: true },
  { id: "fish3", label: "🐡 Fish 3", isCorrect: false },
];

export default function CatFishGame() {
  const [fishes, setFishes] = useState(initialFishes);
  const [catState, setCatState] = useState("idle"); // "idle" | "eat" | "reject"
  const [message, setMessage] = useState("");
  const [rejectFishId, setRejectFishId] = useState(null);

  const handleDragStart = (e, fishId) => {
    e.dataTransfer.setData("text/plain", fishId);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // allow drop
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fishId = e.dataTransfer.getData("text/plain");
    if (!fishId) return;

    const fish = fishes.find((f) => f.id === fishId);
    if (!fish) return;

    if (fish.isCorrect) {
      // Correct fish → cat eats it
      setMessage("Yum! 😋 Correct fish!");
      setCatState("eat");

      // Mark fish as eaten
      setFishes((prev) =>
        prev.map((f) =>
          f.id === fishId ? { ...f, eaten: true } : f
        )
      );

      // Optional: remove fish after animation
      setTimeout(() => {
        setFishes((prev) => prev.filter((f) => f.id !== fishId));
        setCatState("idle");
        setMessage("");
      }, 700);
    } else {
      // Wrong fish → cat rejects it
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

  return (
    <div className="page">
      <h1>Feed the Cat</h1>
      <p>Drag the correct fish to the cat. If it’s wrong, the cat will throw it away!</p>

      <div className="game">
        {/* Fish options */}
        <div id="options">
          {fishes.map((fish) => (
            <div
              key={fish.id}
              className={
                "fish" +
                (fish.eaten ? " eaten" : "") +
                (rejectFishId === fish.id ? " reject" : "")
              }
              draggable={!fish.eaten}
              onDragStart={(e) => handleDragStart(e, fish.id)}
            >
              {fish.label}
            </div>
          ))}
        </div>

        {/* Cat drop zone */}
        <div
          id="cat"
          className={
            catState === "eat"
              ? "eat"
              : catState === "reject"
              ? "reject"
              : ""
          }
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="cat-emoji">🐱</div>
          <p>Drop a fish here</p>
          <div id="message">{message}</div>
        </div>
      </div>
    </div>
  );
}
