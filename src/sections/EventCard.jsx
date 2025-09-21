const EventCard = ({ event, onOpen }) => {
  const category = event.category ?? event.type ?? "Event";

  const isHackathon = event.title === "Neurahack 2K25";

  return (
    <div
      className={`
    bg-gradient-to-br from-[#0f172a] to-[#1e293b] 
    border border-cyan-400/30 rounded-3xl shadow-lg p-6 
    flex flex-col justify-between 
    hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-500 hover:-rotate-1
    ${
      isHackathon
        ? "w-full max-w-xl mx-auto col-span-1 sm:col-span-2 lg:col-span-3"
        : ""
    }
  `}
    >
      {/* Image */}
      <img
        src={event.image}
        alt={event.title}
        className={`w-full rounded-xl mb-4 
          ${isHackathon ? "object-contain aspect-video" : "h-44 object-cover"}
        `}
      />

      {/* Title */}
      <h3 className="text-2xl font-bold text-cyan-400 text-center">
        {event.title}
      </h3>
      <p className="text-blue-300 text-sm font-semibold text-center mb-3">
        {category}
      </p>

      {/* Description */}
      <p className="text-gray-300 text-sm text-center">{event.description}</p>

      {/* Hosts */}
      {event.hosts && (
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mt-4">
          <span className="text-cyan-400">👤</span> {event.hosts}
        </div>
      )}

      {/* Hackathon Problem Statement Button */}
      {isHackathon && event.problemStatement && (
        <a href={event.problemStatement} download className="mt-4 block">
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-2 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300">
            📄 Download Problem Statement
          </button>
        </a>
      )}

      {/* Register Button */}
      <button
        onClick={onOpen}
        className="group mt-5 w-full py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-md flex items-center justify-center gap-2 hover:from-blue-600 hover:to-cyan-500 transition-all duration-500"
      >
        Register
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          🚀
        </span>
      </button>
    </div>
  );
};

export default EventCard;
