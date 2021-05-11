import { useLocation } from 'react-router-dom'

function ResultDisplay(result) {
  const location = useLocation()
  console.log(location.state.score)
  return (
    <h1>Hello!</h1>
  )
}

export default ResultDisplay