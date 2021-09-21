import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './common/Home'
import NavBar from './common/NavBar'
import ResultDisplay from './common/ResultDisplay'
import Game from './common/Game'


function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:gameCategory/result" component={ResultDisplay}/>
        <Route path="/:gameCategory" component={Game}/>

      </Switch>
    </Router>)

}

export default App
