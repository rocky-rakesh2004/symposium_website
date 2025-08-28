import { useEffect, useState } from "react";
import Particles from "../components/Particles";
import TextType from "../components/TextType";

function Home() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-10-15T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-screen relative bg-black flex justify-center items-center overflow-hidden">
      {/* Bold Particle Background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#00ffff", "#00eaff", "#ffffff"]}
          particleCount={250}
          particleSpread={25}
          speed={0.2}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Foreground Content */}
      <div className="absolute text-center px-6" id="home">
        <TextType
          text={[
            "AAA College of Engineering and Technology",
            "Department of Computer Science and Engineering",
            "National-Level Technical Symposium 2k25 🎉",
          ]}
          typingSpeed={80}
          pauseDuration={800}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl md:text-6xl font-extrabold text-white 
                     drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
        />

        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
          Department of Computer Science and Engineering presents{" "}
          <span className="text-cyan-300 font-semibold drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">
            National-Level Symposium 2k25
          </span>
        </p>

        {/* Countdown Timer */}
        <div className="mt-10 flex justify-center gap-6 text-white">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col items-center bg-gray-900/60 rounded-2xl px-4 py-3 
                         shadow-lg backdrop-blur-md border border-cyan-500/40
                         hover:scale-105 transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
                {value}
              </span>
              <span className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Button with glow + hover animation */}
        <a
          href="#about"
          className="mt-10 inline-block bg-cyan-500 text-white font-bold px-8 py-3 
                     rounded-2xl shadow-lg transition-all duration-300 
                     hover:bg-cyan-600 hover:scale-110 
                     hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] 
                     animate-pulse-slow"
        >
          Learn More 
        </a>
      </div>
    </div>
  );
}

export default Home;
