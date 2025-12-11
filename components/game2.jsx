"use client";

import { useState } from "react";

const tasksData = [
  {
    id: 1,
    title: "Task 1  ✅  Introduction",
    scenario:
      "A case study of abalone poaching in South Africa and its impacton ﬁsheries management. \nHere you can paste your first case study. Explain the situation, what happened, who is involved, etc.",
    question: "Q1: What is the key issue in this scenario?",
    answer: "animal abuse", // change to your correct answer
  },
  {
    id: 2,
    title: "Task 2  ✅  Responsibilities",
    scenario:
      "Paste another scenario here. Maybe about responsibilities, laws or what bystanders should do.",
    question: "Q2: Who should you report the case to?",
    answer: "authorities", // change
  },
  {
    id: 3,
    title: "Task 3  ✅  Taking Action",
    scenario:
      "Third scenario / follow-up. Maybe ask what action is most responsible.",
    question: "Q3: Is it okay to ignore the situation? (yes/no)",
    answer: "no", // change
  },
];

export default function Game2() {
  const [openTaskId, setOpenTaskId] = useState(tasksData[0].id);
  const [userAnswers, setUserAnswers] = useState({});
  const [status, setStatus] = useState({}); // { [id]: "idle" | "correct" | "wrong" }
  const [showCelebration, setShowCelebration] = useState(false);

  const toggleTask = (id) => {
    setOpenTaskId((current) => (current === id ? null : id));
  };

  const handleInputChange = (id, value) => {
    setUserAnswers((prev) => ({ ...prev, [id]: value }));
    if (status[id] && status[id] !== "idle") {
      setStatus((prev) => ({ ...prev, [id]: "idle" }));
    }
  };

  const handleSubmit = (task) => {
    const raw = userAnswers[task.id] || "";
    const user = raw.trim().toLowerCase();
    const correct = task.answer.trim().toLowerCase();

    if (!user) return;

    if (user === correct) {
      setStatus((prev) => ({ ...prev, [task.id]: "correct" }));
      setShowCelebration(true);

      setTimeout(() => setShowCelebration(false), 1600);
    } else {
      setStatus((prev) => ({ ...prev, [task.id]: "wrong" }));
    }
  };

  return (
    <div className="mx-auto mb-10 mt-8 max-w-4xl px-4 font-sans">
      <h1 className="mb-1 text-3xl font-semibold text-slate-900 dark:text-slate-50">
        Game 2 – Scenario Quiz
      </h1>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
        Read each task, open the dropdown, study the case, and answer the
        question. 🎉
      </p>

      <div className="flex flex-col gap-3">
        {tasksData.map((task) => {
          const isOpen = openTaskId === task.id;
          const taskStatus = status[task.id];

          return (
            <div
              key={task.id}
              className={`overflow-hidden rounded-md border bg-slate-900 text-slate-50 shadow-sm ${
                isOpen ? "border-emerald-400" : "border-slate-800"
              }`}
            >
              {/* Header */}
              <button
                type="button"
                onClick={() => toggleTask(task.id)}
                className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-slate-800"
              >
                <div className="text-sm font-medium">{task.title}</div>
                <div className="flex items-center gap-2">
                  {taskStatus === "correct" && (
                    <span className="rounded-full bg-emerald-400 px-2 py-0.5 text-xs font-semibold text-slate-900">
                      Completed
                    </span>
                  )}
                  <span className="text-xs">{isOpen ? "▾" : "▸"}</span>
                </div>
              </button>

              {/* Body */}
              {isOpen && (
                <div className="bg-white px-4 pb-4 pt-3 text-sm text-slate-800">
                  <p className="mb-1 font-semibold text-slate-700">
                    Scenario
                  </p>
                  <p className="mb-3 leading-relaxed">{task.scenario}</p>

                  <p className="mb-2 font-semibold">{task.question}</p>

                  <div className="mb-1 flex flex-wrap gap-2">
                    <input
                      type="text"
                      value={userAnswers[task.id] || ""}
                      onChange={(e) =>
                        handleInputChange(task.id, e.target.value)
                      }
                      placeholder="Type your answer here…"
                      className="min-w-[180px] flex-1 rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleSubmit(task)}
                      className="rounded-md bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </div>

                  {taskStatus === "correct" && (
                    <p className="mt-1 text-xs font-medium text-emerald-600">
                      ✅ Correct! Nice job.
                    </p>
                  )}
                  {taskStatus === "wrong" && (
                    <p className="mt-1 text-xs font-medium text-rose-600">
                      ❌ Not quite right. Read the scenario again and try once
                      more.
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
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

            {/* little ping bubbles for extra effect */}
            <span className="pointer-events-none absolute -top-2 -left-2 h-4 w-4 rounded-full bg-pink-400 opacity-70 animate-ping" />
            <span className="pointer-events-none absolute -bottom-3 -right-3 h-5 w-5 rounded-full bg-indigo-400 opacity-70 animate-ping" />
          </div>
        </div>
      )}
    </div>
  );
}
