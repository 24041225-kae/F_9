"use client";

import React from "react";
import Link from "next/link";

export default function Game2Content({ onDone }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[#E8F5FF]">
            <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-4xl border-[3px] border-[#B7DBFF]">

                {/* Title */}
                <h1 className="text-4xl font-extrabold mb-6 text-[#4A90E2] text-center">
                    🦊 Learn More About Animal Poaching
                </h1>

                <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
                    Great job completing the first activity! Here’s what you should know about
                    the impact of animal hunting, and how you can help protect wildlife.
                </p>

                <hr className="my-8 border-t-2 border-[#B7DBFF]" />

                {/* Consequences */}
                <section className="mb-10">
                    <h3 className="text-gray-700 leading-relaxed mb-4">
                        Animal hunting has serious effects on wildlife populations and the environment.
                        Many species become endangered due to illegal or excessive hunting.
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        When animals disappear from their natural habitats, the entire ecosystem becomes unbalanced.
                        Predators lose prey, plants grow uncontrollably, and biodiverse environments collapse.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            Species like pangolins, tigers, and elephants are threatened due to illegal hunting.
                        </li>
                        <li>
                            Over-hunting reduces population sizes, making it harder for species to recover.
                        </li>
                        <li>
                            Removing one species affects many others in the food chain.
                        </li>
                    </ul>
                </section>

                <hr className="my-8 border-t-2 border-[#B7DBFF]" />

                {/* WHAT YOU CAN DO */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#6BB9F0] mb-3">
                        🌿 What You Can Do to Protect Wildlife
                    </h2>

                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                        <li>
                            Avoid buying products made from animal parts (fur, ivory, horns, animal leather).
                        </li>
                        <li>
                            Support wildlife sanctuaries and rehabilitation centres.
                        </li>
                        <li>
                            Learn about endangered species and share the information with others.
                        </li>
                        <li>
                            Encourage others to choose cruelty-free and eco-friendly products.
                        </li>
                        <li>
                            Volunteer at wildlife conservation events when possible.
                        </li>
                    </ul>

                    <p className="mt-4 italic text-gray-600">
                        Small actions build bigger change. You can help protect wildlife by spreading awareness.
                    </p>
                </section>

                <hr className="my-8 border-t-2 border-[#B7DBFF]" />

                {/* REPORT ILLEGAL HUNTING */}
                <section className="mb-10 bg-[#F0F7FF] p-6 rounded-2xl border border-[#C8E2FF]">
                    <h2 className="text-2xl font-bold text-[#6BB9F0] mb-3">
                        🚨 Report Illegal Hunting
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        If you witness any illegal hunting or trapping activity, report it to the authorities.
                        Your actions can help protect endangered animals.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            In Singapore, contact <strong>NParks’ Animal & Wildlife Management: 1800-476-1600</strong>.
                        </li>
                        <li>
                            Report suspicious wildlife traps or poaching immediately.
                        </li>
                        <li>
                            Never approach a dangerous animal or confront suspected hunters.
                        </li>
                    </ul>
                </section>

                <hr className="my-8 border-t-2 border-[#B7DBFF]" />

                {/* External Links */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#6BB9F0] mb-3">
                        Learn More About Wildlife Protection
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Explore official resources to learn how Singapore protects wildlife and how you can help.
                    </p>

                    <Link
                        href="https://www.nparks.gov.sg/"
                        target="_blank"
                        className="inline-block px-6 py-3 bg-[#79BFFD] text-white font-semibold rounded-full shadow-md hover:bg-[#5CAAF4] transition-all active:scale-95"
                    >
                        NParks Wildlife Resources
                    </Link>
                </section>

                <section className="flex justify-center mt-8 mb-4">
                    <button
                        onClick={onDone}
                        className="px-8 py-3 bg-[#4A90E2] text-white font-bold rounded-full shadow-lg hover:bg-[#357ABD] transition-transform transform hover:scale-105 active:scale-95 text-lg"
                    >
                        Done
                    </button>
                </section>
            </div>
        </div>
    );
}
