import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"
import axios from "axios";

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise() {
  return ({ type: MOVE_CLOCKWISE })
}

export function moveCounterClockwise() {
  return ({ type: MOVE_COUNTERCLOCKWISE })
}

export function selectAnswer(answer) {
  return ({ type: SET_SELECTED_ANSWER, payload: answer })
}

export function setMessage(message) {
  return ({ type: SET_INFO_MESSAGE, payload: message })
}

export function setQuiz(question) {
  return ({ type: SET_QUIZ_INTO_STATE, payload: question })
}

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
  dispatch(setQuiz(null))
  axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz({
        question: res.data.question,
        a1: res.data.answers[0].text,
        a1id: res.data.answers[0].answer_id,
        a2: res.data.answers[1].text,
        a2id: res.data.answers[1].answer_id
      }));
      dispatch(setMessage('blah'))
    })
}

export function postAnswer() {
  return function (dispatch) {
    dispatch(selectAnswer(answer))
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
