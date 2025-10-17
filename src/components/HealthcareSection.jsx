import React from "react";
import "../styles/HealthcareSection.css";
import healthcareHero from "../assets/healthcarehero.png";
import doctorTechImg from "../assets/doctortech.png";
import require from "../assets/require.png";// update the path as needed

const HealthcareSection = () => {
    return (
        <div className="healthcare-hero-section">
            <div className="healthcare-left">
                <h1>
                    <span className="blue">Future Health-</span><br />
                    <span className="dark">Tech Solutions</span>
                </h1>
                <p>Exploring New Horizon</p>
                <button>SCHEDULE A MEETING</button>
            </div>
            <div className="healthcare-right">
                <img src={healthcareHero} alt="Doctor Illustration" />
            </div>
            <div className="digital-healthcare-section">
                <div className="dhc-left">
                    <img src={doctorTechImg} alt="Doctor using tablet" />
                </div>
                <div className="dhc-right">
                    <h2>
                        <span className="blue">Digital Healthcare</span> <span className="dark">Solutions</span>
                    </h2>
                    <p className="intro">
                        Quality being the pillar of our <strong>healthcare IT solutions</strong>, we shall provide your healthcare venture
                        with a digital makeover besides adding betterment to your clinical administration activities,
                        thus preparing you to stay abreast of the cut-throat competition and challenges.
                    </p>

                    <div className="service-point">
                        <span className="icon">🩺</span>
                        <div>
                            <h4 className="blue">Advanced Healthcare Software</h4>
                            <p>
                                We offer to create a customized healthcare management software to meet your
                                exclusive clinical requirements for your medical facility and make your diagnosis,
                                treatment, and patient care integrated and improved through our cutting-edge systems.
                            </p>
                        </div>
                    </div>

                    <div className="service-point">
                        <span className="icon">📋</span>
                        <div>
                            <h4 className="blue">Personalized Tech-Care</h4>
                            <p>
                                Our experienced & efficient <strong>healthcare software developers</strong> can improve your offerings,
                                taking care of software modifications/upgrades/fault-tracing needs, thereby making your system more effective.
                            </p>
                        </div>
                    </div>

                    <div className="service-point">
                        <span className="icon">🧠</span>
                        <div>
                            <h4 className="blue">Improved Healthcare Experience</h4>
                            <p>
                                Our <strong>healthcare IT</strong> and <strong>software development</strong> solutions deliver user-centric
                                experiences for order management, e-prescribing, or digital pharmacy management.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="system-support-section">
                <div className="support-left">
                    <h2>
                        <span className="blue">Manage Your Healthcare Smoothly</span><br />
                        <span className="dark">With Our System Support</span>
                    </h2>
                    <h4>Leverage Your Medical Facilities With Our Healthcare IT Solutions</h4>
                    <p>
                        Being at the forerunner of bringing innovation with our edgier <strong>healthcare</strong> software &amp;
                        <strong> app development services</strong>, we aim to add growth &amp; efficiency in your medical departments
                        &amp; other facilities associated with the same! We guarantee streamlined manageability &amp;
                        enhanced operations to help you combat every emerging challenge, plaguing the healthcare industry.
                    </p>
                    <ul className="support-list">
                        <li><span className="orange">01</span> Fault-Free Medical Management System Maintenance.</li>
                        <li><span className="orange">02</span> Digital Database To Monitor Patient Diagnosis.</li>
                        <li><span className="orange">03</span> User-Friendly Application & Fault Recognition.</li>
                        <li><span className="orange">04</span> E-prescribing Through E-medical record system.</li>
                        <li><span className="orange">05</span> Robust Health-Tech Consultation & advisory.</li>
                    </ul>
                    <button className="start-button">LET’S START</button>
                </div>
                <div className="support-right">
                    <img src={require} alt="System Support" />
                </div>
            </div>
            <div className="trusted-software-section">
                <h2 className="trusted-heading">
                    <span className="blue">Your Trusted</span> <span className="dark">Healthcare Software</span>
                </h2>
                <p className="trusted-subtext">
                    Cost-Friendly, Dynamic & Advanced Healthcare System.
                </p>
                <div className="trusted-features-grid">
                    <div className="trusted-card">
                        <div className="icon orange">🙋‍♂️</div>
                        <h4>System That Satisfy Patients</h4>
                        <p>
                            Our <strong>software development</strong> solutions <strong>in medical field</strong> can leverage your clinical
                            work-flow in diagnosis, treatment & medicine procurement, which results in more effective treatment & satisfied patients.
                        </p>
                    </div>
                    <div className="trusted-card">
                        <div className="icon orange">📈</div>
                        <h4>Enrich Reputation</h4>
                        <p>
                            With the support of advanced & integrated healthcare software, software will enhance your clinical efficiency through
                            better electronic health records and efficient delivery of services, resulting in a more significant reputation.
                        </p>
                    </div>
                    <div className="trusted-card">
                        <div className="icon orange">🖥️</div>
                        <h4>Healthcare Automation</h4>
                        <p>
                            With the robust support of our advanced healthcare software, you will create an integrated health information technology
                            that will help you build clinical automation for your healthcare facility.
                        </p>
                    </div>
                    <div className="trusted-card">
                        <div className="icon orange">🚫</div>
                        <h4>Reduce Healthcare Mistakes</h4>
                        <p>
                            You will be able to systemize your clinical operations in your medical infrastructure with our advanced clinical decision
                            support software & cutting-edge electronic medical record system, which will reduce clinical error significantly.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HealthcareSection;
