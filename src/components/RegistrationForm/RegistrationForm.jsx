import React, { Component } from 'react'
import './style.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.title = ''
    this.text = ''
  }

  handleTitleChange (event) {
    event.stopPropagation()
    this.title = event.target.value
  }

  handleTextChange (event) {
    event.stopPropagation()
    this.text = event.target.value
  }

  createNote (event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.createNote(this.title, this.text)
  }

  render() {
    return (
      <form
        className="registration-form"
        onSubmit={this.createNote.bind(this)}
      >
        <input
          type="text"
          placeholder="Title"
          className="registration-form_input"
          onChange={this.handleTitleChange.bind(this)}
        />
        <textarea
          placeholder="Put your note..."
          rows={10}
          className="registration-form_input"
          onChange={this.handleTextChange.bind(this)}
        />
        <button className="registration-form_input registration-form_submit">
          Insert Note
        </button>
      </form>
    )
  }
}

export default RegistrationForm
