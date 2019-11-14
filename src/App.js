import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { SearchPage } from './pages/SearchPage/SearchPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-3">
        <SearchPage />
      </main>
    </div>
  )
}

export default App
