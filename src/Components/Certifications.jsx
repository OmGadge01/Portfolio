import React from "react";
import { motion } from "framer-motion";

function Achievements() {
  const certifications = [
    {
      name: "The Full Stack",
      issuer: "META",
    },
    {
      name: "Mastering Cloud Computing and AWS",
      issuer: "L&T",
    },
    {
      name: "Machine Learning",
      issuer: "IBM",
    },
    {
      name: "Networking Basics",
      issuer: "Cisco",
    },
    {
      name: "AWS Cloud Essentials",
      issuer: "AWS",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
    },
    // {
    //   name: "Python Programming",
    //   issuer: "Simplilearn",
    // },
  ];

  const achievements = [
    {
      title: "Scitech Hackathon Finalist",
      description:
        "Selected among the Top 15 teams out of 300+ participating teams for building an innovative technical solution.",
    },
    {
      title: "Chhatrapati Shahu Maharaj Scholarship Recipient",
      description:
        "Awarded for securing 90%+ marks in the 10th-grade board examination, recognizing academic excellence.",
    },
    {
      title: "College-Level Cricket Championship – Runner-Up",
      description:
        "Achieved runner-up position representing the college team, demonstrating teamwork and leadership.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-[linear-gradient(110deg,rgba(11,8,46,1)_26%,rgba(120,45,160,1)_88%)] px-6 py-20 flex flex-col items-center overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Achievements & Certifications
      </motion.h2>

      {/* Achievements Section */}
      <motion.div
        className="max-w-6xl w-full mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
          Achievements & Awards
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-3 text-purple-200">
                {item.title}
              </h4>
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        className="max-w-5xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
          Certifications
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white hover:bg-white/10 transition-all"
            >
              <span className="font-medium text-sm sm:text-base">
                {cert.name}
              </span>
              <span className="text-sm text-purple-300 mt-2">
                {cert.issuer}
              </span>

              {/* Image placeholder (you can replace later) */}
              {/* 
              <img
                src="/certificates/example.png"
                alt={cert.name}
                className="mt-4 rounded-lg shadow-md"
              /> 
              */}
            </div>
          ))}
        </div>
      </motion.div>
      {/* <FloatingCertifications/> */}
    </section>
    
  );
}

export default Achievements;
