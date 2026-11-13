
const projects = [
  {
    title: "SkillLink",
    category: "Mobile Applications & Admin Web",
    status: "Completed & Deployed",
    description:
      "A personal software development project featuring separate customer and provider mobile applications and a React admin dashboard. Connects customers with trusted local service providers.",
    technologies: ["Flutter", "React", "Spring Boot", "MySQL"],
    image: "images/skilllink.png",
    links: [
      {
        label: "Mobile Application",
        url: "https://github.com/SkillLink-Mobile-Application/SkillLink/releases/tag/v1.0.0",
      },
      {
        label: "Admin Web Application",
        url: "https://skilllink-admin-web.vercel.app",
      },
      {
        label: "GitHub",
        url: "https://github.com/SkillLink-Mobile-Application/SkillLink",
      },
      {
        label: "LinkedIn Video Demo",
        url: "https://lnkd.in/p/gnF9zkyQ",
      },
    ],
  },
  {
    title: "Government Hospital Appointment Booking System",
    category: "Web Application",
    status: "Completed",
    description:
      "A personal project developed to improve my software development skills. A web-based system designed to help users manage and book appointments at government hospitals.",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    image: "images/hospital-booking.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/CharuniLiyanage/Government-Hospital-Appointment-Booking-System",
      },
      {
        label: "LinkedIn Video Demo",
        url: "https://lnkd.in/p/gesG2mGb",
      },
    ],
  },
  {
    title: "SolarIQ",
    category: "Final Year Group Project",
    status: "Ongoing",
    description:
      "A final-year university group project focused on developing a smart solar energy management system with solar planning, cost estimation, and real-time energy monitoring.",
    technologies: [
      "React",
      "Flutter",
      "Spring Boot",
      "PostgreSQL",
      "ESP32",
      "MQTT",
    ],
    image: "images/solariq.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/SolarIQ-Project-Team/",
      },
    ],
  },
  {
    title: "HEC Awareness and Alert Application",
    category: "University OOP Group Project",
    status: "Group Project",
    description:
      "A university group project developed to support human-elephant conflict awareness through map-based alerts, electric fence updates, incident reporting, and injured elephant reporting.",
    technologies: [],
    image: "images/hec.png",
    links: [
      {
        label: "Frontend Repository",
        url: "https://github.com/Pasindu2025/OOP_Group_Project",
      },
      {
        label: "Backend Repository",
        url: "https://github.com/Pasindu2025/elephant-backend",
      },
      {
        label: "LinkedIn Images",
        url: "https://lnkd.in/p/gQes8TeQ",
      },
    ],
  },
  {
    title: "Learning Management System (LMS)",
    category: "Web Application",
    status: "Group Project",
    description:
      "A university group project focused on developing a web-based Learning Management System using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "images/lms.png",
    links: [
      {
        label: "LinkedIn Video Demo",
        url: "https://lnkd.in/p/gYMe5aVa",
      },
    ],
  },
  {
    title: "Royal Invites",
    category: "Wedding Invitation Maker",
    status: "Completed",
    description:
      "A personal web development project for creating personalized digital wedding invitations with downloadable PNG and PDF designs.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
    ],
    image: "images/royal-invites.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/CharuniLiyanage/Royal-Invites",
      },
      {
        label: "Live Demo",
        url: "https://royalinvites.infinityfreeapp.com/",
      },
      {
        label: "LinkedIn Video Demo",
        url: "https://lnkd.in/p/gy3bGk2z",
      },
    ],
  },
  {
    title: "Restaurant App",
    category: "Frontend Web Application",
    status: "Completed",
    description:
      "A personal frontend development project built with React and JavaScript to explore responsive web design and modern user interfaces.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "images/restaurant.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/CharuniLiyanage/restaurant-app",
      },
      {
        label: "LinkedIn Video Demo",
        url: "https://lnkd.in/p/g4YrrWJG",
      },
    ],
  },
  {
    title: "University GPA Calculator",
    category: "Web Application",
    status: "Completed",
    description:
      "A personal project developed to improve my programming and problem-solving skills. Helps university students calculate their academic GPA.",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
    image: "images/gpa-calculator.png",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/CharuniLiyanage/University-GPA-Calculator",
      },
      {
        label: "LinkedIn Video Demo",
        url: "https://lnkd.in/p/greR4F9E",
      },
    ],
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">MY RECENT WORK</p>
          <h2>
            Featured <span className="accent">Projects</span>
          </h2>
          <p className="projects-intro">
            A selection of projects I've developed while learning
            and exploring software development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={`${project.title} screenshot`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="image-placeholder">
                  {project.title}
                </div>

                <span
                  className={`project-status ${
                    project.status === "Ongoing"
                      ? "status-ongoing"
                      : "status-completed"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="project-details">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {project.technologies.length > 0 && (
                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-links">
                  {project.links.length > 0 ? (
                    project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ))
                  ) : (
                    <span className="repository-label">
                      GitHub repository not available
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
