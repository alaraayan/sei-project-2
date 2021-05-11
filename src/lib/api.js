import axios from 'axios'

export function getGeneralKnowledgeGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
}

export function getSportsGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple')
}

export function getMoviesGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
}

export function getBooksGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple')
}

export function getMusicGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple')
}

export function getCelebritiesGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple')
}

export function getHistoryGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple')
}

export function getScienceAndNatureGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple')
}
