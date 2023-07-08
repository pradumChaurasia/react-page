import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = ({isBlurred}) => {
    return (
        <div className={`footer-wrapper  ${isBlurred ? 'blurred':''}`}>
            <div className="footer-sub">
                <div className="footer-section-one">
                    <div className="footer-logo-container">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="footer-icons">
                        <FaFacebookF />
                        <BsTwitter />
                        <SiLinkedin />
                        <BsYoutube />
                    </div>
                </div>

                <div className="footer-section-columns">

                    <span className="span-heading">Pages</span>
                    <span>About us</span>
                    <span>Mentors</span>
                    <span>Sessions</span>
                    <span>Sign up</span>

                </div>
                <div className="footer-section-columns-2">
                    <span className="span-heading">Contact</span>
                    <p>

                        City, State 12345
                        123 Main Street
                    </p>

                    <span className="span-contact">contact@mentorhub.com</span>

                    <span className="span-number"> (123) 456 - 7890</span>
                </div>




            </div>
            <div className="copyright">
                <p>© 2023 Mentor Hub. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;