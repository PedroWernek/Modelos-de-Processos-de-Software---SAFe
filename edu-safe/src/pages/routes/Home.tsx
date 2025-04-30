import "../../css/Home.css";
import img1home from "../../assets/img1home.webp";
import CustomButton from "../../components/buttons/CustomButton";
import { QuestionForm } from "../../components/forms/QuestionForms";
import InfoCard from "../../components/lessons/InfoCard";
import iconDELETAR from "../../assets/iconDELETAR.png";

const Home = () => {
  const handleSubmit = (data: { selectedOption: string }) => {
    console.log("Resposta:", data.selectedOption);
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>TORNE-SE EXTRAORDINÁRIO EM SUA EQUIPE</h1>
          <p className="home-text1">
            Seja mais produtivo e eficiente utilizando a SAFe
          </p>
          <p className="home-text2">
            A EDUSAFe possui o intuito de permitir que você aprenda de forma
            divertida como aplicar a SAFe em seu ambiente de trabalho!
          </p>
          <InfoCard
            title="PINA COLADA SONG"
            description="if you like pinaaaa coladas and getting blabla n lembro o resot da letrsa taltal if you like making love at midnight blabla im the one that youre looking for Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            borderColor="pink"
            icon={iconDELETAR}
          />
          <CustomButton
            backgroundColor="#1c1f2c"
            hasRambow={true}
            textColor="white"
            text="O que é SAFe?"
            link="/introducao-safe"
          />
          <CustomButton
            backgroundColor="#3ac7a6"
            borderColor="#1c1f2c"
            borderTickness="2px"
            textColor="#1c1f2c"
            text="Veja Nossos Módulos"
            link="/modulos"
          />
        </div>
      </div>
      <span className="trapezioinvertido"></span>
      <div className="additional-info">
        <p className="additional-info-text1">
          Seja <b>destaque</b> dentro de seu time
        </p>
        <img src={img1home} alt="Imagem 1" />
      </div>
      <div className="additional-info">
        <img src={img1home} alt="Imagem 1" />
        <div>
          <p className="additional-info-text1">
            Desenvolva sua habilidade com a metodologia SAFe de maneira{" "}
            <b>gameficada</b>
          </p>
          <p className="additional-info-text2">
            Utilize seu conhecimento para resolver puzzles e desafios baseados
            em aplicações reais no mercado de trabalho.
          </p>
        </div>
      </div>
      <span className="trapezio"></span>
      <div className="footer"></div>
    </div>
  );
};

export default Home;
