import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    history.push('/generalgame')
  }
  return ( 
    <div className="home-body">
      <section className="hero is-fullwidth-with-navbar is-halfheight is-info">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">JEOPARDY</h1>
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
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input is-warning"
                    placeholder="Type Username"
                    name="name"                   
                  />
                </div>
              </div>
              <div className="field">
                <label className="control label">Game Category</label>
                <select className="drop-down input is-primary" name="input">
                  <option value="game-category">Select a game category</option>
                  <option value="GK">General Knowledge</option>
                  <option value="sports">sports</option>
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