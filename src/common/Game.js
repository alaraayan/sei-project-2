import React from 'react'
import getGame from '../lib/api'
import { useHistory, useParams } from 'react-router-dom'


function Game() {
  const history = useHistory()
  const { gameCategory } = useParams()
  const [questions, setQuestions] = React.useState(null)
  const [answers, setAnswers] = React.useState([])
  const correctAnswers = questions?.map(question => {
    return question.correct_answer
  })
  //Category ID options for the axios request
  const gameCategories = [{ name: 'books',
    id: 10 }, { name: 'generalknowledge', id: 9 }, { name: 'sports', id: 21 }, { name: 'movies', id: 11 }, { name: 'music', id: 12 }, { name: 'celebrities', id: 26 }, { name: 'history', id: 23 }, { name: 'scienceandnature', id: 17 }]
  //Getting the current game category
  const currentGameCategory = gameCategories.filter( category => {
    return category.name === gameCategory
  })
  //Getting the current game category ID for the axios request
  const gameId = currentGameCategory[0]?.id

  const quoestionsAndCorrectAnswers = questions?.reduce((acc, cur) => ({
    ...acc, 
    [cur.question]: cur.correct_answer, 
  }), {})
  
  React.useEffect(() => {
    const getData = async () => {
      const response = await getGame(gameId)
      const initialQuestions = response.data.results
      //Adding correct & incorrect answers together and randomizing the order
      const questionsToDisplay = initialQuestions.map(question => {
        const indexToAddCorrectAnswer = Math.floor(Math.random() * 4)
        const allAnswers = question.incorrect_answers
        //Mutating the array and adding the correct answer to a random index
        allAnswers.splice(indexToAddCorrectAnswer, 0, question.correct_answer)
        const newQuestion = { ...question, allAnswers }
        return newQuestion
      })
      setQuestions(questionsToDisplay)
    }
    getData()
    
  }, [gameId])

  function handleAnswer(e) {
    const correctAnswer = e.target.name
    if (answers.includes(correctAnswer)) {
      setAnswers(answers.filter(answer => answer !== correctAnswer))
    } else {
      handleCorrectAnswer(e)
    }
  }


  function handleCorrectAnswer(e) {
    
    const choice = e.target.innerHTML
    if (correctAnswers.includes(choice) && (!answers.includes(choice))) {
      setAnswers([...answers, choice])
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
              {questions && 
                questions.map(question => ( 
                  <div className="question" key={question.correct_answer}>
                    <div className="field" >
                      <h2 dangerouslySetInnerHTML={ { __html: question.question } }>
                      </h2>
                    </div>
                    <div className="control">
                      {question.allAnswers.map(option =>{
                        return <label className="radio" onClick={handleAnswer} key={option}>
                          <input 
                            type="radio" 
                            name={question.correct_answer}
                          />
                          <p dangerouslySetInnerHTML = { { __html: option } }></p>
                        </label>
                      })}
                    </div>
                  </div>
                ))}
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
  
export default Game