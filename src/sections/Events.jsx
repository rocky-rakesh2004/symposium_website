// src/components/Events.jsx
import { useState } from "react";
import EventCard from "./EventCard";
import SplashCursor from "./SplashCursor"; // ✅ import here

const eventsData = {
  technical: [
    {
      title: "Back Track",
      type: "Coding Competition",
      description: "A backtrack event is a problem-solving activity where participants explore all possible solutions by trying, undoing, and re-trying different choices to reach the correct outcome.",
      hosts: "VimalRaj R,Rakesh S",
      image:
        "https://wallpapers-all.com/uploads/posts/2022-09/1_back_track_4.jpg",
      date: "OCT 16, 2025",
      time: "11:00 AM – 12:30 PM",
      venue: "CSE Lab 2007",
      members: "1 members(Single Participation Only)",
      contacts: "VimalRaj : 8072662449, Rakesh : 9360318375",
      rules: ["Single Participation only Allowed", "Don't Speak to others", "Don't do any Malpractice", "Each person will be given only 20 minites "],
      prizes: ["Winner:Sheild & Certificates"],
    },
    {
      title: "Innovation",
      type: "UI & UX Design",
      description: " UI/UX Innovation – Showcasing creative design ideas and user-centered digital experiences.",
      hosts: "Vetrivel S,Vishali S",
      image:
        "https://wallpapercave.com/wp/wp11742795.jpg",
      date: "OCT 16, 2025",
      time: "Round 1:11:00 AM – 12:30 PM & Round 2: 2:00 PM - 3.00PM",
      venue: "CSE Lab 2008",
      members: "1 members(Single Participation Only)",
      contacts: "Vetrivel : 7200564266, Vishali:7358453631",
      rules: ["Single Participation only Allowed", "Don't Speak to others", "Don't Use AI Tools for Designing Ideas", "Each person will be given 1 hours "],
      prizes: ["Winner:Sheild & Certificates"],
    },

    {
      title: "Startup Arena",
      type: "Presentation",
      description: " Startup Arena Presentation is an event where participants pitch innovative business ideas or startup concepts to showcase creativity and entrepreneurial skills.",
      hosts: "Sanjay G,Sutakar SJ",
      image:
        "https://asperbrothers.com/wp-content/uploads/2023/11/featuredimage_eventsforstartups-e1701268834337-853x470.jpg",
      date: "OCT 16, 2025",
      time: "11:00 AM – 12:30 PM",
      venue: "Seminar Hall 2003",
      members: " Team of 3 Members Maximum",
      contacts: "Sanjay : 9489467166, Sutakar: 9080665031",
      rules: ["Don't Argue with the Coordinaters", "Single OR Duo Participations are also Allowed", "Each Team will be given 5 mins for Presentation"],
      prizes: ["Winner:Sheild & Certificates"],
    },

    {
      title: "Code Debugging",
      type: "Challenge",
      description:
        "Find and fix bugs in complex code snippets under time pressure.",
      hosts: "Deepak, Meena",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Web Design Sprint",
      type: "Workshop",
      description:
        "Design and develop a functional website prototype in record time.",
      hosts: "Hari Prasad, Shreya",
      image:
        "https://img.freepik.com/premium-photo/virtual-design-sprint-vector-ideation-session-illustration_1029473-114424.jpg",
    },
    {
      title: "AI Ideathon",
      type: "Hackathon",
      description:
        "Brainstorm and pitch innovative AI-based ideas for real-world problems.",
      hosts: "Santhosh, Priya",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Sparkathon",
      type: "Coding Marathon",
      description:
        "A 6-hour coding challenge to build impactful software solutions.",
      hosts: "Jaiakash V, Sanjana",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
    },
  ],
  nonTechnical: [
    {
      title: "Pix Link",
      type: "Quiz",
      description:
        "Pixlink is a fun event where participants connect related pictures to identify the correct word, theme, or concept.",
      hosts: "Pruthiv Raman K, Konnaiyandi K",
      image:
        "https://as1.ftcdn.net/v2/jpg/02/04/52/72/1000_F_204527293_o9ut8AIm2PaXQg22sSqLMH354X8weheJ.jpg",
      date: "OCT 16, 2025",
      time: "Round 1 : 12:30 PM – 1:30 PM & Round 2 : 2:15 PM – 3:00 PM ",
      venue: "3rd Year CSE (Hall No:2002)",
      members: "Team of 2 Members",
      contacts: "Pruthiv Raman: 7094125010, Konnaiyandi: 9025814697",
      rules: ["2 Participation per Team", "Don't do any Malpractice", "Each Team will be given only 1 hours", "Shortlisted teams going to Round 2 After Lunch"],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "MR. Srinivasan",
    },
    {
      title: "IPL Action",
      type: "Action",
      description:
        "Pixlink is a fun event where participants connect related pictures to identify the correct word, theme, or concept.",
      hosts: "DharaniDharan M, ArunKummar P",
      image:
        "https://th.bing.com/th/id/OIP.Xcnr58MzsBrM3K7Lz46FywHaEK?w=289&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      date: "OCT 16, 2025",
      time: " 12:30 PM – 1:30 PM ",
      venue: "3rd Year CSE (Hall No:2001)",
      members: "Team of 4 Members",
      contacts: "DharaniDharan M: 9789505506, ArunKumar P: 6379123677",
      rules: ["4 Participation per Team", "Each Team Should take 11 Players as Per rule"],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "MR. ParameshWaran",
    },
    {
      title: "Movie Quiz",
      type: "Quiz",
      description:
        "Guess movies, actors, and iconic dialogues from Hollywood & Bollywood.",
      hosts: "Ramesh K, Priya",
      image:
        "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Gaming Arena",
      type: "Esports",
      description:
        "Battle in popular multiplayer games like Valorant, BGMI, and FIFA.",
      hosts: "Ajay, Karthik",
      image:
        "https://www.clarknexsen.com/wp-content/uploads/2021/05/unc-esports-arena-1200-web.jpg",
    },
    {
      title: "Photography Contest",
      type: "Art Event",
      description:
        "Capture the essence of the fest through your photography skills.",
      hosts: "Sneha, Varun",
      image:
        "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Stand-up Comedy",
      type: "Entertainment",
      description:
        "Show your humor on stage with original jokes and witty punchlines.",
      hosts: "Manoj, Kavitha",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

function Events() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <section
      id="events"
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#0a0f1f] to-black text-white px-6 md:px-16 py-16 font-sans"
    >
      {/* Cursor Effect */}
      <SplashCursor /> {/* ✅ put inside section so it overlays */}

      {/* Title */}
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
      <div className="flex justify-center gap-6 mb-12">
        {["technical", "nonTechnical"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 transform ${activeTab === tab
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-xl scale-110"
              : "bg-gray-800 text-white hover:bg-cyan-600 hover:text-black hover:scale-105"
              }`}
          >
            {tab === "technical" ? "Technical Events" : "Non-Technical Events"}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {eventsData[activeTab].map((event, index) => (
          <EventCard key={`${activeTab}-${index}`} event={event} />
        ))}
      </div>
    </section>
  );
}

export default Events;
