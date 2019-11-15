import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { SearchPage } from './pages/SearchPage/SearchPage'
import { Route } from 'react-router'
import { HomePage } from './pages/HomePage/HomePage'
import { ContactPage } from './pages/ContactPage/ContactPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-3">
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/contact" component={ContactPage} />
      </main>
    </div>
  )
}

export default App
