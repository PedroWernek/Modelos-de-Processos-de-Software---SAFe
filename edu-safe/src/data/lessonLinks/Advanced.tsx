import modulo3 from "../../assets/modulo3.jpg";
import historia from "../../assets/historia.jpg";
import flashcards1 from "../../assets/flashcards1.jpg";
import ImageButton from "../../components/random/buttons/ImageButton";

const imgSize = "200";

export const AdvancedLinks = [
  () => (
    <ImageButton
      imgScr={modulo3}
      alt="Imagem Módulo 1"
      link="/modulos/conteudo/modulo-3"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={historia}
      alt="Imagem 2"
      link="/modulos/avaliacao/2"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={flashcards1}
      alt="FlashCard"
      link="/flash-card/3"
      imgSize={imgSize}
    />
  ),
];
