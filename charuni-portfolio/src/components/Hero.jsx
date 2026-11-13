import {
  Code2,
  Mail,
  ArrowDown,
  Download,
  MessageCircle,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          Charuni <span className="accent">Hansika</span>
        </h1>

        <h2>Computer Science Undergraduate</h2>

        <p className="hero-description">
          Passionate about building modern web and mobile applications.
          I enjoy learning new technologies and turning ideas into
          practical software solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Projects <ArrowDown size={18} />
          </a>

          <a
            href={`${import.meta.env.BASE_URL}Charuni-Hansika-CV.pdf`}
            className="btn btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            Download CV <Download size={18} />
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/CharuniLiyanage"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Code2 />
          </a>

          <a
            href="https://www.linkedin.com/in/charuni-hansika/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="linkedin-icon"
          >
            in
          </a>

          <a
            href="mailto:hansikachl721@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <Mail />
          </a>

          <a
            href="https://wa.me/94762753853"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <MessageCircle />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.png`}
            alt="Charuni Hansika"
          />
        </div>

        <div className="image-decoration"></div>
      </div>
    </section>
  );
}

export default Hero;
