import React from 'react'
import { getCelebritiesGame } from '../lib/api'
import { useHistory } from 'react-router-dom'



function CelebritiesGame() {
  const history = useHistory()
  const [questions, setQuestions] = React.useState(null)
  const [answers, setAnswers] = React.useState([])
  const correctAnswers = questions?.results.map(question => {
    return question.correct_answer
  })

  const quoestionsAndCorrectAnswers = questions?.results.reduce((acc, cur) => ({
    ...acc, 
    [cur.question]: cur.correct_answer, 
  }), {})

  React.useEffect(() => {
    const getData = async () => {
      const response = await getCelebritiesGame()
      setQuestions(response.data)
      
    }
    getData()
    
  }, [])

  function handleCorrectAnswer(e) {
    const choice = e.target.innerHTML
    
    if (correctAnswers.includes(choice) && (!answers.includes(choice))) {
      setAnswers([...answers, choice])
    } 
  }

  function handleWrongAnswer(e) {
    const correctAnswer = e.target.dataset.answer
    if (answers.includes(correctAnswer)) {
      setAnswers(answers.filter(answer => answer !== correctAnswer))
    }
  }
  

  function handleResults(e) {
    e.preventDefault()
    history.push('/results', { score: answers.length, answers: quoestionsAndCorrectAnswers })
  }

  
  
  return (  
    <>
      <section className="hero is-small-with-navbar is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">CELEBRITIES</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="rows"> 
            <form
              onSubmit={handleResults}
            >
              {questions ? 
                questions.results.map(question => ( 
                  <div className="question" key={question.correct_answer}>
                    <div className="field" >
                      <h2 
                        dangerouslySetInnerHTML={ { __html: question.question } }>
                      </h2>
                    </div>
                    <div className="control">
                      <label className="radio" onClick={handleCorrectAnswer}>
                        <input 
                          type="radio" 
                          name={question.question}
                        /> 
                        <p dangerouslySetInnerHTML = { { __html: question.correct_answer } }></p>
                      </label>
                      <label className="radio" onClick={handleWrongAnswer}>
                        <input 
                          type="radio" 
                          data-answer={question.correct_answer}
                          name={question.question}
                        />
                        <p dangerouslySetInnerHTML = { { __html: question.incorrect_answers[0] } }></p>
                      </label>
                      <label className="radio" onClick={handleWrongAnswer}>
                        <input 
                          type="radio" 
                          data-answer={question.correct_answer}
                          name={question.question}
                        /> 
                        <p dangerouslySetInnerHTML = { { __html: question.incorrect_answers[1] } }></p>
                      </label>
                      <label className="radio" onClick={handleWrongAnswer}>
                        <input 
                          type="radio" 
                          data-answer={question.correct_answer}
                          name={question.question}
                        />
                        <p dangerouslySetInnerHTML = { { __html: question.incorrect_answers[2] } }></p>
                      </label>
                    </div>
                  </div>
                ))
                : 
                <p>...loading</p>
              }
              <div className="field">
                <button type="submit" className="button is-fullwidth is-danger">
                Show My Score!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>  
    </>        
  )
}
  
export default CelebritiesGame