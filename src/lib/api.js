import axios from 'axios'

export function getGeneralKnowledgeGame() {
  return axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
}

