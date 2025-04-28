import React from "react";
import { Outlet } from "react-router-dom";

const ModulesContent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ModulesContent;
