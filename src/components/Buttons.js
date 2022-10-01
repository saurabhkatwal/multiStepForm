import React, { Component } from 'react'
import "./css/buttons.css"
export default class Buttons extends Component {
    btnStyleHandler=()=>{
        if(this.props.page===0){
            return {
                visibility:"hidden"
            }
        }
    }
    fun=()=>{
      return false
    }
    checkForm1=()=>{
      console.log("hi");
      // if(this.props.names=="SignUpInfo"){
      //   this.props.inputs.forEach(input=>{
      //     if(this.props.formData[input]===""){
      //       return false;
      //     }
      //   })
      //   return true;
      // }
      
    }
    filterInputs=()=>{
      console.log(this.props.inputs)
      let emptyInputs=this.props.inputs.filter(input=>{
        return this.props.formData[input]===""
      })
      return emptyInputs;
    }
    execFn=()=>{
      if(this.props.names==="SignUpInfo"){
        let emptyInputs=this.filterInputs();
        console.log(emptyInputs)
        this.props.generateErrors(emptyInputs)
        if(emptyInputs.length===0){
          this.props.nextBtnHandler()
        }
      }
      else if(this.props.names==="MessageInfo"){
        console.log("in")
        let emptyInputs=this.filterInputs();
        this.props.generateErrors(emptyInputs)
        if(emptyInputs.length===0){
          this.props.nextBtnHandler()
        }
      }
      else{
        this.props.nextBtnHandler()
      }
    }
  render() {
    return (
      <div className='buttons'>
        <button style={this.btnStyleHandler()} onClick={this.props.prevBtnHandler}>back</button>
        {/* <button onClick={this.execFn}>Next Step</button> */}
        <button onClick={this.execFn}>{(this.props.page===2?("Submit"):("Next Step"))}</button>
      </div>
    )
  }
}
