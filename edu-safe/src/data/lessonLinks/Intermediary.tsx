import modulo2 from "../../assets/modulo2.jpg";
import narrativa from "../../assets/narrativa.jpg";
import flashcards1 from "../../assets/flashcards1.jpg";
import ImageButton from "../../components/random/buttons/ImageButton";
import Podcast2 from "../../assets/podcast2.jpg";

const imgSize = "200";

export const IntermediaryLinks = [
  () => (
    <ImageButton
      imgScr={modulo2}
      alt="Imagem Módulo 2"
      link="/modulos/conteudo/modulo-2"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={narrativa}
      alt="Narrativa"
      link="/narrativa/3"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={flashcards1}
      alt="FlashCard"
      link="/flash-card/2"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={Podcast2}
      alt="Podcast"
      link="/podcast/2"
      imgSize={imgSize}
    />
  ),
];
