import React from 'react'
import NoteList from './components/NoteList'
import RegistrationForm from './components/RegistrationForm'
import './assets/App.css'
import './assets/index.css'

function App() {
  return (
    <section className="conteudo">
      <RegistrationForm />
      <NoteList />
    </section>
  )
}

export default App
