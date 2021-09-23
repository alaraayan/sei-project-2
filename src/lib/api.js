import axios from 'axios'

export default function getGame(gameId) {
  return axios.get(`https://opentdb.com/api.php?amount=10&category=${gameId}&difficulty=easy&type=multiple`)
}  

