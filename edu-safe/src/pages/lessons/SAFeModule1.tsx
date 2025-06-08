import musico from "../../assets/musico.jpg";
import modulo1 from "../../assets/modulo1.jpg";
import scrumImg from "../../assets/scrumImg.jpg";
import dean from "../../assets/Dean.jpg";
import LessonHeader from "../../components/lessons/LessonHeader";
import LessonGoals from "../../components/lessons/LessonGoals";
import ImageComponent from "../../components/random/image/ImageComponent";
import ShowListContentComponent from "../../components/random/dropdown/ShowListContentComponent";
import CustomButton from "../../components/random/buttons/CustomButton";
import InfoCard from "../../components/lessons/InfoCard";
import { faGuitar, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrumPopup from "./explaining/Scrum";
import PodcastPlayer from "../podcast/PodcastPlayer";
import podcast1 from "../../assets/podcasts/IntroduçãoaoSAFeparaGrandesEmpresas.wav";

const SAFeModule1 = () => {
  window.scrollTo(0, 0);
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
          "O que é o SAFe.",
          "Quem criou o SAFe e por que ele existe.",
          "Quais os benefícios de usar o SAFe.",
          "Quando o SAFe é mais útil para as empresas.",
          "As primeiras ideias para entender como ele funciona.",
          "O que significa Ágil no SAFe?",
        ]}
        backgroundColor="#0c1329"
        textColor="white"
      />
      <div className="lesson-content__content">
        <section>
          <h1>O que é o SAFe?</h1>
          <p>
            Você já ouviu falar do <ScrumPopup /> É um método de organizar
            projetos em equipes pequenas.
          </p>

          <p>
            Mas e se a empresa é enorme, como a Amazon ou o Google? Usar o Scrum
            para um time tão grande pode ser uma bagunça, certo?
          </p>
          <p>
            É para isso que existe o <strong>SAFe</strong> – Scaled Agile
            Framework. Ele pode ser entendido como uma evolução dos métodos
            ágeis, desenvolvida especificamente para atender às necessidades de
            empresas de grande porte. O SAFe ajuda muitos times a trabalharem
            juntos, de forma organizada, sem perder a agilidade e sempre
            entregando o que o cliente precisa com qualidade.
          </p>
          <ImageComponent width="50rem" src={scrumImg} font="Freepik" />
        </section>
        <section>
          <div className="info-cards">
            <InfoCard
              title="Uma Orquestra Organizada"
              description="Imagine que sua empresa é uma grande orquestra. Cada músico (time) é
          ótimo sozinho, mas para tocarem uma sinfonia perfeita, precisam de uma
          partitura, um maestro e muito trabalho em equipe."
              borderColor="#3ac7a6"
              borderRadius="25px"
              icon={<FontAwesomeIcon icon={faGuitar} size="2x" />}
            />
          </div>
          <p>
            O <strong>SAFe</strong> é como essa <strong>"partitura"</strong> e
            esse <strong>"maestro"</strong> para empresas que querem usar um
            jeito de trabalhar mais flexível e em equipe (o
            <strong>"ágil"</strong>) em toda a sua estrutura.
          </p>
          <ImageComponent width="20rem" src={musico} font="Freepik" />
        </section>

        <section>
          <h1>O que significa "Ágil" no SAFe?</h1>
          <p>
            Quando falamos em "ágil", estamos falando de um jeito de trabalhar
            que busca ser flexível, se adaptar rápido a mudanças, entregar valor
            constantemente e colaborar muito. Em vez de planejar tudo do começo
            ao fim e só entregar no final (como em um projeto "cascata"), o ágil
            faz entregas pequenas e frequentes, aprendendo e ajustando o
            caminho. O SAFe pega essas ideias ágeis e aplica para empresas
            grandes.
          </p>
        </section>

        <section>
          <h1>Quem criou o SAFe?</h1>
          <p>
            O SAFe foi criado por Dean Leffingwell. Ele é uma pessoa com muita
            experiência na área de software e que já trabalhava com ideias
            ágeis. Em 2011, ele lançou a primeira versão do SAFe para ajudar as
            grandes empresas a aplicarem o jeito ágil de um jeito que desse
            certo. Até hoje, a empresa dele, a Scaled Agile, Inc., cuida e
            melhora o SAFe.
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
            title="As empresas perceberam algo na prática:"
            texts={[
              'Times pequenos com "métodos ágeis" funcionam muito bem',
              "No entanto, quando se tenta aplicá-los em dezenas ou centenas de equipes simultaneamente, pode surgir uma grande complexidade e falta de alinhamento.",
              "Projetos grandes atrasavam, a comunicação sumia e o que era entregue não servia para o cliente",
            ]}
          />
          <p>
            Então, o SAFe apareceu para organizar essa "bagunça". Ele mostra
            como:
          </p>
          <ShowListContentComponent
            title="O SAFe mostra como:"
            texts={[
              "Coordenar vários times trabalhando juntos.",
              "Manter todos alinhados com o grande objetivo da empresa.",
              "Planejar entregas grandes de forma eficiente.",
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

          <div className="info-cards">
            <InfoCard
              title="Pense em usar o SAFe se:"
              description={[
                "Sua empresa tem muitos times (mais de 50 pessoas) trabalhando no mesmo produto ou serviço.",
                "Precisa que diferentes áreas (como tecnologia, marketing, vendas) trabalhem juntas e bem conectadas.",
                "Você precisa criar coisas grandes e complexas, que envolvem muitas tecnologias ou diferentes lugares.",
              ]}
              borderColor="#ffdf00"
              borderRadius="25px"
              icon={<FontAwesomeIcon icon={faLightbulb} size="2x" />}
            />
          </div>
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

export default SAFeModule1;
