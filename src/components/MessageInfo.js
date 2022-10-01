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
 inputFn=(e,property,value)=>{
  this.props.changeData(e,property,value);
  if(e.target.value===""){
    this.props.changeData(e,("err"+property).toLowerCase(),"empty value")
  }
  else{
    this.props.changeData(e,("err"+property).toLowerCase(),"")
  }
}
handleChoice=(e)=>{
this.props.changeData(e,"choice",e.target.value);
this.props.changeData(e,"errchoice","");
}
  render() {
    return (
      <div className='message-info-section'>
        <div className="message inputDiv">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="10" onChange={(e)=>{this.inputFn(e,"message",e.target.value)}} value={this.props.formData.message}></textarea>
            <label className="errors" htmlFor="">{this.props.formData.errmessage}</label>
        </div>
        <div className="choices">
            <div className="choice1 choice">
            <input onChange={(e)=>this.handleChoice(e)} checked={this.props.formData.choice==="one"} type="radio" name="choice" id="choiceOne" value="one"/>
            <label htmlFor="choiceOne">The number 1 choice</label>
            </div>
            <div className="choice2 choice">
                <input onChange={(e)=>this.handleChoice(e)} checked={this.props.formData.choice==="two"}type="radio" name="choice" id="choiceTwo" value="two" />
                <label htmlFor="choiceTwo">The number 2 choice</label>
            </div>
        </div>
        <label className="errors" htmlFor="">{this.props.formData.errchoice}</label>
        <Buttons generateErrors={this.generateErrors} names="MessageInfo" inputs={["message","choice"]} formData={this.props.formData} submitHandler={this.props.submitHandler} prevBtnHandler={this.props.prevBtnHandler} nextBtnHandler={this.props.nextBtnHandler} page={this.props.page}/>        

      </div>
    )
  }
}
