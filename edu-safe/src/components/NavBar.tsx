import React from "react";
import { Link } from "react-router-dom";
import logoEduSAFe from "../assets/logoEduSAFe.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logoEduSAFe} alt="logo EduSAFe" />
      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="">Entrar</Link>
      </nav>
    </div>
  );
};

export default NavBar;
