import img1 from "../../assets/img1home.webp";
import modulo1 from "../../assets/modulo1.jpg";
import questionario from "../../assets/questionario.jpg";
import flashcards1 from "../../assets/flashcards1.jpg";
import ImageButton from "../../components/random/buttons/ImageButton";

const imgSize = "200";

export const BeginnerLinks = [
  () => (
    <ImageButton
      imgScr={modulo1}
      alt="Imagem Módulo 1"
      link="/modulos/conteudo/modulo-1"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={questionario}
      alt="Questionario"
      link="/modulos/avaliacao/1"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={flashcards1}
      alt="FlashCard"
      link="/flash-card/1"
      imgSize={imgSize}
    />
  ),
];
