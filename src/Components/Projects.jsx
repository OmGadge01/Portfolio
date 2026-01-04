import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectData = [
    {
      image: "/Health-Project.png",
      title: "HealthIQ.AI",
      description:
        "AI-powered platform that analyzes user health data to deliver personalized, locality-based diet and exercise recommendations.",
      tech: ["React", "Node.js", "Tailwind Css", "Gemini API", "Express.js"],
      liveLink: "https://healthiqai.vercel.app",
      githubLink: "https://github.com/OmGadge01/HeathIq.AI",
    },
    {
      image: "/Consent-Manager.jpg",
      title: "Consent Flow Optimizer",
      description:
        "A privacy-first consent management system that tracks, analyzes, and scores browser permissions using real user consent data with real-time risk assessment.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Browser API",
        "Catboost ALgorithm(ML)",
      ],
      liveLink: "https://consentsopti.vercel.app/",
      githubLink: "https://github.com/KareenaChinchkar25/consent_flow_optimizer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      title: "Jasvis Assistance",
      description:
        "An intelligent AI-powered voice and chat assistant designed to automate daily tasks, answer questions, and provide real-time system updates using speech recognition and natural language understanding.",
      tech: ["Python", "Websocket", "SpeechRecognition" ,"pyttsx3", "Eel"],
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/OmGadge01/Jarvis-Assistance",
    },
  ]
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  //     title: "YumHub",
  //     description:
  //       "A smart recipe recommendation platform that suggests personalized dishes based on user preferences, available ingredients, and dietary needs — turning your kitchen into an AI-powered chef assistant.",
  //     tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "Recipe API"],
  //     liveLink: "https://yumhub-neon.vercel.app/", 
  //     githubLink: "https://github.com/OmGadge01/Yumhub", 
  //   },
  // ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[linear-gradient(110deg,rgba(7,4,46,1)_10%,rgba(120,45,160,1)_88%)] px-6 py-20 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Bottom Highlight Section */}
      <motion.div
        className="mt-20 mx-auto max-w-5xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-500 rounded-3xl text-center text-white px-8 py-12 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Exploring Beyond
        </h3>
        <p className="text-base md:text-2xl: max-w-3xl mx-auto mb-6 leading-relaxed">
          Beyond these featured projects, I regularly experiment with new ideas,
          small open-source contributions, and emerging technologies. I’m
          currently exploring areas like{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">AI integrations</span>, and{" "}
          <span className="font-semibold">cloud-native app deployments</span>.
        </p>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <span className="w-3 h-3 bg-white rounded-full opacity-80"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-80"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-80"></span>
        </div>
      </motion.div>
    </section>
  );
}
