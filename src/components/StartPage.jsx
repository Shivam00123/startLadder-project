import React from "react";
import { useDispatch } from "react-redux";
import { startQuiz } from "../Redux/actions";
import "../styles/startPage.css";

function StartPage() {
  const dispatch = useDispatch();
  const handleStartQuiz = () => {
    dispatch(startQuiz());
  };
  return (
    <div className="quizStartCard">
      <button className="btn" onClick={handleStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartPage;
