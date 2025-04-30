import React from "react";

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
      <p style={{ fontSize: "0.7em" }}>
        <strong>fonte:</strong>
        {font}
      </p>
    </div>
  );
};

export default ImageComponent;
