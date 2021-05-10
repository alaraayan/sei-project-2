import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    history.push('/generalgame')
  }
  return ( 
    <>
      <section className="hero is-fullheight-with-navbar is-info">
        <div className="hero-body">
          <div className="container">
            <h1>JEOPARDY</h1>
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
                    className="input"
                    placeholder="Username"
                    name="name"
                    
                  />
                </div>
              </div>
              <label htmlFor="categories">choose a Category</label>
              <select name="categories" id="categoris">
                <option value="GK">General Knowledge</option>
                <option value="sports">sports</option>
              </select>
              <div className="field">
                <button type="submit" className="button is-danger is-fullwidth">
                  LET&apos;S PLAY!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home