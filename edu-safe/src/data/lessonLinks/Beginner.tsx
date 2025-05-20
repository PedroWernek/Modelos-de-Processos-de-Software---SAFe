import img1 from "../../assets/img1home.webp";
import scrum from "../../assets/scrum.jpg";
import ImageButton from "../../components/buttons/ImageButton";

const imgSize = "200";

export const BeginnerLinks = [
  () => (
    <ImageButton
      imgScr={scrum}
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
