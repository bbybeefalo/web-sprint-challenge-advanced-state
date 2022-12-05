import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { setQuiz, fetchQuiz } from '../state/action-creators';

function Quiz(props) {

  const { question, fetchQuiz } = props;


 useEffect(() => {
  if (question === null) {
    fetchQuiz();
    console.log(question);
}});



  return (
    <div id="wrapper">
      { question  ? (
          <>
            <h2>{`${question.question}`}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {`${question.a1}`}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {`${question.a2}`}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  return{
    question: state.quiz.question,
  }
}

export default connect(mapStateToProps, { setQuiz, fetchQuiz })(Quiz)
