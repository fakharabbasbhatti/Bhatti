import { Fragment, useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationExperience = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const education = [
    {
      title: "Matriculation",
      period: "2019 - 2021",
      institution: "Govt APS School, Bahawalpur",
      icon: <FaGraduationCap className="text-white text-2xl" />,
    },
    {
      title: "Intermediate",
      period: "2021 - 2023",
      institution: "Post Graduate College, Bahawalpur",
      icon: <FaGraduationCap className="text-white text-2xl" />,
    },
  ];

  const experience = [
    {
      title: "React Developer",
      period: "Mar 2025 - Dec 2025",
      company: "Codes Thinker Company",
      icon: <FaBriefcase className="text-white text-2xl" />,
    },
    {
      title: "WordPress Developer",
      period: "Jan 2025 - Present",
      company: "Tech Thrill Company (Present)",
      icon: <FaBriefcase className="text-white text-2xl" />,
    },
  ];

  return (
    <Fragment>
      <section
        id="resume"
        className="relative py-20 overflow-hidden border-b-1 border-blue-300"
      >
 
        <div className="max-w-[1400px] mx-auto px-5 sm:px-12 text-center relative z-10">
          <h1
            data-aos="zoom-in"
            className="text-4xl md:text-5xl font-bold text-white mb-5"
          >
           <span className="text-[#38bdf8]">Education</span> Experience
          </h1>

          <div className="flex flex-col lg:flex-row justify-center gap-12 mt-10">
            {/* Education Section */}
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
                <div className="bg-[#38bdf8]/20 p-4 rounded-md shadow-lg backdrop-blur-md">
                  <FaGraduationCap className="text-[#38bdf8] text-3xl animate-pulse" />
                </div>
                <h2 className="text-2xl font-semibold text-white tracking-wide">Education</h2>
              </div>

              <div className="relative pl-12 border-l-4 border-[#38bdf8]/40 space-y-12">
                {education.map((item, index) => (
                  <div key={index} className="relative group">
                    <div
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                      className="absolute -left-11 top-0 w-10 h-10 rounded-md bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] flex items-center justify-center text-white hover:rotate-12"
                    >
                      {item.icon}
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-delay={index * 150 + 50}
                      className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-md border border-[#38bdf8]/20 hover:border-[#0ea5e9]/50"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{item.title}</h3>
                      <p className="text-sm text-[#38bdf8] font-medium mb-2">{item.period}</p>
                      <p className="text-gray-300 text-sm">{item.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <div className="flex items-center gap-3 mb-10 justify-center lg:justify-start">
                <div className="bg-[#38bdf8]/20 p-4 rounded-md shadow-lg backdrop-blur-md">
                  <FaBriefcase className="text-[#38bdf8] text-3xl animate-pulse" />
                </div>
                <h2 className="text-2xl font-semibold text-white tracking-wide">Experience</h2>
              </div>

              <div className="relative pl-12 border-l-4 border-[#38bdf8]/40 space-y-12">
                {experience.map((item, index) => (
                  <div key={index} className="relative group">
                    <div
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                      className="absolute -left-11 top-0 w-10 h-10 rounded-md bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] flex items-center justify-center text-white hover:rotate-12"
                    >
                      {item.icon}
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-delay={index * 150 + 50}
                      className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-md border border-[#38bdf8]/20 hover:border-[#0ea5e9]/50"
                    >
                      <h3 className="text-xl font-bold text-white mb-2 tracking-wide">{item.title}</h3>
                      <p className="text-sm text-[#38bdf8] font-medium mb-2">{item.period}</p>
                      <p className="text-gray-300 text-sm">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%,100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(15px); }
        }
        @keyframes float-delay {
          0%,100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(-15px); }
        }
        .animate-float { animation: float 9s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 11s ease-in-out infinite 2s; }
      `}</style>
    </Fragment>
  );
};

export default EducationExperience;