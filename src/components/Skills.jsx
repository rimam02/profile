function Skills() {
  const frontend = [
    { icon: "bi-filetype-html", name: "HTML5" },
    { icon: "bi-filetype-css", name: "CSS3" },
    { icon: "bi-filetype-js", name: "JavaScript" },
    { icon: "bi-atom", name: "React JS" },
    { icon: "bi-bootstrap", name: "Bootstrap" },
    { icon: "bi-display", name: "Responsive Design" },
    { icon: "bi-palette", name: "UI/UX Basics" },
  ];

  const tools = [
    { icon: "bi-code-square", name: "VS Code" },
    { icon: "bi-github", name: "GitHub" },
    { icon: "bi-git", name: "Git" },
    { icon: "bi-lightning-charge-fill", name: "Vite" },
  ];

  const programming = [
    { icon: "bi-c-circle", name: "C++" },
    { icon: "bi-diagram-3", name: "DSA Basics" },
    { icon: "bi-lightbulb", name: "Problem Solving" },
  ];

  const soft = [
    { icon: "bi-stars", name: "Creative Thinking" },
    { icon: "bi-people", name: "Teamwork" },
    { icon: "bi-chat-dots", name: "Communication" },
    { icon: "bi-rocket-takeoff", name: "Quick Learner" },
  ];

  const SkillBox = ({ title, icon, skills }) => (
    <div className="skill-category-box">
      <h3>
        <i className={`bi ${icon}`}></i>
        {title}
      </h3>

      <div className="skill-pill-grid">
        {skills.map((skill, index) => (
          <span className="skill-chip" key={index}>
            <i className={`bi ${skill.icon}`}></i>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-bg-text">SKILLS</h1>

      <div className="skills-left">
        <p className="section-tag">What I Know</p>
        <h2>
          My <span>Skills</span>
        </h2>

        <p>
          I enjoy building things for the web and constantly learning new
          technologies. Here are some of the tools and technologies I work with.
        </p>

        <div className="learning-card">
          <div className="learning-icon">
            <i className="bi bi-rocket-takeoff"></i>
          </div>

          <h3>Always Learning</h3>

          <p>
            I believe in continuous improvement. I’m always exploring new tools
            and technologies to level up my skills.
          </p>

          <i className="bi bi-arrow-up-right learning-arrow"></i>
        </div>
      </div>

      <div className="skills-right">
        <SkillBox
          title="Frontend Development"
          icon="bi-code-slash"
          skills={frontend}
        />

        <SkillBox
          title="Tools & Technologies"
          icon="bi-tools"
          skills={tools}
        />

        <SkillBox
          title="Programming"
          icon="bi-pc-display"
          skills={programming}
        />

        <SkillBox
          title="Soft Skills"
          icon="bi-person-hearts"
          skills={soft}
        />
      </div>
    </section>
  );
}

export default Skills;