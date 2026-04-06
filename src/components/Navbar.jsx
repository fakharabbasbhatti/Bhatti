
import { Fragment, useState, useEffect } from "react"; 
import { IoMdMenu } from "react-icons/io";
import { IoLogoAmplify, IoCloseSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <Fragment>
      <motion.nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f172a]/50 backdrop-blur-md py-2 shadow-xl"
            : " py-4 border-b border-white/20"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-12 p-2">

          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => window.location.href = "#home"}
          >
            <IoLogoAmplify className="text-[#38bdf8] text-3xl" />
            <span className="ml-2 text-white font-bold text-xl hidden sm:block">
              Fakhar Abbas
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-[#e2e8f0] text-lg font-medium hover:text-[#38bdf8] transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Contact Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white px-5 py-2 rounded-md font-semibold"
              >
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <IoCloseSharp className="text-3xl text-[#38bdf8]" />
              ) : (
                <IoMdMenu className="text-3xl" />
              )}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Right Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed top-0 right-0 h-full w-full bg-[#0f172a] z-50 shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button inside */}
            <div className="flex justify-end p-4">
              <IoCloseSharp 
                className="text-3xl text-white cursor-pointer"
                onClick={closeMenu}
              />
            </div>

            <ul className="flex flex-col gap-6 px-6 pt-8">
              {[...navItems, { name: "Contact", href: "#contact" }].map((item, index) => (
                <li key={index} className="border-b border-[#1e293b] pb-2 last:border-0">
                  <a
                    onClick={closeMenu}
                    href={item.href}
                    className="flex items-center justify-between text-[#e2e8f0] text-lg font-medium hover:text-[#38bdf8]"
                  >
                    {item.name}
                    <FaArrowRight className="text-[#38bdf8]" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </Fragment>
  );
};

export default Navbar;
