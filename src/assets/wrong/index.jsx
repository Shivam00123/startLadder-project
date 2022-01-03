import React from "react";
import "./index.css";
import WrongImg from "../Images/wrong.png";

function Index() {
  return (
    <div className="wrongDiv">
      <div className="img-wrapper">
        <img src={WrongImg} alt="wrong" />
      </div>
    </div>
  );
}

export default Index;
