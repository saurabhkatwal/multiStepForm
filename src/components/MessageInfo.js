import React, { Component } from 'react'
import "./css/message.css"
export default class MessageInfo extends Component {
  render() {
    return (
      <div className='message-info-section'>
        <div className="message inputDiv">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="choices">
            <div className="choice1 choice">
            <input type="radio" name="choice" id="choiceOne" />
            <label htmlFor="choiceOne">The number 1 choice</label>
            </div>
            <div className="choice2 choice">
                <input type="radio" name="choice" id="choiceTwo" />
                <label htmlFor="choiceTwo">The number 2 choice</label>
            </div>
        </div>
      </div>
    )
  }
}
