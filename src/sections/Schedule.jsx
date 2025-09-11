import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  // Schedule Data with Morning & Afternoon
  const scheduleData = {
    1: {
      morning: [
        { time: "Round 1 : 11:00 AM - 12:30 PM", title: "Innovation(UI&UX)", location: "ECE LAB:(2107)" },
        { time: "Round 1 : 12:30 PM - 1:30 PM", title: "PixLink(Quiz)", location: "3rd Year CSE (Hall No:2002)" },
        { time: "Round 1 : 12:00 PM - 1:30 PM", title: "Pressure Pause(Mathi Yosi)", location: "2nd Year CSE A (Hall No:2011)" },
        { time: "11:00 AM - 12:30 PM", title: "Back Track(Coading Competition)", location: "CSE LAB:(2007)" },
        { time: "11:00 AM - 1:00 PM", title: "StartUp Arena(Presentation)", location: "Seminar Hall(2003)" },
        { time: "11:00 AM - 1:30 PM", title: "Algo Arena(Coading Challenge)", location: "CSE LAB:(2008)" },
        { time: "12:30 PM - 1:30 PM", title: "IPL Auction", location: "3rd Year CSE (Hall No:2001)" },
      ],
      afternoon: [
        
        { time: "Round 2 : 2:00 PM - 3:00 PM", title: "Innovation(UI&UX)", location: "ECE LAB:(2107)" },
        { time: "Round 2 : 2:15 PM - 3:00 PM", title: "PixLink(Quiz)", location: "3rd Year CSE (Hall No:2002)" },
        { time: "Round 2 : 2:30 PM - 3:30 PM", title: "Pressure Pause(Mathi Yosi)", location: "2nd Year CSE A (Hall No:2011)" },
        { time: "2:30 PM - 4:00 PM", title: "Gaming Arena(E-Sports)", location: "ECE LAB:(2109)" },
      ],
    },
    2: {
      morning: [{ time: "10:00 AM - 1:00 PM", title: "Hackathon", location: "Kamarajar Auditorium" }],
      
    },
  };

  return (
    <section
      id="schedule"
      className="w-full min-h-screen bg-gradient-to-b from-black via-[#0a0a13] to-black text-white px-6 md:px-16 py-16 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontWeight: 600,
          textShadow: `
            0 0 8px rgba(0, 255, 255, 0.7),
            0 0 15px rgba(0, 200, 255, 0.6),
            0 0 25px rgba(0, 150, 255, 0.5)
          `,
        }}
      >
        📅 Event Schedule
      </h1>

      {/* Day Switcher */}
      <div className="flex justify-center gap-4 mb-12">
        {[1, 2].map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${activeDay === day
              ? "bg-cyan-500 text-white shadow-cyan-400/40 scale-105"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
          >
            Day {day}
          </button>
        ))}
      </div>

      {/* Morning & Afternoon */}
      <div className="w-full max-w-6xl">
        {["morning", "afternoon"].map((session) => (
          <div key={session} className="mb-12">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6 border-b border-cyan-400/40 inline-block px-2">
              {session === "morning" ? "🌅 Morning Session" : "🌆 Afternoon Session"}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scheduleData[activeDay][session].map((event, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-cyan-400/40 rounded-xl p-5 shadow-md hover:shadow-cyan-400/50 transition-transform transform hover:scale-105 hover:border-cyan-400"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                    <FaClock className="text-cyan-400" /> {event.time}
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-300 tracking-wide">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                    <FaMapMarkerAlt className="text-cyan-400" /> {event.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Schedule;
