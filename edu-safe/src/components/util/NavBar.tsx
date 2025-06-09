import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoEduSAFe from "../../assets/logoEduSAFe.png";
import api from "../../api";

const NavBar = () => {
  const navigate = useNavigate();
  const hasToken = localStorage.getItem("token") !== null;

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <img className="navbar-logo" src={logoEduSAFe} alt="logo EduSAFe" />
      <nav className="navbar-links" style={{ gap: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Início</Link>
          <Link to="/modulos">Módulos</Link>
        </div>
        <div>
          {hasToken ? (
            <Link to={"/"} onClick={handleLogout} className="logout-button">
              Sair
            </Link>
          ) : (
            <Link to="/autenticar">Entrar</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
