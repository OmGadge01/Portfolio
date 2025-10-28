import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SkillCard({ icon, skill, percent, color }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="w-64 bg-gray-700 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Icon */}
      <div
        className="p-3 rounded-full mb-4 flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <span className="material-symbols-outlined text-white text-3xl">
          {icon}
        </span>
      </div>

      {/* Skill Name */}
      <p className="font-semibold text-gray-200 mb-4">{skill}</p>

      {/* Progress Bar (white background with animated fill) */}
      <div className="w-full bg-white h-2 rounded-full overflow-hidden border-none shadow-inner">
        <motion.div
          className="h-full rounded-full border-none"
          style={{ backgroundColor: color }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${percent}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>

      {/* Percentage */}
      <p className="font-semibold text-gray-300 mt-2">{percent}%</p>
    </motion.div>
  );
}

export default SkillCard;
