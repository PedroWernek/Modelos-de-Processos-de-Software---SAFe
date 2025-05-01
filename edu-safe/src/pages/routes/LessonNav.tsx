import React from "react";
import "../../css/ModulesNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import ImageButtom from "../../components/buttons/ImageButtom";

import img1 from "../../assets/img1home.webp";
import ImageCarrousel from "../../components/carousels/Carrousel";

const BeginnerLinks = [
  () => (
    <ImageButtom
      imgScr={img1}
      alt="Imagem 1"
      link="/modulos/conteudo/iniciante/1"
      imgSize="20"
    />
  ),
  () => (
    <ImageButtom
      imgScr={img1}
      alt="Imagem 2"
      link="/modulos/iniciante/2"
      imgSize="20"
    />
  ),
  () => (
    <ImageButtom
      imgScr={img1}
      alt="Imagem 3"
      link="/modulos/iniciante/3"
      imgSize="20"
    />
  ),
];

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
          <ImageCarrousel Componentes={BeginnerLinks} />
        </div>
        <div className="lesson-content__intermediario">
          <h1 className="text-4">Intermediário</h1>
          <ImageCarrousel Componentes={BeginnerLinks} />
        </div>
        <div className="lesson-content__avancado">
          <h1 className="text-4">Avançado</h1>
          <ImageCarrousel Componentes={BeginnerLinks} />
        </div>
      </div>
    </div>
  );
};

export default Lesson;
