import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './common/Home'
import NavBar from './common/NavBar'
import ResultDisplay from './common/ResultDisplay'
import GeneralGame from './games/GeneralGame'




function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/generalgame" component={GeneralGame}/>
        <Route path="/results" component={ResultDisplay}/>
      </Switch>
    </Router>)

}

export default App
