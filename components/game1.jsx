import React, { useState } from 'react';

// game showcaseing feeding a cat\
// give case study of animal abuse

const initialFishes = [
  // Change these labels/options to match your question/answers
  { id: "fish1", label: "Emotional Abuse", isCorrect: false },
  { id: "fish2", label: "Physical Abuse", isCorrect: true },
  { id: "fish3", label: "Verbal Abuse", isCorrect: false },
];

export default function Home() {
  const [fishes, setFishes] = useState(initialFishes);
  const [catState, setCatState] = useState("idle"); // "idle" | "eat" | "reject"
  const [message, setMessage] = useState("");
  const [rejectFishId, setRejectFishId] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);

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
      // ✅ Correct answer
      setMessage("Yum! 😋 Correct answer!");
      setCatState("eat");
      setShowCelebration(true);

      // Mark fish as eaten
      setFishes((prev) =>
        prev.map((f) =>
          f.id === fishId ? { ...f, eaten: true } : f
        )
      );

      // Remove fish + hide celebration after a short delay
      setTimeout(() => {
        setFishes((prev) => prev.filter((f) => f.id !== fishId));
        setCatState("idle");
        setMessage("");
      }, 800);

      setTimeout(() => {
        setShowCelebration(false);
      }, 1600);
    } else {
      // ❌ Wrong answer
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
    <main className="page">
      {/* Case study section */}
      <section className="caseSection">
        <h1 className="heading">Case Study 1</h1>
        <h2>Physical Abuse</h2>
        <img src="/game1.png" alt="Case study illustration" style={{ width: "200px", marginTop: "8px" }} />
        <p className="caseText">
          {/* 🔻 Replace this paragraph with your own case study text */}

            Poodle, Boyboy, Brutally Hit by Domestic Helper
        On 26 January 2024, the SPCA received news of a poodle named Boyboy who had been
        abused by a domestic helper. We immediately contacted the authorities and advised Boyboy’s
        owner to file reports with the police and AVS. CCTV footage showed the helper brutally hitting
        Boyboy with her hand and a rod and hanging him from the balcony railing.
        Boyboy was found dead, biting his tongue and bleeding from his mouth. His post-cremation
        remains showed damage to the skull, likely the result of forceful blows to the head. The
        domestic helper was sentenced to nine months in jail.
        It has since transpired that the helper was allegedly acting on instructions. For example, the
        court heard that the helper had been told by her employer to hit Boyboy if he started eating
        before being allowed to do so, and to hang him under direct sunlight to reduce his odour.

        </p>

        <h2 className="questionTitle">Question</h2>
        <p className="questionText">
          After reading the case study above, What abuse is this an example of?
        </p>
      </section>

      {/* Game section */}
      <section className="gameSection">
        <p className="instructions">
          Drag the correct answer (fish) into the cat. If you get it right, the
          cat will eat it and you’ll get a celebration! 🎉
        </p>

        <div className="game">
          {/* Fish options */}
          <div className="options">
            {fishes.map((fish) => (
              <div
                key={fish.id}
                className={[
                  "fish",
                  fish.eaten ? "fishEaten" : "",
                  rejectFishId === fish.id ? "fishReject" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                draggable={!fish.eaten}
                onDragStart={(e) => handleDragStart(e, fish.id)}
              >
                {fish.label}
              </div>
            ))}
          </div>

          {/* Cat drop zone */}
          <div
            className={[
              "cat",
              catState === "eat" ? "eat" : "",
              catState === "reject" ? "reject" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="catEmoji">🐱</div>
            <p className="catText">Drop your answer here</p>
            <div className="message">{message}</div>
          </div>
        </div>
      </section>

      {/* 🎉 Celebration overlay */}
      {showCelebration && (
        <div className="celebrationOverlay">
          <div className="celebrationBox">
            <div className="popperRow">
              <span className="popper">🎉</span>
              <span className="popper">🎊</span>
              <span className="popper">🎉</span>
            </div>
            <p className="celebrationText">Well done! You chose the right action!</p>
          </div>

          {/* Simple falling confetti pieces */}
          <div className="confettiContainer">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="confetti"
                style={{ "--i": i }}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
