import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';
import contactImage from '../assets/contacthero.png';
 
const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID';
 
const Contact = () => {
  // keep your controlled inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
 
  // formspree hook
  const [state, handleSubmit] = useForm(FORM_ID);
 
  // reset inputs on success
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }
  }, [state.succeeded]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };
 
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
 
      {/* Contact Info & Form Section */}
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
            {/* IMPORTANT: use Formspree's handleSubmit */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
              />
              <input
                type="email"
                name="email"           // Formspree reads this and sets Reply-To
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={120}
              />
              <div className="phone-input">
                <select aria-label="Country code" defaultValue="+91">
                  <option value="+91">🇮🇳 (+91)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={20}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                required
                maxLength={120}
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                maxLength={2000}
              />
 
              {/* Hidden extras */}
              <input type="hidden" name="_subject" value="New Contact Submission" />
              {/* Optional CC to multiple recipients (comma separated) */}
              {/* <input type="hidden" name="_cc" value="ops@yourdomain.com,sales@yourdomain.com" /> */}
              {/* Honeypot (anti-bot) */}
              <input type="text" name="hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
 
              <button type="submit" className="contact-submit-btn" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'GET STARTED'}
              </button>
 
              {/* Inline errors & status */}
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              {state.succeeded && <p className="success" style={{ marginTop: 8 }}>Message sent successfully!</p>}
              {state.errors?.length > 0 && <p className="error" style={{ marginTop: 8 }}>Please fix the errors above.</p>}
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};
 
export default Contact;