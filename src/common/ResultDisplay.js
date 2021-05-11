import { useLocation, useHistory } from 'react-router-dom'

function ResultDisplay() {
  const location = useLocation()
  const finalResult = location.state.score
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
        <h1 className="result">You scored {finalResult} out of 10</h1>
        <div className="buttons">
          <button type="submit" className="button is-primary result is-fullwidth is-hovered" onClick={handleReplay}>
          Have Another Go
          </button>
          <button type="submit" className="button is-fullwidth is-danger result is-hovered" onClick={handleGoHome}>
          Play A Different Game
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default ResultDisplay