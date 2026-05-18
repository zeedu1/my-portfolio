export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
  ];

  return (
    <div className="mt-6">
      {/* TITLE */}
      <h3 className="font-mono text-yellow-400 text-lg sm:text-xl mb-4">
        Specialization.
      </h3>

      {/* GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              flex flex-col items-center justify-center
              bg-white/5
              border border-white/10
              backdrop-blur-md
              rounded-lg
              p-3
              transition-all duration-300
              hover:-translate-y-1
              hover:border-yellow-400/50
              hover:bg-white/10
            "
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-7 h-7 sm:w-8 sm:h-8"
            />

            <p className="font-mono text-[10px] sm:text-xs text-gray-300 mt-2 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}