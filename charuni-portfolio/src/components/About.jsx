
import {
  GraduationCap,
  MapPin,
  BriefcaseBusiness,
  Code2,
  Database,
} from "lucide-react";

function About() {
  return (
    <section className="section container" id="about">
      <div className="section-heading">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2>
          About <span className="accent">Me</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Turning ideas into digital experiences.</h3>

          <p>
            I'm Charuni Hansika, a Computer Science undergraduate at
            the University of Ruhuna, Sri Lanka.
          </p>

          <p>
            I'm interested in software engineering, frontend development,
            backend development, database management, and mobile
            application development. I enjoy exploring new technologies,
            developing projects, and continuously improving my programming
            skills.
          </p>

          <p>
            My goal is to become a skilled software engineer and contribute
            to building useful, efficient, and user-friendly applications.
          </p>
        </div>

        <div className="about-info">
          <div className="info-card">
            <GraduationCap />
            <div>
              <h4>Education</h4>
              <p>BCS Undergraduate</p>
              <span>University of Ruhuna</span>
            </div>
          </div>

          <div className="info-card">
            <MapPin />
            <div>
              <h4>Location</h4>
              <p>Sri Lanka</p>
            </div>
          </div>

          <div className="info-card">
            <Code2 />
            <div>
              <h4>Development Interests</h4>
              <p>Frontend & Backend Development</p>
              <span>Web & Mobile Applications</span>
            </div>
          </div>

          <div className="info-card">
            <Database />
            <div>
              <h4>Database Management</h4>
              <p>MySQL & PostgreSQL</p>
            </div>
          </div>

          <div className="info-card">
            <BriefcaseBusiness />
            <div>
              <h4>Career Goal</h4>
              <p>Software Engineering Internship</p>
              <span>Available from February 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
