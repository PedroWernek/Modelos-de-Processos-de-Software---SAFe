import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../../css/ModulesContent.css";
import LofiPlayer from "../../components/podcast/LofiPlayer";

const LessonContent = () => {
  const [isLofiPlayerOpen, setIsLofiPlayerOpen] = useState(false);

  const toggleLofiPlayer = () => {
    setIsLofiPlayerOpen(!isLofiPlayerOpen);
  };

  return (
    <div className="modules-content__container">
      <Outlet />

      <div className="lofi-widget-container">
        <div
          className="lofi-player-card"
          style={{ display: isLofiPlayerOpen ? "flex" : "none" }}>
          <button
            className="lofi-player-close-btn"
            onClick={toggleLofiPlayer}
            aria-label="Fechar player de música">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <LofiPlayer />
        </div>

        {!isLofiPlayerOpen && (
          <button
            className="lofi-player-open-btn"
            onClick={toggleLofiPlayer}
            aria-label="Abrir player de música">
            <FontAwesomeIcon icon={faMusic} />
          </button>
        )}
      </div>
    </div>
  );
};

export default LessonContent;
