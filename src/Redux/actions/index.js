import {
  CORRECTNESS,
  SET_TOTAL_TIME,
  SHOW_RESULT,
  START_QUIZ,
  STOP_QUIZ,
} from "./actionTypes";

export function startQuiz() {
  return {
    type: START_QUIZ,
  };
}
export function stopQuiz() {
  return {
    type: STOP_QUIZ,
  };
}
export function showResult() {
  return {
    type: SHOW_RESULT,
  };
}
export function getCorrectNess(point) {
  return {
    type: CORRECTNESS,
    point,
  };
}
export function setTotalTime(total) {
  return {
    type: SET_TOTAL_TIME,
    total,
  };
}
