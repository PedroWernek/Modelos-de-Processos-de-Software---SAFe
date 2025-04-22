import "../css/Home.css";
import img1home from "../assets/img1home.webp";
import CustomButton from "../components/buttons/CustomButton";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>TORNE-SE EXTRAORDINARIO EM SUA EQUIPE</h1>
          <p className="home-text1">
            Seja mais produtivo e eficiente utilizando a SAFe
          </p>
          <p className="home-text2">
            A EDUSAFe possui o intuito de permitir que você aprenda de
            forma divertida como aplicar a SAFe em seu ambiente de trabalho!
          </p>
          <CustomButton
            backgroundColor="#1c1f2c"
            hasRambow={true}
            textColor="white"
            text="Veja O conteúdo Completo"
            link="/explicacao-safe"
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
            Desenvolva sua habilidade com a metodologia SAFe de maneira <b>gameficada</b>
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