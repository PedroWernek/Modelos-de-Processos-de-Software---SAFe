import React, { useEffect } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import BloquedPage from "../routes/BloquedPage";

interface NarrativeProps {
  bloqued?: boolean;
}

interface Narrativa {
  texto: string;
}

const Narrative: React.FC<NarrativeProps> = ({ bloqued }) => {
  const { id } = useParams<{ id: string }>();
  const [narrativa, setNarrativa] = React.useState<Narrativa>();
  window.scrollTo(0, 0);
  useEffect(() => {
    api.get(`/api/narrativas/${id}`).then((res) => {
      console.log("Narrative data:", res.data);
      setNarrativa(res.data);
    });
  }, []);

  return (
    <>
      {bloqued ? (
        <>
          <BloquedPage />
        </>
      ) : (
        <div style={{ color: "white", fontSize: "2em", padding: "10px" }}>
          {narrativa?.texto}
        </div>
      )}
    </>
  );
};

export default Narrative;
