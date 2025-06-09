import React from "react";
import "../../../css/Home.css";

interface ImageComponentProps {
  src: string;
  alt?: string;
  font: string;
  width?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  font,
  width,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <img
        src={src}
        alt={alt}
        style={{ width: width || "100%", height: "auto" }}
      />
      <p style={{ fontSize: "1rem", fontFamily: "'Open Sans', sans-serif" }}>
        <strong style={{ fontFamily: "'Open Sans', sans-serif" }}>FONTE:{" "}</strong>
        {font}
      </p>
    </div>
  );
};

export default ImageComponent;
