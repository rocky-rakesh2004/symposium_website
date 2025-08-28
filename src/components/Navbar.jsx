import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "schedule", label: "Schedule" },
    { id: "register", label: "Register" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50 
                    border-b border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-cyan-400 tracking-wide drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]"
        >
          TechFusion
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <Link
                to={link.id}
                smooth={true}
                duration={600}
                offset={-70} // so navbar doesn’t hide section
                className="cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300 
                           font-medium drop-shadow-[0_0_5px_rgba(0,255,255,0.6)]"
              >
                {link.label}
              </Link>

              {/* Underline Animation */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 
                           transition-all duration-300 group-hover:w-full"
              ></span>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center bg-black/95 py-6 space-y-6 
                       border-t border-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.7)]"
          >
            {links.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <Link
                  to={link.id}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer text-white hover:text-cyan-400 transition-colors duration-300 
                             text-lg font-medium drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]"
                >
                  {link.label}
                </Link>

                {/* Underline Animation */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 
                             transition-all duration-300 group-hover:w-full"
                ></span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
