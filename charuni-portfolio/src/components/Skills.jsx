
import {
  Code2,
  Smartphone,
  Server,
  Database,
  Terminal,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Code2 />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone />,
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Backend Development",
    icon: <Server />,
    skills: [
      "Java",
      "Spring Boot",
      "PHP",
      "Laravel",
      "Flask",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Database Management",
    icon: <Database />,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Firebase",
      "SQL",
    ],
  },
  {
    title: "Programming Languages",
    icon: <Terminal />,
    skills: [
      "C",
      "C#",
      "Java",
      "Python",
      "JavaScript",
      "PHP",
      "Dart",
    ],
  },
  {
    title: "Development Tools & Platforms",
    icon: <Wrench />,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Maven",
      "Vercel",
      "Render",
      "Firebase",
    ],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">WHAT I WORK WITH</p>

          <h2>
            My <span className="accent">Skills</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-icon">
                {group.icon}
              </div>

              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
