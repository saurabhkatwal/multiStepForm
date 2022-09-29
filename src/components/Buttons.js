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
  render() {
    return (
      <div className='buttons'>
        <button style={this.btnStyleHandler()} onClick={this.props.prevBtnHandler}>back</button>
        <button onClick={this.props.nextBtnHandler}>{this.props.page===2?("Submit"):("Next Step")}</button>
      </div>
    )
  }
}
