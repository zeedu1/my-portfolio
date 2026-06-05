"use client";

import { useDownloadFile } from "@/hooks/useDownloadFile";
export default function Resume() {
  const { downloadFile } = useDownloadFile();
  return (
    <main className="min-h-screen bg-[#0f172a] py-10 px-4 sm:px-6 antialiased">
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
          grid-cols-1
          md:grid-cols-[310px_1fr]
        "
      >
        {/* LEFT SIDE (Sidebar) */}
        <aside className="bg-yellow-400 border-b-4 md:border-b-0 md:border-r-4 border-black p-6 sm:p-8 space-y-8">
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
                shadow-[4px_4px_0px_#000]
              "
            >
              <img src="/images/resumeprof.jpg" alt="Euree John S. Fernandez" />
            </div>

            <h1 className="mt-4 text-2xl font-black text-black tracking-tight leading-tight">
              Euree John S. Fernandez
            </h1>

            <p className="mt-2 px-3 py-1 bg-black text-yellow-400 text-xs font-black uppercase tracking-widest rounded-md">
              Aspiring Full Stack Developer
            </p>
          </div>

          {/* CONTACT */}
          <section>
            <h2 className="text-lg font-black border-b-4 border-black pb-1.5 text-black uppercase tracking-wide">
              Contact
            </h2>

            <div className="mt-3 space-y-2.5 text-xs font-bold text-black">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-black/60">
                  Email
                </span>
                <a
                  href="mailto:eferj11@gmail.com"
                  className="break-all underline hover:text-white transition-colors"
                >
                  eferj11@gmail.com
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-black/60">
                  Phone
                </span>
                <span>0915 217 6760</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-black/60">
                  Location
                </span>
                <span>Philippines</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-wider text-black/60">
                  Github
                </span>
                <a
                  href="https://github.com/zeedu1"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-white transition-colors break-all"
                >
                  github.com/zeedu1
                </a>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section>
            <h2 className="text-lg font-black border-b-4 border-black pb-1.5 text-black uppercase tracking-wide">
              Skills
            </h2>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {[
                "JavaScript",
                "Python",
                "PHP",
                "React",
                "Next.js",
                "Tailwind CSS",
                "MySQL",
                "Django",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    bg-white
                    text-black
                    border-2
                    border-black
                    shadow-[1px_1px_0px_#000]
                    px-2
                    py-0.5
                    rounded-md
                    text-[11px]
                    font-black
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="text-lg font-black border-b-4 border-black pb-1.5 text-black uppercase tracking-wide">
              Education
            </h2>

            <div className="mt-3 space-y-3 text-xs text-black">
              <div>
                <p className="font-black text-xs leading-tight">
                  BS Information Technology
                </p>
                <p className="font-bold text-black/70 text-[11px]">
                  Davao del Norte State College
                </p>
                <span className="mt-0.5 inline-block bg-black text-white px-1.5 py-0.5 text-[10px] font-bold rounded">
                  2022 - 2026
                </span>
              </div>

              <div>
                <p className="font-black text-xs leading-tight">
                  Senior High School
                </p>
                <p className="font-bold text-black/70 text-[11px]">
                  Nabunturan National Comprehensive HS
                </p>
                <span className="mt-0.5 inline-block bg-slate-800 text-white px-1.5 py-0.5 text-[10px] font-bold rounded">
                  2019 - 2020
                </span>
              </div>

              <div>
                <p className="font-black text-xs leading-tight">
                  Junior High School
                </p>
                <p className="font-bold text-black/70 text-[11px]">
                  Nabunturan National Comprehensive HS
                </p>
                <span className="mt-0.5 inline-block bg-slate-700 text-white px-1.5 py-0.5 text-[10px] font-bold rounded">
                  2015 - 2019
                </span>
              </div>

              <div>
                <p className="font-black text-xs leading-tight">
                  Elementary Education
                </p>
                <p className="font-bold text-black/70 text-[11px]">
                  Linoan Elementary School
                </p>
                <span className="mt-0.5 inline-block bg-slate-600 text-white px-1.5 py-0.5 text-[10px] font-bold rounded">
                  2009 - 2015
                </span>
              </div>
            </div>
          </section>
        </aside>

        {/* RIGHT SIDE (Main Content) */}
        <section className="p-6 sm:p-8 bg-slate-50 flex flex-col justify-between min-h-full space-y-8">
          <div className="space-y-8">
            {/* ABOUT */}
            <section>
              <h2 className="text-xl font-black text-black border-b-4 border-yellow-400 pb-1.5 uppercase tracking-wide">
                About Me
              </h2>
              <p className="mt-3 text-gray-800 font-medium text-sm leading-relaxed max-w-2xl">
                Passionate BSIT student and aspiring Full Stack Developer
                focused on building modern, responsive, and highly efficient web
                ecosystems. Dedicated to implementing clean code practices to
                solve real-world system architectural challenges.
              </p>
            </section>

            {/* PROJECTS */}
            <section>
              <h2 className="text-xl font-black text-black border-b-4 border-yellow-400 pb-1.5 uppercase tracking-wide">
                Projects
              </h2>

              <div className="mt-4 space-y-4">
                {/* PROJECT 1 */}
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-base font-black text-black">
                      Predictive Queue Analytics & Digital Scheduling System
                    </h3>
                  </div>
                  <ul className="mt-1 list-disc list-inside text-gray-700 font-medium text-xs space-y-0.5">
                    <li>
                      This system will leverage real-time analytics to improve
                      queuing and scheduling, addressing the operational
                      problems by automating processes, reducing wait times, and
                      enhancing the overall student experience.
                    </li>
                    <li>
                      This study developed the Predictive Queue Analytics and
                      Digital Scheduling System for Student Records Processing
                      in a State University and College to improve queuing and
                      scheduling operations in the Registrar’s Office.
                    </li>
                  </ul>
                </div>

                {/* PROJECT 2 */}
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-base font-black text-black">
                      Trabahanap
                    </h3>
                  </div>
                  <ul className="mt-1 list-disc list-inside text-gray-700 font-medium text-xs space-y-0.5">
                    <li>
                      this innovative online application will enable companies,
                      establishments, and contractors in Panabo City to post job
                      openings, making it easier for job seekers to discover
                      employment opportunities.
                    </li>
                    <li>
                      With TrabaHanap, job seekers can directly access job
                      listings, streamlining the application process.
                    </li>
                  </ul>
                </div>

                {/* PROJECT 3 */}
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-base font-black text-black">
                      MarSafe PH
                    </h3>
                  </div>
                  <ul className="mt-1 list-disc list-inside text-gray-700 font-medium text-xs space-y-0.5">
                    <li>
                      n innovative maritime safety mobile application designed
                      to mitigate risks, enhance emergency responses, and
                      improve maritime security.
                    </li>
                    <li>
                      Protecting Fishermen, Seafarers, Port Authorities, and
                      Coastal Communities across the Philippines.
                    </li>
                  </ul>
                </div>

                {/* PROJECT 4 */}
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-base font-black text-black">
                      Cup Game
                    </h3>
                  </div>
                  <ul className="mt-1 list-disc list-inside text-gray-700 font-medium text-xs space-y-0.5">
                    <li>
                      The Cup Game app is made for people who enjoy fun and easy
                      challenges. It is designed for players who like guessing
                      games, quick thinking, and staying focused.
                    </li>
                    <li>
                      The main purpose of the app is to give users simple
                      entertainment and a short break from their daily
                      activities. While playing, users can also improve their
                      concentration, memory, and reaction time
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* EXPERIENCE */}
            <section>
              <h2 className="text-xl font-black text-black border-b-4 border-yellow-400 pb-1.5 uppercase tracking-wide">
                Experience
              </h2>

              <div className="mt-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base font-black text-black">
                    Student Web Developer / BSIT Developer
                  </h3>
                </div>

                <p className="mt-2 text-gray-700 font-medium text-xs leading-relaxed max-w-2xl">
                  Experienced in developing and improving web applications as
                  part of academic and personal projects. Focused on building
                  responsive UI layouts, adding new features, and fixing bugs in
                  existing systems. Familiar with basic debugging, code
                  refactoring, and implementing input validation and simple
                  security practices to improve application stability.
                </p>
              </div>
            </section>
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="flex justify-end pt-6 border-t border-black/5 mt-auto">
            <button
              onClick={() => downloadFile("/images/resume.jpg", "resume.jpg")}
              className="
                  font-mono
                  font-bold
                  border-2
                  border-black
                  bg-yellow-500
                  px-4
                  py-2
                  text-xs
                  sm:text-sm
                  text-black
                  rounded-md
                  shadow-[3px_3px_0px_#000]
                  transition-all
                  duration-200
                  hover:bg-yellow-400
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
