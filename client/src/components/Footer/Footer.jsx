import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { footerVariant } from "../../utils/helpers";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.div
      className="footer"
      variants={footerVariant}
      whileInView="animate"
      initial="initial"
      viewport={{
        once: true,
      }}
    >
      <div className="fc fc1">
        <h2>Mastervance</h2>
        <p>
          Chrome notes topics of interest based on your recent browsing history.
        </p>
      </div>
      <div className="fc fc2">
        <p className="ul">Resources</p>
        <ul>
          <Link to="/community" className="unformat-link">
            <li>Community</li>
          </Link>
          <Link to="/mentor" className="unformat-link">
            <li>Mentors</li>
          </Link>
          <Link to="/about" className="unformat-link">
            <li>About Us</li>
          </Link>
          <Link to="/courses" className="unformat-link">
            <li>Courses</li>
          </Link>
        </ul>
      </div>
      <div className="fc fc3">
        <p className="ul">Company</p>
        <ul>
          <Link to="/privacypolicy" className="unformat-link">
            <li>Privacy Policy</li>
          </Link>
          <Link to="/refundpolicy" className="unformat-link">
            <li>Refund Policy</li>
          </Link>
          <Link to="/terms_and_conditions" className="unformat-link">
            <li>Terms & Conditions</li>
          </Link>
          <Link to="/faq" className="unformat-link">
            <li>FAQ</li>
          </Link>
        </ul>
      </div>
      <div className="fc fc4">
        <p className="ul">Get In Touch</p>
        <div className="icons">Icons to be added</div>
        <p className="ul">Contact Us</p>
        <p>Ph.No 9391232598</p>
        <p>Email mastervance16@gmail.com</p>
      </div>
    </motion.div>
  );
};

export default Footer;
