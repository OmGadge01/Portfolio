import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Hero() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-[linear-gradient(110deg,rgba(11,8,46,1)_43%,rgba(111,38,148,1)_96%)] overflow-hidden px-8 md:px-24 lg:px-32 py-20 md:py-0">

      
      <span className="absolute top-24 left-10 md:left-24 h-24 w-24 md:h-28 md:w-28 bg-yellow-300/80 blur-[3px] rounded-full opacity-30"></span>
      <span className="absolute bottom-28 right-14 md:right-28 h-20 w-20 md:h-24 md:w-24 bg-green-400/70 blur-[3px] rounded-full opacity-25"></span>

      {/* Left Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-2xl space-y-5"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold font-roboto bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 text-transparent leading-tight whitespace-nowrap overflow-hidden border-r-4 border-violet-400 pr-2 animate-typing-once"
        >
          Om Gadge
        </motion.h1>

        {/* Subtitle fade-in */}
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-white font-medium opacity-90 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          Aspiring Developer &nbsp;||&nbsp; Problem Solver &nbsp;||&nbsp; Tech Explorer
        </motion.p>

        {/* Buttons with soft entry & hover motion */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="h-12 px-8 flex items-center justify-center font-semibold text-white bg-gradient-to-l from-violet-500 to-pink-400 rounded-3xl transition-all shadow-lg shadow-pink-500/20"
          >
            See My Projects
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1tFcN4urrO_II0Hrk-CEEqM_8E7vyrdJb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="h-12 px-8 flex items-center justify-center font-semibold text-white border-2 border-[#743b93] rounded-3xl bg-transparent hover:bg-[#743b93]/20 transition-all shadow-md"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Lottie Animation */}
      <motion.div
        className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] flex justify-center items-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <DotLottieReact
          src="https://lottie.host/20f92f86-3391-4787-8446-7bf19505ce4a/OYY13nmqa8.json"
          loop
          autoplay
        />
      </motion.div>
    </section>
  );
}

export default Hero;
