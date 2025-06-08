import React from "react";

interface EpisodeInfoProps {
  title: string;
  description: string;
}

const EpisodeInfo: React.FC<EpisodeInfoProps> = ({ title, description }) => {
  return (
    <>
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          backgroundColor: "#00000088",
          padding: "10px 20px",
          borderRadius: "12px",
          backdropFilter: "blur(20px)",
        }}>
        {title}
      </h1>
      <p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          marginBottom: "20px",
          backgroundColor: "#00000088",
          padding: "10px 20px",
          borderRadius: "12px",
          fontSize: "1.2rem",
          backdropFilter: "blur(20px)",
        }}>
        {description}
      </p>
    </>
  );
};

export default EpisodeInfo;
