import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer } from '../state/action-creators';

function Quiz(props) {

  const { question, fetchQuiz, answer, selectAnswer} = props;

  useEffect(() => {
    if (question === null) {
      fetchQuiz();
    }
  });


  const clickAnswer = (evt) => {
    console.log(evt.target.id)
    selectAnswer(evt.target.id);
    if (answer) {
      console.log(answer.answer)
    }  
  }

  return (
    <div id="wrapper">
      {question || answer ? (
        <>
          <h2>{`${question.question}`}</h2>

          <div id="quizAnswers">
            <div className= {`answer${answer === question.a1id ? ' selected' : ''}`}
            >
              {`${question.a1}`}
              <button id={question.a1id} onClick={clickAnswer}>
                {answer === question.a1id ? "SELECTED" : "Select"}
              </button>
            </div>

            <div className= {`answer${answer === question.a2id ? ' selected' : ''}`} >
              {`${question.a2}`}
              <button id={question.a2id} onClick={clickAnswer}>
              { answer === question.a2id ? "SELECTED" : "Select"}
              </button>
            </div>
          </div>

          <button disabled={answer ? false : true} id="submitAnswerBtn">Submit answer</button>
        </>
      ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    question: state.quiz.question,
    answer: state.selectedAnswer.answer
  }
}

export default connect(mapStateToProps, { fetchQuiz, selectAnswer })(Quiz)
