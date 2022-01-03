import {
  CORRECTNESS,
  SET_TOTAL_TIME,
  SHOW_RESULT,
  START_QUIZ,
  STOP_QUIZ,
} from "../actions/actionTypes";

const initialState = {
  started: false,
  result: false,
  points: 0,
  total: 0,
};

export default function quiz(state = initialState, action) {
  switch (action.type) {
    case START_QUIZ:
      return {
        ...state,
        started: true,
        result: false,
      };
    case STOP_QUIZ:
      return {
        ...state,
        started: false,
      };
    case SHOW_RESULT:
      return {
        ...state,
        result: true,
      };
    case CORRECTNESS:
      return {
        ...state,
        points: state.points + action.point,
      };
    case SET_TOTAL_TIME:
      return {
        ...state,
        total: state.total + action.total,
      };
    default:
      return { ...state };
  }
}
