import modulo2 from "../../assets/modulo2.jpg";
import ImageButton from "../../components/random/buttons/ImageButton";

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
      imgScr={modulo2}
      alt="Imagem 2"
      link="/modulos/iniciante/2"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={modulo2}
      alt="Imagem 3"
      link="/modulos/iniciante/3"
      imgSize={imgSize}
    />
  ),
];
