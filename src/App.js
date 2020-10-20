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
          categories={this.categories}
          createNote={this.notes.createNote.bind(this.notes)}
        />
        <main className="main-content">
          <CategoriesList
            categories={this.categories}
            addCategory={this.categories.addCategory.bind(this.categories)}
          />
          <NoteList
            notes={this.notes}
            deleteNote={this.notes.deleteNote.bind(this.notes)}
          />
        </main>
      </section>
    )
  }
}

export default App
