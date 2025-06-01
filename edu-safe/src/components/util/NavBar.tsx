import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoEduSAFe from "../../assets/logoEduSAFe.png";
import api from "../../api";

const NavBar = () => {
  const navigate = useNavigate();
  const hasToken = localStorage.getItem("token") !== null;

  const [userLevel, setUserLevel] = useState<number>();

  useEffect(() => {
    api
      .get("/api/users/xp-level")
      .then((res) => {
        console.log("Dados do usuário:", res.data);
        setUserLevel(res.data.xp);
        console.log("Nível do usuário:", res.data.level);
      })
      .catch((error) => {
        console.error("Erro ao obter o nível do usuário:", error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <img className="navbar-logo" src={logoEduSAFe} alt="logo EduSAFe" />
      <nav className="navbar-links">
        <Link to="/">Início</Link>
        {hasToken ? (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              className="xp"
              style={{
                backgroundColor: "#131515",
                padding: "10px 20px",
                borderRadius: "20px",
                color: "yellow",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                fontSize: "0.8rem",
              }}>
              <span className="xp-value">{userLevel} xp</span>
            </div>
            <Link to={"/"} onClick={handleLogout} className="logout-button">
              Sair
            </Link>
          </div>
        ) : (
          <Link to="/autenticar">Entrar</Link>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
