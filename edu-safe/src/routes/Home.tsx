import "../css/Home.css";
import img1home from "../assets/img1home.webp";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>TORNE-SE EXTRAORDINARIO EM SUA EQUIPE</h1>
          <p className="home-text1">
            Aprenda a como ser mais produtivo e eficiente utilizando
            metodologias agéis
          </p>
          <p className="home-text2">
            Essa plataforma possui o intuito de permitir que você aprenda, e
            consiga aplicar as práticas do SAFe em seu ambiente de trabalho!
          </p>
          <button>CONHEÇA OS MÓDULOS</button>
        </div>
      </div>
      <span className="trapezioinvertido"></span>
      <div className="additional-info">
        <p className="additional-info-text1">
          Conheça a oportunidade de se destacar em um grande <b>time</b>
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
