import React from "react";
import "../styles/CustomSoftwareSection.css";
import heroImage from "../assets/customsoftware-hero.png"; // Use the correct path
import growthImage from "../assets/customsoftware-growth.png";
import initiationIcon from "../assets/initiation.png";
import analysisIcon from "../assets/analysis.png";
import designIcon from "../assets/design1.png";
import glimpseIcon from "../assets/glimpse.png";
import qualityIcon from "../assets/quality.png";
import deploymentIcon from "../assets/deployment.png";
import growthIcon from "../assets/growth-icon.png";
import integrationIcon from "../assets/integration-icon.png";
import complianceIcon from "../assets/compliance-icon.png";

const CustomSoftwaresection = () => {
  const steps = [
    { icon: initiationIcon, title: "Project Initiation" },
    { icon: analysisIcon, title: "Business Analysis" },
    { icon: designIcon, title: "Design Concept" },
    { icon: glimpseIcon, title: "A Glimpse Into" },
    { icon: qualityIcon, title: "Quality Assurance" },
    { icon: deploymentIcon, title: "Deployment" },
  ];
  return (
    <div className="customsoftware-hero-section" id="customsoftware-hero-section">
      <div className="customsoftware-left">
        <h1>
          <span className="blue-text">Transform Your Business In</span><br />
          This Digital Diaspora
        </h1>
        <p>With Customized, Intuitive, And Next-Generation Software Development Solutions</p>
        <button className="customsoftware-btn">SCHEDULE A MEETING</button>
      </div>
      <div className="customsoftware-right">
        <img src={heroImage} alt="Software Development Cycle" />
      </div>
      <div className="customsoftware-growth-section" id="customsoftware-growth-section">
        <div className="customsoftware-growth-left">
          <h2>
            Premium Custom Software Development <br />
            Services in India <span className="blue-text">To Fuel Your Growth &<br />Fulfil Your Goals</span>
          </h2>
          <div className="underline" />
          <p>
            With an objective of skyrocketing your business growth, improving your user-experience and
            maximizing your turnover, <strong>Wordsys</strong> as a software development company in India,
            enrich our <strong>custom software development services</strong> strategies with a multitude of
            cutting-edge technologies. Our customer-centric approach has led us deliver industry-specific software
            solutions that match your exact expectations.
            <br /><br />
            Be it for personalized software development, testing software, assuring quality or offering software support –
            we shall get you covered! With a confluence of our tech-driven thinking and a low-risk process performed across
            multiple verticals, we shall reset your business growth resolving even the most complex challenges.
          </p>
          <button>SAY ‘HI’ FOR A FREE CONSULTATION!</button>
        </div>
        <div className="customsoftware-growth-right">
          <img src={growthImage} alt="Software Gears Illustration" />
        </div>
      </div>
      <div className="customsoftware-process-section" id="customsoftware-process-section">
        <p className="process-subtitle">A Glimpse Into</p>
        <h2>
          How We Go About <span className="blue-text">The Development Process</span>
        </h2>
        <div className="process-flow-container">
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className="hexagon">
                <img src={step.icon} alt={step.title} />
              </div>
              <p>{step.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="customsoftware-outcome-section" id="customsoftware-outcome-section">
        <p className="outcome-subtitle">Engineering</p>
        <h2>
          Greater Software Solutions to <br />
          <span className="blue-text">Experience Better Outcomes</span>
        </h2>
        <div className="outcome-card-container">
          <div className="outcome-card">
            <img src={growthIcon} alt="Business Growth" />
            <h3>Business Growth</h3>
            <p>
              You can support your enterprise infrastructure with industry-specific and scalable software solutions, which will boost your business’s key facets. Backed by our industry-centric skills and expertise, we can ideate, build and scale premium software as per your business needs.
            </p>
          </div>
          <div className="outcome-card">
            <img src={integrationIcon} alt="Software Integration" />
            <h3>Software Integration</h3>
            <p>
              We can help in augmenting your software solutions; boost their efficacy with upgraded features, and transform them with the cutting-edge technologies such as Internet-of-Things, Blockchain, Artificial Intelligence, and more. Besides, we can build scalable, secure & intuitive software for you, too.
            </p>
          </div>
          <div className="outcome-card">
            <img src={complianceIcon} alt="Compliance Consulting" />
            <h3>Compliance Consulting</h3>
            <p>
              Our prime motto is to ideate, create and develop industry-standard software solutions, which can comply with your business standards, regulations, and more. Our skilled and efficient experts can make your software development and quality analysis procedures 100% compliant with the current industry status quo.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CustomSoftwaresection;
