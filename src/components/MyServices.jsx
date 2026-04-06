import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaCode, FaMobileAlt, FaCloudUploadAlt,} from "react-icons/fa";
import { SiReactos } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { SiFastapi, SiReact } from "react-icons/si";

const MyServices = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Frontend Development",
      description:
        "Building responsive, interactive interfaces with React.js, Tailwind CSS, and Bootstrap to deliver seamless, fast, and engaging digital experiences.",
      gradient: "from-blue-500 to-cyan-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-right",
      aosDesc: "fade-up",
    },
    {
  icon: (
    <div className="flex space-x-2">
      <SiReactos className="text-3xl" />
    </div>
  ),
  title: "React & WordPress",
  description:
    "Building modern, scalable web applications with React.js and creating responsive, SEO-friendly WordPress websites with custom UI/UX.",
  gradient: "from-cyan-500 to-blue-500",
  aosIcon: "zoom-in",
  aosTitle: "fade-left",
  aosDesc: "fade-up",
},
    {
      icon: <SiFastapi className="text-3xl" />,
      title: "API Integration",
      description:
        "Seamlessly integrating third-party APIs, secure payment gateways, and authentication systems to enhance functionality.",
      gradient: "from-teal-500 to-emerald-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-up",
      aosDesc: "fade-right",
    },
    {
      icon: <MdAnimation className="text-3xl" />,
      title: "Immersive Animations",
      description:
        "Creating immersive digital experiences through animations, micro-interactions, and motion design using Framer Motion, AOS, and advanced CSS techniques.",
      gradient: "from-indigo-500 to-blue-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-left",
      aosDesc: "fade-up",
    },
    {
      icon: <FaMobileAlt className="text-3xl" />,
      title: "Responsive Design",
      description:
        "Ensuring consistent, responsive, and device-friendly layouts with optimized interactions to deliver seamless, user-focused experiences across all platforms.",
      gradient: "from-sky-500 to-blue-400",
      aosIcon: "zoom-in",
      aosTitle: "flip-left",
      aosDesc: "fade-up",
    },
    {
      icon: <FaCloudUploadAlt className="text-3xl" />,
      title: "Deployment & Maintenance",
      description:
        "Deploying applications on Vercel, Netlify, and AWS with continuous updates, performance optimizations, robust monitoring, and advanced security enhancements",
      gradient: "from-violet-500 to-purple-400",
      aosIcon: "zoom-in",
      aosTitle: "fade-down",
      aosDesc: "fade-up",
    },
  ];

  return (
    <Fragment>
      <section id="services" className="relative py-20 overflow-hidden border-b border-blue-300">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-12">
          <div className="text-center mb-16">
            <h1
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-bold text-white mb-5 relative inline-block group"
            >
              My <span data-aos="zoom-in" data-aos-delay="100" className="text-[#38bdf8]">Services</span>
            </h1>
          </div>

          {/* Services Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-800/60 border border-[#38bdf8]/20 hover:border-[#0ea5e9]/50 rounded-md p-8 flex flex-col h-full transition-all duration-500"
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div
                      data-aos={service.aosIcon}
                      data-aos-delay={index * 100}
                      className="w-16 h-16 mb-5 flex items-center justify-center rounded-md bg-gray-700 group-hover:bg-white transition-all duration-500"
                    >
                      <span className="text-[#38bdf8] group-hover:scale-125 transition-transform duration-500">
                        {service.icon}
                      </span>
                    </div>
                    <h3
                      data-aos={service.aosTitle}
                      data-aos-delay={index * 150}
                      className="text-2xl font-semibold text-white mb-0"
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    data-aos={service.aosDesc}
                    data-aos-delay={index * 200}
                    className="text-gray-300 text-sm md:text-base mt-auto text-center"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
      `}</style>
    </Fragment>
  );
};

export default MyServices;