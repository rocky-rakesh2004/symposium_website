import { useState } from "react";
import EventCard from "./EventCard";
import hackathonImage from "../assets/hackathon.png";
import { useEffect } from "react";
import back_track from "../assets/back_track.jpg";

const eventsData = {
  technical: [
    {
      title: "Back Track",
      type: "Coding Competition",
      description:
        "A backtrack event is a problem-solving activity where participants explore all possible solutions by trying, undoing, and re-trying different choices to reach the correct outcome.",
      hosts: "VimalRaj R , Rakesh S",
      image:
        back_track,
      date: "OCT 16, 2025",
      time: "11:00 AM – 12:30 PM",
      venue: "CSE LAB 2007",
      members: "1 member(Single Participation Only)",
      contacts: "VimalRaj : 8072662449, Rakesh : 9360318375",
      staffincharge: " Mr.K.A.MohammedFaiz",
      rules: [
        "Single Participation only Allowed",
        "AI tools are not Allowed",
        "Don't do any Malpractice",
        "Each person will be given only 20 minites ",
      ],
      prizes: ["Winner:Sheild & Certificates"],
    },
    {
      title: "Innovation",
      type: "UI & UX Design",
      description:
        " UI/UX Innovation – Showcasing creative design ideas and user-centered digital experiences.",
      hosts: "Vetrivel S , Vishali S",
      image: "https://wallpapercave.com/wp/wp11742795.jpg",
      date: "OCT 16, 2025",
      time: "Round 1:11:00 AM – 12:30 PM & Round 2: 2:00 PM - 3.00PM",
      venue: "ECE LAB 2108",
      members: "1 members(Single Participation Only)",
      contacts: "Vetrivel : 7200564266, Vishali:7358453631",
      rules: [
        "Single Participation only Allowed",
        "Don't Speak to others",
        "Don't Use AI Tools for Designing Ideas",
        "Each person will be given 1 hours ",
      ],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mrs.P.Rajapriya",
    },

    {
      title: "Startup Arena",
      type: "Presentation",
      description:
        " Startup Arena Presentation is an event where participants pitch innovative business ideas or startup concepts to showcase creativity and entrepreneurial skills.",
      hosts: "Sanjay G , Sutakar SJ",
      image:
        "https://asperbrothers.com/wp-content/uploads/2023/11/featuredimage_eventsforstartups-e1701268834337-853x470.jpg",
      date: "OCT 16, 2025",
      time: "11:00 AM – 12:30 PM",
      venue: "Seminar Hall 2003",
      members: " Team of 3 Members Maximum",
      contacts: "Sanjay : 9489467166, Sutakar: 9080665031",
      rules: [
        "Single Participations are also Allowed",
        "Don't do any Malpractice",
        "Don't Argue with the Coordinaters",
      ],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mrs.P.Rajapriya",
    },
   {
  title: "Algo Arena",
  type: "Coding Challenge",
  description: "Algo Arena is a competitive coding challenge where participants battle their logic, speed, and problem-solving skills to crack algorithmic puzzles and emerge as champions.",
  hosts: "Rithik K , Rohith B",
  image: "https://tse3.mm.bing.net/th/id/OIP.hjWAshhSxJR4H0m7Xn1r2gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  date: "OCT 16, 2025",
  time: "11:00 AM – 12:30 PM",
  venue: "CSE LAB 2008",
  members: "1 member(Single Participation Only)",
  contacts: "Rithik : 9715235082, Rohith: 8489274931",
  rules: [
    "Single Participation only Allowed",
    "Don't do any Malpractice",
    "Each person will be given 40 minites",
    "Accepted Language:Java,Python,C",
  ],
  prizes: ["Winner:Sheild & Certificates"],
  staffincharge: "Mrs.E.Selvamanju",
},
    {
      title: "Prompt Royale",
      type: "Generating Image & Video",
      description:
        "Prompt Royale is a creative writing event where participants are given unique prompts and challenged to come up with quick, original, and engaging responses within a limited time. It tests creativity, imagination, and presence of mind.",
      hosts: "Mahindra Roshan M , Sri Gnana Guru J",
      image:
        "https://miro.medium.com/v2/resize:fit:602/1*e_OqVthufzhYG4WM5V2S2Q.png",
      date: "OCT 16, 2025",
      time: "11:00 AM – 12:30 PM",
      venue: "Hall No: 2001",
      members: "Team of 2 Members",
      contacts: "Mahindra Roshan : 9489246199, Sri Gnana Guru : 7639035985",
      rules: [
        "Must have been download with Gemini",
        "Each Team will be given 40 minites",
        "Totally 3 Rounds will be condected",
        "final round winners will be selected",
      ],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mr.S.Vishwanathan",
    },
  ],
  nonTechnical: [
    {
      title: "Pix Link",
      type: "Quiz",
      description:
        "Pixlink is a fun event where participants connect related pictures to identify the correct word, theme, or concept.",
      hosts: "Pruthiv Raman K , Konnaiyandi K",
      image:
        "https://as1.ftcdn.net/v2/jpg/02/04/52/72/1000_F_204527293_o9ut8AIm2PaXQg22sSqLMH354X8weheJ.jpg",
      date: "OCT 16, 2025",
      time: "Round 1 : 12:30 PM – 1:30 PM & Round 2 : 2:15 PM – 3:00 PM ",
      venue: "3rd Year CSE (Hall No:2002)",
      members: "Team of 2 Members",
      contacts: "Pruthiv Raman: 7094125010, Konnaiyandi: 9025814697",
      rules: [
        "2 Participation per Team",
        "Don't do any Malpractice",
        "Each Team will be given only 1 hours",
        "Shortlisted teams going to Round 2 After Lunch",
      ],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mr.R.Srinivasan",
    },
    {
      title: "IPL Auction",
      type: "Auction",
      description:
        "Pixlink is a fun event where participants connect related pictures to identify the correct word, theme, or concept.",
      hosts: "DharaniDharan M , ArunKummar P",
      image:
        "https://th.bing.com/th/id/OIP.Xcnr58MzsBrM3K7Lz46FywHaEK?w=289&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      date: "OCT 16, 2025",
      time: " 12:30 PM – 1:30 PM ",
      venue: "3rd Year CSE (Hall No:2001)",
      members: "Team of 4 Members",
      contacts: "DharaniDharan M: 9789505506, ArunKumar P: 6379123677",
      rules: [
        "4 Participation per Team",
        "Each Team Should take 11 Players as Per rule",
      ],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: ["Mr.ParameshWaran"],
    },
    {
      title: "Pressure Pause",
      type: "Mathi Yosi",
      description:
        "Pressure Pause is a thrilling event designed to test how well participants handle stress, quick thinking, and decision-making under time constraints. It challenges presence of mind while keeping the excitement high.",
      hosts: "Thrisha S , Kareemathul Zahraa M",
      image:
        "https://static.vecteezy.com/system/resources/previews/001/991/249/large_2x/play-circular-button-neon-icon-elements-of-minimal-universal-theme-set-simple-icon-for-websites-web-design-mobile-app-info-graphics-vector.jpg",
      date: "OCT 16, 2025",
      time: " 12:30 PM – 1:30 PM ",
      venue: "2nd Year CSE A(Hall No:2011)",
      members: "1 members(Single Participation Only)",
      contacts: "Sanjay P: 9345752465",
      rules: [
        "Individual Participation only Allowed",
        "There will be 2 min for each Paticipant",
        "The event may include multiple rounds (elimination, semifinals, finals)",
        "Once the timer starts, participants must think quickly and answer without pause",
      ],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mrs.Sowmiya",
    },
    {
      title: "E-Sports",
      type: "FreeFire",
      description:
        "Battle in popular multiplayer games like Valorant, Free Fire.",
      hosts: "Madhan Kumar N , John J",
      image:
        "https://www.clarknexsen.com/wp-content/uploads/2021/05/unc-esports-arena-1200-web.jpg",
      date: "OCT 16, 2025",
      time: " 2:30 PM – 4:00 PM ",
      venue: "ECE LAB:(2109)",
      members: "Team of 4 Members",
      contacts: "Madhankumar :8072819766,John :8610665170",
      rules: [
        "Team Size: 4 members per squad (Solo/Duo may be mentioned if allowed)",
        "Mode: Battle Royale (Custom Room)",
        "Maps: Bermuda / Purgatory / Kalahari (decide and announce before match)",
        "Hacking/Cheating: Any use of hacks, mods, or third-party tools leads to instant disqualification.",
      ],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mr.S.Sunder Stalin",
    },
  ],
  hackathon: [
    {
      title: "Neurahack 2K25",
      type: "National Level Technical Hackathon",
      description:
        "Neurahack 2K25 is a national level technical hackathon where participants compete individually or in teams to build innovative solutions within a set time frame. Showcase your skills and win exciting prizes!",
      image: hackathonImage,
      date: "OCT 16, 2025",
      time: "Full day",
      venue: "Kamarajar Auditorium",
      members: "Individual / Team of 2-3 Members",
      contacts: "techfusion@aaacet.ac.in",
      staffincharge: "Dr. P. Senthil Pandian, Mrs. S. Rajeswari",
      rules: [
        "Original work only.",
        "Follow coordinator instructions.",
        "Respect time limits.",
        "Submission must be within the deadline.",
      ],
      prizes: ["1st Prize: ₹10,000", "2nd Prize: ₹5,000", "3rd Prize: ₹2,500"],
      registration: {
        feePerHead: 250,
        registrationLink: "https://forms.gle/9R6yMWzQW1PGmCca9",
      },
      problemStatement: "/Problem_statements.pdf"
    },
  ],
};

