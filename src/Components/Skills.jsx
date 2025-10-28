import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="min-h-screen bg-gray-900 px-6 py-20 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills & Technologies
      </motion.h2>

      {/* Skill Rows */}
      <div className="flex flex-col gap-10">
        {/* Row 1 */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 px-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SkillCard icon="school" skill="Java" percent={85} color="#F97316" />
          <SkillCard icon="javascript" skill="JavaScript" percent={80} color="#FACC15" />
          <SkillCard icon="terminal" skill="Python" percent={70} color="#60A5FA" />
          <SkillCard icon="hub" skill="Machine Learning" percent={60} color="#8B5CF6" />

        </motion.div>
        {/* Row 2 */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 px-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SkillCard icon="analytics" skill="Data Analytics" percent={65} color="#EC4899" />
          <SkillCard icon="database" skill="SQL" percent={90} color="#22D3EE" />
          <SkillCard icon="hexagon" skill="Node.js" percent={80} color="#65A30D" />
          <SkillCard icon="eco" skill="Spring Boot" percent={50} color="#10B981" />

        </motion.div>
      </div>

      {/* Always Learning Section */}
      <motion.div
        className="mt-16 mx-auto max-w-5xl bg-gradient-to-r from-purple-600 to-blue-500 rounded-3xl text-center text-white px-8 py-12 shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Always Learning</h3>
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          I'm constantly exploring new technologies and expanding my skill set.
          Currently diving deeper into <span className="font-semibold">AI/ML</span>,
          <span className="font-semibold"> cloud computing</span>, and
          <span className="font-semibold"> modern web frameworks</span>.
        </p>

        {/* Pagination dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <span className="w-3 h-3 bg-white rounded-full opacity-80"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-80"></span>
          <span className="w-3 h-3 bg-white rounded-full opacity-80"></span>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
