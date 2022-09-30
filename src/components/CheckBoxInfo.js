import React, { Component } from 'react'
import "./css/checkbox.css"
export default class CheckBoxInfo extends Component {
  render() {
    return (
      <div className='checkbox-info-section'>
        <div className="icons">
            <div className="icon1">
            <i className="fa-solid fa-dice-one fa-8x"></i>
            </div>
            <div className="icon2">
            <i className="fa-solid fa-dice-two fa-8x"></i>
            </div>
        </div>
        <div className="checkboxData">
          <div className="check1 check">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">I want to add this option</label>
          </div>
          <div className="check2 check">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Let me click on this checkbox and choose some cool stuff</label>
          </div>
        </div>
      </div>
    )
  }
}
