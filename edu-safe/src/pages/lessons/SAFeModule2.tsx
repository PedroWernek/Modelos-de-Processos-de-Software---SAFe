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
          <br></br>
          <h2>Alinhamento</h2>
          <p>
            É super importante que todos os times e todas as partes da empresa trabalhem juntos, 
            com os mesmos objetivos. O SAFe tem jeitos de fazer com que a visão da empresa vire ação em 
            todos os lugares.
          </p>
          <br></br>
          <h2>Transparência</h2>
          <p>
            Para que todos confiem uns nos outros e tomem boas decisões, as informações precisam ser claras e visíveis para todo mundo. O SAFe faz com que os planos, o progresso e os resultados sejam mostrados, ajudando a resolver problemas rapidamente.
          </p>
          <br></br>
          <h2>Qualidade em tudo</h2>
          <p>
            A qualidade não é algo que se verifica só no final. Ela é parte de todo o processo de criação. O SAFe faz com que a qualidade seja pensada desde o começo até a entrega, garantindo que o produto final seja bom e atenda ao que se espera.
          </p>
          <br></br>
          <h2>Entregar o que foi prometido</h2>
          <p>
            O foco principal do SAFe é entregar valor para o cliente sempre. Isso significa que a empresa precisa conseguir transformar ideias em produtos ou serviços de verdade, e entregar isso de forma constante e previsível.
          </p>
          <br></br>
          <ImageComponent width="50rem" src={modulo2} font="Freepik" />
        </section>

        <section>
          <h1>As Dez Ideias-Chave (Princípios) do SAFe</h1>
          <ul>
            <li>Pensar no dinheiro: atrasos custam, valor deve ser entregue rápido.</li>
            <li>Ver o todo: melhorar o sistema inteiro.</li>
            <li>Ser flexível: tomar decisões importantes o mais tarde possível.</li>
            <li>Fazer aos poucos e aprender rápido.</li>
            <li>Testar para ver se funciona.</li>
            <li>Não sobrecarregar: manter o fluxo organizado.</li>
            <li>Ter ritmo e sincronia.</li>
            <li>Motivar as pessoas.</li>
            <li>Tomar decisões no lugar certo.</li>
            <li>Organizar para entregar valor.</li>
          </ul>
        </section>

        <section>
          <h1>Os Níveis do SAFe</h1>
          <p>
            O SAFe é como um "mapa" para organizar o trabalho em grandes empresas. Ele faz isso em diferentes níveis, para que cada parte da empresa saiba o que fazer e como se conectar com as outras. Imagine como diferentes andares de um prédio, cada um com seu foco, mas todos conectados:
          </p>
          <br></br>
          <h2>Nível de Equipe</h2>
          <p>
            É onde o trabalho é feito de verdade. São os times que constroem as coisas, testam e entregam pequenas partes do produto. Aqui, eles usam métodos ágeis como o Scrum para organizar seu dia a dia.
          </p>
          <br></br>
          <h2>Nível de Programa (ART - Agile Release Train)</h2>
          <p>
            É a "locomotiva" do trabalho. Aqui, vários times trabalham juntos em um mesmo produto ou solução maior. Eles se planejam juntos e sincronizam suas entregas a cada poucos meses (o PI). É onde a maioria das pessoas vai se ver trabalhando no dia a dia com o <strong>SAFe</strong>.
          </p>
          <br></br>
          <h2>Nível de Solução Grande (Large Solution)</h2>
          <p>
            Para produtos ou sistemas GIGANTES, que precisam de vários ARTs trabalhando juntos, existe este nível. Ele ajuda a coordenar esses "trens" maiores para que todos construam partes de uma solução muito complexa.
          </p>
          <br></br>
          <h2>Nível de Portfólio</h2>
          <p>
            É o nível mais alto. Aqui, a empresa decide em quais grandes iniciativas vai investir. É onde se define a estratégia, o orçamento e quais são os grandes objetivos da empresa para o futuro, garantindo que todos os "trens" e "soluções grandes" estejam construindo o que a empresa realmente precisa.
          </p>
          <br></br>
        </section>

        <section>
          <h1>As Quatro Formas de Usar o SAFe</h1>
          <p>
            O SAFe é adaptável e pode ser usado em empresas de diferentes tamanhos e com diferentes níveis de complexidade. Ele tem quatro "formas" básicas para começar a usar.
          </p>
          <br></br>
          <ShowContentComponent
            title="Essencial SAFe"
            text={
              "É a forma mais simples e focada em como um grupo de equipes (chamado de Agile Release Train - ART) entrega coisas juntas, seguindo um mesmo ritmo. É o ponto de partida para a maioria das empresas que começam com o SAFe. É ideal para empresas que estão começando e precisam que uns 50 a 125 funcionários trabalhem juntos em um mesmo projeto."
            }
          />
          <br></br>
          <ShowContentComponent
            title="Portfolio SAFe"
            text={
              "Inclui a forma Essencial, mas adiciona um jeito de gerenciar o dinheiro e os grandes projetos da empresa. Ajuda a garantir que todos os projetos estejam alinhados com os grandes objetivos estratégicos da empresa. É ideal para empresas que precisam organizar vários grupos de trabalho (ARTs) e querem que os investimentos sejam bem alinhados com o que a empresa quer alcançar."
            }
          />
          <br></br>
          <ShowContentComponent
            title="Large Solution SAFe"
            text={
              "Adiciona uma forma de organizar projetos muito grandes e complexos, que precisam de vários grupos de trabalho (ARTs) e até de fornecedores de fora. Essa forma é para empresas que constroem sistemas gigantes, com milhares de pessoas envolvidas. É ideal para empresas que criam soluções enormes que precisam da colaboração de centenas, ou até milhares, de pessoas em muitos grupos diferentes."
            }
          />
          <br></br>
          <ShowContentComponent
            title="Full SAFe"
            text={
              "Essa forma inclui tudo (Essencial, Portfolio e Large Solution). É o pacote completo de papéis, reuniões e documentos para as maiores e mais complexas implementações do SAFe. É usada por grandes empresas que aplicam o SAFe em todas as suas áreas. É ideal para empresas muito grandes e complexas que precisam de um sistema completo para organizar milhares de pessoas em vários projetos pelo mundo."
            }
          />
          <br></br>
        </section>

        <section>
          <h1>Quem Faz o Quê no SAFe (Visão Geral)</h1>
          <p>Para o SAFe funcionar, existem diferentes pessoas com funções específicas. Aqui vamos apresentar algumas das mais importantes.</p>
          <br></br>
          <h2>Release Train Engineer (RTE)</h2>
          <p>É como o maestro do grupo de equipes (ART). Ele ajuda a organizar as reuniões, tira os obstáculos do caminho e garante que o trabalho flua bem. É um líder que ajuda a equipe.</p>
          <br></br>
          <h2>Product Management</h2>
          <p>Define o que precisa ser feito para o cliente e para o mercado. Trabalha com os "donos do produto" dos times para garantir que o que está sendo construído é o certo.</p>
          <br></br>
          <h2>System Architect/Engineer</h2>
          <p>Guia a parte técnica e o design dos sistemas. Garante que a tecnologia esteja no caminho certo e que a solução seja sólida.</p>
          <br></br>
          <h2>Business Owners</h2>
          <p>São as pessoas que mais se importam com o valor de negócio que o projeto vai trazer. Eles participam do planejamento e ajudam a garantir que o que está sendo feito é o que a empresa precisa.</p>
          <br></br>
          <h2>Equipes Ágeis (Agile Teams)</h2>
          <p>São a base do SAFe. São os times que fazem o trabalho de verdade, criando e testando as soluções aos poucos. São eles que projetam, constroem e testam o produto.</p>
        </section>

        <section className="last-section">
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
    </div>
  );
};

export default SAFeModule2;
