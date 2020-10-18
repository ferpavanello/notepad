import React, { Component } from 'react'
import NoteList from './components/NoteList'
import RegistrationForm from './components/RegistrationForm'
import CategoriesList from './components/CategoriesList'
import './assets/App.css'
import './assets/index.css'
import Categories from './components/data/Categories'
import Notes from './components/data/Notes'

class App extends Component {
  constructor() {
    super()
    this.categories = new Categories()
    this.notes = new Notes()
  }

  render() {
    return (
      <section className="conteudo">
        <RegistrationForm
          categories={this.categories.categories}
          createNote={this.notes.createNote}
        />
        <main className="main-content">
          <CategoriesList
            categories={this.categories.categories}
            addCategory={this.categories.addCategory}
          />
          <NoteList
            notes={this.notes.notes}
            deleteNote={this.notes.deleteNote}
          />
        </main>
      </section>
    )
  }
}

export default App
