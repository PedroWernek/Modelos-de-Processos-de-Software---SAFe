import React from "react";

const SafeLevels = () => {
  return (
    <section>
      <h2>2. Como o SAFe organiza o trabalho em diferentes níveis</h2>
      <ol>
        <li>
          <h3>Nível de Equipe</h3>
          <p>
            No Nível de Equipe, o foco está na entrega de pequenos incrementos
            de valor por equipes ágeis, similares ao Scrum ou Kanban. As equipes
            se organizam em sprints ou iterações de 1–2 semanas, utilizando o
            Product Owner para priorizar o backlog e o Scrum Master/Team Coach
            para remover impedimentos. Ao final de cada iteração, a equipe
            realiza demonstrações e retrospectivas para incorporar feedback e
            melhorar continuamente.
          </p>
        </li>
        <li>
          <h3>Nível de Programa</h3>
          <p>
            O Nível de Programa agrupa de 5 a 12 equipes em um Agile Release
            Train (ART). Cada ART executa Program Increments (PI) de 8–12
            semanas, compostos por múltiplas iterações. No PI Planning, todas as
            equipes definem objetivos e dependências, guiadas pelo Release Train
            Engineer (RTE) e Product Manager. O último sprint do PI é dedicado a
            testes de integração (Hardening) e inovação.
          </p>
        </li>
        <li>
          <h3>Nível de Grande Solução</h3>
          <p>
            Quando um projeto envolve vários ARTs, utiliza-se o Nível de Grande
            Solução. O Solution Train Engineer (STE), Solution Manager e
            Solution Architect/Engineer coordenam a arquitetura, o backlog da
            solução e as dependências entre trens de release, garantindo
            alinhamento técnico e de negócios. O Solution Intent documenta
            requisitos e diretrizes para todas as partes.
          </p>
        </li>
        <li>
          <h3>Nível de Portfólio</h3>
          <p>
            O nível mais alto, o Portfólio, alinha iniciativas estratégicas
            (epics) à visão da empresa. Lean Portfolio Management (LPM) define
            temas estratégicos, prioriza investimentos e garante que o trabalho
            dos níveis inferiores contribua para os objetivos de longo prazo.
            Papéis como Epic Owners, Enterprise Architects e LPM asseguram
            governança e fluxo de valor.
          </p>
        </li>
      </ol>
    </section>
  );
};

export default SafeLevels;
