import React from "react";
import { connect, useDispatch } from "react-redux";
import { startQuiz } from "../Redux/actions";
import "../styles/result.css";

function Result({ points, total }) {
  const dispatch = useDispatch();
  const handlePlayAgain = () => {
    dispatch(startQuiz());
  };

  const accuracy = () => {
    if (points) {
      let totalAccuracy = (points / 6) * 100;
      return (Math.round(totalAccuracy * 100) / 100).toFixed(2);
    }
    return 0;
  };
  const avgSpeed = () => {
    if (total) {
      let totalspeed = total / 6;
      return (Math.round(totalspeed * 100) / 100).toFixed(2);
    }
    return 0;
  };

  return (
    <div className="result">
      <div className="resultInfo">
        <div className="stats">
          <div className="accuracy cal">
            <p>{accuracy()}%</p>
            <p>Accuracy</p>
          </div>
          <div className="speed cal">
            <p>{avgSpeed()}s</p>
            <p>Avg Speed</p>
          </div>
        </div>
        <button className="btn playAgain" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({ points, total }) {
  return {
    points,
    total,
  };
}
export default connect(mapStateToProps)(Result);
