import { Link } from 'react-router-dom'
import React from 'react'

function NavBar() {
 
  return (
    <nav className="navbar is-info">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item navbar-end">
            <h1>Take Me 🏠</h1>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar