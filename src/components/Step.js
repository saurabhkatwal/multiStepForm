import React, { Component } from 'react'

export default class Step extends Component {
  render() {
    return (
      <div className="step">
        <p><span>{this.props.number} </span>{this.props.title}</p>
      </div>
    )
  }
}
