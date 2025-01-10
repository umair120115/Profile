import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Contact.css"; // External CSS for styling

function Contact() {
    return (
        <>
            <Navbar />
            <div className="contact-container">
                <h2 className="contact-heading">Let's Connect!</h2>
                <div className="contact-section">
                    <div className="linkedin card">
                        <h3>Connect with me on LinkedIn</h3>
                        <a
                            href="https://www.linkedin.com/in/umair120115/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                    <div className="github card">
                        <h3>Check out my GitHub</h3>
                        <a
                            href="https://www.github.com/umair120115"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            GitHub Profile
                        </a>
                        <p className="note">Feel free to contribute to any repository!</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Contact;
