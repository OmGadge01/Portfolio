import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(110deg,rgba(11,8,46,1)_26%,rgba(120,45,160,1)_88%)] px-6 py-20 overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      {/* Content container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-70 max-w-6xl">
        {/* Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://readdy.ai/api/search-image?query=Friendly%20computer%20science%20student%20avatar%20illustration%2C%20cartoon%20style%20character%20with%20glasses%20and%20casual%20clothing%2C%20sitting%20with%20laptop%20and%20books%2C%20warm%20smile%2C%20tech-themed%20background%20with%20coding%20symbols%20and%20circuit%20patterns%2C%20vibrant%20pastel%20colors%2C%20modern%20digital%20art%20style&amp;width=400&amp;height=400&amp;seq=about1&amp;orientation=squarish"
            alt="About me avatar"
            className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-3xl shadow-2xl mx-auto"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          className="text-white text-lg leading-relaxed max-w-xl text-center lg:text-left space-y-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>
            Hey there! I’m a passionate{" "}
            <span className="font-semibold">B.Tech Computer Science</span>{" "}
            student who loves turning ideas into impactful digital experiences.
            Currently in my final year, I’m exploring opportunities where I can
            contribute, learn, and grow as a developer.
          </p>

          <p>
            What began as simple curiosity has evolved into a deep passion for
            problem-solving, innovation, and exploring the limitless
            possibilities of technology. I strive to build meaningful solutions
            that connect creativity with purpose.
          </p>

          {/* Education Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl mt-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-purple-300 text-3xl">
                school
              </span>
              <div>
                <h3 className="font-semibold text-xl text-purple-200 mb-1">
                  Education
                </h3>
                <p className="text-sm text-gray-200">
                  <span className="font-medium">B.Tech Computer Science</span>
                  <br />
                  Nutan College of Engineering and Research
                  <br />
                  <span className="text-purple-300 font-medium">
                    2022 – 2026
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
