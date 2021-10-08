import { useLocation, useHistory } from 'react-router-dom'

function ResultDisplay() {
  const location = useLocation()
  window.scrollTo(0, 0)
  //Getting the score + questions and correct answers to display
  const score = location.state.score
  const answers = location.state.answers
  const history = useHistory()
  
  const handleReplay = async (e) => {
    e.preventDefault()
    history.goBack()
  } 
  const handleGoHome = async (e) => {
    e.preventDefault()
    history.push('/')
  } 

  return (
    <div className="container">
      <div className="columns"></div>
      <div className="field-result">
        <h1 className="result">You scored {score} out of 10</h1>
        
        <div className="buttons">
          <button type="submit" className="button is-warning result is-fullwidth is-hovered" onClick={handleReplay}>
          Have Another Go
          </button>
          <button type="submit" className="button is-fullwidth is-danger result is-hovered" onClick={handleGoHome}>
          Play A Different Game
          </button>
        </div>
        <div className="correct-results">
          <button className="button is-success result is-fullwidth is-hovered is-static " style={{ textAlign: 'center', marginBottom: '10px' }} disabled>Correct Answers:</button>
          {Object.entries(answers).map(([question, answer]) => {
            return <div key={question} style={{ textAlign: 'center', marginBottom: '10px' }}>
              
              <ul>
                <h6 dangerouslySetInnerHTML={ { __html: question } }></h6>
                <li dangerouslySetInnerHTML={ { __html: answer } }></li>
              </ul>
              
              
            </div>

          })}
        </div>
      </div>
    </div>
    
  )
}

export default ResultDisplay