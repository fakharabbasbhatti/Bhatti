import { motion } from "framer-motion";
import { FaLinkedinIn} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  // Social icons data
  const socialLinks = [
    { url: "https://linkedin.com/in/fakhar-abbas-bhatti", icon: <FaLinkedinIn />, color: "hover:text-[#1877F2]" },
    { url: "https://www.fiverr.com/fakharabbas333/buying?source=avatar_menu_profile", icon: <TbBrandFiverr />, color: "hover:text-green-600" },
    { url: "https://github.com/fakharabbasbhatti", icon: <FaGithub />, color: "hover:text-gray-600" },
    { url: "https://www.tiktok.com/@fakharbhatti333/", icon: <FaTiktok />, color: "hover:text-gray-600" },
  ];

  return (
    <footer className=" text-white py-10 border-b-1 border-white ">

      {/* Main Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 sm:px-12">

        {/* About Me */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4 text-white">
            About <span className="text-[#38bdf8]">Me</span>
          </h3>
          <p className="leading-relaxed text-gray-300">
            I'm Fakhar Abbas, a dedicated React and WordPress developer passionate about building dynamic websites and delivering seamless user experiences. I focus on clean code, scalability, and practical solutions.
          </p>
        </div>

        {/* Contact Information (Right Side, Top-Aligned) */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-start lg:items-end">
          <h3 className="text-xl font-bold mb-4 text-white mr-3">
            Contact <span className="text-[#38bdf8]">Information</span>
          </h3>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.length > 0 ? (
              socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/10 p-3 rounded-full text-white ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))
            ) : (
              <p className="text-sm text-gray-500">No social links</p>
            )}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-300 sm:w-[1300px] mx-auto mt-10 pt-4 text-center">
        <p>
          Made with <span>🎀</span> by{" "}
          <span className="font-bold">Fakhar Abbas</span> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>

    </footer>
  );
};

export default Footer;