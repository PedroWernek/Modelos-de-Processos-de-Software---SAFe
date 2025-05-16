import React from "react";
import { Link } from "react-router-dom";

interface ImageButtomProps {
  imgScr: string;
  alt: string;
  link: string;
  imgSize?: string;
}

const ImageButtom: React.FC<ImageButtomProps> = ({
  imgScr,
  alt,
  link,
  imgSize,
}) => {
  const fixedWidth = imgSize ? `${imgSize}` : "200px"; // você pode ajustar o padrão
  const fixedHeight = "300px";

  return (
    <div className="image-button__container">
      <Link
        to={link}
        className="image-button__link"
        style={{ margin: "0", padding: "0", border: "0" }}>
        <img
          src={imgScr}
          alt={alt}
          className="image-button__img"
          style={{
            width: fixedWidth,
            height: fixedHeight,
            aspectRatio: "9/6",
            objectFit: "cover",
            border: "3px solid #00eeff",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,1)",
          }}
        />
      </Link>
    </div>
  );
};

export default ImageButtom;
