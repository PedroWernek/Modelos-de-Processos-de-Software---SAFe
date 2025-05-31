import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Results from "./Results";

const ResultsWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;

  if (!state) {
    navigate("/modulos");
    return null;
  }

  const { passed, correctAnswers, minCorrectAnswers } = state;

  return (
    <Results
      passed={passed}
      correctAnswers={correctAnswers}
      minCorrectAnswers={minCorrectAnswers}
    />
  );
};

export default ResultsWrapper;
