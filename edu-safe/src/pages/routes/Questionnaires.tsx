import { Outlet } from "react-router-dom";

import "../../css/Questionnaires.css";

const questionnaires = () => {
  window.scrollTo(0, 0); // Scroll to the top of the page when this component is rendered

  return (
    <div className="questionnaires">
      <Outlet />
    </div>
  );
};

export default questionnaires;
