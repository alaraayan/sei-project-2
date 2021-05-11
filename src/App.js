import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './common/Home'
import NavBar from './common/NavBar'
import ResultDisplay from './common/ResultDisplay'
import GeneralKnowledgeGame from './games/GeneralKnowledgeGame'
import SportsGame from './games/SportsGame'
import MusicGame from './games/MusicGame'
import MoviesGame from './games/MoviesGame'
import BooksGame from './games/BooksGame'
import HistoryGame from './games/HistoryGame'
import ScienceAndNatureGame from './games/ScienceAndNatureGame'
import CelebritiesGame from './games/CelebritiesGame'


function App() {

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/generalknowledge" component={GeneralKnowledgeGame}/>
        <Route path="/sports" component={SportsGame}/>
        <Route path="/books" component={BooksGame}/>
        <Route path="/celebrities" component={CelebritiesGame}/>
        <Route path="/movies" component={MoviesGame}/>
        <Route path="/music" component={MusicGame}/>
        <Route path="/history" component={HistoryGame}/>
        <Route path="/scienceandnature" component={ScienceAndNatureGame}/>
        <Route path="/results" component={ResultDisplay}/>
      </Switch>
    </Router>)

}

export default App
