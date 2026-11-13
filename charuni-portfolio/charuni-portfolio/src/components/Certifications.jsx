
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Data Analytics",
    issuer: "Simplilearn",
    date: "January 2026",
  },
  {
    name: "Tableau",
    issuer: "UniAthena",
    date: "December 2025",
  },
  {
    name: "SQL",
    issuer: "Alison",
    date: "October 2025",
  },
  {
    name: "SQL",
    issuer: "SoloLearn",
    date: "December 2025",
  },
  {
    name: "Python",
    issuer: "DP Education",
    date: "December 2025",
  },
  {
    name: "Generative AI Literacy",
    issuer: "Simplilearn",
    date: "Score: 72",
  },
  {
    name: "C# Programming",
    issuer: "DP Education IT Campus 180",
    date: "",
  },
  {
    name: "Python",
    issuer: "University of Moratuwa",
    date: "March 2023",
  },
];

function Certifications() {
  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">MY ACHIEVEMENTS</p>
          <h2>
            Certifications & <span className="accent">Courses</span>
          </h2>
          <p className="certifications-intro">
            Professional courses and certifications I have completed
            to improve my technical knowledge and skills.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <article className="certification-card" key={index}>
              <div className="certification-icon">
                <Award size={25} />
              </div>

              <div className="certification-details">
                <h3>{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>

                {cert.date && (
                  <span className="certification-date">
                    {cert.date}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
