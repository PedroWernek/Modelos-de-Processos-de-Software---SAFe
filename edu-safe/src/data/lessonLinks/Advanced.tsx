import modulo3 from "../../assets/modulo3.jpg";
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
      imgScr={modulo3}
      alt="Imagem 2"
      link="/modulos/iniciante/2"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={modulo3}
      alt="Imagem 3"
      link="/modulos/iniciante/3"
      imgSize={imgSize}
    />
  ),
];
