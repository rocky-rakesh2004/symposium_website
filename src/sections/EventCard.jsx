// src/components/EventCard.jsx
import { useEffect, useState } from "react";

const EventCard = ({ event }) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState("details"); // "details" | "rules"

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const category = event.category ?? event.type ?? "Event";

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-400/30 rounded-3xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 hover:shadow-cyan-400/50 transition-all duration-500 hover:-rotate-1">
      {/* Image */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-44 object-cover rounded-xl mb-4"
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

      {/* Register Button */}
      <button
        onClick={() => setOpen(true)}
        className="group mt-5 w-full py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-md flex items-center justify-center gap-2 hover:from-blue-600 hover:to-cyan-500 transition-all duration-500"
      >
        Register
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          🚀
        </span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={(e) => {
            // close when clicking the dim background
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="bg-gray-900 rounded-2xl p-6 max-w-lg w-full relative">
            {/* Close */}
            <button
              className="absolute top-2 right-3 text-white text-xl leading-none"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
            >
              ✖
            </button>

            {/* Header image */}
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg mb-4 max-h-56 w-full object-cover"
            />
            <h2 className="text-2xl font-bold">{event.title}</h2>
            <p className="text-orange-400 mb-4">{category}</p>

            {/* Tabs */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={() => setTab("details")}
                className={`px-4 py-2 rounded-lg ${tab === "details" ? "bg-orange-500" : "bg-gray-700"
                  }`}
              >
                Details
              </button>
              <button
                onClick={() => setTab("rules")}
                className={`px-4 py-2 rounded-lg ${tab === "rules" ? "bg-orange-500" : "bg-gray-700"
                  }`}
              >
                Rules & Prizes
              </button>
            </div>

            {/* Tab content */}
            {tab === "details" ? (
              <ul className="space-y-2 text-sm">
                <li>📅 {event.date || "Coming soon"}</li>
                <li>⏰ {event.time || "TBA"}</li>
                <li>📍 {event.venue || "TBA"}</li>
                <li>👥 {event.members || "Individual / Team"}</li>
                <li>📞 {event.contacts || "Event Coordinator"}</li>
                <li>👤 {event.staffincharge || "staffincharge"}</li>
              </ul>
            ) : (
              <div className="text-sm space-y-3">
                <div>
                  <p className="font-semibold mb-1">Rules</p>
                  <ul className="list-disc list-inside space-y-1">
                    {(event.rules && event.rules.length
                      ? event.rules
                      : [
                        "Original work only.",
                        "Follow coordinator instructions.",
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
                    {(event.prizes && event.prizes.length
                      ? event.prizes
                      : ["Certificates", "Goodies", "Bragging rights!"]
                    ).map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Two optional extra images (like your screenshots) */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mt-4">
                {event.gallery.slice(0, 2).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="rounded-lg h-28 w-full object-cover"
                  />
                ))}
              </div>
            )}

            {/* Button */}
            <a href="https://vimalsforecast.netlify.app/" className="mt-6 block">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 py-2 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300">
                Register Now →
              </button>
            </a>



          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;
