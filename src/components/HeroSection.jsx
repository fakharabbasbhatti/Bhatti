import { Fragment, useEffect } from "react";
import { FaPaperPlane, FaRocket, FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Hero from "../Images/Fakhar Abbas.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  return (
    <Fragment>
      <section
        id="home"
        className="relative flex justify-center items-center 
                     overflow-hidden pt-15 border-b-1 border-blue-300"
      >
        {/* ✅ FIXED CONTAINER ONLY */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-12  flex flex-col-reverse md:flex-row items-center gap-12 w-full z-10 py-20">

          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <span
              data-aos="fade-down"
              className="text-[#38bdf8] font-mono tracking-widest text-base sm:text-lg"
            >
              👋 Hello, I'm
            </span>

            <h1
              data-aos="fade-right"
              className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4"
            >
              Fakhar Abbas
            </h1>

            <div
              data-aos="fade-left"
              className="text-lg sm:text-xl md:text-2xl font-medium mb-6 h-10 sm:h-12"
            >
              <span className="text-white">
                <Typewriter
                  words={["UI/UX Designer", "React Developer", "WordPress Specialist", "Web Enthusiast"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p
              data-aos="fade-up"
              className="text-gray-300 text-sm sm:text-lg mb-8 max-w-lg mx-auto md:mx-0"
            >
              I craft modern, responsive web experiences using clean, maintainable code,
              enhanced by
              <span className="text-[#38bdf8] font-semibold"> smooth animations </span> and
              <span className="text-[#0ea5e9] font-semibold"> user-centered design. </span>
              My focus is on building high-performance digital solutions that seamlessly
              blend creativity, functionality, and scalability.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <button
                data-aos="fade-down"
                className="relative bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] 
                           text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold 
                           text-sm sm:text-base flex items-center gap-2 transition-all duration-500 
                           transform shadow-lg overflow-hidden group cursor-pointer"
              >
                <FaPaperPlane className="z-10" />
                <span className="z-10">Contact Me</span>
              </button>

              <button
                data-aos="fade-up"
                className="relative border-2 border-[#38bdf8] text-[#38bdf8] px-4 py-2 sm:px-6 sm:py-3 
                           rounded-md font-semibold text-sm sm:text-base flex items-center gap-2 
                           transition-all duration-500 transform hover:bg-[#38bdf8] 
                           hover:text-white shadow-md group cursor-pointer"
              >

                <FaRocket className="z-10" />
                <span className="z-10">View Projects</span>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div data-aos="zoom-in" className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] animate-float-slow group">
              <div className="absolute inset-0 rounded-full border-4 border-[#38bdf8] opacity-30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#0ea5e9] opacity-20 animate-pulse-delay"></div>

              <img
                src={Hero}
                alt="Fakhar Abbas profile"
                className="w-full h-full object-cover rounded-full border-4 border-[#38bdf8] shadow-2xl relative transition-all duration-700 group-hover:scale-105 group-hover:rotate-3 p-3 sm:p-4"
              />

              <div className="absolute top-2 left-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 rounded-md shadow-lg">
                React Developer
              </div>
              <div className="absolute bottom-2 right-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 py-1 rounded-md shadow-lg">
                WordPress Developer
              </div>
            </div>
          </div>
        </div>

        {/* Animations */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes pulse-delay {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.1); }
          }
          .animate-float { animation: float 8s ease-in-out infinite; }
          .animate-float-delay { animation: float 10s ease-in-out infinite 2s; }
          .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
          .animate-pulse { animation: pulse 4s ease-in-out infinite; }
          .animate-pulse-delay { animation: pulse-delay 5s ease-in-out infinite 1s; }
        `}</style>
      </section>
    </Fragment>
  );
};

export default HeroSection;