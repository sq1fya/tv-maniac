import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { Route } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { withTitle } from './pages/withTitle'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-3">
        <Route path="/" exact component={withTitle(HomePage, 'Home')} />
        <Route
          path="/search"
          component={withTitle(SearchPage, 'Search Shows')}
        />
        <Route
          path="/contact"
          component={withTitle(ContactPage, 'Contact Us')}
        />
      </main>
    </div>
  )
}

export default App
