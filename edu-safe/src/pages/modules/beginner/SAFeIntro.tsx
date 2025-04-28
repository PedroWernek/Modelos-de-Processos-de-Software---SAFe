import React from "react";
import LessonHeader from "../../../components/lessons/LessonHeader";
import LessonGoals from "../../../components/lessons/LessonGoals";

const SAFeIntro = () => {
  return (
    <div>
      <LessonHeader
        title="Título Bonito"
        description="Descrição bonita."
        backgroundColor="#1a1a1a"
        textColor="#ffffff"
      />
      <LessonGoals
        goals={[
          "pipiipipi",
          "poooooooooooooooooooooooo.",
          "blasmkowidsa asdsndiw  KAOASDWMKOWCI.",
        ]}
        backgroundColor="pink"
        textColor="black"
      />
      <h2>1. O que é SAFe?</h2>
      <div>
        <p>
          Imagine que você tem uma grande orquestra. Cada músico é talentoso
          individualmente, mas para criar uma sinfonia harmoniosa, eles precisam
          seguir uma partitura, um maestro e trabalhar juntos. O Scaled Agile
          Framework (SAFe) é como essa partitura e esse maestro para grandes
          empresas que querem usar métodos ágeis – aqueles que priorizam
          flexibilidade e trabalho em equipe – em toda a sua organização.''
        </p>
        <p>
          Basicamente, o SAFe é um conjunto de regras e formas de trabalhar que
          ajudam muitas equipes a colaborarem em projetos grandes e complexos.
          Pense nele como um guia para aplicar a agilidade – a capacidade de se
          adaptar rapidamente a mudanças – em uma escala maior do que apenas um
          pequeno time.
        </p>
        <p>
          Uma coisa legal sobre o SAFe é que ele não se preocupa só com um time
          ou um projeto, mas com a estratégia geral da empresa. O SAFe ajuda a
          garantir que todos na empresa estejam trabalhando na mesma direção,
          mesmo que haja muitas equipes espalhadas por diferentes lugares.
        </p>
        <p>
          A estrutura do SAFe é como uma construção com três grandes partes: a
          Equipe, o Programa e o Portfólio, cada uma focada em um nível
          diferente da organização. Ele também adapta conceitos de Scrum e
          Kanban para funcionar em projetos maiores, oferecendo práticas
          testadas e aprovadas por várias empresas.
        </p>
        <p>
          O objetivo principal do SAFe é fazer com que toda a empresa pense de
          forma ágil, não só o pessoal de tecnologia. Ele ajuda a mudar a
          cultura da empresa, fazendo com que todos valorizem flexibilidade,
          colaboração e melhoria contínua.
        </p>
      </div>
      <div>
        <h2>1.1 História do SAFe</h2>
        <p>
          Toda grande ideia tem uma origem, certo? O SAFe nasceu oficialmente em
          2011, criado por Dean Leffingwell e Drew Jemilo . A ideia surgiu
          porque muitas empresas grandes queriam usar os benefícios do "jeito
          ágil" de trabalhar (como flexibilidade e entregas rápidas, comuns no
          Scrum ou Kanban), mas tinham dificuldade em fazer isso com muitas
          equipes ao mesmo tempo .
        </p>
        <p>
          Pense assim: construir uma casa pode ser feito por uma equipe pequena
          e ágil . Mas construir um condomínio inteiro, com vários prédios,
          exige muito mais coordenação, planejamento e comunicação entre as
          diversas equipes de construção. O SAFe veio para resolver justamente
          esse desafio: como aplicar a agilidade em larga escala?
        </p>
        <p> Para isso, o SAFe misturou boas ideias de várias fontes : </p>
        <p>
          <strong>Desenvolvimento Ágil:</strong> A base de tudo, com foco em
          entregas curtas e adaptação. <br />
          <strong>Lean Thinking (Pensamento Enxuto):</strong> Foco em eliminar
          desperdícios e entregar valor rapidamente. <br />
          <strong>Systems Thinking (Pensamento Sistêmico):</strong> Olhar para o
          todo, não apenas para as partes isoladas.
        </p>
      </div>
      <div>
        <h2>1.2 Os Objetivos e as Ideias Centrais do SAFe </h2>
        <p>
          {" "}
          SAFe tem um conjunto de objetivos claros e se baseia em algumas ideias
          importantes que guiam como ele deve ser usado e que visam melhorar o
          desempenho de grandes empresas.
        </p>
        <p>
          O SAFe quer ajudar as empresas a serem realmente ágeis, para que
          possam mudar rapidamente quando o mercado mudar e criar produtos e
          serviços melhores. Ele também quer diminuir o tempo que leva para
          lançar coisas novas, melhorar a qualidade do que é entregue e garantir
          que todos na empresa entendam para onde estão indo e como seu trabalho
          ajuda a chegar lá.
        </p>
        <p>
          Em empresas grandes, com muitas equipes diferentes trabalhando juntas,
          o SAFe busca alinhar todo mundo com a mesma visão e os mesmos
          objetivos. Ele também quer melhorar a forma como essas equipes
          trabalham juntas, facilitando a troca de informações e a resolução de
          problemas, para que o cliente receba valor mais rápido. Além disso, o
          SAFe ajuda a empresa a ter uma estratégia de negócios mais clara e a
          ser mais flexível ao mesmo tempo. No final das contas, o SAFe quer que
          todas as equipes trabalhem juntas como uma orquestra, usando os mesmos
          processos e ferramentas.
        </p>
      </div>
    </div>
  );
};

export default SAFeIntro;
