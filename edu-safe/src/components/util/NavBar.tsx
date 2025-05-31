import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoEduSAFe from "../../assets/logoEduSAFe.png";

const NavBar = () => {
  const navigate = useNavigate();
  const hasToken = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <img className="navbar-logo" src={logoEduSAFe} alt="logo EduSAFe" />
      <nav className="navbar-links">
        <Link to="/">Início</Link>
        {hasToken ? (
          <Link to={"/"} onClick={handleLogout} className="logout-button">
            Sair
          </Link>
        ) : (
          <Link to="/autenticar">Entrar</Link>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
