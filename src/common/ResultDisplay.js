import { useLocation } from 'react-router-dom'

function ResultDisplay(result) {
  const location = useLocation()
  const finalResult = location.state.score
  return (
    <h1 className="result-show">You scored {finalResult} out of 10</h1>
  )
}

export default ResultDisplay