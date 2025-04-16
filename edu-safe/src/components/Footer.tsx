import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import logoEduSAFe from "../assets/logoEduSAFe.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="footer-logo" src={logoEduSAFe} alt="logo EduSAFe" />
        <nav className="footer-links">
          <Link className="footer-links--link" to="/">
            Sobre Nós
          </Link>
          <Link className="footer-links--link" to="">
            Termos de Serviço
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
