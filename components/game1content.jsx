"use client";

import React from "react";
import Link from "next/link";


export default function Game1Content({ onBack }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-[#E8F5FF]">
            <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-4xl border-[3px] border-[#B7DBFF]">

                {/* Title */}
                <h1 className="text-4xl font-extrabold mb-6 text-[#4A90E2] text-center">
                    🐾 Learn More About Animal Abuse
                </h1>

                <p className="text-gray-700 text-lg mb-8 text-center leading-relaxed">
                    Thank you for completing the activity. Here's what you should know about
                    reporting animal abuse, and how we can all help protect animals in Singapore.
                </p>

                <hr className="my-8 border-t-2 border-[#B7DBFF]" />

                <section className="mb-10">
                    <h3 className="text-gray-700 leading-relaxed mb-4">
                        In 2024, there were <strong>961 cases</strong> of animal cruelty and welfare concerns —
                        the highest in 12 years. These cases involved <strong>2,190 animals</strong>,
                        most of which were cats.
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Only <strong>6% of cases</strong> were substantiated, highlighting the importance
                        of reporting accurately and early.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            First-time offenders may face up to <strong>18 months’ jail</strong> and fines up to <strong>S$15,000</strong>.
                        </li>
                        <li>
                            Repeat offenders face up to <strong>3 years’ jail</strong> and fines up to <strong>S$30,000</strong>.
                        </li>
                        <li>
                            Failing in duty of care can bring fines up to <strong>S$10,000</strong> or up to <strong>1 year in jail</strong>.
                        </li>
                    </ul>
                </section>

                <hr className="my-8 border-t-2 border-[#B7DBFF]" />

                {/* WHAT TO DO CTA */}
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#6BB9F0] mb-3">
                        🚨 If You Witness Animal Abuse
                    </h2>

                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                        <li>
                            <strong>Call the police (999)</strong> immediately if the animal is in danger.
                        </li>
                        <li>
                            Contact <strong>SPCA’s 24/7 hotline: 6287 5355 Ext. 9</strong>.
                        </li>
                        <li>
                            If it is safe, take a <strong>photo or video</strong> of the situation to help investigations.
                        </li>
                        <li>
                            If the animal is deceased, <strong>do not move the body</strong> as it may be needed for evidence.
                        </li>
                    </ul>

                    <p className="mt-4 italic text-gray-600">
                        Your quick actions can make a difference and help authorities respond effectively.
                    </p>
                </section>

                <hr className="my-8 border-t-2 border-[#B7DBFF]" />



                {/* DONATION CTA */}
                <section className="mb-10 bg-[#F0F7FF] p-6 rounded-2xl border border-[#C8E2FF]">
                    <h2 className="text-2xl font-bold text-[#6BB9F0] mb-3">
                        Help SPCA Protect More Animals
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        SPCA rescues animals, investigates cruelty cases, and provides shelter and care.
                        Your donation supports their lifesaving work.
                    </p>

                    <Link
                        href="https://portal.spca.org.sg/Donation/DonateNow"
                        target="_blank"
                        className="inline-block px-6 py-3 bg-[#79BFFD] text-white font-semibold rounded-full shadow-md hover:bg-[#5CAAF4] transition-all active:scale-95"
                    >
                        Donate to SPCA 
                    </Link>
                </section>

                <hr className="my-8 border-t-2 border-[#B7DBFF]" />



                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-[#6BB9F0] mb-3">
                        Other Animal Abuse Cases in Singapore
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Animal cruelty can appear in many forms. Here are some cases commonly reported:
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            Community cats found injured due to suspected intentional harm.
                        </li>
                        <li>
                            Dogs being left outdoors without shelter or water for long hours.
                        </li>
                        <li>
                            Small pets abandoned in public places without food or protection.
                        </li>
                    </ul>
                </section>

            </div>
        </div>
    );
}
