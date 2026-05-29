import profile from "../assets/profile.jpg";
import flashcards from "../assets/flashcards.png";
import localkart from "../assets/localkart.png";
import budgeter from "../assets/budgeter.png";
import vinyl from "../assets/vinyl.png";


function Hero() {
  return (
    <section className="cover-hero" id="home">
     
      <div className="cover-left">


  <h1>
  Hello, I’m <span>Rima</span>
  <br />
  Frontend Developer
</h1>

  <p>
    B.Tech CSE student crafting responsive and creative web experiences with
    React and modern UI design.
  </p>


<div className="social-links">
  <a href="https://www.linkedin.com/in/rima-maji-716729385" target="_blank" rel="noreferrer" title="LinkedIn">
    <i className="bi bi-linkedin"></i>
  </a>

  <a href="https://github.com/rimam02" target="_blank" rel="noreferrer" title="GitHub">
    <i className="bi bi-github"></i>
  </a>

  <a href="mailto:majirima75@gmail.com" title="Gmail">
    <i className="bi bi-envelope-fill"></i>
  </a>
</div>



</div>

      <div className="project-collage frame-collage">
        <div className="shot frame-shot top-left">
          <img src={localkart} alt="LocalKart Project" />
        </div>

        <div className="shot frame-shot top-right">
          <img src={flashcards} alt="Flashcards Project" />
        </div>

        <div className="profile-showcase center-profile">
          <img src={profile} alt="Rima Maji" />
          <div>
            <h3>Rima Maji</h3>
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className="shot frame-shot bottom-left">
          <img src={vinyl} alt="Vinyl Website Project" />
        </div>

        <div className="shot frame-shot bottom-right">
          <img src={budgeter} alt="Budgeter Project" />
        </div>

      </div>
    </section>
  );
}

export default Hero;