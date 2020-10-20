import React, { Component } from 'react'
import './style.css'

class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.title = ''
    this.text = ''
    this.category = 'Without Category'
    this.state = {
      categories: []
    }
    this.newCategories = this.newCategories.bind(this)
  }

  componentDidMount () {
    this.props.categories.subscribe(this.newCategories)
  }

  componentWillUnmount () {
    this.props.categories.unsubscribe(this.newCategories)
  }

  newCategories (categories) {
    this.setState({ ...this.state, categories })
  }

  handleCategoryChange (event) {
    event.stopPropagation()
    this.category = event.target.value
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
    this.props.createNote(this.title, this.text, this.category)
  }

  render() {
    return (
      <form
        className="registration-form"
        onSubmit={this.createNote.bind(this)}
      >
        <select
          onChange={this.handleCategoryChange.bind(this)}
          className="registration-form_input"
        >
          <option>Without Category</option>
          {this.state.categories.map((category, index) => {
            return <option key={index} value={category}>{category}</option>
          })}
        </select>
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
