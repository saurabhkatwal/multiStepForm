import React, { Component } from 'react'
import "./css/title.css"
export default class Title extends Component {
  render() {
    return (
      <div className='title'>
        <small>Step{this.props.page+1}/3</small>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}
