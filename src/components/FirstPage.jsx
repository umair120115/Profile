import Navbar from "./Navbar";
import ProfilePic from "../assets/umair.jpeg";
import '../styles/FirstPage.css';
import Footer from "./Footer";

function FirstPage() {
  return (
    <>
      <Navbar />
      <div className="intro-section">
        <div className="overlay"></div>
        <div className="intro-content">
          <img className="profile-pic" src={ProfilePic} alt="Umair Ahmad" />
          <div className="intro-text">
            <h1>Umair Ahmad</h1>
            <p>
              I am a <strong>Full Stack AI Developer</strong> with a strong foundation in 
              <strong> Artificial Intelligence</strong>, <strong>Machine Learning</strong>, and 
              <strong> Extended Reality</strong> technologies. My expertise lies in building scalable, 
              innovative applications using <strong>Django</strong>, <strong>React</strong>, and 
              <strong> AI-driven APIs</strong>. Passionate about crafting impactful and immersive 
              experiences, I specialize in <strong>real-time systems</strong>, <strong>AI-integrated tools</strong>, 
              and <strong>dynamic platforms</strong>, always exploring advancements in tech.
            </p>
          </div>
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-heading">I am working with the following skill sets:</h3>
        <div className="skills">
          <div className="skill">
            <i className="devicon-python-plain"></i>
            <span>Python</span>
          </div>
          <div className="skill">
            <i className="devicon-django-plain"></i>
            <span>Django</span>
          </div>
          <div className="skill">
            <i className="devicon-javascript-plain"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <i className="devicon-html5-plain"></i>
            <span>HTML</span>
          </div>
          <div className="skill">
            <i className="devicon-css3-plain"></i>
            <span>CSS</span>
          </div>
          <div className="skill">
            <i className="devicon-bootstrap-plain"></i>
            <span>Bootstrap</span>
          </div>
          <div className="skill">
            <i className="devicon-sass-original"></i>
            <span>SASS</span>
          </div>
          <div className="skill">
            <i className="devicon-tensorflow-original"></i>
            <span>TensorFlow</span>
          </div>
          <div className="skill">
            <i className="devicon-react-original"></i>
            <span>ReactJS</span>
          </div>
          <div className="skill">
            <i className="devicon-docker-plain"></i>
            <span>Docker</span>
          </div>
          <div className="skill">
            <i className="devicon-github-original"></i>
            <span>GitHub</span>
          </div>
          <div className="skill">
            <i className="devicon-numpy-original"></i>
            <span>NumPy</span>
          </div>
          <div className="skill">
            <i className="devicon-pandas-original"></i>
            <span>Pandas</span>
          </div>
          <div className="skill">
            <i className="devicon-redis-plain"></i>
            <span>Redis</span>
          </div>
          <div className="skill">
            <i className="devicon-langchain-plain"></i>
            <span>langchain</span>
          </div>
          <div className="skill">
            <i className="devicon-llama-plain"></i>
            <span>LLAMA</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default FirstPage;
