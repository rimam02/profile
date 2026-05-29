import budgeter from "../assets/budgeter.png";
import flashcards from "../assets/flashcards.png";
import localkart from "../assets/localkart.png";
import vinyl from "../assets/vinyl.png";
import memory from "../assets/memory.png";
import erp from "../assets/erp.png";
import ranking from "../assets/ranking.png";
import sumn from "../assets/sumn.png";

function Projects() {
  const projects = [
    {
      title: "Need vs Want App",
      category: "Finance App",
      image: budgeter,
      desc: "Smart budgeting app that helps users separate needs and wants.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/rimam02/NeedvsWant_Budget.git",
    },
    {
      title: "Dev Term Flashcards",
      category: "React App",
      image: flashcards,
      desc: "Interactive flashcard app with quiz-style learning features.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://github.com/rimam02/React-Mini-Project.git",
    },
    {
      title: "LocalKart",
      category: "Web Application",
      image: localkart,
      desc: "Responsive local shopping website with clean user interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/rimam02/HTML-CSS-JS-Case-Study.git",
    },
    {
      title: "Vinyl Music Website",
      category: "UI/UX Design",
      image: vinyl,
      desc: "Creative music website UI with a premium dark visual style.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/rimam02/Startup-Idea.git",
    },
    {
      title: "Memory-Constrained System",
      category: "System Project",
      image: memory,
      desc: "C++ project focused on sorting with minimum memory writes.",
      tech: ["C++", "DSA"],
      link: "https://github.com/rimam02/DSA-Mini-Project.git",
    },
    {
      title: "University ERP System",
      category: "C++ Project",
      image: erp,
      desc: "Console-based ERP system for student and academic management.",
      tech: ["C++", "OOP"],
      link: "https://github.com/rimam02/C-CS.git",
    },
    {
      title: "Student Ranking System",
      category: "DSA Project",
      image: ranking,
      desc: "Ranking system that updates and sorts students by scores.",
      tech: ["C++", "Sorting"],
      link: "https://github.com/rimam02/Student-Ranking-System.git",
    },
    {
      title: "SUMN",
      category: "Productivity App",
      image: sumn,
      desc: "Minimal productivity app concept for planning daily tasks.",
      tech: ["HTML", "CSS"],
      link: "https://github.com/rimam02/HTML-CSS-Mini-Project-SUMN-.git",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <p className="section-tag center-tag">My Work</p>
      <h2 className="projects-title">
        Featured <span>Projects</span>
      </h2>
      <p className="projects-subtitle">
        A collection of projects that showcase my frontend, UI and programming skills.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={index}
          >
            <div className="project-img">
              <img src={project.image} alt={project.title} />
              <span className="open-icon">
                <i className="bi bi-arrow-up-right"></i>
              </span>
            </div>

            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="project-tech">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-footer">
              <span>View Project</span>
              <i className="bi bi-github"></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;