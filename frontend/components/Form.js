import React from 'react'
import { connect } from 'react-redux'
import { postQuiz, inputChange} from '../state/action-creators'


function Form(props) {
  
  const { state, postQuiz, inputChange } = props;


  const onChange = evt => {
    inputChange(copy)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    postQuiz(formInfo)
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
  console.log(state)
  return {
    state: state.form
  }
}

export default connect(mapStateToProps, { inputChange, postQuiz })(Form)
