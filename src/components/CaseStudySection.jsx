import React from 'react';
import '../styles/CaseStudySection.css';
import caseStudyImage from '../assets/casestudyhero.png';
import img1 from '../assets/project1.png';
import img2 from '../assets/project2.png';
import img3 from '../assets/project3.png';
import img4 from '../assets/project4.png';
import img5 from '../assets/project5.png';
import img6 from '../assets/project6.png';
import recaptcha from '../assets/recaptcha.png';

const projects = [
    {
        id: 1,
        image: img1,
        category: 'FULLSTACK WEB DEVELOPMENT',
        title: 'A Robust Solution For Data Architecture And Data Migration',
        description:
            'The respected client is the owner of a USA-based conservative advocacy organization and interest group, called Association of Mature American Citizens...',
    },
    {
        id: 2,
        image: img2,
        category: 'FULLSTACK WEB DEVELOPMENT',
        title: 'A Unique Website For Higher Engagement And Conversion - PMO Solutions',
        description:
            'Dr. James Ramen Gibson, our respected client, is a renowned Sage software solution provider based out of the United States. PMO Solutions – the bra...',
    },
    {
        id: 3,
        image: img3,
        category: 'MOBILE APP DEVELOPMENT',
        title: 'App Development For A Fitness Brand Wordfit',
        description:
            'No matter what your fitness goal is – shedding some extra flabs, staying healthy or building a chiselled physique – WordFit could be your ultimate ...',
    },
    {
        id: 4,
        image: img4,
        category: 'MOBILE APP DEVELOPMENT',
        title: 'App Development For A Fitness Brand Wordfit',
        description:
            'No matter what your fitness goal is – shedding some extra flabs, staying healthy or building a chiselled physique – WordFit could be your ultimate ...',
    },
    {
        id: 5,
        image: img5,
        category: 'MOBILE APP DEVELOPMENT',
        title: 'App Development For A Fitness Brand Wordfit',
        description:
            'No matter what your fitness goal is – shedding some extra flabs, staying healthy or building a chiselled physique – WordFit could be your ultimate ...',
    },
    {
        id: 6,
        image: img6,
        category: 'MOBILE APP DEVELOPMENT',
        title: 'App Development For A Fitness Brand Wordfit',
        description:
            'No matter what your fitness goal is – shedding some extra flabs, staying healthy or building a chiselled physique – WordFit could be your ultimate ...',
    },
];

const CaseStudySection = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="casestudy-hero-section">
                <div className="casestudy-hero-container">
                    <div className="casestudy-left">
                        <h1>
                            <span className="highlight-blue">Case Study</span><br />
                            <span className="bold-black">Done By Wordsystech</span>
                        </h1>
                        <p className="casestudy-subtext">
                            Breathing Life In Your Construction Dreams!
                        </p>
                        <button className="casestudy-button">SCHEDULE A MEETING</button>
                    </div>
                    <div className="casestudy-right">
                        <img src={caseStudyImage} alt="Case Study Illustration" />
                    </div>
                </div>
            </section>

            {/* Project Cards Section */}
            <section className="casestudy-projects-section">
                <div className="projects-container">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} />
                            <div className="project-content">
                                <p className="category">{project.category}</p>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Start Your Project Section */}
            <section className="startproject-section">
                <div className="startproject-wrapper">
                    <div className="startproject-title">
                        <span className="contact-label">CONTACT US</span>
                        <h2>Start Your Project</h2>
                        <div className="blue-line"></div>
                    </div>

                    <form className="startproject-form">
                        <div className="form-row">
                            <input type="text" placeholder="Name*" required />
                            <textarea placeholder="Your Message" required></textarea>
                        </div>
                        <div className="form-row">
                            <input type="email" placeholder="E-mail*" required />
                        </div>
                        <div className="form-row phone-row">
                            <select className="country-code">
                                <option>🇮🇳 (+91)</option>
                                <option>🇺🇸 (+1)</option>
                            </select>
                            <input type="tel" placeholder="Phone Number *" required />
                            <div className="captcha">
                                <input type="checkbox" />
                                <img src={recaptcha} alt="reCAPTCHA" />
                            </div>
                        </div>
                        <button type="submit" className="send-btn">SEND MESSAGE NOW</button>
                    </form>
                </div>
            </section>

        </>
    );
};

export default CaseStudySection;
