import React from "react";
import "../styles/FooterMegaMenu.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import indiaFlag from "../assets/india-flag.png"; // adjust if path differs

const FooterMegaMenu = () => {
  return (
    <footer className="home-footer-section" id="home-footer-section">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>TECHNOLOGIES</h4>
          <ul>
            <li>Blockchain</li>
            <li>Artificial Intelligence</li>
            <li>PHP Framework</li>
            <li>Custom UI</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>SERVICES</h4>
          <ul>
            <li>Custom Software</li>
            <li>Mobile App Development</li>
            <li>Full-Stack Web Development</li>
            <li>IT Consulting Services</li>
            <li>Software Testing & QA</li>
            <li>Digital Marketing</li>
            <li>Content Management System</li>
            <li>Outsourced Product Development</li>
            <li>AI Chatbot</li>
            <li>Software Development And IT Operations</li>
            <li>Dedicated Development Teams</li>
            <li>CTO</li>
            <li>CMO</li>
            <li>Agencies</li>
            <li>Data As A Service</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Codeigniter</li>
            <li>Symfony</li>
            <li>NodeJS</li>
            <li>Angular</li>
            <li>ReactJS</li>
            <li>VueJS</li>
            <li>Magento</li>
            <li>WooCommerce</li>
            <li>Shopify</li>
            <li>Wordpress</li>
            <li>Drupal</li>
            <li>IOS</li>
            <li>Android</li>
            <li>React Native</li>
            <li>Hybrid</li>
            <li>Flutter</li>
            <li>Ionic</li>
            <li>Swift</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>INDUSTRIES</h4>
          <ul>
            <li>Construction</li>
            <li>Healthcare</li>
            <li>Retail & E-Commerce</li>
            <li>InfoTech</li>
            <li>Automotive & Logistics</li>
          </ul>

          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>News</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>OUR WORK</h4>
          <ul>
            <li>Case Study</li>
            <li>Portfolio</li>
          </ul>

          <h4>CONNECT</h4>
          <div className="footer-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>

          <p className="footer-subscribe-text">
            Keep upto date with latest news and update <br />
            about Wordsys, simply subscribe with your email address.
          </p>

          <div className="footer-subscribe">
            <input type="email" placeholder="Email Address" />
            <button>➤</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ScratchWeb Solutions Pvt. Ltd. All Rights Reserved. Powered by <span className="blue-link">ScratchWeb</span></p>
        <div className="footer-links">
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
          <span>Sitemap</span>
        </div>
        <div className="footer-flag">
          <img src={indiaFlag} alt="India Flag" />
          <span>India | EN</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterMegaMenu;
