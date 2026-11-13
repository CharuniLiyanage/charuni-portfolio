
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    qualification: "Bachelor of Computer Science (BCS)",
    institution: "University of Ruhuna",
    period: "2023 – 2027",
    description: "Currently pursuing an undergraduate degree in Computer Science.",
    result: "Undergraduate",
  },
  {
    icon: School,
    qualification: "G.C.E. Advanced Level",
    institution: "Sivali Central College, Ratnapura",
    period: "2022 / 2023",
    description: "Mathematics Stream",
    result: "Combined Mathematics – B | Chemistry – B | Physics – C",
  },
  {
    icon: School,
    qualification: "G.C.E. Ordinary Level",
    institution: "Sivali Central College, Ratnapura",
    period: "2019",
    description: "General Certificate of Education",
    result: "9 A Passes",
  },
];

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">MY ACADEMIC BACKGROUND</p>
          <h2>
            Education & <span className="accent">Qualifications</span>
          </h2>
          <p className="education-intro">
            My academic journey and educational qualifications.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="education-card" key={index}>
                <div className="education-icon">
                  <Icon size={26} />
                </div>

                <div className="education-details">
                  <span className="education-period">{item.period}</span>
                  <h3>{item.qualification}</h3>
                  <h4>{item.institution}</h4>
                  <p>{item.description}</p>
                  <span className="education-result">{item.result}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
