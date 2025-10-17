import React from "react";
import "../styles/AboutUsSection.css";
import aboutHero from "../assets/aboutHero.png"; // use your uploaded image
import teamCollab from "../assets/teamCollab.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/i.png";
import growthCard from "../assets/growthcard.png";
import looknofurther from "../assets/looknofurther.png";
import latestProjectImg from "../assets/latestproject.png";


const AboutUsSection = () => {
    return (
        <div className="aboutus-hero-section">
            <div className="aboutus-left">
                <h1>
                    <span className="blue">Stand</span><br />Steadfast
                </h1>
                <p>In the Changing Digital Landscape</p>
                <button className="meeting-btn">SCHEDULE A MEETING</button>
            </div>
            <div className="aboutus-right">
                <img src={aboutHero} alt="About Us Illustration" />
            </div>
            <div className="aboutus-milestone-section">
                <div className="milestone-left">
                    <h2>
                        <span className="blue">Witness Milestones</span><br />
                        in Your Digital Presence & Online Endeavours
                    </h2>
                    <div className="underline"></div>
                    <p>
                        Backed by our years-long experience, unmatchable digital prowess, unbridled innovation,
                        and unperturbed commitment to quality, we have become a potent force to reckon with in
                        the swiftly transforming digital landscape of India and beyond. We are aimed at upgrading
                        your benchmarks of power-packed online communication and empowering your digital presence
                        with our business-driven, result-yielding and premium quality online marketing services.
                        Our main goal is to be instrumental in metamorphosing your business into a highly coveted
                        brand and helping you stay infallible against the changing landscape of digital disruption.
                    </p>
                </div>
                <div className="milestone-right">
                    <img src={teamCollab} alt="Team Collaboration" />
                </div>
            </div>
            <div className="aboutus-timeline-section">
                <h3><span className="blue">OUR JOURNEY</span> AS A PIONEERING <strong>DIGITAL MARKETING CONGLOMERATE</strong></h3>
                <p className="timeline-subtext">Witness Milestones in Your Digital Presence & Online Endeavours.</p>

                <div className="timeline-container">
                    <div className="timeline-item left">
                        <h4>The Quantum Leap</h4>
                        <p>From a few basic digital marketing services, we have continued thriving and included an extensive line-up of IT and online marketing solutions, ranging across various domains.</p>
                    </div>
                    <div className="timeline-img">
                        <img src={image1} alt="Quantum Leap" />
                    </div>

                    <div className="timeline-img">
                        <img src={image2} alt="Success On the Horizon" />
                    </div>
                    <div className="timeline-item right">
                        <h4>Success On the Horizon</h4>
                        <p>Over the past few years, we have successfully progressed on our journey, overcome obstacles and experienced success at almost every turn – it’s because we hustled hard and believed in ourselves!</p>
                    </div>

                    <div className="timeline-item left">
                        <h4>A Meteoric Rise</h4>
                        <p>Taking the quantum leap into the digital arena wasn’t easy! However, with our unperturbed conviction and sheer hard work, we have successfully taken our venture to a new stature.</p>
                    </div>
                    <div className="timeline-img">
                        <img src={image3} alt="A Meteoric Rise" />
                    </div>

                    <div className="timeline-img">
                        <img src={image4} alt="We Began from Scratch" />
                    </div>
                    <div className="timeline-item right">
                        <h4>We Began from Scratch</h4>
                        <p>Established in the year 2011, our journey has been about transition – from a start-up looking to get a foot in the door to an established brand catering to numerous clients worldwide.</p>
                    </div>

                    <div className="timeline-end">
                        <div className="circle">Be Part Of Our Story!</div>
                    </div>
                </div>
            </div>
            <div className="aboutus-growthjourney-section">
                <div className="growthjourney-left">
                    <img src={growthCard} alt="Business Card" />
                </div>
                <div className="growthjourney-right">
                    <div className="growthjourney-heading">
                        <h2>
                            <span className="blue">Growth Is A Two-Way Journey</span><br />
                            We Wish To Embark On
                        </h2>
                    </div>
                    <div className="growthjourney-grid">
                        <div className="growth-box">
                            <h4>Add Real Value To Your Brand</h4>
                            <p>We provide an array of practical, technically-sound & cost-effective IT solutions, which cater to your business successfully.</p>
                        </div>
                        <div className="growth-box">
                            <h4>We Assure Quality Like No Other</h4>
                            <p>We have a team of quality assurance experts to ensure the optimum quality of our apps & software prior to the delivery.</p>
                        </div>
                        <div className="growth-box">
                            <h4>Alignment Between Tech & Innovation</h4>
                            <p>Optimizing the quality of our works, we enhance the alignment between technology & business, thus maximizing our efficiency.</p>
                        </div>
                        <div className="growth-box">
                            <h4>We Consider ‘You’ As Our Top Priority</h4>
                            <p>We intend to keep enhancing our services, nurturing our skills & using our experience to delight more & more customers worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus-looknofurther-section">
                <div className="looknofurther-left">
                    <h2><span className="blue">Look No</span> Further</h2>
                    <p>
                        We do not deliver services that are not meant for the long run. We understand how essential success
                        can be for your business and we don’t try to deliver something that we don’t believe in.
                    </p>
                    <button className="looknofurther-btn">FOLLOW THE LINK</button>
                </div>
                <div className="looknofurther-right">
                    <img src={looknofurther} alt="Team Illustration" />
                </div>
            </div>
            <div className="aboutus-latestprojects-section">
                <div className="latestprojects-left">
                    <img src={latestProjectImg} alt="Latest Projects Illustration" />
                </div>
                <div className="latestprojects-right">
                    <h2>
                        <span className="blue">Stay in the Know With Our Latest</span><br />
                        Technologies and Latest Projects
                    </h2>
                    <button className="latestprojects-btn">GET STARTED</button>
                </div>
            </div>

        </div>
    );
};


export default AboutUsSection;