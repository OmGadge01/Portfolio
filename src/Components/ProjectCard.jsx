import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ image, title, description, tech, liveLink, githubLink }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full sm:w-[20rem] md:w-[22rem] lg:w-[24rem] cursor-pointer group"
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-violet-600 to-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons: Live and GitHub */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
  <a
    href={liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 text-center text-sm text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl px-4 py-2 hover:opacity-80 transition-all"
  >
    Live Demo
  </a>
  <a
    href={githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 text-center text-sm text-white font-semibold bg-gray-700 rounded-3xl px-4 py-2 hover:opacity-80 transition-all"
  >
    GitHub
  </a>
</div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;
