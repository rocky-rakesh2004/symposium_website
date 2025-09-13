// src/components/Events.jsx
import { useState } from "react";
import EventCard from "./EventCard";
// import SplashCursor from "./SplashCursor"; 

const eventsData = {
  technical: [
    {
      title: "Back Track",
      type: "Coding Competition",
      description: "A backtrack event is a problem-solving activity where participants explore all possible solutions by trying, undoing, and re-trying different choices to reach the correct outcome.",
      hosts: "VimalRaj R , Rakesh S",
      image:
        "https://wallpapers-all.com/uploads/posts/2022-09/1_back_track_4.jpg",
      date: "OCT 16, 2025",
      time: "11:00 AM – 12:30 PM",
      venue: "CSE LAB 2007",
      members: "1 member(Single Participation Only)",
      contacts: "VimalRaj : 8072662449, Rakesh : 9360318375",
      staffincharge: " Mr.K.A.MohammedFaiz",
      rules: ["Single Participation only Allowed", "AI tools are not Allowed", "Don't do any Malpractice", "Each person will be given only 20 minites "],
      prizes: ["Winner:Sheild & Certificates"],

    },
    {
      title: "Innovation",
      type: "UI & UX Design",
      description: " UI/UX Innovation – Showcasing creative design ideas and user-centered digital experiences.",
      hosts: "Vetrivel S , Vishali S",
      image:
        "https://wallpapercave.com/wp/wp11742795.jpg",
      date: "OCT 16, 2025",
      time: "Round 1:11:00 AM – 12:30 PM & Round 2: 2:00 PM - 3.00PM",
      venue: "ECE LAB 2108",
      members: "1 members(Single Participation Only)",
      contacts: "Vetrivel : 7200564266, Vishali:7358453631",
      rules: ["Single Participation only Allowed", "Don't Speak to others", "Don't Use AI Tools for Designing Ideas", "Each person will be given 1 hours "],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mrs.P.Rajapriya",
    },

    {
      title: "Startup Arena",
      type: "Presentation",
      description: " Startup Arena Presentation is an event where participants pitch innovative business ideas or startup concepts to showcase creativity and entrepreneurial skills.",
      hosts: "Sanjay G , Sutakar SJ",
      image:
        "https://asperbrothers.com/wp-content/uploads/2023/11/featuredimage_eventsforstartups-e1701268834337-853x470.jpg",
      date: "OCT 16, 2025",
      time: "11:00 AM – 12:30 PM",
      venue: "Seminar Hall 2003",
      members: " Team of 3 Members Maximum",
      contacts: "Sanjay : 9489467166, Sutakar: 9080665031",
      rules: ["Single Participations are also Allowed", "Don't do any Malpractice", "Don't Argue with the Coordinaters",],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mrs.P.Rajapriya",
    },
    {
      title: "Algo Arena",
      type: "Coading Challenge",
      description: " Algo Arena is a competitive coding challenge where participants battle their logic, speed, and problem-solving skills to crack algorithmic puzzles and emerge as champions.",
      hosts: "Rithik K , Rohith B",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.hjWAshhSxJR4H0m7Xn1r2gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      date: "OCT 16, 2025",
      time: "11:00 AM – 12:30 PM",
      venue: "CSE LAB 2008",
      members: " 1 member(Single Participation Only)",
      contacts: "Rithik : 9715235082, Rohith: 8489274931",
      rules: ["Single Participation only Allowed", "Don't do any Malpractice", "Each person will be given 40 minites", "Accepted Language:Java,Python,C"],
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
      rules: ["Must have been download with Gemini",  "Each Team will be given 40 minites", "Totally 3 Rounds will be condected","final round winners will be selected"],
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
      rules: ["2 Participation per Team", "Don't do any Malpractice", "Each Team will be given only 1 hours", "Shortlisted teams going to Round 2 After Lunch"],
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
      rules: ["4 Participation per Team", "Each Team Should take 11 Players as Per rule"],
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
      rules: ["Individual Participation only Allowed", "There will be 2 min for each Paticipant", "The event may include multiple rounds (elimination, semifinals, finals)", "Once the timer starts, participants must think quickly and answer without pause"],
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
      rules: ["Team Size: 4 members per squad (Solo/Duo may be mentioned if allowed)", "Mode: Battle Royale (Custom Room)", "Maps: Bermuda / Purgatory / Kalahari (decide and announce before match)", "Hacking/Cheating: Any use of hacks, mods, or third-party tools leads to instant disqualification."],
      prizes: ["Winner:Sheild & Certificates"],
      staffincharge: "Mr.S.Sunder Stalin",
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
      {/* <SplashCursor />  */}

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
