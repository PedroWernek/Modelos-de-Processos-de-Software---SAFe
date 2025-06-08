import React from "react";

import modulo3 from "../../assets/modulo3.jpg";
import LessonHeader from "../../components/lessons/LessonHeader";
import LessonGoals from "../../components/lessons/LessonGoals";
import ShowListContentComponent from "../../components/random/dropdown/ShowListContentComponent";
import CustomButton from "../../components/random/buttons/CustomButton";
import devops from "../../assets/Devops-toolchain.svg.png";
import ImageComponent from "../../components/random/image/ImageComponent";
import PIplanning from "../../assets/PIplanning.png";

const SAFeModule3 = () => {
  window.scrollTo(0, 0);
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
            title="Para que serve o PI Planning?"
            texts={[
              "Alinhar todas as equipes.",
              "Promover colaboração entre os times.",
              "Definir compromissos claros de entrega.",
              "Transparência sobre o plano e riscos.",
              "Espaço para inovação.",
            ]}
          />
          <br></br>
          <ShowListContentComponent
            title="E quais as etapas do PI Planning?"
            texts={[
              "Apresentação da direção e metas da empresa.",
              "Exibição das propostas de produto e tecnologia.",
              "Planejamento dos times, detalhando tarefas semanais.",
              "Identificação e solução de dependências e riscos.",
              "Apresentação do plano provisório por cada time.",
              "Ajustes colaborativos entre os participantes.",
              "Definição de objetivos e voto de confiança dos times.",
              "Revisão final dos líderes com foco nos riscos e plano global.",
            ]}
          />
          <br></br>
          <h2>Como funciona o PI Planning (de um jeito simples):</h2>
          <ol>
            <li>
              <strong>Onde estamos e para onde vamos: </strong>As pessoas que
              lideram a empresa explicam a direção e os grandes objetivos para o
              próximo PI.
            </li>
            <li>
              <strong>O que vamos construir: </strong>O pessoal de produto e de
              tecnologia mostra a ideia do que será feito.
            </li>
            <li>
              <strong>Os times planejam: </strong>As equipes se reúnem, dividem
              as tarefas maiores em pedacinhos menores e planejam como vão fazer
              tudo em cada semana do PI.
            </li>
            <li>
              <strong>Descobrir o que atrapalha: </strong>Enquanto planejam, os
              times veem se existe algo que pode atrasar o trabalho (uma
              "dependência" de outro time, por exemplo) ou algum risco. Eles
              tentam resolver isso na hora.
            </li>
            <li>
              <strong>Mostrando o plano provisório: </strong>Cada time apresenta
              seu plano inicial para que todos possam dar opiniões e ajustar.
            </li>
            <li>
              <strong>Ajustes e soluções: </strong>Juntos, todos trabalham para
              resolver os problemas, ajustar o plano e deixar tudo mais claro.
            </li>
            <li>
              <strong>Objetivos e votação de confiança: </strong>Os times
              definem quais são seus objetivos principais para o PI. No final,
              eles votam para mostrar o quanto confiam que o plano pode ser
              cumprido.
            </li>
            <li>
              <strong>Reunião da liderança: </strong>Os líderes revisam os
              objetivos, os riscos e o plano geral do ART.
            </li>
          </ol>
          <br></br>
          <ImageComponent src={PIplanning} font={"Gemini"} />
        </section>

        <section>
          <h1>Reuniões e Ritmos no SAFe</h1>
          <p>
            Além do PI Planning, o SAFe tem outras reuniões e um ritmo de
            trabalho para manter tudo funcionando e alinhado.
          </p>
          <br></br>
          <h2>Sincronização do ART (ART Sync)</h2>
          <p>
            É uma reunião que acontece com frequência (geralmente toda semana ou
            a cada duas semanas). Nela, o líder do ART (RTE), o pessoal de
            produto e de tecnologia se encontram para ver como o PI está indo,
            discutir o que está parado e garantir que o trabalho continue
            fluindo.
          </p>
          <br></br>
          <h2>Demonstração do Sistema (System Demo)</h2>
          <p>
            No final de cada pequeno ciclo de trabalho (chamado de iteração), as
            equipes mostram o que construíram de novo e que já está funcionando.
            É uma chance de receber um retorno rápido e ver se o projeto está no
            caminho certo.
          </p>
          <br></br>
          <h2>Inspeção e Adaptação (Inspect & Adapt - I&A)</h2>
          <p>
            Essa reunião acontece no final de cada PI. É um momento para o grupo
            do ART parar, olhar para trás e pensar: "O que fizemos bem? O que
            podemos melhorar?" Eles mostram o que foi entregue, analisam alguns
            números e decidem o que fazer diferente no próximo PI para melhorar.
          </p>
        </section>

        <section>
          <h1>Como o SAFe se conecta com a estratégia da empresa?</h1>
          <p>
            No SAFe, o trabalho de todas as equipes e de todos os níveis está
            sempre ligado aos grandes objetivos da empresa. Isso acontece
            principalmente no <strong>Nível de Portfólio</strong>, que vimos
            antes. Lá, a empresa decide as iniciativas estratégicas (os "para
            onde queremos ir como empresa?").<br></br>
            Essas iniciativas se transformam em coisas maiores, que chamamos de{" "}
            <strong>Épicos</strong>. Os Épicos são grandes ideias ou projetos
            que precisam de bastante tempo e esforço para serem concluídos, como
            "Lançar um novo produto online" ou "Melhorar a experiência do
            cliente no aplicativo".
          </p>
          <br></br>
          <h2>O que são os Épicos e Features?</h2>
          <p>
            Para que os Épicos virem realidade, eles são divididos em partes
            menores e mais gerenciáveis:
          </p>
          <li>
            <strong>Épicos: </strong>São as grandes ideias ou projetos que a
            empresa quer fazer. Eles vêm da estratégia e geralmente precisam do
            trabalho de vários times por um bom tempo. Pense em um Épico como
            "Criar a nova plataforma de vendas para toda a América Latina".
          </li>
          <li>
            <strong>Features: </strong>São as funcionalidades específicas que
            formam um Épico. Elas são menores e podem ser entregues por um ou
            poucos ARTs dentro de um PI. Por exemplo, do Épico "Criar nova
            plataforma de vendas", uma Feature pode ser "Permitir que o cliente
            pague com cartão de crédito".
          </li>
          <p>
            Essa divisão ajuda a empresa a ter uma visão clara do que está sendo
            feito em cada nível, desde a grande estratégia até as pequenas
            tarefas do dia a dia, mantendo todo mundo focado em entregar valor.
          </p>
        </section>

        <section>
          <h1>Entregando Coisas Sempre e Rápido (DevOps)</h1>
          <p>
            Um dos grandes objetivos do <strong>SAFe</strong> é conseguir
            entregar coisas novas e melhorias para os clientes de forma
            contínua. Isso significa que a empresa pode lançar atualizações para
            seus produtos de forma rápida e segura. Para isso, o{" "}
            <strong>DevOps</strong> é fundamental.<br></br>
            <strong>DevOps</strong> não é só sobre programas de computador, mas
            sobre uma cultura de parceria entre quem cria o produto (o
            "Desenvolvimento") e quem faz ele funcionar no dia a dia (as
            "Operações"). Eles trabalham juntos, usando a tecnologia para
            automatizar as tarefas e garantir um fluxo suave, desde a ideia até
            a entrega.<br></br>
            No SAFe, o DevOps ajuda a:
          </p>
          <li>
            <strong>Criar ideias sem parar:</strong> Explorar e melhorar
            constantemente as ideias para novas funcionalidades.
          </li>
          <li>
            <strong>Juntar o trabalho sempre:</strong> Unir o código de todas as
            equipes regularmente.
          </li>
          <li>
            <strong>Colocar em funcionamento sempre:</strong> Colocar a solução
            em ambientes de teste e até para o cliente de forma automática.
          </li>
          <li>
            <strong>Lançar quando precisar:</strong> Ter a capacidade de
            entregar o produto para o cliente quando for a melhor hora, e não só
            em datas fixas.
          </li>
          <p>
            O SAFe incentiva a criação de uma Esteira de Entrega Contínua
            (Continuous Delivery Pipeline), que é o caminho completo que o
            trabalho faz, desde a ideia inicial até chegar ao cliente.<br></br>
          </p>
          <ImageComponent width="30rem" src={devops} font="WikiMedia" />
        </section>

        <section className="last-section">
          <h1>Resumo</h1>
          <p>
            Nesta aula, entendemos como o SAFe funciona na{" "}
            <strong>prática</strong>. Falamos do <strong>PI Planning</strong>,
            que é a grande reunião que organiza o trabalho de meses para muitas
            equipes. Vimos que existem outras reuniões importantes para manter o
            ritmo, como o ART Sync, a Demo do Sistema e a Inspeção e Adaptação.
            E descobrimos como o <strong>DevOps</strong> ajuda a entregar coisas
            mais rápido e sempre. Também vimos como o SAFe conecta as ideias
            grandes (Épicos) com as funcionalidades (Features) e o dia a dia.
          </p>
        </section>
      </div>
      <div className="gotoQuestions">
        <CustomButton
          backgroundColor="#3ac7a6"
          borderColor="#1c1f2c"
          borderTickness="2px"
          textColor="#1c1f2c"
          text="Voltar aos Módulos"
          linkNav="/modulos"
          height="2dvw"
          width="10dvh"
        />
      </div>
    </div>
  );
};

export default SAFeModule3;
