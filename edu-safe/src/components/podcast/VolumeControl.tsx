import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeOff,
  faVolumeLow,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

interface VolumeControlProps {
  volume: number;
  onVolumeChange: (newVolume: number) => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  onVolumeChange,
}) => {
  // Guarda o último volume antes de silenciar para poder restaurá-lo.
  const [lastVolume, setLastVolume] = useState(volume > 0 ? volume : 50);
  const [isHovering, setIsHovering] = useState(false);

  // Determina qual ícone de volume exibir.
  const getVolumeIcon = () => {
    if (volume === 0) return faVolumeOff;
    if (volume < 50) return faVolumeLow;
    return faVolumeHigh;
  };

  // Alterna entre mudo e o volume anterior.
  const toggleMute = () => {
    if (volume > 0) {
      setLastVolume(volume);
      onVolumeChange(0);
    } else {
      onVolumeChange(lastVolume);
    }
  };

  const sliderBackground = `linear-gradient(to right, #1db954 ${volume}%, #555 ${volume}%)`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "flex-end",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      {/* Estilos CSS para o slider e o efeito de hover */}
      <style>{`
        .volume-slider {
          width: 80px;
          opacity: 1;
          transition: opacity 0.3s ease-in-out, width 0.3s ease-in-out;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          height: 5px;
          border-radius: 5px;
          outline: none;
        }
        .volume-slider.hidden {
          width: 0;
          opacity: 0;
        }
        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
        }
        .volume-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>

      {/* Botão com o ícone de volume */}
      <button
        onClick={toggleMute}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          fontSize: "18px",
          padding: "5px",
        }}>
        <FontAwesomeIcon icon={getVolumeIcon()} />
      </button>

      {/* Slider de volume que aparece no hover */}
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className={`volume-slider ${isHovering ? "" : "hidden"}`}
        style={{ background: sliderBackground }}
      />
    </div>
  );
};

export default VolumeControl;
