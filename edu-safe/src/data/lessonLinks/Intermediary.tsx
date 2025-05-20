import img1 from "../../assets/img1home.webp";
import ImageButton from "../../components/random/buttons/ImageButton";

const imgSize = "200";

export const IntermediaryLinks = [
  () => (
    <ImageButton
      imgScr={img1}
      alt="Imagem Módulo 1"
      link="/modulos/conteudo/iniciante/1"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={img1}
      alt="Imagem 2"
      link="/modulos/iniciante/2"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButton
      imgScr={img1}
      alt="Imagem 3"
      link="/modulos/iniciante/3"
      imgSize={imgSize}
    />
  ),
];
