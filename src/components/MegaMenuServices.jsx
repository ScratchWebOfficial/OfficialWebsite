// src/components/MegaMenuServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/MegaMenuServices.css";

export default function MegaMenuServices({ visible, onClose, onItemClick }) {
    return (
        <div className={`mega-menu-services${visible ? " show" : ""}`}>
            <div className="mega-menu-close" onClick={onClose}>&times;</div>
            <div className="mega-menu-grid">
                <div className="mega-menu-column">
                    <h4>IT Services</h4>
                    <ul>
                        <li>
                            <Link to="/custom-software" onClick={onItemClick}>
                                Custom Software
                            </Link>
                        </li>
                        <li>
                            <Link to="/fullstackdevelopment" onClick={onItemClick}>
                                Full-Stack Web Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/it" onClick={onItemClick}>
                                IT Consulting Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/testing" onClick={onItemClick}>
                                Software Testing & QA
                            </Link>
                        </li>
                        <li>
                            <Link to="/digital" onClick={onItemClick}>
                                Digital Marketing
                            </Link>
                        </li>

                        <li>
                            <Link to="/out" onClick={onItemClick}>
                                Outsourced Product Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/softi" onClick={onItemClick}>
                                Software Development And IT Operations
                            </Link>
                        </li>
                        <li>
                            <Link to="/dataa" onClick={onItemClick}>
                                Data As A Service
                            </Link>
                        </li>

                    </ul>
                    <h4>Front End</h4>
                    <ul>
                        <li>
                            <Link to="/angular" onClick={onItemClick}>
                                Angular
                            </Link>
                        </li>
                        <li>
                            <Link to="/react" onClick={onItemClick}>
                                ReactJS
                            </Link>
                        </li>
                        <li>
                            <Link to="/vue" onClick={onItemClick}>
                                VueJS
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mega-menu-column">
                    <h4>Mobile</h4>
                    <ul>
                        <li>
                            <Link to="/mobile" onClick={onItemClick}>
                                Mobile App Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/ios" onClick={onItemClick}>
                                IOS
                            </Link>
                        </li>
                        <li>
                            <Link to="/android" onClick={onItemClick}>
                                Android
                            </Link>
                        </li>
                        <li>
                            <Link to="/native" onClick={onItemClick}>
                                React Native
                            </Link>
                        </li>
                        <li>
                            <Link to="/hybrid" onClick={onItemClick}>
                                Hybrid
                            </Link>
                        </li>
                        <li>
                            <Link to="/flutter" onClick={onItemClick}>
                                Flutter
                            </Link>
                        </li>
                        <li>
                            <Link to="/ionic" onClick={onItemClick}>
                                Ionic
                            </Link>
                        </li>
                        <li>
                            <Link to="/swift" onClick={onItemClick}>
                                Swift
                            </Link>
                        </li>


                    </ul>
                </div>

                <div className="mega-menu-column">
                    <h4>Server Side</h4>
                    <ul>
                        <li>
                            <Link to="/aic" onClick={onItemClick}>
                                AI Chatbot
                            </Link>
                        </li>
                        <li>
                            <Link to="/php" onClick={onItemClick}>
                                PHP
                            </Link>
                        </li>
                        <li>
                            <Link to="/laravel" onClick={onItemClick}>
                                Laravel
                            </Link>
                        </li>
                        <li>
                            <Link to="/symfony" onClick={onItemClick}>
                                Symfony
                            </Link>
                        </li>
                        <li>
                            <Link to="/node" onClick={onItemClick}>
                                NodeJS
                            </Link>
                        </li>

                    </ul>
                </div>

                <div className="mega-menu-column">
                    <h4>E-Commerce</h4>
                    <ul>
                        <li>
                            <Link to="/mag" onClick={onItemClick}>
                                Magento
                            </Link>
                        </li>
                        <li>
                            <Link to="/woo" onClick={onItemClick}>
                                WooCommerce
                            </Link>
                        </li>
                        <li>
                            <Link to="/spo" onClick={onItemClick}>
                                Shopify
                            </Link>
                        </li>
                    </ul>
                    <h4>CMS</h4>
                    <ul>
                        <li>
                            <Link to="/cms" onClick={onItemClick}>
                                Content Management System
                            </Link>
                        </li>
                        <li>
                            <Link to="/word" onClick={onItemClick}>
                                Wordpress
                            </Link>
                        </li>
                        <li>
                            <Link to="/drupal" onClick={onItemClick}>
                                Drupal
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mega-menu-column">
                    <h4>Hiring</h4>
                    <ul>
                        <li>
                            <Link to="/ddt" onClick={onItemClick}>
                                Dedicated Development Teams
                            </Link>
                        </li>
                        <li>
                            <Link to="/cto" onClick={onItemClick}>
                                CTO
                            </Link>
                        </li>
                        <li>
                            <Link to="/cmo" onClick={onItemClick}>
                                CMO
                            </Link>
                        </li>
                         <li>
                            <Link to="/agen" onClick={onItemClick}>
                                Agencies
                            </Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}
