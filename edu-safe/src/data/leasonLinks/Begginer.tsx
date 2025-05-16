import img1 from "../../assets/img1home.webp";
import scrum from "../../assets/scrum.jpg";
import ImageButtom from "../../components/buttons/ImageButtom";

const imgSize = "200";

export const BeginnerLinks = [
  () => (
    <ImageButtom
      imgScr={scrum}
      alt="Imagem Módulo 1"
      link="/modulos/conteudo/iniciante/1"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButtom
      imgScr={img1}
      alt="Imagem 2"
      link="/modulos/iniciante/2"
      imgSize={imgSize}
    />
  ),
  () => (
    <ImageButtom
      imgScr={img1}
      alt="Imagem 3"
      link="/modulos/iniciante/3"
      imgSize={imgSize}
    />
  ),
];
