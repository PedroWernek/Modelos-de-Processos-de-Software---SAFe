import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";
import logoEduSAFe from "../../assets/logoEduSAFe.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="footer-logo" src={logoEduSAFe} alt="logo EduSAFe" />
        <nav className="footer-links"></nav>
      </div>
    </footer>
  );
};

export default Footer;
