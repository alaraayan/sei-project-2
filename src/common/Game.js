import React from 'react'
import getGame from '../lib/api'
import { useHistory, useParams } from 'react-router-dom'


function Game() {
  const history = useHistory()
  const { gameCategory } = useParams()
  const [questions, setQuestions] = React.useState([])
  const [answers, setAnswers] = React.useState({})
  //Category ID options for the axios request
  const gameCategories = [
    { name: 'books', id: 10 }, 
    { name: 'generalknowledge', id: 9 }, 
    { name: 'sports', id: 21 }, 
    { name: 'movies', id: 11 }, 
    { name: 'music', id: 12 }, 
    { name: 'celebrities', id: 26 }, 
    { name: 'history', id: 23 }, 
    { name: 'scienceandnature', id: 17 }
  ]
  //Getting the current game category
  const currentGameCategory = gameCategories.filter( category => {
    return category.name === gameCategory
  })
  //Getting the current game category ID for the axios request
  const gameId = currentGameCategory[0]?.id

  //Questions and correct answers to compare and get a score in the end + pass as props and display in the Result page
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
    setAnswers({ ...answers, [e.target.name]: e.target.value })
  }
  
  function handleResults(e) {
    e.preventDefault()
    //Converting the answers and quoestionsAndCorrectAnswers objects into arrays so we can check the final score
    const finalAnswersToCheck = Object.entries(answers).map(answer => {
      return answer[1]
    })
    const correctAnswers = Object.entries(quoestionsAndCorrectAnswers).map(correctAnswer => {
      return correctAnswer[1]
    })
    //Final score check
    const userScore = correctAnswers.filter(correctAnswer => {
      return finalAnswersToCheck.includes(correctAnswer)
    }) 
    history.push(`/${gameCategory}/result`, { score: userScore.length, answers: quoestionsAndCorrectAnswers })
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
              {questions.length > 0 && 
                questions.map(question => ( 
                  <div className="question" key={question.correct_answer}>
                    <div className="field" >
                      <h2 dangerouslySetInnerHTML={ { __html: question.question } }>
                      </h2>
                    </div>
                    <div className="control">
                      {question.allAnswers.map((option) =>{
                        return <label className="radio" key={option}>
                          <input 
                            type="radio" 
                            value={option}
                            name={question.question}
                            onClick={handleAnswer}
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