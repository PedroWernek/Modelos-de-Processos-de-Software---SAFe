import React from "react";
import { Outlet } from "react-router-dom";

import "../../css/ModulesContent.css";

const LessonContent = () => {
  return (
    <div className="modules-content__container">
      <Outlet />
    </div>
  );
};

export default LessonContent;
