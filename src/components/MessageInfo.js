import React, { Component } from 'react'
import "./css/message.css"
import Buttons from './Buttons'
export default class MessageInfo extends Component {
 generateErrors=(emptyInputs)=>{
  console.log(emptyInputs);
  console.log(emptyInputs)
    emptyInputs.forEach(emptyInput=>{
      this.props.changeData(null,"err"+emptyInput,"empty value")
    })
 }
  render() {
    return (
      <div className='message-info-section'>
        <div className="message inputDiv">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>this.props.changeData(e,"message",e.target.value)} value={this.props.formData.message}></textarea>
        </div>
        <div className="choices">
            <div className="choice1 choice">
            <input onChange={(this.props.formData.choice2)?((e)=>this.props.changeData(e,"choice1",false)):((e)=>this.props.changeData(e,"choice1",true))} checked={this.props.formData.choice1} type="radio" name="choice" id="choiceOne"/>
            <label htmlFor="choiceOne">The number 1 choice</label>
            </div>
            <div className="choice2 choice">
                <input onChange={(this.props.formData.choice1)?((e)=>this.props.changeData(e,"choice2",false)):((e)=>this.props.changeData(e,"choice2",true))} checked={this.props.formData.choice2}type="radio" name="choice" id="choiceTwo" />
                <label htmlFor="choiceTwo">The number 2 choice</label>
            </div>
        </div>
        <Buttons generateErrors={this.generateErrors} names="MessageInfo" inputs={["message"]} formData={this.props.formData} submitHandler={this.props.submitHandler} prevBtnHandler={this.props.prevBtnHandler} nextBtnHandler={this.props.nextBtnHandler} page={this.props.page}/>        

      </div>
    )
  }
}
