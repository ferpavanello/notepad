import React, { Component } from 'react'
import NoteList from './components/NoteList'
import RegistrationForm from './components/RegistrationForm'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      notes: []
    }
  }

  createNote(title, text) {
    const newNote = { title, text }
    const newNoteList = [...this.state.notes, newNote]
    const newState = { notes: newNoteList }
    this.setState(newState)
  }

  deleteNote (index) {
    const notes = this.state.notes
    notes.splice(index, 1)
    this.setState({ notes })
  }

  render() {
    return (
      <section className="conteudo">
        <RegistrationForm createNote={this.createNote.bind(this)} />
        <NoteList
          notes={this.state.notes}
          deleteNote={this.deleteNote.bind(this)}
        />
      </section>
    )
  }
}

export default App
