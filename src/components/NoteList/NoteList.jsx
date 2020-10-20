import React, { Component } from 'react'
import NoteCard from '../NoteCard'
import './style.css'

class NoteList extends Component {
  constructor () {
    super()
    this.state = {
      notes: []
    }
    this.newNotes = this.newNotes.bind(this)
  }

  componentDidMount () {
    this.props.notes.subscribe(this.newNotes)
  }

  componentWillUnmount () {
    this.props.notes.unsubscribe(this.newNotes)
  }

  newNotes (notes) {
    this.setState({ ...this.state, notes })
  }

  render() {
    return (
      <ul className="note-list">
        {this.state.notes.map((note, index) => {
          return (
            <li
              className="note-list_item"
              key={index}
            >
              <NoteCard
                index={index}
                title={note.title}
                text={note.text}
                category={note.category}
                deleteNote={this.props.deleteNote}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default NoteList
