import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import VolumeControl from "./VolumeControl"; // Importa o novo componente

const btnStyle: React.CSSProperties = {
  background: "#1db954",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  fontSize: "24px",
  cursor: "pointer",
};

interface PlayerControlsProps {
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  podcastVolume: number;
  togglePlay: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPodcastVolume: (volume: number) => void;
  formatTime: (time: number) => string;
}

const PlayerControls: React.FC<PlayerControlsProps> = ({
  isPlaying,
  progress,
  currentTime,
  duration,
  podcastVolume,
  togglePlay,
  handlePrev,
  handleNext,
  handleSeek,
  setPodcastVolume,
  formatTime,
}) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        marginTop: "auto", // Empurra o player para a parte de baixo
        marginBottom: "20px",
        backgroundColor: "#000000cc",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        backdropFilter: "blur(10px)",
      }}>
      {/* Barra de Progresso */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "14px" }}>
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          value={progress || 0}
          min={0}
          max={100}
          onChange={handleSeek}
          style={{
            flex: 1,
            height: "6px",
            borderRadius: "5px",
            background: `linear-gradient(to right, #1db954 ${progress}%, #555 ${progress}%)`,
            appearance: "none",
            outline: "none",
            cursor: "pointer",
          }}
        />
        <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "14px" }}>
          {formatTime(duration)}
        </span>
      </div>
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none; height: 14px; width: 14px; border-radius: 50%;
          background: #1db954; cursor: pointer; border: none; 
        }
        input[type="range"]::-moz-range-thumb {
          height: 14px; width: 14px; border-radius: 50%;
          background: #1db954; cursor: pointer; border: none;
        }
      `}</style>

      {/* Container para Botões Principais e Controle de Volume */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
        }}>
        <div style={{ flex: 1 }}></div>

        {/* Botões de Controle Centralizados */}
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}>
          <button style={btnStyle} onClick={handlePrev}>
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>
          <button style={btnStyle} onClick={togglePlay}>
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button style={btnStyle} onClick={handleNext}>
            <FontAwesomeIcon icon={faForwardStep} />
          </button>
        </div>

        {/* Controle de Volume à Direita */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <VolumeControl
            volume={podcastVolume}
            onVolumeChange={setPodcastVolume}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
