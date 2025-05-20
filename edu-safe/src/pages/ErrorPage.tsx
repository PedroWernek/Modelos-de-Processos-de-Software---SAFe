import React from "react";
import CustomButton from "../components/random/buttons/CustomButton";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Ops!</h1>
      <p>Acho que não encontramos o que você queria. 😅</p>
      <CustomButton
        text="Voltar para o início"
        linkNav="/"
        backgroundColor="#3ac7a6"
        textColor="#0c1329"
        borderColor="#0c1320"
      />
    </div>
  );
};

export default ErrorPage;
