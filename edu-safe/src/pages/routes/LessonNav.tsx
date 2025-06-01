import React, { use, useEffect, useState } from "react";
import "../../css/ModulesNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import Carousel from "../../components/random/carousels/Carousel";
import { IntermediaryLinks } from "../../data/lessonLinks/Intermediary";
import { BeginnerLinks } from "../../data/lessonLinks/Beginner";
import { AdvancedLinks } from "../../data/lessonLinks/Advanced";
import CustomButton from "../../components/random/buttons/CustomButton";
import api from "../../api";

const Lesson = () => {
  const [userLevel, setUserLevel] = useState<number>();

  useEffect(() => {
    api
      .get("/api/users/xp-level")
      .then((res) => {
        setUserLevel(res.data.xp);
      })
      .catch((error) => {
        console.error("Erro ao obter o nível do usuário:", error);
      });
  }, []);

  if (!localStorage.getItem("token")) {
    return (
      <div
        className="lesson-container"
        style={{
          height: "90dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div
          className="lesson-header"
          style={{
            height: "100dvh",
            padding: "0",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <h1 className="text-2 title">Acesso Negado</h1>
          <p className="text-2 subtitle">
            Você precisa estar logado para acessar os módulos.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <CustomButton
              backgroundColor="#0d183a"
              borderColor="white"
              borderTickness="2px"
              textColor="white"
              text="Voltar"
              linkNav="/"
              width="50px"
            />
            <CustomButton
              backgroundColor="#3ac7a6"
              borderColor="#1c1f2c"
              borderTickness="2px"
              textColor="#1c1f2c"
              linkNav={
                localStorage.getItem("token") != null
                  ? "/modulos"
                  : "/autenticar"
              }
              text="Login"
              width="50px"
            />
          </div>
        </div>
      </div>
    );
  }

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
          <Carousel
            Componentes={BeginnerLinks.map((Component, idx) => (
              <Component key={idx} />
            ))}
            texts={["Módulo 1", "Questionário", "FlashCards"]}
            hasAula
            hasBorder
            userLevel={userLevel}
            requiredLevels={[0, 0, 50]}
            enableLock={true}
          />
        </div>
        <div className="lesson-content__intermediario">
          <h1 className="text-4">Intermediário</h1>
          <Carousel
            Componentes={IntermediaryLinks.map((Component, idx) => (
              <Component key={idx} />
            ))}
            texts={["Módulo 2", "Narrativa", "FlashCard"]}
            hasAula
            hasBorder
            userLevel={userLevel}
            requiredLevels={[0, 50, 150]}
            enableLock={true}
          />
        </div>
        <div className="lesson-content__avancado">
          <h1 className="text-4">Avançado</h1>
          <Carousel
            Componentes={AdvancedLinks.map((Component, idx) => (
              <Component key={idx} />
            ))}
            texts={["Módulo 3", "História Interativa", "FlashCard"]}
            hasAula
            hasBorder
            userLevel={userLevel}
            requiredLevels={[0, 150, 300]}
            enableLock={true}
          />
        </div>
      </div>
      <div
        style={{
          color: "yellow",
          position: "fixed",
          bottom: "0",
          right: "0",
          borderRadius: "5px",
        }}>
        <CustomButton
          backgroundColor="#1c1f2c"
          width="10px"
          height="10px"
          fontSize="1rem"
          hasRainbow={true}
          text={`${userLevel} xp`}></CustomButton>
      </div>
    </div>
  );
};

export default Lesson;
