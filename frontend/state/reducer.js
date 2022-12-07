import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from './action-types'
// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

export const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case (MOVE_CLOCKWISE):
      if (state === 5) {
        return state = 0
      } else {
        return (state + 1);
      }
    case (MOVE_COUNTERCLOCKWISE):
      if (state === 0) {
        return state = 5;
      } else {
        return (state - 1);
      }
    default:
      return state;
  }
}

const initialQuizState = {
  quiz_id: null,
  question: null,
  a1: null,
  a2: null,
  a1id: null,
  a2id: null
}
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:
      return { ...state, question: action.payload }
    default:
      return state;
  }
}

const initialSelectedAnswerState = { answer: null }
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return {...state, answer: action.payload}
    default:
      return state;
  }
}

const initialMessageState = {message: ''}
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return { ...state, message: action.payload }
    default:
      return state;
  }
}



const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}

function form(state = initialFormState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      return {...state, [action.key]: action.val}
    case RESET_FORM:
      return {...state, initialFormState}
    default:
      return state;
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })