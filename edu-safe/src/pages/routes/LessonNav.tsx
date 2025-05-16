import React from "react";
import "../../css/ModulesNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import Carrousel from "../../components/carousels/Carrousel";
import { IntermediaryLinks } from "../../data/lessonLinks/Intermediary";
import { BeginnerLinks } from "../../data/lessonLinks/Begginer";
import { AdvancedLinks } from "../../data/lessonLinks/Advanced";

const Lesson = () => {
  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1 className="text-2 title">Módulos</h1>
        <p className="text-2 subtitle">Comece aqui sua nova etapa</p>
        <FontAwesomeIcon
          icon={faAnglesDown}
          size="6x"
          style={{ color: "#c8fff4", paddingTop: "3rem" }}
        />
      </div>
      <div className="lesson-content">
        <div className="lesson-content__iniciante">
          <h1 className="text-4">Iniciante</h1>
          <Carrousel Componentes={BeginnerLinks} />
        </div>
        <div className="lesson-content__intermediario">
          <h1 className="text-4">Intermediário</h1>
          <Carrousel Componentes={IntermediaryLinks} />
        </div>
        <div className="lesson-content__avancado">
          <h1 className="text-4">Avançado</h1>
          <Carrousel Componentes={AdvancedLinks} />
        </div>
      </div>
    </div>
  );
};

export default Lesson;
