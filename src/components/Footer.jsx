import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Umair Ahmad</h2>
          <p>Full Stack AI Developer</p>
        </div>
        <div className="footer-social">
          <h3>Connect with me:</h3>
          <div className="social-icons">
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
              <i className="devicon-twitter-original"></i>
            </a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
              <i className="devicon-google-plain"></i>
            </a>
          </div>
        </div>
        <div className="footer-contact">
          {/* <h3>Contact:</h3> */}
          <p>Email: <a href="mailto:your-email@example.com">ua16453@gmail.com</a></p>
          <p>Phone: +91-7905567038</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Umair Ahmad. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
