import Navbar from "./Navbar";
import '../styles/Projects.css'; // Add this CSS file
import OnlineVoting1 from '../assets/voting1.png'; // Replace with your actual image paths
import OnlineVoting2 from '../assets/voting2.png';
import OnlineVoting3 from '../assets/voting3.png';
import OnlineVoting8 from '../assets/voting8.png';
import pdf1 from '../assets/pff1.png';
import pdf2 from '../assets/pdf2.png';
import pdf3 from '../assets/pdf3.png';  
import Footer from "./Footer";
function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects-section">
        <h1 className="projects-title">My Projects</h1>
        <p className="projects-intro">Here are some of my most exciting projects:</p>

        <div className="project-details">
          <div className="project-card">
            <h2>Online Voting System</h2>
            <p>
              <strong>Tech Stacks:</strong> Python, Django, axios, react-router-dom, 
              djangorestframework, ReactJS, JavaScript, LangChain, JWT, Llama 3, 
              Groq Cloud, Hugging Face
            </p>
            <ul>
              <h3>Features:</h3>
              <li>
                A web-based application for understanding voting concepts, casting 
                online votes, learning about democracy, and organizing voting events 
                for organizations.
              </li>
              <li>Frontend developed using React and its libraries.</li>
              <li>Backend developed using Django REST Framework with RESTful APIs.</li>
              <li>
                Learning chatbot integrated using LLMs, LangChain, Hugging Face, 
                Groq Cloud, and Meta AI's open-source model Llama3.
              </li>
              <li>
                <strong>Source code:</strong> Check it out on 
                 <a href="https://www.github.com/umair120115/OnlineVoting" target="_blank" rel="noopener noreferrer">
                   GitHub
                </a>
              </li>
            </ul>
            <p><strong>Project Screenshots:</strong></p>
            <div className="project-images">
              {/* <img src={OnlineVoting1} alt="Online Voting Screenshot 1" /> */}
              <img src={OnlineVoting2} alt="Online Voting Screenshot 2" />
              <img src={OnlineVoting3} alt="Online Voting Screenshot 3" />
              <img src={OnlineVoting8} alt="Online Voting Screenshot 8" />
            </div>
          </div>
        </div>
      </div>
      <div className="projects-section">
        {/* <h1 className="projects-title">My Projects</h1>
        <p className="projects-intro">Here are some of my most exciting projects:</p> */}

        <div className="project-details">
          <div className="project-card">
            <h2>Online PDF Viewer</h2>
            <p>
              <strong>Tech Stacks:</strong> Python, Django, axios, react-router-dom, 
              djangorestframework, ReactJS, JavaScript, LangChain, JWT, Llama 3, 
              Groq Cloud, Hugging Face
            </p>
            <ul>
              <h3>Features:</h3>
              <li>
                A web based pdf viewer for reading and learning purpose.
              </li>
              <li>Frontend developed using React and its libraries.</li>
              <li>Backend developed using Django REST Framework with RESTful APIs.</li>
              <li>
                A chatbot using openai  for querying the pdf topics and questions.
                A note making interface with specifyied date and time.
                User can add multiple pdf to their profile and can access it and also read their noted from where ever they want to which makes anytime access to their sudy materials.
              </li>
              <li>
                <strong>Source code:</strong> Check it out on 
                <a href="https://www.github.com/umair120115/Reader" target="_blank" rel="noopener noreferrer">
                   GitHub
                </a>
              </li>
            </ul>
            <p><strong>Project Screenshots:</strong></p>
            <div className="project-images">
              <img src={pdf1} alt="Online Voting Screenshot 1" />
              <img src={pdf2} alt="Online Voting Screenshot 2" />
              <img src={pdf3} alt="Online Voting Screenshot 3" />
            </div>
          </div>
        </div>
      </div>
      <div className="projects-section">
        {/* <h1 className="projects-title">My Projects</h1>
        <p className="projects-intro">Here are some of my most exciting projects:</p> */}

        <div className="project-details">
          <div className="project-card">
            <h2>Deen Social Media</h2>
            <p>
              <strong>Tech Stacks:</strong> Python, Django, axios, react-router-dom, 
              djangorestframework, ReactJS, JavaScript, django-channels, JWT, redis( message-broker) 
            </p>
            <ul>
              <h3>Features:</h3>
              <li>
                A web based social application for people to connect with each other and share their thoughts and ideas.
              </li>
              <li>Frontend developed using React and its libraries.</li>
              <li>Backend developed using Django REST Framework with RESTful APIs.</li>
              <li>
                Functionalities like posting images, commenting on posts, liking posts, following users, messaging users, and many more.
                it is basically asgi application with real-time messaging.

              </li>
              <li>
                <strong>Source code:</strong> Check it out on 
                <a href="https://www.github.com/umair120115/Deen" target="_blank" rel="noopener noreferrer">
                   GitHub
                </a>
              </li>
            </ul>
            {/* <p><strong>Project Screenshots:</strong></p>
            <div className="project-images">
              <img src={pdf1} alt="Online Voting Screenshot 1" />
              <img src={pdf2} alt="Online Voting Screenshot 2" />
              <img src={pdf3} alt="Online Voting Screenshot 3" />
            </div> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Projects;
