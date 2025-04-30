import React from "react";
import LessonHeader from "../../../components/lessons/LessonHeader";
import LessonGoals from "../../../components/lessons/LessonGoals";
import ShowListContentComponent from "../../../components/dropdown/ShowListContentComponent";
import ImageComponent from "../../../components/image/ImageComponent";

import scrumImg from "../../../assets/scrumImg.svg";
import Musico from "../../../assets/musico.jpg";
import dean from "../../../assets/Dean-245x300.jpg";
import scrum from "../../../assets/scrum.jpg";
import CustomButton from "../../../components/buttons/CustomButton";

const SAFeIntro = () => {
  return (
    <div>
      <LessonHeader
        unit="Unidade básica 1"
        title="Introdução ao SAFe"
        backgroundImage={scrum}
        textColor="#ffffff"
      />
      <LessonGoals
        goals={[
          "Entender o que é o SAFe (Scaled Agile Framework).",
          "Conhecer os criadores do SAFe e o contexto de sua criação.",
          "Identificar os principais benefícios de usar o SAFe.",
          "Reconhecer situações em que o SAFe é mais utilizado.",
          "Começar a se familiarizar com os conceitos fundamentais do framework.",
        ]}
        backgroundColor="#0c1329"
        textColor="white"
      />
      <div className="lesson-content__content">
        <section>
          <h1>O que é o SAFe?</h1>

          <p>
            Imagine que você já conhece o Scrum, um jeito ágil de organizar
            projetos em pequenas equipes. Agora imagine tentar usar Scrum em uma
            empresa gigante como a Amazon ou o Google. Parece complicado, né?
          </p>

          <p>
            Foi pensando nesses desafios que o SAFe – Scaled Agile Framework –
            foi criado. O SAFe é como uma versão "turbinada" das práticas ágeis
            para que empresas muito grandes consigam organizar várias equipes
            trabalhando juntas, mantendo agilidade, qualidade e foco no que
            importa: entregar valor ao cliente.
          </p>
          <ImageComponent width="40rem" src={scrumImg} font="FreePik" />
          <p>
            Imagine que você tem uma grande orquestra. Cada músico é talentoso
            individualmente, mas para criar uma sinfonia harmoniosa, eles
            precisam seguir uma partitura, um maestro e trabalhar juntos.
          </p>
          <p>
            O Scaled Agile Framework (SAFe) é como essa partitura e esse maestro
            para grandes empresas que querem usar métodos ágeis – aqueles que
            priorizam flexibilidade e trabalho em equipe – em toda a sua
            organização.
          </p>
          <ImageComponent width="20rem" src={Musico} font="FreePik" />
        </section>
        <section>
          <h1>Quem criou o SAFe?</h1>

          <p>
            O SAFe foi criado por Dean Leffingwell, um veterano da indústria de
            software e especialista em métodos ágeis. Ele lançou a primeira
            versão do framework em 2011, com o objetivo de ajudar grandes
            organizações a aplicar práticas ágeis de forma eficaz em larga
            escala. Dean Leffingwell é também cofundador da empresa Scaled
            Agile, Inc., que mantém e evolui o SAFe até hoje .
          </p>
          <ImageComponent
            src={dean}
            width="20rem"
            font="https://framework.scaledagile.com/contributors"
          />
        </section>
        <section>
          <h1>Por que o SAFe foi criado?</h1>

          <ShowListContentComponent
            title={"Na prática, as empresas perceberam que:"}
            texts={[
              "Times pequenos funcionavam bem com métodos ágeis;",

              "Quando precisavam escalar para dezenas ou centenas de times, surgia o caos;",

              "Projetos grandes atrasavam, a comunicação se perdia e os produtos não atendiam às necessidades do cliente;",
            ]}
          />

          <p>O SAFe surgiu para organizar essa escalada.</p>
          <ShowListContentComponent
            title={"Ele mostra como:"}
            texts={[
              "Coordenar várias equipes trabalhando juntas.",

              "Manter todos alinhados com o objetivo maior.",

              "Planejar entregas em larga escala de forma eficiente.",
            ]}
          />
        </section>
        <section>
          <h1>Quais são os principais benefícios do SAFe?</h1>
          <div>
            <ol>
              <li>Melhor alinhamento entre equipes</li>
              <p>
                Todo mundo trabalha com o mesmo objetivo em mente, evitando
                retrabalho.
              </p>
              <li>Mais velocidade nas entregas</li>
              <p>
                As empresas conseguem entregar versões melhores dos produtos de
                forma mais frequente.
              </p>
              <li>Qualidade aprimorada</li>
              <p>
                Com práticas ágeis em larga escala, é possível testar, corrigir
                e melhorar continuamente.
              </p>
              <li>Motivação e engajamento das equipes</li>
              <p>
                As equipes têm mais autonomia para tomar decisões e são
                reconhecidas pelo seu trabalho.
              </p>
            </ol>
          </div>
        </section>
        <section>
          <h1>Quando usar o SAFe?</h1>
          <p>Você deve considerar usar o SAFe quando:</p>
          <ul>
            <li>
              Sua organização tem muitas equipes (mais de 50 pessoas)
              trabalhando no mesmo produto.
            </li>
            <li>
              Há necessidade de coordenação entre diferentes áreas: TI,
              marketing, vendas, jurídico, etc.
            </li>
            <li>
              Você precisa entregar soluções complexas que envolvem várias
              tecnologias ou regiões.
            </li>
          </ul>
        </section>
        <section className="last-section">
          <h1>Resumo</h1>
          <p>
            O SAFe é um framework que ajuda grandes empresas a aplicar métodos
            ágeis de forma eficaz. Ele foi criado por Dean Leffingwell e é
            utilizado para coordenar várias equipes, melhorar a comunicação e
            aumentar a velocidade e qualidade das entregas.
          </p>
          <p>
            O SAFe é especialmente útil em organizações grandes, onde a
            colaboração entre equipes é essencial para o sucesso dos projetos.
          </p>
        </section>
      </div>
      <div className="gotoQuestions">
        <h2 className="text-4">Pronto para o próximo passo?</h2>
        <p>
          Agora que você já conhece os conceitos básicos do SAFe, vamos
          aprofundar um pouco mais. Clique no botão abaixo para continuar!
        </p>
        <a href="/lessons/beginner/SAFeIntroQuestions">
          <CustomButton
            backgroundColor="#3ac7a6"
            borderColor="#1c1f2c"
            borderTickness="2px"
            textColor="#1c1f2c"
            text="Quiz"
            link="/modulos/avaliacao/basico/1"
            width="2dvw"
            height="10dvh"
          />
        </a>
      </div>
    </div>
  );
};

export default SAFeIntro;
