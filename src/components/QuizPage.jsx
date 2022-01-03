import React, { useEffect, useRef } from "react";
import "../styles/quizPage.css";
import Correct from "../assets/correct";
import Wrong from "../assets/wrong";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTotalTime, showResult } from "../Redux/actions";

function QuizPage() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [data, setData] = useState("");
  const [answer, setAnswer] = useState("");
  const [wrongOrright, setWrongOrRight] = useState("");
  const [currentQues, setCurrentQues] = useState(0);
  const [solution, setSolution] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [progress, setProgress] = useState(false);
  const [total, setTotal] = useState(0);
  const answerRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    let interval = setInterval(() => {
      if (sec > 0) {
        setSec(sec - 1);
      }
      if (!animate) {
        if (sec === 59) {
          setMin(min + 1);
          setSec(0);
        } else {
          setSec(sec + 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    if (!data) {
      axios
        .get("https://api.startladder.co/api/frontend/tasks")
        .then((res) => {
          setData(res.data.task_array);
        })
        .catch((err) => console.error(err));
    }
    answerRef.current.focus();
  }, [data]);

  const handleCheckAnswer = () => {
    setProgress(true);
    setAnimate(true);
    if (data && answer) {
      if (data[currentQues].answer === answer && !solution) {
        setWrongOrRight("right");
      } else {
        setWrongOrRight("wrong");
      }
    } else {
      return;
    }
    if (currentQues < 5) {
      setTimeout(() => {
        setCurrentQues(currentQues + 1);
        setSolution(false);
        if (min == 0) {
          setTotal(sec);
        }
      }, 300);
    } else {
      dispatch(showResult());
    }
  };
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  useEffect(() => {
    if (wrongOrright) {
      setTimeout(() => {
        setWrongOrRight("");
      }, 1500);
    }
  }, [wrongOrright]);

  useEffect(() => {
    setAnimate(false);
  }, [currentQues]);

  useEffect(() => {
    if (total) {
      dispatch(setTotalTime(total));
    }
  }, [total]);

  return (
    <div className="QuizCard">
      <div className="timerSection">
        <div className="topicDiv">
          <h4>TOPIC</h4>
          <p>Product Management</p>
        </div>
        <div className="timerDiv">
          <div className="time">
            <div className="min">
              <span>
                <span>{min < 10 ? 0 : ""}</span>
                {min}
              </span>
              <p>MIN</p>
            </div>
            <div className="colon">:</div>
            <div className="sec">
              <span>
                {sec < 10 ? 0 : ""}
                {sec}
              </span>
              <p>SEC</p>
            </div>
          </div>
        </div>
      </div>
      <section className="questionDiv">
        <h4>QUESTION {currentQues + 1} of 6</h4>
        {data && (
          <p className={animate ? "animate" : "no-animate"} disabled={progress}>
            {data[currentQues].question}
          </p>
        )}
      </section>
      <section className="answerDiv">
        {!wrongOrright && (
          <>
            <div className="answer">
              <h4>ANSWER</h4>
              <input
                ref={answerRef}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleCheckAnswer();
                  }
                }}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Type Answer..."
              />
            </div>
            <div className="help">
              {!solution ? (
                <>
                  <span>Stuck ?</span>
                  <button onClick={() => setSolution(true)} className="btn">
                    See Solution
                  </button>
                </>
              ) : data ? (
                <span>{data[currentQues].answer}</span>
              ) : (
                <span>Something went wrong</span>
              )}
            </div>
          </>
        )}
        {wrongOrright === "right" && <Correct />}
        {wrongOrright === "wrong" && <Wrong />}
      </section>
    </div>
  );
}

export default QuizPage;
