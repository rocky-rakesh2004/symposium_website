import { useState } from "react";
import { FaUser, FaRocket } from "react-icons/fa";



// Data
const eventsData = {
  technical: [
    {
      title: "Paper Presentation",
      type: "Competition",
      description:
        "Showcase your innovative research papers and emerging tech solutions.",
      hosts: "Nikhil Srinivasan S, Soorya",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.VrOLCd2txAYP1s4JNpwSVQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Technical Quiz",
      type: "Quiz",
      description:
        "Test your knowledge across multiple domains of science and technology.",
      hosts: "Preetha P, Muthu Jayashree",
      image:
        "https://i.ytimg.com/vi/eBUWqcuu58c/maxresdefault.jpg",
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
      title: "Treasure Hunt",
      type: "Fun Event",
      description:
        "Solve riddles and race to uncover hidden treasures on campus.",
      hosts: "Rohit K, Shalini",
      image:
        "https://st3.depositphotos.com/1428083/16095/i/450/depositphotos_160959434-stock-photo-treasure-hunt-parchment.jpg",
    },
    {
      title: "IPL Auction",
      type: "Simulation",
      description:
        "Form your dream cricket team in a thrilling mock IPL auction.",
      hosts: "Vishnu R, Kavya",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
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
      className="w-full min-h-screen bg-gradient-to-b from-black via-[#0a0f1f] to-black text-white px-6 md:px-16 py-16 font-sans"
    >
      {/* Title */}
      <h1
        className="text-4xl md:text-6xl font-extrabold text-center mb-12"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          textShadow: `
              0 0 10px rgba(0, 255, 255, 0.7),
              0 0 20px rgba(0, 255, 255, 0.6),
              0 0 40px rgba(0, 255, 255, 0.5)
            `,
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
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 transform ${
              activeTab === tab
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-xl scale-110"
                : "bg-gray-800 text-white hover:bg-cyan-600 hover:text-black hover:scale-105"
            }`}
          >
            {tab === "technical" ? "Technical Events" : "Non-Technical Events"}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {eventsData[activeTab].map((event, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-400/30 rounded-3xl shadow-lg p-6 flex flex-col justify-between 
            hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-500 hover:-rotate-1"
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />

            {/* Title */}
            <h4 className="text-2xl font-bold text-cyan-400 mb-2 text-center">
              {event.title}
            </h4>
            <p className="text-blue-300 text-sm font-semibold text-center mb-3">
              {event.type}
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm text-center">
              {event.description}
            </p>

            {/* Hosts */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-4">
              <FaUser className="text-cyan-400" />
              {event.hosts}
            </div>

            {/* Register Button */}
            <button className="group mt-5 w-full py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-md flex items-center justify-center gap-2 hover:from-blue-600 hover:to-cyan-500 transition-all duration-500">
              Register
              <FaRocket className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
