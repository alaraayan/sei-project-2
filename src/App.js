import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './common/Home'
import GeneralGame from './games/GeneralGame'




function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/generalgame" component={GeneralGame}/>
      </Switch>
    </Router>)

}

export default App
