import { FaTrophy, FaUsers, FaLaptopCode } from "react-icons/fa";
import Logo from "../assets/image.png";


function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-black text-white px-6 md:px-16 py-16 flex flex-col md:flex-row items-center gap-10"
    >


      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 font-bold text-cyan-300 relative z-10">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white tracking-wide text-center md:text-left"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            textShadow: `
              0 0 10px rgba(0, 255, 255, 0.7),
              0 0 20px rgba(0, 255, 255, 0.6),
              0 0 40px rgba(0, 255, 255, 0.5)
            `,
          }}
        >
          ABOUT OUR SYMPOSIUM
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          The{" "}
          <span className="text-cyan-300 font-semibold">
            Department of Computer Science and Engineering (CSE)
          </span>{" "}
          at{" "}
          <span className="text-white font-bold">
            AAA College of Engineering and Technology
          </span>{" "}
          proudly presents its annual{" "}
          <span className="text-cyan-300">
            National-Level Technical Symposium
          </span>
          . This event provides a vibrant platform for aspiring engineers,
          innovators, and technologists to showcase their talent and exchange
          knowledge.
        </p>

        {/* Info Cards */}
        <div className="grid gap-6">
          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400/30 rounded-xl p-5 shadow-lg transition-transform transform hover:scale-105 hover:shadow-cyan-500/40 duration-300">
            <FaLaptopCode className="text-cyan-400 text-3xl" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300">
                Technical Excellence
              </h3>
              <p className="text-gray-400 text-sm">
                Showcase your technical skills in various competitions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400/30 rounded-xl p-5 shadow-lg transition-transform transform hover:scale-105 hover:shadow-cyan-500/40 duration-300">
            <FaUsers className="text-cyan-400 text-3xl" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300">
                Networking with Peers
              </h3>
              <p className="text-gray-400 text-sm">
                Connect with like-minded students and professionals.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-gradient-to-r from-cyan-500/20 to-cyan-400/10 border border-cyan-400/30 rounded-xl p-5 shadow-lg transition-transform transform hover:scale-105 hover:shadow-cyan-500/40 duration-300">
            <FaTrophy className="text-cyan-400 text-3xl" />
            <div>
              <h3 className="text-xl font-bold text-cyan-300">
                Prestigious Awards
              </h3>
              <p className="text-gray-400 text-sm">
                Win recognition and prizes for your achievements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center relative z-10">
        <div className="relative">
          {/* Main College Image */}
          <img
            src="https://www.campusoption.com/images/colleges/gallery/20_01_17_101724_aaa_clg.jpg"
            alt="College Campus"
            className="rounded-2xl shadow-lg border-4 border-cyan-400/40 
            transition-transform duration-500 hover:rotate-2 hover:scale-105 
            hover:shadow-cyan-500/60 hover:shadow-2xl"
          />

          {/* Secondary Logo/Event Image */}
          <img
            src={Logo}
            alt="Symposium Event"
            className="absolute bottom-[-40px] right-[-40px] w-48 rounded-2xl shadow-lg border-4 border-cyan-300/40 
            transition-transform duration-500 hover:-rotate-2 hover:scale-105 
            hover:shadow-cyan-400/60 hover:shadow-xl bg-black p-2"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
