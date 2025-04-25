import React from "react";
import LessonHeader from "../../components/lessons/LessonHeader";

const LessonsPage: React.FC = () => {
    return (
      <div style={{ padding: "40px", background: "#121212", minHeight: "100vh" }}>
        <LessonHeader
          title="Título Bonito"
          description="Descrição bonita."
          backgroundColor="#1a1a1a" 
          textColor="#ffffff"       
        />
      </div>
    );
  };
  
  export default LessonsPage;