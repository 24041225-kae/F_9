"use client";

import About from "./about";
import { useState, useEffect, useRef } from "react";

export default function Ending() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [goToAbout, setGoToAbout] = useState(false);
  const [expandedVolunteer, setExpandedVolunteer] = useState(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);

  const volunteerOpportunities = [
    {
      id: 1,
      name: "SPCA Singapore",
      url: "https://www.spca.org.sg/volunteer/",
      description: "Join SPCA to help rescue, rehabilitate, and rehome abused and neglected animals. Work with dedicated teams in animal care, education, and advocacy programs.",
    },
    {
      id: 2,
      name: "WWF Singapore",
      url: "https://www.wwf.sg/get_involved/volunteer/",
      description: "Contribute to wildlife conservation and marine protection projects. Participate in community outreach and habitat restoration initiatives.",
    },
    {
      id: 3,
      name: "Save Our Seagrass (SOS)",
      url: "https://www.sos.org.sg/",
      description: "Protect vital marine ecosystems by volunteering in seagrass restoration and coastal clean-up programs in Singapore.",
    },
    {
      id: 4,
      name: "Animal Concerns Research & Education Society (ACRES)",
      url: "https://acres.org.sg/",
      description: "Support wildlife rescue, rehabilitation, and conservation efforts. Help protect endangered species and their natural habitats.",
    },
    {
      id: 5,
      name: "Punggol Geylang River",
      url: "https://gardens.nparks.gov.sg/PunggolGeylangRiverWalk",
      description: "Participate in river restoration and community gardening projects. Help maintain biodiversity in Singapore's urban waterways.",
    },
  ];

  useEffect(() => {
    const currentRefs = itemRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = currentRefs.indexOf(entry.target);
          if (index !== -1) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              if (entry.isIntersecting) {
                newSet.add(index);
              } else {
                newSet.delete(index);
              }
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  if (goToAbout) {
    return <About />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Browser Header */}
      <div className="max-w-6xl mx-auto bg-white rounded-t-lg shadow-lg overflow-hidden">
        {/* Browser Top Bar */}
        <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b border-gray-300">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 ml-4 bg-gray-100 rounded px-3 py-1 text-sm text-gray-600">
            savetheworld.org/congratulations
          </div>
        </div>

        {/* Main Content */}
        <div className="p-10 bg-gradient-to-br from-[#E8F5FF] to-white">
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-[#4A90E2] mb-2 text-center animate-[float_3s_ease-in-out_infinite]">
            🎉 Congratulations!
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
            You&apos;ve completed all the activities and learned how important it is to protect
            animals from abuse and harmful hunting practices.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
            Thank you for taking the time to understand these issues. Every action you take
            — no matter how small — helps build a kinder and safer world for animals. 🐾💙
          </p>

          <div className="text-6xl mb-10 text-center">🐱🐾</div>

          {/* Split Layout: Donation and Volunteer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Donation Section */}
            <div className="bg-gradient-to-br from-[#FFE5E5] to-white border-2 border-[#FF6B6B] rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#FF6B6B] mb-3 text-center">
                💖 Donate
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                Your donation directly supports animal rescue, rehabilitation, and conservation efforts.
                Even small contributions make a big difference in protecting wildlife.
              </p>
              <a
                href="https://portal.spca.org.sg/Donation/DonateNow"
                target="_blank"
                className="block w-full px-6 py-3 bg-[#FF6B6B] text-white rounded-full font-semibold shadow-md hover:bg-[#E63946] transition-all transform hover:scale-105 active:scale-95 text-center"
              >
                Donate Now
              </a>
            </div>

            {/* Volunteer Section Header */}
            <div className="bg-gradient-to-br from-[#E8F5FF] to-white border-2 border-[#4A90E2] rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-[#4A90E2] mb-3 text-center">
                🐾 Volunteer
              </h2>
              <p className="text-gray-700 leading-relaxed text-center">
                Join our community and make a hands-on impact. Explore volunteer opportunities
                with organizations dedicated to animal welfare and conservation.
              </p>
            </div>
          </div>

          {/* Volunteer Opportunities List */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#4A90E2] mb-4 text-center">
              🌟 Volunteer Opportunities
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Hover over any opportunity to learn more
            </p>

            <div className="space-y-3 max-w-2xl mx-auto">
              {volunteerOpportunities.map((vol, index) => (
                <div
                  key={vol.id}
                  ref={(el) => {
                    if (el) itemRefs.current[index] = el;
                  }}
                  className={`relative transition-all duration-500 ease-out transform ${
                    visibleItems.has(index)
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{
                    transitionDelay: visibleItems.has(index) ? `${index * 100}ms` : "0ms",
                  }}
                  onMouseEnter={() => setExpandedVolunteer(vol.id)}
                  onMouseLeave={() => setExpandedVolunteer(null)}
                >
                  <a
                    href={vol.url}
                    target="_blank"
                    className="block px-6 py-4 bg-[#79BFFD] text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    {vol.name}
                  </a>

                  {/* Expandable Description - Slides Down */}
                  {expandedVolunteer === vol.id && (
                    <div className="bg-[#4A90E2] text-white px-6 py-4 shadow-lg border-t-2 border-[#5CAAF4] animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-sm leading-relaxed">{vol.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-white border-2 border-[#6BB9F0] rounded-2xl p-8 mb-10 shadow-md">
            <h2 className="text-2xl font-bold text-[#6BB9F0] mb-4 text-center animate-[float_3s_ease-in-out_infinite]">
              🌍 Let&apos;s Save the World Together, and Protect their World
            </h2>
            <p className="text-gray-700 leading-relaxed text-center animate-[float_3s_ease-in-out_infinite]">
              Spread awareness, take action, and continue being a voice for animals.
              Together, we can make the world a better place — one paw at a time. 🐾✨
            </p>
          </div>

          {/* About Us Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setGoToAbout(true)}
              className="px-8 py-3 bg-[#4A90E2] text-white font-bold rounded-full shadow-lg hover:bg-[#357ABD] transition-all transform hover:scale-105 active:scale-95 text-lg"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
