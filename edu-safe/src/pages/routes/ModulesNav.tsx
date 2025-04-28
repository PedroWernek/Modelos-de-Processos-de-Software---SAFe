import React from "react";
import "../../css/Modules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import ImageButtom from "../../components/buttons/ImageButtom";

import img1 from "../../assets/img1home.webp";
import ModuleCarrousel from "../../components/ModuleCarrousel";

const LinksIniciante = [
  () => (
    <ImageButtom
      imgScr={img1}
      alt="Imagem 1"
      link="/modulos/conteudo/iniciante/1"
      imgSize="40"
    />
  ),
  () => (
    <ImageButtom
      imgScr={img1}
      alt="Imagem 2"
      link="/modulos/iniciante/2"
      imgSize="40"
    />
  ),
  () => (
    <ImageButtom
      imgScr={img1}
      alt="Imagem 3"
      link="/modulos/iniciante/3"
      imgSize="40"
    />
  ),
];

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
          <ModuleCarrousel Componentes={LinksIniciante} />
        </div>
        <div className="modules-content__intermediario">
          <h1 className="text-4">Intermediário</h1>
          <ModuleCarrousel Componentes={LinksIniciante} />
        </div>
        <div className="modules-content__avancado">
          <h1 className="text-4">Avançado</h1>
          <ModuleCarrousel Componentes={LinksIniciante} />
        </div>
      </div>
    </div>
  );
};

export default Modules;
