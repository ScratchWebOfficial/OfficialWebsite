<<<<<<< Updated upstream
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
=======
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha'; // ✅ add this package
import '../styles/Contact.css';
import contactImage from '../assets/contacthero.png';

const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_SITE_KEY';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [file, setFile] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [state, handleSubmit] = useForm(FORM_ID);

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setFile(null);
      setCaptchaValue(null);
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle file select
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // ✅ Handle reCAPTCHA
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  // ✅ Handle form submit manually (for file + captcha)
  const handleCustomSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    if (file) formDataToSend.append('attachment', file);
    formDataToSend.append('g-recaptcha-response', captchaValue);

    const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setFile(null);
      setCaptchaValue(null);
    } else {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section className="contact-hero-section">
      <div className="contact-hero-container">
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

        <div className="contact-hero-right">
          <img src={contactImage} alt="Contact Illustration" />
        </div>
      </div>

      <section className="contact-info-form-section">
        <div className="contact-info-form-container">
          <div className="contact-info">
            <h2><span className="highlight-blue">Wanna Chat?</span><br /><span className="bold-black">We Hear You!</span></h2>
            <div className="underline"></div>

            <div className="contact-block">
              <h4><i className="fas fa-map-marker-alt icon-orange"></i> Address</h4>
              <p><strong>INDIA-Kolkata</strong><br />
                GP Block, Sector V, Bidhannagar, Kolkata, West Bengal - 700091</p>
            </div>

            <div className="contact-block">
              <h4><i className="fas fa-envelope icon-orange"></i> Email</h4>
              <p>crm.sws@scratchweb.solutions</p>
            </div>

            <div className="contact-block">
              <h4><i className="fas fa-phone-alt icon-orange"></i> Phone</h4>
              <p><img src="https://flagcdn.com/in.svg" alt="IN" width="20" /> +91 628990521</p>
            </div>

            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleCustomSubmit} encType="multipart/form-data">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="phone-input">
                <select aria-label="Country code" defaultValue="+91">
                  <option value="+91">🇮🇳 (+91)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* ✅ File Upload */}
              <div className="file-upload">
                <label htmlFor="fileUpload">Attach a file (optional):</label>
                <input
                  type="file"
                  id="fileUpload"
                  name="attachment"
                  accept=".jpg,.png,.pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
              </div>

              {/* ✅ Google reCAPTCHA */}
              <div className="captcha-container" style={{ margin: '10px 0' }}>
                <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                {state.submitting ? 'Sending…' : 'GET STARTED'}
              </button>

              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              {state.succeeded && <p className="success">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </section>
    </section>
  );
>>>>>>> Stashed changes
};

export default Contact;
