import React from "react";
import "../styles/HomeContactSection.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import indiaFlag from "../assets/india-flag.png";
import usaFlag from "../assets/usa-flag.png";

const HomeContactSection = () => {
    return (
        <div className="home-contact-section" id="home-contact-section">
            <div className="contact-left">
                <h2>Talk to us today!</h2>
                <p>Drop us your queries, e-mail or call us. We are all ears!</p>

                <div className="contact-form">
                    <div className="form-row">
                        <input type="text" placeholder="Name*" />
                        <textarea placeholder="Your Message" />
                    </div>
                    <input type="email" placeholder="E-mail*" />

                    <div className="form-phone-row">
                        <div className="country-code">
                            <img src={indiaFlag} alt="India Flag" />
                            <span>(+91)</span>
                        </div>
                        <input type="tel" placeholder="Phone Number *" />
                    </div>

                    <div className="form-row recaptcha-row">
                        <div className="recaptcha-box">
                            <input type="checkbox" />
                            <label>I'm not a robot</label>
                        </div>
                    </div>

                    <button className="submit-btn">SEND MESSAGE NOW</button>
                </div>
            </div>

            <div className="contact-right">
                <div className="contact-circle">
                    <div className="contact-info">
                        <p className="icon-line">
                            <FaMapMarkerAlt className="icon" />
                            <strong>Postal Address :</strong>
                        </p>
                        <p><span className="blue-text">INDIA-Kolkata</span><br />
                            Unit No: 411, 4th Floor, PS IXL Building, Chinar Park, Kolkata, West Bengal 700136
                        </p>
                        <p><span className="blue-text">USA-Raleigh</span><br />
                            WORDSYS LLC<br />
                            4030 WAKE FOREST RD STE 349, RALEIGH, NC 27609
                        </p>

                        <p className="icon-line">
                            <FaEnvelope className="icon" />
                            <strong>General Enquiries :</strong>
                        </p>
                        <p>info@wordsystech.com</p>

                        <p className="icon-line">
                            <FaPhoneAlt className="icon" />
                            <strong>Business Phone :</strong>
                        </p>
                        <p>
                            <img src={indiaFlag} alt="IN" className="flag-icon" /> +91 9748920014<br />
                            <img src={usaFlag} alt="US" className="flag-icon" /> +1 888 332 1242
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContactSection;
