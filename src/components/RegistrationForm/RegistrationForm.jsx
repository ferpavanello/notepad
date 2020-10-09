import React, { Component } from 'react'
import './style.css'

class RegistrationForm extends Component {
  render() {
    return (
      <form className="registration-form">
        <input
          type="text"
          placeholder="Title"
          className="registration-form_input"
        />
        <textarea
          placeholder="Put your note..."
          rows={10}
          className="registration-form_input"
        />
        <button className="registration-form_input registration-form_submit">
          Insert Note
        </button>
      </form>
    )
  }
}

export default RegistrationForm
