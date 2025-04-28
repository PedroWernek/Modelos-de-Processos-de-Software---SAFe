import React from "react";
import { Link } from "react-router-dom";

interface ImageButtomProps {
  imgScr: string;
  imgSize?: string;
  alt: string;
  link: string;
}

const ImageButtom: React.FC<ImageButtomProps> = ({
  imgScr,
  imgSize,
  alt,
  link,
}) => {
  return (
    <div className="image-button__container">
      <Link to={link} className="image-button__link">
        <img
          src={imgScr}
          alt={alt}
          className="image-button__img"
          style={{
            maxHeight: imgSize ? `${Number(imgSize)}dvw` : "30dvh",
            maxWidth: "100vw",
            width: "auto",
            height: "auto",
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
      </Link>
    </div>
  );
};

export default ImageButtom;
