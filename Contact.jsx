function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="section-tag center-tag">Let’s Connect</p>

      <h2 className="contact-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-subtitle">
        I’m always open to new opportunities, collaborations and exciting projects.
      </p>

      <div className="contact-content">
        <div className="contact-cards">
          <a href="mailto:majirima75@gmail.com" className="contact-card">
            <i className="bi bi-envelope"></i>
            <h3>Email</h3>
            <p>Let’s talk over email</p>
            <span>majirima75@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rima-maji-716729385"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <i className="bi bi-linkedin"></i>
            <h3>LinkedIn</h3>
            <p>Let’s connect</p>
            <span>linkedin.com/in/rima-maji</span>
          </a>

          <a
            href="https://github.com/rimam02"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <i className="bi bi-github"></i>
            <h3>GitHub</h3>
            <p>Check out my code</p>
            <span>github.com/rimam02</span>
          </a>

          <div className="contact-card">
            <i className="bi bi-stars"></i>
            <h3>Creative Side</h3>
            <p>Dancing, design and frontend creativity</p>
            <span>Always learning</span>
          </div>
        </div>

        <div className="work-card">
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h3>
            Let’s Work
            <br />
            <span>Together!</span>
          </h3>

          <p>
            I’m open to frontend projects, learning opportunities and creative
            collaborations. Feel free to reach out!
          </p>

          <div className="available">
            <span></span>
            Available for Opportunities
          </div>

        
        </div>


      </div>


    </section>
  );
}

export default Contact;