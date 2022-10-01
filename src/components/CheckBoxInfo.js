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
  handleCheck1=()=>{
    if(this.props.formData.dice1){
      this.props.changeData(null,"dice1",false);
    }
    else{
      this.props.changeData(null,"dice1",true);
    }
  }
  handleCheck2=()=>{
    if(this.props.formData.dice2){
      this.props.changeData(null,"dice2",false);
    }
    else{
      this.props.changeData(null,"dice2",true);
    }
  }
  render() {
    return (
      <div className='checkbox-info-section'>
        <div className="icons">
            <div className="icon1 icon">
              <input checked={this.props.formData.dice1} onChange={this.handleCheck1}type="checkbox" name="" id="check1" />
              <label htmlFor="check1"> <i style={(this.props.formData.dice1)?({color:'dodgerblue'}):({color:"#000"})} className="fa-solid fa-dice-one fa-4x active"></i></label>
            </div>
            <div className="icon2 icon">
              <input checked={this.props.formData.dice2} onChange={this.handleCheck2}type="checkbox" name="" id="check2" />
              <label htmlFor="check2"><i style={(this.props.formData.dice2)?({color:'dodgerblue'}):({color:"#000"})}className="fa-solid fa-dice-two fa-4x active"></i></label>
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
        <label className="errors" htmlFor="">{this.props.formData.errdice}</label>
        <Buttons changeData={this.props.changeData}names={"CheckBoxInfo"} inputs={["dice1,dice2"]}submitHandler={this.props.submitHandler} formData={this.props.formData} prevBtnHandler={this.props.prevBtnHandler} nextBtnHandler={this.props.nextBtnHandler} page={this.props.page}/>        

      </div>
    )
  }
}
