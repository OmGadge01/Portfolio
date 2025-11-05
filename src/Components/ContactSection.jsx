import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const ContactSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "aad61d85-998a-4d2b-852d-1e079afbf277"); // your Web3Forms API key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2">Let's Connect</h2>
        <div className="w-20 h-1 mx-auto bg-purple-600 mb-4 rounded"></div>
        <p className="text-gray-300 max-w-xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about tech!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-[60rem] mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <HiOutlineLocationMarker className="text-purple-500 w-6 h-6" />
              <span>Pune, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlineMail className="text-green-500 w-6 h-6" />
              <span>omgadge19434@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <HiOutlinePhone className="text-red-500 w-6 h-6" />
              <span>+91 87677 95698</span>
            </div>
          </div>

          <h4 className="text-xl font-semibold mt-8 mb-4">Follow me on</h4>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/om-gadge-a4827b226/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/OmGadge01"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a href="mailto:omgadge19434@gmail.com" className="hover:text-green-500">
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.instagram.com/om_gadge_11/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          <form className="space-y-4" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full p-3 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-3 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
          {result && (
            <p className="text-center text-sm mt-4 text-gray-300">{result}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
