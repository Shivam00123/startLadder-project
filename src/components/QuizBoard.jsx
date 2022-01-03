import React from "react";
import { connect } from "react-redux";
import "../styles/quizBoard.css";
import QuizPage from "./QuizPage";
import Result from "./Result";
import StartPage from "./StartPage";

function QuizBoard({ started, result }) {
  return (
    <div className="quizBoard">
      {result ? <Result /> : !started ? <StartPage /> : <QuizPage />}
    </div>
  );
}

function mapStateToProps({ started, result }) {
  return {
    started,
    result,
  };
}

export default connect(mapStateToProps)(QuizBoard);
