import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"
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

export function inputChange(copy) {
  return ({type: INPUT_CHANGE, payload: copy})
}

export function resetForm() { 
  return ({ type: RESET_FORM })
}

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
  dispatch(setQuiz(null))
  axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz({
        quiz_id: res.data.quiz_id,
        question: res.data.question,
        a1: res.data.answers[0].text,
        a1id: res.data.answers[0].answer_id,
        a2: res.data.answers[1].text,
        a2id: res.data.answers[1].answer_id
      }));
    })
}

export function postAnswer(info) {
  return function (dispatch) {
    dispatch(selectAnswer(null))
    axios.post('http://localhost:9000/api/quiz/answer', info)
    .then(res => {
      console.log(res.data.message)
      dispatch(setMessage(res.data.message)); 
      dispatch(fetchQuiz());
    });
  }
}

export function postQuiz(newQ) {
  return function (dispatch) {
    console.log('poster')
    axios.post('http://localhost:9000/api/quiz/new', newQ)
    .then(res => {
      console.log(res.data.message);
      dispatch(resetForm());
    })
  }
}

// set message
// reset form
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
