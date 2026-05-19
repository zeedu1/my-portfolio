export default function Resume() {
  return (
    <main className="min-h-screen bg-[#0f172a] py-10 px-4 sm:px-6">
      <div
        className="
          max-w-5xl
          mx-auto
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-[8px_8px_0px_#000]
          border-4
          border-black
          grid
          md:grid-cols-[320px_1fr]
        "
      >
        {/* LEFT SIDE */}
        <aside className="bg-yellow-400 border-r-4 border-black p-8">
          {/* PROFILE */}
          <div className="flex flex-col items-center text-center">
            <div
              className="
                w-36
                h-36
                rounded-full
                border-4
                border-black
                overflow-hidden
                bg-white
              "
            >
              <img
                src="/profile.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="mt-5 text-3xl font-black text-black">
              Your Name
            </h1>

            <p className="mt-2 text-sm font-bold text-black uppercase tracking-widest">
              Frontend Developer
            </p>
          </div>

          {/* CONTACT */}
          <section className="mt-10">
            <h2 className="text-lg font-black border-b-4 border-black pb-2 text-black">
              Contact
            </h2>

            <div className="mt-4 space-y-3 text-sm font-semibold text-black">
              <p>Email: your@email.com</p>
              <p>Phone: +63 912 345 6789</p>
              <p>Location: Philippines</p>
              <p>Github: github.com/username</p>
            </div>
          </section>

          {/* SKILLS */}
          <section className="mt-10">
            <h2 className="text-lg font-black border-b-4 border-black pb-2 text-black">
              Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Tailwind",
                "TypeScript",
                "Laravel",
                "MySQL",
                "Firebase",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    bg-black
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="mt-10">
            <h2 className="text-lg font-black border-b-4 border-black pb-2 text-black">
              Education
            </h2>

            <div className="mt-4 text-sm text-black font-semibold">
              <p>Bachelor of Science in IT</p>
              <p className="mt-1">DNSC</p>
              <p className="mt-1">2022 - Present</p>
            </div>
          </section>
        </aside>

        {/* RIGHT SIDE */}
        <section className="p-8 sm:p-10">
          {/* ABOUT */}
          <section>
            <h2 className="text-2xl font-black text-black border-b-4 border-yellow-400 pb-2">
              About Me
            </h2>

            <p className="mt-4 text-gray-700 leading-7">
              Passionate frontend developer focused on building modern,
              responsive, and user-friendly web applications using React,
              Next.js, and Tailwind CSS. I enjoy creating clean UI designs and
              solving real-world problems through code.
            </p>
          </section>

          {/* PROJECTS */}
          <section className="mt-10">
            <h2 className="text-2xl font-black text-black border-b-4 border-yellow-400 pb-2">
              Projects
            </h2>

            <div className="mt-6 space-y-6">
              {/* PROJECT */}
              <div className="border-2 border-black rounded-xl p-5">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-lg font-black text-black">
                    DNSC Queue System
                  </h3>

                  <span className="bg-yellow-400 px-3 py-1 text-xs font-black border border-black rounded-full">
                    Full Stack
                  </span>
                </div>

                <p className="mt-3 text-gray-700 leading-7">
                  Developed a queue management system for DNSC Registrar with
                  QR-based ticketing, real-time queue updates, and kiosk
                  integration.
                </p>
              </div>

              {/* PROJECT */}
              <div className="border-2 border-black rounded-xl p-5">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-lg font-black text-black">
                    Developer Portfolio
                  </h3>

                  <span className="bg-yellow-400 px-3 py-1 text-xs font-black border border-black rounded-full">
                    Frontend
                  </span>
                </div>

                <p className="mt-3 text-gray-700 leading-7">
                  Built a responsive developer portfolio using Next.js,
                  Tailwind CSS, and Framer Motion with smooth animations and
                  interactive UI components.
                </p>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mt-10">
            <h2 className="text-2xl font-black text-black border-b-4 border-yellow-400 pb-2">
              Experience
            </h2>

            <div className="mt-6 border-2 border-black rounded-xl p-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-black text-black">
                  Freelance Frontend Developer
                </h3>

                <span className="text-sm font-bold text-gray-600">
                  2024 - Present
                </span>
              </div>

              <p className="mt-3 text-gray-700 leading-7">
                Creating responsive websites, UI components, and web systems
                using modern frontend technologies while focusing on clean code
                and performance optimization.
              </p>
            </div>
          </section>

          {/* DOWNLOAD BUTTON */}
          <div className="mt-12">
            <button
              className="
                border-2
                border-black
                bg-yellow-400
                px-6
                py-3
                rounded-xl
                font-black
                text-black
                shadow-[4px_4px_0px_#000]
                transition-all
                duration-200
                hover:translate-x-[2px]
                hover:translate-y-[2px]
                hover:shadow-none
              "
            >
              Download CV
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}