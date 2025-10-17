import React, { useEffect, useRef, useState } from "react";
import "../styles/ContactSection.css";
import contactImg from "../assets/contact.png"; // Place your circular side image here

export default function ContactSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        function onScroll() {
            if (!visible && sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                if (top < window.innerHeight - 120) setVisible(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [visible]);

    return (
        <section className={`contact-section${visible ? " appear" : ""}`} ref={sectionRef}>
            <div className="contact-flex">
                {/* LEFT - Contact Form */}
                <div className="contact-form-block">
                    <h2 className="contact-title">
                        <span className="blue">Talk to us</span> today!
                    </h2>
                    <p className="contact-desc">
                        Drop us your queries, e-mail or call us. We are all ears!
                    </p>
                    <form className="contact-form" autoComplete="off">
                        <div className="contact-row">
                            <input className="contact-input" type="text" placeholder="Name*" required />
                            <input className="contact-input" type="email" placeholder="E-mail*" required />
                        </div>
                        <div className="contact-row">
                            <textarea className="contact-textarea" rows={2} placeholder="Your Message" required></textarea>
                        </div>
                        <div className="contact-row">
                            <select className="contact-select">
                                <option value="+91">🇮🇳 +91</option>

                            </select>
                            <input className="contact-input" type="tel" placeholder="Phone Number*" required />
                            <div className="captcha-wrap">
                                {/* Placeholder for CAPTCHA/checkbox */}
                                <input type="checkbox" required /> <span style={{ marginLeft: 5 }}>I'm not a robot</span>
                            </div>
                        </div>
                        <button className="contact-submit-btn" type="submit">SEND MESSAGE NOW</button>
                    </form>
                </div>
                {/* RIGHT - Image & Info */}
                <div className="contact-info-block">
                    <div className="contact-circle-img-wrap">
                        <img src={contactImg} alt="" className="contact-circle-img" />
                    </div>
                    <div className="contact-info-list">
                        <div className="info-title orange">Kolkata, India</div>
                        <div>WORDSYS LLC<br />GP Block, Sector V, Bidhannagar, Kolkata<br />West Bengal - 700091</div>
                        <div className="info-title orange" style={{ marginTop: '15px' }}>General Enquiries</div>
                        <div>crm.sws@scratchweb.solutions</div>
                        <div className="info-title orange" style={{ marginTop: '15px' }}>Business Phone:</div>
                        <div>
                            +91 6289909521 <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
