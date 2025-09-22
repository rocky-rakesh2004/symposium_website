import React from "react";
import staff from "../assets/staff.png";
import staff1 from "../assets/senthil.jpg"
import staff2 from "../assets/rajeshwari.JPG"
import hod from "../assets/hod.jpg"

const Staff = () => {
  const content = [
    { id: 1, image: hod, h:"CONVENOR",name: "Dr.J.Hemalatha", designation: " HOD/CSE  -UG/PG" },
    { id: 2, image: staff1,h:"FACULTY COORDINATOR", name: "Dr.P.Senthil Pandian", designation: "Associate Professor / CSE" },
    { id: 3, image: staff2, h:"FACULTY COORDINATOR",name: "Mrs.S.Rajeshwari", designation: "Assistant Professor / CSE" }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-black via-[#0a0a13] to-black text-white flex flex-col items-center py-12">
      <h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontWeight: 600,
          textShadow: `
            0 0 8px rgba(0, 255, 255, 0.7),
            0 0 15px rgba(0, 200, 255, 0.6),
            0 0 25px rgba(0, 150, 255, 0.5)
          `
        }}
      >
        Staff
      </h1>

      <div className="w-11/12 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.map((person, index) => (
          <div
            key={person.id}
            className={`bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-cyan-400/40 rounded-xl p-8 shadow-md hover:shadow-cyan-400/50 transition-transform transform hover:scale-105 flex flex-col items-center
              ${index === 0 ? "col-span-1 sm:col-span-2 lg:col-span-1" : ""}
            `}
          >
            <h3 className=" text-yellow-300 font-extrabold mb-1">
                {person.h}
            </h3>
            <img
              src={person.image}
              alt={person.name}
              className={`rounded-full border-4 border-cyan-400 object-cover mb-4  w-28 h-28"}`}
            />
            <h3 className={`text-center text-xl font-semibold text-cyan-300 tracking-wide `}>
              {person.name}
            </h3>
            <p className="text-  text-gray-300 text-center mt-2">
              {person.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Staff;
