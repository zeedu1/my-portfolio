"use client";

import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0f172a] text-white px-6 py-20 flex items-center justify-center"
    >
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <p className="text-yellow-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Contact
            </p>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Let&apos;s Build Something Great Together.
            </h1>
          </div>

          <p className="text-gray-400 leading-relaxed max-w-md text-sm md:text-base">
            I&apos;m open for internships, freelance work, and web development
            opportunities. Feel free to contact me for collaborations or
            projects.
          </p>

          {/* CONTACT CARD */}
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-400/40 transition duration-300 w-full max-w-md">
            <div className="w-11 h-11 rounded-xl bg-yellow-400 text-black flex items-center justify-center text-lg">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-1">Email Address</p>
              <p className="font-medium text-sm md:text-base">
                eferj11@gmail.com
              </p>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3 pt-2">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://facebook.com",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://linkedin.com",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl border border-white/10 bg-[#111827] flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111827] border border-white/10 rounded-2xl p-6 md:p-7 shadow-xl"
        >
          <form className="space-y-5">
            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-2">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-yellow-400 transition duration-300 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="
                w-full
                bg-yellow-400
                text-black
                font-bold
                py-3
                px-6
                border-2
                border-black
                rounded-none
                shadow-[4px_4px_0px_#000]
                hover:shadow-[2px_2px_0px_#000]
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                transition-all
                duration-150
                uppercase
                tracking-wider
                text-sm
              "
              >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
