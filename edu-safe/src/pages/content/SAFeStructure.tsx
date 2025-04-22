import React from "react";

const SAFeStructure = () => {
  return (
    <section>
      <h2>2. Estrutura do SAFe</h2>
      <p>
        O SAFe organiza as atividades ágeis em diferentes níveis hierárquicos:
      </p>
      <ul>
        <li>
          <strong>Nível de Equipe:</strong> Foca nas equipes ágeis individuais.
        </li>
        <li>
          <strong>Nível de Programa (Agile Release Train - ART):</strong>{" "}
          Coordena múltiplas equipes para entregar valor conjunto.
        </li>
        <li>
          <strong>Nível de Portfólio:</strong> Alinha a execução com a
          estratégia empresarial.
        </li>
        <li>
          <strong>Nível de Solução Grande:</strong> Gerencia soluções complexas
          que requerem múltiplos ARTs.
        </li>
      </ul>
      <p>
        Cada nível possui papéis e responsabilidades específicos, como Product
        Owner, Scrum Master, Release Train Engineer (RTE) e System Architect.
      </p>
    </section>
  );
};

export default SAFeStructure;
