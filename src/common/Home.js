import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()

  const [game, setGame] = React.useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    history.push(`/${game}`)
  }

  function handleSelected(e) {
    const selectedOption = e.target.value
    setGame(selectedOption)
  }
  return ( 
    <div className="home-body">
      <section className="hero is-fullwidth-with-navbar is-halfheight is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">TRIVIAL PURSUIT</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="columns">
            <form
              className="column is-half is-offset-one-quarter box"
              onSubmit={handleSubmit}
            >
              <div className="field">
                <label className="control label">Game Category</label>
                <select className="drop-down input is-primary" name="input" onChange={handleSelected}>
                  <option selected disabled>Select a game category</option>
                  <option value="books" >Books</option>
                  <option value="celebrities" >Celebrities</option>
                  <option value="generalknowledge" >General Knowledge</option>
                  <option value="history" >History</option>
                  <option value="movies" >Movies</option>
                  <option value="music" >Music</option>
                  <option value="scienceandnature" >ScienceAndNature</option>
                  <option value="sports" >Sports</option>
                </select>
              </div>
              <div className="field">
                <button type="submit" className="button is-danger is-fullwidth">
                  LET&apos;S PLAY!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home