import React, { Component } from 'react'
import "./css/step.css"
export default class Step extends Component {
    tempFn(){
        return {
            backgroundColor:(this.props.number===this.props.page)?("dodgerblue"):("#fff")
        }
    }
    useData(){
        if(this.props.page+1>this.props.number+1){
            return <i class="fa-solid fa-check"></i>
        }
        else{
            return this.props.number+1
        }
        // this.props.number+1
    }
  render() {
    return (
      <div className="step">
        <p><span style={this.tempFn()}>{this.useData()} </span>{this.props.title}</p>
      </div>
    )
  }
}
