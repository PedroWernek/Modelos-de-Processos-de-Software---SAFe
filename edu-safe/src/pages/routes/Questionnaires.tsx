import React from "react";
import { Outlet } from "react-router-dom";

import "../../css/Questionnaires.css";

const questionnaires = () => {
  return (
    <div className="questionnaires">
      <Outlet />
    </div>
  );
};

export default questionnaires;
