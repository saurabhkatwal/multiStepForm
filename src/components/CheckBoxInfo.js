import React, { Component } from 'react'

export default class CheckBoxInfo extends Component {
  render() {
    return (
      <div className='checkbox-info-section'>
        <div className="icons">
            <div className="icon1">
            <i className="fa-solid fa-dice-one fa-3x"></i>
            </div>
            <div className="icon2">
            <i className="fa-solid fa-dice-two fa-3x"></i>
            </div>
        </div>
      </div>
    )
  }
}
