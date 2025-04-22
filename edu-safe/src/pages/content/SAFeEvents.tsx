import React from "react";

const SafeEvents = () => {
  return (
    <section id="eventos-importantes" className="py-8">
      <h2 className="text-3xl font-bold mb-4">
        4. Eventos e cerimônias mais importantes
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>PI Planning:</strong> Reunião de dois dias para planejamento
          do próximo Program Increment, definindo objetivos, dependências e
          compromissos de todas as equipes do ART.
        </li>
        <li>
          <strong>Scrum de Scrums / Coach Sync:</strong> Sessões regulares de
          sincronização entre representantes de equipes para resolver
          dependências e riscos.
        </li>
        <li>
          <strong>System Demo:</strong> Demonstração integrada do sistema ao
          final de cada iteração, oferecendo feedback imediato de stakeholders.
        </li>
        <li>
          <strong>Inspect & Adapt (I&A):</strong> Evento ao final de cada PI que
          inclui demonstração do PI, análise de métricas e workshop de resolução
          de problemas para melhoria contínua.
        </li>
      </ul>
    </section>
  );
};

export default SafeEvents;
