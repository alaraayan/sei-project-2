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
    <div className="field">
      <h1 className="result">You scored {finalResult} out of 10</h1>
      <div className="control">
        <button type="submit" className="button is-halfwidth is-primary result" onClick={handleReplay}>
          Have Another Go
        </button>
        <button type="submit" className="button is-halfwidth is-danger result" onClick={handleGoHome}>
          Play Different Game
        </button>
      </div>
    </div>
  )
}

export default ResultDisplay