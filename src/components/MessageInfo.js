import React, { Component } from 'react'
import "./css/message.css"
export default class MessageInfo extends Component {
  checkValue=(e)=>{
    return (e.target.checked)?(true):(false)
  }
  render() {
    return (
      <div className='message-info-section'>
        <div className="message inputDiv">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>this.props.changeData(e,"message",e.target.value)} value={this.props.formData.message}></textarea>
        </div>
        <div className="choices">
            <div  onClick={(e)=>this.props.changeData(e,"choice","temp")}className="choice1 choice">
            <input onChange={(e)=>this.checkValue(e)} type="radio" name="choice" id="choiceOne"/>
            <label htmlFor="choiceOne">The number 1 choice</label>
            </div>
            <div className="choice2 choice">
                <input onChange={(e)=>this.checkValue(e)} type="radio" name="choice" id="choiceTwo" />
                <label htmlFor="choiceTwo">The number 2 choice</label>
            </div>
        </div>
      </div>
    )
  }
}
