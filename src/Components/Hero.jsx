import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
function Hero() {
  return (
    <div className="flex min-h-screen bg-[linear-gradient(110deg,rgba(11,8,46,1)_43%,rgba(111,38,148,1)_96%)]">
      <span className="h-25 border border-white/20 shadow-lg w-25 opacity-35 backdrop-blur-md absolute flex top-20 left-20 bg-yellow-300 blur-[2px] rounded-full"></span>
      <div className="flex flex-col  absolute top-55 items-start left-30 mb-[120px]">
        <div className="text-7xl font-semibold pb-4 font-roboto bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 text-transparent">
          Om Gadge
        </div>
        <div className="flex-row text-2xl text-white font-semibold m-4 ml-0">
          Aspiring Developer || Problem Solver || Tech Explorer
        </div>
        <div className=" ml-0">
          <button className="h-12 font-semibold text-white w-50 bg-gradient-to-l from-violet-500 to-pink-400 rounded-4xl text-center hover:opacity-75 cursor-pointer">
            See My Projects
          </button>
          <button className="h-12 m-4 font-semibold text-white  w-50 border-2 border-[#512678] rounded-4xl text-center bg-transparent hover:opacity-75 cursor-pointer">
            Download Resume
          </button>
          <span className="h-15 border border-white/20 shadow-lg left-10 m-10 w-15 opacity-30 backdrop-blur-md relative flex items-center bg-green-400 blur-[2px] rounded-full"></span>
        </div>
      </div>
      <div className="h-110 w-110 absolute right-20 top-30 hidden md:block">
        <DotLottieReact
          src="https://lottie.host/20f92f86-3391-4787-8446-7bf19505ce4a/OYY13nmqa8.json"
          loop
          autoplay
        />
        <span className="h-15 border border-white/20 shadow-lg w-15 opacity-45 backdrop-blur-md absolute right-0 top-2 bg-blue-600 blur-[2px] rounded-full"></span>
        <span className="h-20 border border-white/20 shadow-lg w-20 opacity-20 backdrop-blur-md absolute flex items-center justify-center bg-red-500 blur-[2px] rounded-full"></span>
      </div>
    </div>
  );
}

export default Hero;
