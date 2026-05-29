function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>RM.</h3>
        <p>Built with React by Rima Maji</p>
      </div>

    

      <div className="footer-socials">
        <a href="mailto:majirima75@gmail.com">
          <i className="bi bi-envelope"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/rima-maji-716729385"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>

        <a href="https://github.com/rimam02" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;