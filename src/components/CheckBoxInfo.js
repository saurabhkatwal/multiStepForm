import React, { Component } from 'react'
import "./css/checkbox.css"
import Buttons from './Buttons'
export default class CheckBoxInfo extends Component {
  state={
    background:"grey"
  }
  changeColor=()=>{
    this.setState(prevState=>{
      return {
        background:"dodgerblue"
      }
    })
  }
  render() {
    return (
      <div className='checkbox-info-section'>
        <div className="icons">
            <div className="icon1">
            <i className="fa-solid fa-dice-one fa-6x active"></i>
            </div>
            <div className="icon2">
            <i className="fa-solid fa-dice-two fa-6x"></i>
            </div>
        </div>
        <div className="checkboxData">
          <div className="check1 check">
          <input type="checkbox" name="" id="add" onChange={(e)=>this.props.changeData(e,"check1",(this.props.formData.check1)?(false):(true))} checked={this.props.formData.check1}/>
          <label htmlFor="add">I want to add this option</label>
          </div>
          <div className="check2 check">
            <input type="checkbox" name="" id="choose" onChange={(e)=>this.props.changeData(e,"check2",(this.props.formData.check2)?(false):(true))} checked={this.props.formData.check2}/>
            <label htmlFor="choose">Let me click on this checkbox and choose some cool stuff</label>
          </div>
        </div>
        <Buttons names={"CheckBoxInfo"} submitHandler={this.props.submitHandler} formData={this.props.formData} prevBtnHandler={this.props.prevBtnHandler} nextBtnHandler={this.props.nextBtnHandler} page={this.props.page}/>        

      </div>
    )
  }
}
