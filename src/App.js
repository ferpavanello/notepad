import React, { Component } from 'react'
import NoteList from './components/NoteList'
import RegistrationForm from './components/RegistrationForm'
import CategoriesList from './components/CategoriesList'
import './assets/App.css'
import './assets/index.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      categories: [],
    }
  }

  createNote(title, text) {
    const newNote = { title, text }
    const newNoteList = [...this.state.notes, newNote]
    this.setState({ notes: newNoteList })
  }

  deleteNote(index) {
    const notes = this.state.notes
    notes.splice(index, 1)
    this.setState({ notes })
  }

  addCategory(newCategory) {
    const newCategories = [...this.state.categories, newCategory]
    this.setState({ categories: newCategories })
  }

  render() {
    return (
      <section className="conteudo">
        <RegistrationForm
          categories={this.state.categories}
          createNote={this.createNote.bind(this)}
        />
        <main className="main-content">
          <CategoriesList
            categories={this.state.categories}
            addCategory={this.addCategory.bind(this)}
          />
          <NoteList
            notes={this.state.notes}
            deleteNote={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    )
  }
}

export default App
