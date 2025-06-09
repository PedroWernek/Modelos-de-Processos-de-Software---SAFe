import modulo1 from "../../assets/modulo1.jpg";
import questionario from "../../assets/questionario.jpg";
import flashcards1 from "../../assets/flashcards1.jpg";
import ImageButton from "../../components/random/buttons/ImageButton";
import Podcast1 from "../../assets/podcast1.jpg";

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
  () => (
    <ImageButton
      imgScr={Podcast1}
      alt="Podcast"
      link="/podcast/1"
      imgSize={imgSize}
    />
  ),
];
