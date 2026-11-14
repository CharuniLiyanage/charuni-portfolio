
import { useEffect, useRef, useState } from "react";

import {
  Code2,
  Mail,
  ArrowDown,
  Download,
  MessageCircle,
} from "lucide-react";

function Hero() {
  const titles = [
    "Aspiring Software Engineer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const heroRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const currentTitle = titles[titleIndex];

    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && displayText === currentTitle) {
      delay = 1600;
    } else if (isDeleting && displayText === "") {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((previous) => (previous + 1) % titles.length);
      } else {
        setDisplayText(
          currentTitle.substring(
            0,
            displayText.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".hero-content, .hero-image, .section"
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Mouse-follow orange glow
  const handlePointerMove = (event) => {
    if (window.matchMedia("(hover: none)").matches) return;

    const rect = heroRef.current.getBoundingClientRect();

    heroRef.current.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );

    heroRef.current.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <section
      className="hero container"
      id="home"
      ref={heroRef}
      onPointerMove={handlePointerMove}
    >
      {/* Floating background elements */}
      <div className="hero-floating-shapes" aria-hidden="true">
        <span className="floating-shape shape-one"></span>
        <span className="floating-shape shape-two"></span>
        <span className="floating-shape shape-three"></span>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          Charuni <span className="accent">Hansika</span>
        </h1>

        <h2>Computer Science Undergraduate</h2>

        <h4 className="typing-heading">
          <span className="typing-text">{displayText}</span>
          <span className="typing-cursor">|</span>
        </h4>

        <p className="internship-status">
          Available for Software Engineering Internship – February 2027
        </p>

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
