import { useState } from "react";
import GooeyNav from "../sections/GooeyNav"; // make sure this component exists
import Logo from "../assets/Logo2.png";

const Navbar = () => {
  const [active, setActive] = useState(0);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Events", href: "#events" },
    { label: "Register", href: "#register" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md 
                    border-b border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="TechFusion Logo"
            className="w-16 h-12 md:w-20 md:h-20 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]"
          />
          <h1 className="text-3xl font-bold text-cyan-400 tracking-wide drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
            TechFusion
          </h1>
        </div>

        {/* Gooey Navigation */}
        <div className="hidden md:flex relative">
          <GooeyNav
            items={links.map((l, i) => ({
              label: l.label,
              href: l.href,
              onClick: () => setActive(i),
            }))}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={active}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 4, 5]}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
