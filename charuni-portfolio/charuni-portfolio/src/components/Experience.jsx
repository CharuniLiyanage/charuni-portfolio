
const experiences = [
  {
    type: "Work Experience",
    title: "Trainee",
    organization: "People's Bank",
    location: "Nivitigala, Sri Lanka",
    period: "September 2023 – August 2024",
    description:
      "Completed a trainee placement at People's Bank, gaining practical experience in a professional workplace environment.",
  },
  {
    type: "Project Experience",
    title: "Map and Alert Module Developer",
    organization: "HEC Awareness and Alert Application",
    location: "University Group Project",
    period: "",
    description:
      "Worked on the map and alert module of a Human-Elephant Conflict awareness application, supporting electric fence updates, incident reporting, and injured elephant reporting.",
  },
  {
    type: "Open Source Program",
    title: "Selected Participant – SSoC Season 5",
    organization: "Social Summer of Code",
    location: "Open Source Program",
    period: "",
    description:
      "Selected to participate in Social Summer of Code (SSoC) Season 5.",
  },
  {
    type: "Volunteer Experience",
    title: "Finance Team Volunteer",
    organization: "Road to Rush Coder 3.0",
    location: "Computer Science Students' Society, University of Ruhuna",
    period: "",
    description:
      "Contributed to the finance team for the Road to Rush Coder 3.0 event.",
  },
  {
    type: "Volunteer Experience",
    title: "Finance Team Member",
    organization: "Animus 1.0",
    location: "Computer Science Students' Society, University of Ruhuna",
    period: "",
    description:
      "Participated in the finance team for Animus 1.0, a cybersecurity and Capture The Flag (CTF) event.",
  },
];

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">MY JOURNEY</p>
          <h2>
            Experience & <span className="accent">Activities</span>
          </h2>
          <p className="experience-intro">
            My professional experience, project contributions,
            and extracurricular activities.
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article className="experience-card" key={index}>
              <div className="experience-marker">
                <span></span>
              </div>

              <div className="experience-content">
                <p className="experience-type">{item.type}</p>

                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>

                <p className="experience-location">
                  {item.location}
                </p>

                {item.period && (
                  <span className="experience-period">
                    {item.period}
                  </span>
                )}

                <p className="experience-description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
