import React from 'react';
import '../styles/Contact.css';
import contactImage from '../assets/contacthero.png'; // replace with actual image

const Contact = () => {
    return (
        <section className="contact-hero-section">
            <div className="contact-hero-container">
                {/* Left Content */}
                <div className="contact-hero-left">
                    <h1>
                        <span className="highlight-blue">Any Query In Mind?</span><br />
                        <span className="bold-black">Let’s Talk It Out!</span>
                    </h1>
                    <p>
                        With An Experience Of Over 5 Years Under Our Belt, We Have Ample Expertise To Deliver The Best Business Solutions
                    </p>
                    <button className="contact-button">SCHEDULE A MEETING</button>
                </div>

                {/* Right Image */}
                <div className="contact-hero-right">
                    <img src={contactImage} alt="Contact Illustration" />
                </div>
            </div>


            <section className="contact-info-form-section">
                <div className="contact-info-form-container">
                    {/* Left Contact Info */}
                    <div className="contact-info">
                        <h2><span className="highlight-blue">Wanna Chat?</span><br /><span className="bold-black">We Hear You!</span></h2>
                        <div className="underline"></div>

                        <div className="contact-block">
                            <h4><i className="fas fa-map-marker-alt icon-orange"></i> Address</h4>
                            <p><strong>INDIA-Kolkata</strong><br />
                                GP Block, Setor V, Bidhannagar, Kolkata, West Bengal - 700091</p>

                        </div>

                        <div className="contact-block">
                            <h4><i className="fas fa-map-pin icon-orange"></i> Business Address</h4>
                            <p>INDIA-Kolkata<br />
                                GP Block, Setor V, Bidhannagar, Kolkata, West Bengal - 700091</p>
                        </div>

                        <div className="contact-block">
                            <h4><i className="fas fa-envelope icon-orange"></i> Email</h4>
                            <p>crm.sws@scratchweb.solutions</p>
                        </div>

                        <div className="contact-block">
                            <h4><i className="fas fa-phone-alt icon-orange"></i> Phone</h4>
                            <p><img src="https://flagcdn.com/in.svg" alt="IN" width="20" /> +91 628990521<br /></p>

                        </div>

                        <div className="social-icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Name*" required />
                            <input type="email" placeholder="E-mail*" required />
                            <div className="phone-input">
                                <select>
                                    <option value="+91">🇮🇳 (+91)</option>
                                    
                                </select>
                                <input type="tel" placeholder="Phone Number *" required />
                            </div>
                            <input type="text" placeholder="Subject*" required />
                            <textarea rows="5" placeholder="Message" />
                            <input type="file" />
                            <div className="recaptcha-box">
                                <input type="checkbox" /> I'm not a robot
                            </div>
                            <button type="submit" className="contact-submit-btn">GET STARTED</button>
                        </form>
                    </div>
                </div>
            </section>


        </section>

    );
};

export default Contact;
