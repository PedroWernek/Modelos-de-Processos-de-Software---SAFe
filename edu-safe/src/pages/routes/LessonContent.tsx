import React from "react";
import { Outlet } from "react-router-dom";

import "../../css/ModulesContent.css";
import LofiPlayer from "../../components/podcast/LofiPlayer";

const LessonContent = () => {
  return (
    <div className="modules-content__container">
      <Outlet />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          padding: "1rem",
          display: "flex",

          color: "white",
        }}>
        <LofiPlayer />
      </div>
    </div>
  );
};

export default LessonContent;
