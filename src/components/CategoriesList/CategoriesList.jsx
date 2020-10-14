import React, { Component } from 'react'
import './style.css'

class CategoriesList extends Component {
  handleInputEvent(event) {
    if (event.key === 'Enter') {
      const value = event.target.value
      this.props.addCategory(value)
    }
  }

  render() {
    return (
      <section className="categories-list">
        <ul className="categories-list_list">
          {this.props.categories.map((category, index) => {
            return (
              <li key={index} className="categories-list_item">
                {category}
              </li>
            )
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this.handleInputEvent.bind(this)}
        />
      </section>
    )
  }
}

export default CategoriesList
