import React from "react";
import { motion } from "framer-motion";

import meta from "../assets/Certifications/The Full Stack.pdf";
import coursera from "../assets/certifications/ML.pdf";
import aws from "../assets/Certifications/AWS.pdf";
// import aws from "../assets/certifications/aws.png";
import oracle from "../assets/Certifications/Oracle.pdf";
import cisco from "../assets/Certifications/Networking.pdf";
import simplilearn from "../assets/certifications/python certificate.pdf";
// import lt from "../assets/certifications/lt.png";

function FloatingCertifications() {
  const logos = [
    { src: meta, alt: "Meta" },
    { src: coursera, alt: "Coursera" },
    { src: aws, alt: "L&T" },
    { src: aws, alt: "AWS" },
    { src: oracle, alt: "Oracle" },
    { src: cisco, alt: "Cisco" },
    { src: simplilearn, alt: "Simplilearn" },
    // { src: lt, alt: "L&T" },
  ];

  return (
    <motion.div
      className="relative mx-auto max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ y: [0, -8, 0] }}   // subtle floating
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-white text-center mb-8">
        Certifications
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-4 w-full h-24"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-12 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default FloatingCertifications;
