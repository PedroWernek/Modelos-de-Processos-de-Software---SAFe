import React from "react";
import "../../css/Modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const Modules = () => {
  return (
    <div className="modules-container">
      <div className="modules-header">
        <h1 className="text-2 title">Módulos</h1>
        <p className="text-2 subtitle">Comece aqui sua nova etapa</p>
        <FontAwesomeIcon
          icon={faAnglesDown}
          size="6x"
          style={{ color: "#c8fff4", paddingTop: "3rem" }}
        />
      </div>
      <div className="modules-content">
        <div className="modules-content__iniciante">
          <h1 className="text-4">Iniciante</h1>
          <div className=""></div>
        </div>
        <div className="modules-content__intermediario">
          <h1 className="text-4">Intermediário</h1>
        </div>
        <div className="modules-content__avancado">
          <h1 className="text-4">Avançado</h1>
        </div>
      </div>
    </div>
  );
};

export default Modules;
