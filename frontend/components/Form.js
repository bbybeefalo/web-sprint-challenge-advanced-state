import React from 'react'
import { connect } from 'react-redux'
import { postQuiz, inputChange} from '../state/action-creators'


function Form(props) {
  
  const { newFalseAnswer, newQuestion, newTrueAnswer, postQuiz, inputChange, state} = props;

  const onChange = evt => {
    inputChange(evt.target.id, evt.target.value)
  }

  const onSubmit = (evt) => {
    console.log(newFalseAnswer)
    evt.preventDefault();
    postQuiz({
      question_text: newQuestion,
      true_answer_text: newTrueAnswer,
      false_answer_text: newFalseAnswer
    });
  }

  return (
    <form id="form" >
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        id="newQuestion"
        onChange={onChange}
        placeholder="Enter question"
      />

      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />

      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />

      <button id="submitNewQuizBtn" onClick={onSubmit} disabled={false}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer,
    state: state.form
  }
}

export default connect(mapStateToProps, { inputChange, postQuiz })(Form)
