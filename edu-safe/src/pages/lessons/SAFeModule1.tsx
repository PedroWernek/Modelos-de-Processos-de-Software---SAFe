import React from "react";

import modulo1 from "../../assets/modulo1.jpg";
import scrumImg from "../../assets/scrumImg.svg";
import dean from "../../assets/Dean.jpg";
import LessonHeader from "../../components/lessons/LessonHeader";
import LessonGoals from "../../components/lessons/LessonGoals";
import ImageComponent from "../../components/random/image/ImageComponent";
import ShowListContentComponent from "../../components/random/dropdown/ShowListContentComponent";
import CustomButton from "../../components/random/buttons/CustomButton";

const SAFeModule1 = () => {
  return (
    <div>
      <LessonHeader
        unit="Unidade básica 1"
        title="Introdução ao SAFe"
        backgroundImage={modulo1}
        textColor="#ffffff"
      />
      <LessonGoals
        goals={[
          "Compreender o que é o SAFe (Scaled Agile Framework).",
          "Entender o conceito de 'Ágil' no contexto do SAFe.",
          "Conhecer Dean Leffingwell e o motivo da criação do SAFe.",
          "Identificar os benefícios do SAFe.",
          "Saber quando o SAFe é a melhor opção.",
        ]}
        backgroundColor="#0c1329"
        textColor="white"
      />

      <div className="lesson-content__content">
        <section>
          <h1>O que é o SAFe?</h1>
          <p>
            O SAFe é um framework que ajuda grandes empresas a aplicar métodos
            ágeis de forma organizada e eficiente.
          </p>
          <p>
            Ele permite que muitas equipes trabalhem juntas sem perder
            agilidade, garantindo qualidade e foco na entrega de valor ao
            cliente.
          </p>
          <ImageComponent width="30rem" src={scrumImg} font="Freepik" />
        </section>

        <section>
          <h1>O que significa "Ágil" no SAFe?</h1>
          <p>
            Ser ágil é trabalhar de forma flexível, adaptando-se rapidamente às
            mudanças e entregando valor de forma contínua.
          </p>
          <p>
            O SAFe leva essas ideias para o contexto de grandes organizações,
            onde a colaboração e a entrega constante são essenciais.
          </p>
        </section>

        <section>
          <h1>Quem criou o SAFe?</h1>
          <p>
            Dean Leffingwell criou o SAFe em 2011, baseado em sua ampla
            experiência com métodos ágeis na indústria de software.
          </p>
          <p>
            Ele fundou a Scaled Agile, Inc., que mantém e atualiza o framework.
          </p>
          <ImageComponent
            width="20rem"
            src={dean}
            font="https://framework.scaledagile.com/contributors"
          />
        </section>

        <section>
          <h1>Por que o SAFe foi criado?</h1>
          <ShowListContentComponent
            title="As empresas perceberam que:"
            texts={[
              "Times pequenos funcionam bem com métodos ágeis.",
              "Ao escalar para muitas equipes, surgem problemas de comunicação e alinhamento.",
              "Projetos grandes atrasavam e não entregavam o que o cliente precisava.",
            ]}
          />
          <p>
            O SAFe surgiu para organizar essa escalada e tornar possível a
            coordenação eficaz de múltiplas equipes.
          </p>
          <ShowListContentComponent
            title="O SAFe mostra como:"
            texts={[
              "Coordenar várias equipes trabalhando juntas.",
              "Manter o alinhamento com os objetivos da empresa.",
              "Planejar entregas em grande escala de forma eficiente.",
            ]}
          />
        </section>

        <section>
          <h1>Quais os benefícios do SAFe?</h1>
          <ShowListContentComponent
            title="Principais vantagens do SAFe:"
            texts={[
              "Alinhamento entre equipes.",
              "Entregas mais rápidas e frequentes.",
              "Melhoria contínua na qualidade.",
              "Mais autonomia e motivação para as equipes.",
            ]}
          />
        </section>

        <section>
          <h1>Quando o SAFe é a melhor opção?</h1>
          <ul>
            <li>
              Empresas com mais de 50 pessoas trabalhando no mesmo produto.
            </li>
            <li>
              Necessidade de coordenação entre áreas diferentes como TI,
              marketing, vendas etc.
            </li>
            <li>
              Projetos grandes e complexos que envolvem múltiplas tecnologias e
              regiões.
            </li>
          </ul>
        </section>

        <section className="last-section">
          <h1>Resumo</h1>
          <p>
            O SAFe é essencial para grandes empresas que querem aplicar métodos
            ágeis com organização, qualidade e foco em valor.
          </p>
          <p>
            Ele alinha equipes, melhora a comunicação e acelera entregas, sendo
            ideal em ambientes complexos e de grande escala.
          </p>
        </section>
      </div>

      <div className="gotoQuestions">
        <h2 className="text-4">Pronto para o próximo passo?</h2>
        <p>
          Vamos continuar aprendendo sobre a estrutura do SAFe no próximo
          módulo!
        </p>
        <CustomButton
          backgroundColor="#3ac7a6"
          borderColor="#1c1f2c"
          borderTickness="2px"
          textColor="#1c1f2c"
          text="Quiz"
          linkNav="/modulos/avaliacao/1"
          height="2dvw"
          width="10dvh"
        />
      </div>
    </div>
  );
};

export default SAFeModule1;
