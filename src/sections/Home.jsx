import { useEffect, useState } from "react";
import Lightning from "../components/Lighting";
import TextType from "../components/TextType";
import StarBorder from './StarBorder';

// 🎆 Fireworks + Rockets Component
function Fireworks() {
  useEffect(() => {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const rockets = [];

    function createFirework(x, y) {
      const colors = ["#ff0044", "#ff8800", "#ffee00", "#00ffcc", "#00aaff"];
      for (let i = 0; i < 80; i++) {
        particles.push({
          x,
          y,
          angle: (Math.PI * 2 * i) / 80,
          speed: Math.random() * 4 + 2,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 100,
        });
      }
    }

    function launchRocket() {
      rockets.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        speed: -(Math.random() * 4 + 6),
        color: "#ff4444",
        exploded: false,
      });
    }

    function animate() {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rockets.forEach((r, i) => {
        r.y += r.speed;
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();

        if (r.y < canvas.height / 3 && !r.exploded) {
          createFirework(r.x, r.y);
          r.exploded = true;
          rockets.splice(i, 1);
        }
      });

      particles.forEach((p, i) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed + 0.5;
        p.life--;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        if (p.life <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    const rocketInterval = setInterval(() => {
      launchRocket();
    }, 1200);

    animate();
    return () => clearInterval(rocketInterval);
  }, []);

  return <canvas id="fireworks" className="absolute inset-0 z-0"></canvas>;
}

function Home() {
  // 🎯 Target start and end times
  const eventStart = new Date("2025-10-16T09:00:00"); // ✅ Oct 16 9AM
  const eventEnd = new Date("2025-10-17T09:00:00");   // ✅ +24 hours

  const calculateTimeLeft = () => {
    const now = new Date();
    if (now >= eventEnd) return "ended"; // ✅ Symposium finished
    if (now >= eventStart) return null;  // ✅ Symposium started
    const difference = eventStart - now;
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
    <div className="w-full h-screen relative bg-gradient-to-br from-black via-[#010a14] to-[#001b29] flex justify-center items-center overflow-hidden">
      {/* ⚡ Lightning Background */}
      <div className="absolute inset-0">
        <Lightning hue={200} xOffset={0} speed={1} intensity={1} size={1} />
      </div>

      {/* 🎆 Fireworks only when event is live */}
      {timeLeft === null && <Fireworks />}

      {/* Foreground Content */}
      <div className="absolute text-center px-6 z-10" id="home">
        {/* Heading */}
        <TextType
          text={[
            "AAA College of Engineering and Technology",
            "Department of Computer Science and Engineering",
            "National-Level Technical Symposium 2k25",
          ]}
          typingSpeed={80}
          pauseDuration={800}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl md:text-6xl font-extrabold heading bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.9)]"
        />


        {/* Countdown OR Live OR Ended */}
        {typeof timeLeft === "object" ? (
          // ⏳ Countdown
          <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-6 text-white">
            {Object.entries(timeLeft || {}).map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col items-center bg-gradient-to-br from-[#012b36]/80 to-[#014a5b]/60 
                   rounded-2xl px-3 py-3 sm:px-5 sm:py-4 shadow-lg backdrop-blur-md 
                   border border-cyan-400/40 hover:scale-105 transition-all duration-300 
                   min-w-[70px] sm:min-w-[100px]"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 
                         drop-shadow-[0_0_12px_rgba(0,255,255,0.9)]">
                  {value}
                </span>
                <span className="text-xs sm:text-sm md:text-base text-sky-200 uppercase tracking-wider">
                  {label}
                </span>
              </div>
            ))}
          </div>
        ) : timeLeft === null ? (
          // 🎇 Live (within 24 hours)
          <h2 className="mt-12 text-2xl sm:text-3xl md:text-5xl font-extrabold text-yellow-300 
                 drop-shadow-[0_0_25px_rgba(255,255,0,0.9)] animate-bounce">
            🎆 Symposium Started 🎉
          </h2>
        ) : (
          // ✅ After 24 hours → old design
          <h2 className="mt-12 text-lg sm:text-2xl md:text-4xl font-bold text-gray-300 italic">
            Thank you for joining Symposium 2k25 💡
          </h2>
        )}


        {/* Buttons only visible before start */}
        {/* Buttons only visible before start */}
        {typeof timeLeft === "object" && (
          <div className="mt-10 flex flex-col items-center gap-6">
            {/* Learn More Button */}
            <a
              href="#schedule"
              className="inline-block bg-red-600 text-white font-bold px-10 py-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,0,0,0.9)] animate-[pulseGlow_1.8s_ease-in-out_infinite]"
            >
              Events Schedule
            </a>

            {/* Register Button inside StarBorder */}
            <StarBorder
              as="a"
              href="#events"
              className="bg-orange-500 text-white font-bold  hover:scale-110 animate-[pulseGlow_1.8s_ease-in-out_infinite]"
              color="cyan"
              speed="5s"
            >
              Register Now !
            </StarBorder>
          </div>
        )}




      </div>
    </div>
  );
}

export default Home;
