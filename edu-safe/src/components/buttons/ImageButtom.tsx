import React from "react";
import { Link } from "react-router-dom";

interface ImageButtomProps {
  imgScr: string;
  alt: string;
  link: string;
}

const ImageButtom: React.FC<ImageButtomProps> = ({ imgScr, alt, link }) => {
  return (
    <div className="image-button__container">
      <Link to={link} className="image-button__link">
        <img
          src={imgScr}
          alt={alt}
          className="image-button__img"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </Link>
    </div>
  );
};

export default ImageButtom;
