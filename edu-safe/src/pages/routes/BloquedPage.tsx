import React from "react";
import CustomButton from "../../components/random/buttons/CustomButton";

const BloquedPage = () => {
  return (
    <div
      className="error-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        textAlign: "center",
        padding: "2rem",
        color: "#fffafb",
      }}>
      <h1>Opa, você ainda não deveria estar aqui 🤨</h1>
      <p>
        Volte e faça os conteúdos anteriores para desbloquear este conteúdo.
      </p>

      <CustomButton
        text="Voltar para os Módulos"
        linkNav={localStorage.getItem("token") ? "/modulos" : "/login"}
        backgroundColor={"#3ac7a6"}
        textColor="#0c1329"
        borderColor="#0c1320"
      />
    </div>
  );
};

export default BloquedPage;
