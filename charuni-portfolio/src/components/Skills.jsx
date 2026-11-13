
import {
  Code2,
  Smartphone,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Code2 />,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone />,
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Backend Development",
    icon: <Database />,
    skills: ["Java", "Spring Boot", "PHP", "MySQL", "PostgreSQL"],
  },
  {
    title: "Programming & Tools",
    icon: <Wrench />,
    skills: ["C", "Python", "Git", "GitHub", "SQL"],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">WHAT I WORK WITH</p>
          <h2>My <span className="accent">Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-icon">{group.icon}</div>
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
