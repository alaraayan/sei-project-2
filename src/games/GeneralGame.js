
import React from 'react'
import ResultDisplay from '../common/ResultDisplay'
import { getGeneralKnowledgeGame } from '../lib/api'
import { useHistory } from 'react-router-dom'



function GeneralGame() {
  const history = useHistory()
  const [questions, setQuestions] = React.useState(null)
  const [answers, setAnswers] = React.useState([])
  const correctAnswers = questions?.results.map(question => {
    return question.correct_answer
  })

  // const obj = correctAnswers.reduce((acc, cur, i) => ({ ...acc, [i+1]: cur}), {})
  
  
  // const [isSelected, setIsSelected] = React.useState(false)
  React.useEffect(() => {
    const getData = async () => {
      const response = await getGeneralKnowledgeGame()
      setQuestions(response.data)
      
    }
    getData()
    
  }, [])

  function handleCorrectAnswer(e) {
    const choice = e.target.innerHTML
    // setIsSelected(!isSelected)
    
    if (correctAnswers.includes(choice) && (!answers.includes(choice))) {
      setAnswers([...answers, choice])
      console.log(answers, 'WE DID IT')
    } 
    console.log('am i rendering too much?')
  }

  function handleWrongAnswer(e) {
    const correctAnswer = e.target.dataset.answer
    if (answers.includes(correctAnswer)) {
      console.log('in answers')
      setAnswers(answers.filter(answer => answer !== correctAnswer))
    }
    // const index = answers.findIndex((a) => a === correctAnswer)
    // if (index !== -1) {
    //   answers.splice(index, 1)
    // }
    // if (answers.includes(question.correct_answer)) {
    //   answers.push(choice)
    //   console.log(answers, 'WE DID IT')
    // } 
    console.log('chose wrong')
  }


  function handleResults(e) {
    e.preventDefault()
    // const result = answers.length
    // ResultDisplay(result)
    // history.push('/results')
    console.log('getting the results')
    history.push('/results', { score: answers.length })
    console.log(answers.length)
  }

  
  
  return (  
    <>
      <section className="hero is-small-with-navbar is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">GENERAL KNOWLEDGE</h1>
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
                      <h2 dangerouslySetInnerHTML={ { __html: question.question } }>
                      </h2>
                    </div>
                    <div className="control">
                      <label className="radio" onClick={handleCorrectAnswer}>
                        <input 
                          type="radio" 
                          name={question.question}
                        /> 
                        <p dangerouslySetInnerHTML = {{__html: question.correct_answer}}></p>
                      </label>
                      <label className="radio" onClick={handleWrongAnswer}>
                        <input 
                          type="radio" 
                          data-answer={question.correct_answer}
                          name={question.question}
                        />
                        <p dangerouslySetInnerHTML = {{__html: question.incorrect_answers[0]}}></p>
                      </label>
                      <label className="radio" onClick={handleWrongAnswer}>
                        <input 
                          type="radio" 
                          data-answer={question.correct_answer}
                          name={question.question}
                        /> 
                        <p dangerouslySetInnerHTML = {{__html: question.incorrect_answers[1]}}></p>
                      </label>
                      <label className="radio" onClick={handleWrongAnswer}>
                        <input 
                          type="radio" 
                          data-answer={question.correct_answer}
                          name={question.question}
                        />
                        <p dangerouslySetInnerHTML = {{__html: question.incorrect_answers[2]}}></p>
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
  
export default GeneralGame







