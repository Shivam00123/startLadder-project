import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCorrectNess } from "../../Redux/actions";
import CorrectImg from "../Images/correct.png";
import "./index.css";
function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCorrectNess(1));
  }, []);

  return (
    <div className="correctDiv">
      <div className="img-wrapper">
        <img src={CorrectImg} alt="correct" />
      </div>
    </div>
  );
}

export default Index;
