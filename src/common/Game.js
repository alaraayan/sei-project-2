import React from 'react'
import { getBooksGame } from '../lib/api'
import { useHistory, useParams } from 'react-router-dom'


function ArtGame() {
  const history = useHistory()
  const { gameCategory } = useParams()
  const [questions, setQuestions] = React.useState(null)
  const [answers, setAnswers] = React.useState([])
  const correctAnswers = questions?.results.map(question => {
    return question.correct_answer
  })
  const gameCategories = [{ name: 'books',
    id: 10 }, { name: 'generalknowledge', id: 9 }, { name: 'sports', id: 21 }, { name: 'movies', id: 11 }, { name: 'music', id: 12 }, { name: 'celebrities', id: 26 }, { name: 'history', id: 23 }, { name: 'scienceandnature', id: 17 }]

  const currentGameCategory = gameCategories.filter( category => {
    return category.name === gameCategory
  })

  console.log(currentGameCategory)

  const gameId = currentGameCategory[0]?.id

  const quoestionsAndCorrectAnswers = questions?.results.reduce((acc, cur) => ({
    ...acc, 
    [cur.question]: cur.correct_answer, 
  }), {})
  
  React.useEffect(() => {
    const getData = async () => {
      const response = await getBooksGame(gameId)
      setQuestions(response.data)
    }
    getData()
    
  }, [gameId])

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
    history.push(`/${gameCategory}/result`, { score: answers.length, answers: quoestionsAndCorrectAnswers })
  }

  return (  
    <>
      <section className="hero is-small-with-navbar is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">{gameCategory}</h1>
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
  
export default ArtGame