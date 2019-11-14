import React from 'react'

export const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">
        TV Maniac
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
