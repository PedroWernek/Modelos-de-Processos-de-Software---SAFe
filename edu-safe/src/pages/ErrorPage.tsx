import React from "react";
import CustomButton from "../components/random/buttons/CustomButton";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Ops!</h1>
      <p>Acho que não encontramos o que você queria. 😅</p>
      <CustomButton
        text="Voltar para o início"
        link="/"
        backgroundColor="#7de2d1"
        textColor="#131515"
      />
    </div>
  );
};

export default ErrorPage;
