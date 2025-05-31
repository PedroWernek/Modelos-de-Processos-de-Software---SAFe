import React, { useEffect } from "react";
import api from "../../api";

const Narrative = () => {
  window.scrollTo(0, 0);
  useEffect(() => {
    api.get("/api/narratives/3").then((res) => {
      console.log("Narrative data:", res.data);
    });
  }, []);

  return <div>Narrative</div>;
};

export default Narrative;
