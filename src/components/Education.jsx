import React from "react";
import Navbar from "./Navbar";
import AKGEC from "../assets/akgec.jpeg";
import Montfort from "../assets/montfort.png";
import School from "../assets/school.jpeg";
import Footer from "./Footer";
import "../styles/Education.css";

function Education() {
    return (
        <>
            <Navbar />
            <div className="education-container">
                <h3 className="section-title">My Education & Certifications</h3>
                <div className="education-details">
                    <div className="college-info">
                        <img src={AKGEC} alt="College" className="college-image" />
                        <div className="college-text">
                            <h4>Ajay Kumar Garg Engineering College, Ghaziabad</h4>
                            <p><strong>Affiliated to:</strong> Dr. A P J Abdul Kalam Technical University, Lucknow</p>
                            <p><strong>Course:</strong> Bachelor of Technology</p>
                            <p><strong>Branch:</strong> Computer Science and Engineering</p>
                            <p><strong>Year of Graduation:</strong> 2025</p>
                            <p><strong>Aggregate Marks:</strong> 7.01 SGPA</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="education-details">
                    <div className="college-info">
                        <img src={Montfort} alt="College" className="college-image" />
                        <div className="college-text">
                            <h4>Montfort Inter College, Lucknow</h4>
                            <p><strong>Affiliated to:</strong> Central Board of Secondary Education</p>
                            <p><strong>Course:</strong> Secondary( Intermediate ) with PCM</p>
                            
                            <p><strong>Year of Completion:</strong> 2020</p>
                            <p><strong>Marks:</strong> 93.4%</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="education-details">
                    <div className="college-info">
                        <img src={School} alt="College" className="college-image" />
                        <div className="college-text">
                            <h4>St. Xavier's High School, Manara, Jagdishpur, Azamgarh</h4>
                            <p><strong>Affiliated to:</strong> Central Board of Secondary Education</p>
                            <p><strong>Course:</strong> High School</p>
                            
                            <p><strong>Year of Completion:</strong> 2018</p>
                            <p><strong>Marks:</strong> 85.8%</p>
                        </div>
                    </div>
                </div>

                <div className="certifications">
                    <h3 className="subsection-title">Certifications</h3>
                    <ul className="certification-list">
                        <li>Certificate in Full Stack Development - Coursera</li>
                        <li>Python for Data Science - Udemy</li>
                        <li>Machine Learning Specialization - Coursera</li>
                        <li>React.js Advanced Course - Codecademy</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Education;
