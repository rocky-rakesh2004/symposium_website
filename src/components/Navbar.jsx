import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Logo from "../assets/Logo5.png";
import GooeyNav from "../sections/GooeyNav";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Events", href: "#events" },
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
          <h1 className="text-3xl font-bold text-white tracking-wide 
                         drop-shadow-[0_0_15px_rgba(0,200,255,0.9)]">
            TechFusion
          </h1>
        </div>

        {/* Desktop Navigation */}
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

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-cyan-400 focus:outline-none"
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (Transparent background, no box) */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
                    ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 bg-transparent">
          {links.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                onClick={() => {
                  setActive(i);
                  setOpen(false);
                }}
                className={`text-lg font-semibold ${
                  active === i ? "text-cyan-400" : "text-white"
                } hover:text-cyan-300 transition`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
