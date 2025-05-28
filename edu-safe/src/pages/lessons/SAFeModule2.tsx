import modulo2 from "../../assets/modulo2.jpg";
import LessonHeader from "../../components/lessons/LessonHeader";
import LessonGoals from "../../components/lessons/LessonGoals";
import ImageComponent from "../../components/random/image/ImageComponent";
import ShowListContentComponent from "../../components/random/dropdown/ShowListContentComponent";
import CustomButton from "../../components/random/buttons/CustomButton";
import InfoCard from "../../components/lessons/InfoCard";
import {
  faLayerGroup,
  faBalanceScale,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowContentComponent from "../../components/random/dropdown/ShowContentComponent";

const SAFeModule2 = () => {
  return (
    <div>
      <LessonHeader
        unit="Módulo 2:"
        title="A Estrutura do SAFe: Valores, Princípios, Níveis e Configurações"
        backgroundImage={modulo2}
        textColor="#ffffff"
      />

      <LessonGoals
        goals={[
          "Entender os quatro valores principais que guiam o SAFe.",
          "Conhecer as dez ideias-chave que o SAFe defende.",
          "Ver as quatro formas de usar o SAFe, dependendo do tamanho da empresa.",
          "Descobrir qual forma do SAFe pode ser a melhor para diferentes situações.",
          "Começar a entender quem faz o quê nos times do SAFe.",
          "O que são os Níveis do SAFe?",
        ]}
        backgroundColor="#13293d"
        textColor="white"
      />

      <div className="lesson-content__content">
        <section>
          <h1>Os Quatro Valores Essenciais do SAFe</h1>
          <p>
            O SAFe não é só um monte de regras; ele tem valores muito
            importantes que ajudam a empresa a trabalhar melhor. Esses valores
            garantem que todo mundo esteja na mesma direção, mesmo em empresas
            grandes e complexas.
          </p>
          <ShowContentComponent
            title="Alinhamento"
            text="É super importante que todos os times e todas as partes da empresa trabalhem juntos, com os mesmos objetivos. O SAFe tem jeitos de fazer com que a visão da empresa vire ação em todos os lugares."
          />
          <ShowContentComponent
            title="Transparência"
            text="Para que todos confiem uns nos outros e tomem boas decisões, as informações precisam ser claras e visíveis para todo mundo. O SAFe faz com que os planos, o progresso e os resultados sejam mostrados, ajudando a resolver problemas rapidamente."
          />
          <ShowContentComponent
            title="Qualidade em tudo"
            text="A qualidade não é algo que se verifica só no final. Ela é parte de todo o processo de criação. O SAFe faz com que a qualidade seja pensada desde o começo até a entrega, garantindo que o produto final seja bom e atenda ao que se espera."
          />
          <ShowContentComponent
            title="Entregar o que foi prometido"
            text="O foco principal do SAFe é entregar valor para o cliente sempre. Isso significa que a empresa precisa conseguir transformar ideias em produtos ou serviços de verdade, e entregar isso de forma constante e previsível."
          />
          <ImageComponent width="50rem" src={modulo2} font="Freepik" />
        </section>

        <section>
          <h1>Os Quatro Valores Essenciais do SAFe</h1>
          <p>
            O SAFe não é só um monte de regras; ele tem valores muito
            importantes que ajudam a empresa a trabalhar melhor. Esses valores
            garantem que todo mundo esteja na mesma direção, mesmo em empresas
            grandes e complexas.
          </p>
          <ShowListContentComponent
            title="Valores Essenciais"
            texts={[
              "Alinhamento: todos os times com os mesmos objetivos.",
              "Transparência: informações claras e visíveis para todos.",
              "Qualidade em tudo: presente desde o início até a entrega.",
              "Entregar o que foi prometido: transformar ideias em valor constante.",
            ]}
          />
          <ImageComponent width="40rem" src={modulo2} font="Freepik" />
        </section>

        <section>
          <h1>As Dez Ideias-Chave (Princípios) do SAFe</h1>
          <ShowListContentComponent
            title="Princípios do SAFe"
            texts={[
              "Pensar no dinheiro: atrasos custam, valor deve ser entregue rápido.",
              "Ver o todo: melhorar o sistema inteiro.",
              "Ser flexível: tomar decisões importantes o mais tarde possível.",
              "Fazer aos poucos e aprender rápido.",
              "Testar para ver se funciona.",
              "Não sobrecarregar: manter o fluxo organizado.",
              "Ter ritmo e sincronia.",
              "Motivar as pessoas.",
              "Tomar decisões no lugar certo.",
              "Organizar para entregar valor.",
            ]}
          />
        </section>
        <section></section>

        <section>
          <h1>Resumo</h1>
          <p>
            Nesta aula, vimos os quatro valores essenciais (Alinhamento,
            Transparência, Qualidade em tudo e Entregar o que foi prometido) e
            as dez ideias-chave que sustentam o SAFe. Também aprendemos sobre as
            quatro formas de usar o SAFe (Essencial, Portfolio, Large Solution e
            Full), e como cada uma se encaixa em diferentes tamanhos de empresa.
            E vimos o que são os Níveis do SAFe, para entender como o trabalho
            se organiza do dia a dia à estratégia. Por fim, conhecemos alguns
            dos principais papéis que atuam no SAFe, como o RTE e as Equipes
            Ágeis.
          </p>
        </section>
      </div>

      <div className="gotoQuestions">
        <h2 className="text-4" style={{ paddingLeft: 0 }}>
          Preparado para o próximo desafio?
        </h2>
        <p>
          No próximo módulo, vamos descobrir mais sobre papéis, eventos e
          artefatos dentro do SAFe.
        </p>
        <CustomButton
          backgroundColor="#fbbf24"
          borderColor="#1c1f2c"
          borderTickness="2px"
          textColor="#1c1f2c"
          text="Quiz"
          linkNav="/modulos/avaliacao/2"
          height="2dvw"
          width="10dvh"
        />
      </div>
    </div>
  );
};

export default SAFeModule2;
