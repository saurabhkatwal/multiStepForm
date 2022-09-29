import React, { Component } from 'react'

export default class MessageInfo extends Component {
  render() {
    return (
      <div className='message-info-section'>
        <div className="message">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="choices">
            <div className="choice1">
            <input type="radio" name="" id="" />
            <label htmlFor="">The number 1 choice</label>
            </div>
            <div className="choice2">
                <input type="radio" name="" id="" />
                <label htmlFor="">The number 2 choice</label>
            </div>
        </div>
      </div>
    )
  }
}
