
import {
  Mail,
  MessageCircle,
  Code2,
  Send,
} from "lucide-react";

function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hi Charuni, I would like to get in touch with you."
  );

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h2>
            Let's <span className="accent">Connect</span>
          </h2>
          <p className="contact-intro">
            I'm currently looking for Software Engineering Internship
            opportunities starting February 2027. Feel free to contact me!
          </p>
        </div>

        <div className="contact-content">
          <a href="mailto:hansikachl721@gmail.com" className="contact-card">
            <div className="contact-icon">
              <Mail size={25} />
            </div>
            <div>
              <h3>Email</h3>
              <p>hansikachl721@gmail.com</p>
            </div>
          </a>

          <a
            href={`https://wa.me/94762753853?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <MessageCircle size={25} />
            </div>
            <div>
              <h3>WhatsApp</h3>
              <p>076 275 3853</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/charuni-hansika/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
                <Code2 size={25} />
            </div>
            <div>
              <h3>LinkedIn</h3>
              <p>Connect with me</p>
            </div>
          </a>

          <a
            href="https://github.com/CharuniLiyanage"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <Code2 size={25} />
            </div>
            <div>
              <h3>GitHub</h3>
              <p>Explore my projects</p>
            </div>
          </a>
        </div>

        <div className="contact-cta">
          <h3>Have an opportunity or a project in mind?</h3>
          <p>I'd love to hear from you. Let's connect!</p>

          <a
            href={`https://wa.me/94762753853?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Send Me a Message <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
