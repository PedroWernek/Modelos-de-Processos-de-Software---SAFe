import React from "react";
import { PrincipiosSAFeArray } from "../../data/PrincipiosSAFe";
import ShowContentComponent from "../../components/dropdown/ShowContentComponent";

const PrincipiosSAFe = () => {
  const titleColor = "#3ac7a6";
  const textColor = "#f0f0f0";
  const backgroundCustomColor = "#0c1329";
  const principiosSAFe = PrincipiosSAFeArray;

  return (
    <div>
      <h1>III. Os Dez Princípios Orientadores do SAFe</h1>
      <p>
        O SAFe é fundamentado em dez princípios essenciais que orientam a forma
        como as pessoas devem trabalhar dentro desta estrutura. Estes princípios
        são inspirados em conceitos de lean, agile e pensamento sistémico. Cada
        princípio desempenha um papel crucial na transformação da mentalidade
        tradicional em cascata (waterfall) para uma abordagem mais dinâmica e
        eficiente.
      </p>
      {principiosSAFe.map(({ title, text, exemple }, index) => (
        <ShowContentComponent
          key={index}
          title={title}
          text={text}
          exemple={exemple}
          titleColor={titleColor}
          textColor={textColor}
          backgroundCustomColor={backgroundCustomColor}
        />
      ))}
    </div>
  );
};

export default PrincipiosSAFe;
