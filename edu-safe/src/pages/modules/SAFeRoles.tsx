import React from "react";

const SafeRoles = () => {
  return (
    <section>
      <h2>3. Papéis e responsabilidades em cada nível</h2>
      <div>
        <div>
          <h3>Nível de Equipe</h3>
          <ul>
            <li>
              <strong>Time Ágil:</strong> Desenvolve e entrega incrementos de
              valor, realizando planejamento, stand‑ups diários, reviews e
              retrospectivas.
            </li>
            <li>
              <strong>Product Owner:</strong> Define e prioriza o backlog da
              equipe, representando as necessidades do cliente.
            </li>
            <li>
              <strong>Scrum Master/Team Coach:</strong> Facilita processos,
              remove impedimentos e promove princípios ágeis.
            </li>
          </ul>
        </div>
        <div>
          <h3>Nível de Programa</h3>
          <ul>
            <li>
              <strong>Release Train Engineer (RTE):</strong> Coach e facilitador
              do ART, garante cadência e remove impedimentos em escala.
            </li>
            <li>
              <strong>Product Manager:</strong> Prioriza o backlog do programa,
              define features e alinha roadmap ao mercado.
            </li>
            <li>
              <strong>System Architect/Engineer:</strong> Orienta a arquitetura
              técnica para todas as equipes do ART.
            </li>
          </ul>
        </div>
        <div>
          <h3>Nível de Grande Solução</h3>
          <ul>
            <li>
              <strong>Solution Train Engineer (STE):</strong> Coordena eventos e
              remove impedimentos para múltiplos ARTs.
            </li>
            <li>
              <strong>Solution Manager:</strong> Define e prioriza o backlog da
              solução, garantindo valor estratégico.
            </li>
            <li>
              <strong>Solution Architect/Engineer:</strong> Alinha arquitetura
              entre ARTs e stakeholders externos.
            </li>
          </ul>
        </div>
        <div>
          <h3>Nível de Portfólio</h3>
          <ul>
            <li>
              <strong>Epic Owners:</strong> Gerenciam epics estratégicas, tendo
              visão do ROI e roadmap.
            </li>
            <li>
              <strong>Enterprise Architect:</strong> Mantém visão técnica global
              e padrões de arquitetura.
            </li>
            <li>
              <strong>Lean Portfolio Management (LPM):</strong> Define temas,
              aprova epics e gerencia investimentos.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SafeRoles;
