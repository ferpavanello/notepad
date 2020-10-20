import React, { Component } from 'react'
import './style.css'

class CategoriesList extends Component {
  constructor () {
    super()
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

  handleInputEvent(event) {
    if (event.key === 'Enter') {
      const value = event.target.value
      this.props.categories.addCategory(value)
    }
  }

  render() {
    return (
      <section className="categories-list">
        <ul className="categories-list_list">
          {this.state.categories.map((category, index) => {
            return (
              <li key={index} className="categories-list_item">
                {category}
              </li>
            )
          })}
        </ul>
        <input
          type="text"
          className="categories-list_input"
          placeholder="Add Category"
          onKeyUp={this.handleInputEvent.bind(this)}
        />
      </section>
    )
  }
}

export default CategoriesList