function Events() {
  const [activeTab, setActiveTab] = useState("technical");
  const [activeEvent, setActiveEvent] = useState(null); // central modal
  const [tab, setTab] = useState("details"); // Details/Rules tab inside modal

  const tabs = [
    { id: "technical", label: "Technical Events" },
    { id: "nonTechnical", label: "Non-Technical Events" },
    { id: "hackathon", label: "Hackathon" },
  ];

  // Close modal on ESC
  useEffect(() => {
    if (!activeEvent) return;
    const onKey = (e) => e.key === "Escape" && setActiveEvent(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeEvent]);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#0a0f1f] to-black text-white px-6 md:px-16 py-16 font-sans" id="events">
      <h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-12"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          textShadow:
            "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.5)",
        }}
      >
        🎉 Events
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 transform ${
              activeTab === t.id
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-xl scale-110"
                : "bg-gray-800 text-white hover:bg-cyan-600 hover:text-black hover:scale-105"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {eventsData[activeTab].map((event, i) => (
          <EventCard
            key={`${activeTab}-${i}`}
            event={event}
            onOpen={() => {
              setActiveEvent(event);
              setTab("details"); 
            }}
          />
        ))}
      </div>

      {/* Central Modal */}
      {activeEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={(e) => e.target === e.currentTarget && setActiveEvent(null)}
        >
          <div className="bg-gray-900 rounded-2xl p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-3 text-white text-xl leading-none"
              onClick={() => setActiveEvent(null)}
              aria-label="Close modal"
            >
              ✖
            </button>

            <img
              src={activeEvent.image}
              alt={activeEvent.title}
              className="rounded-lg mb-4 max-h-56 w-full object-cover"
            />
            <h2 className="text-2xl font-bold">{activeEvent.title}</h2>
            <p className="text-orange-400 mb-4">
              {activeEvent.category ?? activeEvent.type ?? "Event"}
            </p>

            {/* Tabs inside modal */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setTab("details")}
                className={`px-4 py-2 rounded-lg ${
                  tab === "details" ? "bg-orange-500" : "bg-gray-700"
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setTab("rules")}
                className={`px-4 py-2 rounded-lg ${
                  tab === "rules" ? "bg-orange-500" : "bg-gray-700"
                }`}
              >
                Rules & Prizes
              </button>
            </div>

            {/* Tab content */}
            {tab === "details" ? (
              <ul className="space-y-2 text-sm">
                <li>📅 {activeEvent.date || "Coming soon"}</li>
                <li>⏰ {activeEvent.time || "TBA"}</li>
                <li>📍 {activeEvent.venue || "TBA"}</li>
                <li>👥 {activeEvent.members || "Individual / Team"}</li>
                <li>📞 {activeEvent.contacts || "Event Coordinator"}</li>
                <li>👤 {activeEvent.staffincharge || "Staff In-charge"}</li>
                {activeEvent.registration?.feePerHead && (
                  <li>🪙 Fee: ₹{activeEvent.registration.feePerHead}</li>
                )}
              </ul>
            ) : (
              <div className="text-sm space-y-3">
                <div>
                  <p className="font-semibold mb-1">Rules</p>
                  <ul className="list-disc list-inside space-y-1">
                    {(activeEvent.rules && activeEvent.rules.length
                      ? activeEvent.rules
                      : [
                          "Original work only.",
                          "Follow instructions.",
                          "Respect time limits.",
                        ]
                    ).map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1">Prizes</p>
                  <ul className="list-disc list-inside space-y-1">
                    {(activeEvent.prizes && activeEvent.prizes.length
                      ? activeEvent.prizes
                      : ["Winner: ₹10,000", "Runner-up: ₹5,000"]
                    ).map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Problem Statement Download */}
            {activeEvent.problemStatement && (
              <a
                href={activeEvent.problemStatement}
                download
                className="mt-4 block"
              >
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-2 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300">
                  📄 Download Problem Statement
                </button>
              </a>
            )}

            {/* Registration */}
            <a
              href={
                activeEvent.registration?.registrationLink ||
                "https://forms.gle/kxupsWx3bSiEf9az6" 
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block"
            >
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-2 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300">
                Register Now →
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
export default Events;
