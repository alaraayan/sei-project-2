import axios from 'axios'

export function getBooksGame(gameId) {
  return axios.get(`https://opentdb.com/api.php?amount=10&category=${gameId}&difficulty=easy&type=multiple`)
}  

