"use client";

import { useState, useEffect } from "react";
import Game2Content from "./game2content";
import Ending from "./ending";

// case studies
const tasksData = [
  {
    id: 1,
    title: "Task 1  Poaching Overview",
    scenario:
      "Over a period of three years, game wardens from the Kansas Department of Wildlife and Parks investigated a large poaching ring across four counties in northwest Kansas. The investigation uncovered 140 wildlife-related offences committed between 2015 and 2019. In total, nine people were charged. Wardens identified 25 illegally taken deer (mostly mule deer), as well as eight turkeys, one antelope and other wildlife. Many of the animals were taken out of season, shot with firearms while the hunters held only archery permits, or killed without any permit at all.",
    question:
      "Q1: How many deer were found to have been taken illegally during this investigation?",
    // accepting both numeric and word forms
    answers: ["25", "twenty five", "twenty-five"],
  },
  {
    id: 2,
    title: "Task 2  Penalties and Consequences",
    scenario:
      "Officials highlighted three of the nine individuals. Tayton Weeter pled guilty to 22 poaching-related charges and was ordered to pay $45,000 in fines and restitution, with his hunting licence revoked for 10 years. Tracy Weeter pled guilty to 12 charges, was fined $750, ordered to pay $1,688 in court fees and lost hunting privileges for two years. Sean Winter pled guilty to six charges, paid $5,800 in fines and restitution, had his hunting licence revoked for 12 months and also forfeited a firearm. Kansas law treats the unlawful intentional taking of trophy big game very seriously, with minimum fines of $5,000 and extra restitution based on antler size.",
    question:
      "Q2: Which individual received the largest fine and a 10-year hunting licence revocation?",
    answers: ["tayton weeter", "tayton"],
  },
  {
    id: 3,
    title: "Task 3  Public Responsibility",
    scenario:
      "To build the case, game wardens executed multiple physical and electronic search warrants and carried out interviews across Cheyenne, Sherman, Wallace and Logan counties. Detailed antler scoring was used to calculate restitution fees that are paid into a wildlife fund. While the exact tactics remain confidential, officials stressed that public reports are crucial. The Kansas Department of Wildlife and Parks urged people to call the state's dedicated poaching hotline, known as the Operation Game Thief line, whenever they witness wildlife violations.",
    question:
      "Q3: What is the name of the dedicated hotline the public is encouraged to use to report wildlife violations? (Operation ____ Thief line)",
    answers: ["game", "operation game thief", "game thief"],
  },
];

