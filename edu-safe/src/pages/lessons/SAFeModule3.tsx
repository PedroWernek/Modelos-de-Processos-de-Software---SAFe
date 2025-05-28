import React from "react";

import modulo3 from "../../assets/modulo3.jpg";
import LessonHeader from "../../components/lessons/LessonHeader";
import LessonGoals from "../../components/lessons/LessonGoals";
import ShowListContentComponent from "../../components/random/dropdown/ShowListContentComponent";
import CustomButton from "../../components/random/buttons/CustomButton";

const SAFeModule3 = () => {
  return (
    <div>
      <LessonHeader
        unit="Unidade básica 3"
        title="SAFe em Ação"
        textColor="#ffffff"
        backgroundImage={modulo3}
      />

      <LessonGoals
        goals={[
          "Conhecer o PI Planning, a reunião central do SAFe.",
          "Compreender as reuniões e ritmos que mantêm o fluxo de trabalho.",
          "Explorar papéis importantes no contexto prático.",
          "Entender como o SAFe conecta estratégia e execução.",
          "Aprender sobre DevOps e entrega contínua.",
          "Saber lidar com os desafios da adoção do SAFe.",
        ]}
        backgroundColor="#263238"
        textColor="white"
      />

      <div className="lesson-content__content">
        <section>
          <h1>PI Planning: A Reunião Mais Importante</h1>
          <p>
            O Planejamento do Incremento do Programa (PI Planning) é o coração
            do SAFe. Reúne todas as equipes de um ART para planejar o trabalho
            dos próximos 8 a 12 semanas.
          </p>
          <ShowListContentComponent
            title="Para que serve o PI Planning:"
            texts={[
              "Alinhar todas as equipes.",
              "Promover colaboração entre os times.",
              "Definir compromissos claros de entrega.",
              "Transparência sobre o plano e riscos.",
              "Espaço para inovação.",
            ]}
          />
        </section>

        <section>
          <h2>Etapas do PI Planning</h2>
          <ol>
            <li>Apresentação da direção e metas da empresa.</li>
            <li>Exibição das propostas de produto e tecnologia.</li>
            <li>Planejamento dos times, detalhando tarefas semanais.</li>
            <li>Identificação e solução de dependências e riscos.</li>
            <li>Apresentação do plano provisório por cada time.</li>
            <li>Ajustes colaborativos entre os participantes.</li>
            <li>Definição de objetivos e voto de confiança dos times.</li>
            <li>
              Revisão final dos líderes com foco nos riscos e plano global.
            </li>
          </ol>
        </section>

        <section>
          <h1>Ritmos e Reuniões no SAFe</h1>
          <ul>
            <li>
              <strong>ART Sync:</strong> Reunião periódica (semanal ou
              quinzenal) com RTE, produto e tecnologia para garantir o andamento
              do PI.
            </li>
            <li>
              <strong>System Demo:</strong> Demonstração do que foi construído
              ao fim de cada iteração.
            </li>
            <li>
              <strong>Inspect & Adapt (I&A):</strong> Avaliação do PI com
              análise de entregas, métricas e planos de melhoria.
            </li>
          </ul>
        </section>

        <section>
          <h1>Detalhamento dos Papéis</h1>
          <ul>
            <li>
              <strong>RTE:</strong> Maestro do ART, facilita PI Planning e
              garante fluidez do trabalho.
            </li>
            <li>
              <strong>Product Management:</strong> Define prioridades com base
              nas necessidades do mercado e cliente.
            </li>
            <li>
              <strong>System Architect:</strong> Define arquitetura e boas
              práticas técnicas.
            </li>
            <li>
              <strong>Business Owners:</strong> Representam os interesses
              estratégicos e participam ativamente do planejamento.
            </li>
            <li>
              <strong>Scrum Master:</strong> Facilita o dia a dia do time e
              conecta com o ART.
            </li>
            <li>
              <strong>Product Owner:</strong> Refina, prioriza e aprova entregas
              da equipe.
            </li>
          </ul>
        </section>

        <section>
          <h1>Como o SAFe se conecta à estratégia</h1>
          <p>
            O nível de Portfólio define as grandes iniciativas da empresa,
            chamadas Épicos, como "Lançar um novo produto".
          </p>
          <p>
            Esses Épicos são quebrados em Features — funcionalidades menores que
            podem ser entregues em um ou poucos PIs.
          </p>
        </section>

        <section>
          <h1>DevOps e Entrega Contínua</h1>
          <p>
            O SAFe integra a cultura DevOps para acelerar e estabilizar o ciclo
            de entrega:
          </p>
          <ul>
            <li>Exploração contínua de ideias.</li>
            <li>Integração frequente de código.</li>
            <li>Implantação automatizada e frequente.</li>
            <li>Liberação sob demanda de valor ao cliente.</li>
          </ul>
          <p>
            Isso é viabilizado pela Esteira de Entrega Contínua (Continuous
            Delivery Pipeline).
          </p>
        </section>

        <section>
          <h1>Desafios Comuns e Soluções</h1>
          <ul>
            <li>
              <strong>Resistência à mudança:</strong> Treinamentos e apoio da
              liderança ajudam a superar.
            </li>
            <li>
              <strong>Cultura organizacional rígida:</strong> Exige líderes
              facilitadores e espaço para experimentação.
            </li>
            <li>
              <strong>Falta de apoio da gestão:</strong> Envolver a liderança
              desde o início é essencial.
            </li>
            <li>
              <strong>Muitas reuniões:</strong> Exige preparação, foco e ajustes
              aos contextos reais.
            </li>
            <li>
              <strong>Medição de progresso:</strong> Focar em entregas reais e
              valor ao cliente, não apenas prazos e custos.
            </li>
          </ul>
        </section>

        <section className="last-section">
          <h1>Resumo</h1>
          <p>
            O SAFe em ação envolve coordenação eficaz via PI Planning, papéis
            bem definidos, ciclos de feedback e uso de DevOps.
          </p>
          <p>
            Conecta a visão estratégica com a execução real através de Épicos e
            Features, e enfrenta desafios com uma cultura de transparência e
            melhoria contínua.
          </p>
        </section>
      </div>

      <div className="gotoQuestions">
        <h2 className="text-4">Parabéns por chegar até aqui!</h2>
        <p>
          Agora que você conhece a prática do SAFe, está preparado para aplicar
          seus conhecimentos ou testar com nosso quiz!
        </p>
        <CustomButton
          backgroundColor="#3ac7a6"
          borderColor="#1c1f2c"
          borderTickness="2px"
          textColor="#1c1f2c"
          text="Fazer Quiz"
          linkNav="/modulos/avaliacao/basico/3"
          height="2dvw"
          width="10dvh"
        />
      </div>
    </div>
  );
};

export default SAFeModule3;
