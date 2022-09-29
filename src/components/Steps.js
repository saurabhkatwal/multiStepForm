import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Step from './Step'
import "./css/steps.css"
export default class Steps extends Component {
  state={
    stepTitles:["SignUp","Message","Checkbox"]
  }
  render() {
    return (
      <div className="steps">
        {this.state.stepTitles.map((stepTitle,index)=>{
          return <Step key={uuidv4()}title={stepTitle} number={index} page={this.props.page}/> 
        })}
      </div>
    )
  }
}