// game 2 component
export default function Game2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openTaskId, setOpenTaskId] = useState(tasksData[0].id);
  const [userAnswers, setUserAnswers] = useState({});
  const [status, setStatus] = useState({});
  const [showCelebration, setShowCelebration] = useState(false);

  const [goToContent, setGoToContent] = useState(false);
  const [goToEnding, setGoToEnding] = useState(false);

  if (goToEnding) {
    return <Ending />;
  }

  if (goToContent) {
    return <Game2Content onDone={() => setGoToEnding(true)} />;
  }

  const toggleTask = (id) => {
    setOpenTaskId((current) => (current === id ? null : id));
  }; //when user clicks on task

  const handleInputChange = (id, value) => {
    setUserAnswers((prev) => ({ ...prev, [id]: value }));
    if (status[id] && status[id] !== "idle") {
      setStatus((prev) => ({ ...prev, [id]: "idle" }));
    }
  }; //when user types in input

  const handleSubmit = (task) => {
    const raw = userAnswers[task.id] || "";
    const user = raw.trim().toLowerCase();

    if (!user) return;

    const isCorrect = task.answers.some(
      (answer) => answer.toLowerCase() === user
    );

    if (isCorrect) {
      setStatus((prev) => ({ ...prev, [task.id]: "correct" }));
      setShowCelebration(true);

      setTimeout(() => setShowCelebration(false), 1600);
    } else {
      setStatus((prev) => ({ ...prev, [task.id]: "wrong" }));
    }
  }; //when user submits answer

  // Check if all tasks are completed
  const allTasksCompleted = tasksData.every(
    (task) => status[task.id] === "correct"
  );
  

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 pt-0 pb-12 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-2 text-4xl font-bold text-slate-900 animate-[float_3s_ease-in-out_infinite]">
          Game 2 – Poaching Case Quiz
        </h1>
        <p className="mb-8 text-lg text-slate-600">
          Read each task, study the case study, and answer the question. Correct answers will be celebrated! 🎉
        </p>

        <div className="flex flex-col gap-8">
          {tasksData.map((task) => {
            const isOpen = openTaskId === task.id;
            const taskStatus = status[task.id];

            return (
              <div
                key={task.id}
                className="w-full border-b-2 border-slate-300 pb-8 text-center"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="flex w-full items-center justify-center gap-3 py-3 hover:text-emerald-600 transition"
                >
                  <div className="text-xl font-bold text-slate-900">{task.title}</div>
                  <span className="text-2xl text-slate-600">{isOpen ? "▾" : "▸"}</span>
                </button>

                {taskStatus === "correct" && (
                  <span className="inline-block mt-2 rounded-full bg-emerald-500 px-4 py-1 text-sm font-semibold text-white">
                    Completed ✅
                  </span>
                )}

                {/* Body */}
                {isOpen && (
                  <div className="mt-6 text-slate-700">
                    <p className="mb-3 text-base font-semibold text-slate-600">Scenario</p>
                    <p className="mb-6 leading-relaxed text-slate-700 text-lg">{task.scenario}</p>

                    <p className="mb-4 text-2xl font-bold text-slate-900">{task.question}</p>

                    <div className="mb-4 flex flex-col items-center gap-4">
                      <input
                        type="text"
                        value={userAnswers[task.id] || ""}
                        onChange={(e) =>
                          handleInputChange(task.id, e.target.value)
                        }
                        placeholder="Type your answer here…"
                        className="w-full max-w-md rounded-lg border-2 border-slate-300 px-4 py-3 text-center text-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                      />
                      <button
                        type="button"
                        onClick={() => handleSubmit(task)}
                        className="rounded-lg bg-emerald-500 px-8 py-3 text-lg font-bold text-white shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      >
                        Submit
                      </button>
                    </div>

                    {taskStatus === "correct" && (
                      <p className="mt-4 text-lg font-bold text-emerald-600">
                        ✅ Correct! Nice job.
                      </p>
                    )}
                    {taskStatus === "wrong" && (
                      <p className="mt-4 text-lg font-bold text-rose-600">
                        ❌ Not quite right. Read the scenario again and try once more.
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion button - shown when all tasks are completed */}
        {allTasksCompleted && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setGoToContent(true)}
              className="rounded-lg bg-blue-500 px-12 py-4 text-xl font-bold text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Continue to Next Page →
            </button>
          </div>
        )}
      </div>

      {/* 🎉 Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative rounded-2xl bg-white px-8 py-6 text-center shadow-2xl">
            <div className="mb-3 flex justify-center gap-3">
              <span className="text-3xl animate-bounce">🎉</span>
              <span className="text-3xl animate-bounce [animation-delay:150ms]">
                🎊
              </span>
              <span className="text-3xl animate-bounce [animation-delay:300ms]">
                🎉
              </span>
            </div>
            <p className="mb-1 text-lg font-semibold text-slate-900">
              Great work! You answered correctly!
            </p>
            <p className="text-xs text-slate-500">
              Keep going and complete the other tasks.
            </p>


            <span className="pointer-events-none absolute -top-2 -left-2 h-4 w-4 rounded-full bg-pink-400 opacity-70 animate-ping" />
            <span className="pointer-events-none absolute -bottom-3 -right-3 h-5 w-5 rounded-full bg-indigo-400 opacity-70 animate-ping" />
          </div>
        </div>
      )}
    </div>
  );
}
