import React from "react";

function About() {
  return (
    <div className="flex min-h-screen bg-[linear-gradient(110deg,rgba(11,8,46,1)_26%,rgba(120,45,160,1)_88%)]">
        <div className="w-full absolute text-5xl text-center mt-14 font-bold text-white ">About Me</div>
        {/* <div className="w-10 bg-white flex justify-center absolute "></div> */}
        <img src="https://readdy.ai/api/search-image?query=Friendly%20computer%20science%20student%20avatar%20illustration%2C%20cartoon%20style%20character%20with%20glasses%20and%20casual%20clothing%2C%20sitting%20with%20laptop%20and%20books%2C%20warm%20smile%2C%20tech-themed%20background%20with%20coding%20symbols%20and%20circuit%20patterns%2C%20vibrant%20pastel%20colors%2C%20modern%20digital%20art%20style&amp;width=400&amp;height=400&amp;seq=about1&amp;orientation=squarish" alt="About me avatar" className="w-80 h-80 object-cover rounded-3xl shadow-xl mx-auto"></img>
    </div>
  );
}

export default About;
