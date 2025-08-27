import Particles from "../components/Particles";
import TextType from "../components/TextType";

function Home() {
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
            "National-Level Technical Symposium 2025 🎉",
          ]}
          typingSpeed={80}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl md:text-6xl font-extrabold text-white 
                     drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
        />

        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
          Department of Computer Science and Engineering presents{" "}
          <span className="text-cyan-300 font-semibold drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">
            National-Level Technical Symposium 2025
          </span>
        </p>

        {/* Button with glow + hover animation */}
        <a
          href="#about"
          className="mt-8 inline-block bg-cyan-500 text-black font-bold px-8 py-3 
                     rounded-2xl shadow-lg transition-all duration-300 
                     hover:bg-cyan-600 hover:scale-110 
                     hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] 
                     animate-pulse-slow"
        >
          Learn More ⬇️
        </a>
      </div>
    </div>
  );
}

export default Home;
