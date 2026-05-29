function About() {
  return (
    <section className="about-section" id="about">
      <h1 className="about-bg-text">ABOUT</h1>

      <div className="about-left">
        <p className="section-tag">Who I Am</p>
        <h2>About Me</h2>

        <p className="about-intro">
          I’m a B.Tech Computer Science student at ITM Skills University with a
          passion for building responsive, creative and user-friendly web
          experiences.
        </p>

        <p className="about-intro">
          I enjoy turning ideas into real projects using modern technologies and
          improving my frontend development skills step by step.
        </p>

        <div className="about-stats">
          <div>
            <h3>8+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3>8+</h3>
            <p>Skills</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Passion</p>
          </div>
        </div>
      </div>

      <div className="about-cards">
        <div className="about-card purple-card">
          <div className="about-icon">🎓</div>
          <h3>Student</h3>
          <p>
            B.Tech CSE student who is curious to learn new technologies and grow
            in the field of web development.
          </p>
        </div>

        <div className="about-card orange-card">
          <div className="about-icon">💻</div>
          <h3>Frontend Developer</h3>
          <p>
            I build responsive and interactive websites using HTML, CSS,
            JavaScript, React and modern frontend tools.
          </p>
        </div>

        <div className="about-card blue-card">
          <div className="about-icon">🎨</div>
          <h3>Creative Learner</h3>
          <p>
            Apart from coding, I enjoy dancing, sports, adventures and exploring
            creative design ideas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;