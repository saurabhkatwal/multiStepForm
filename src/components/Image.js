import React, { Component } from 'react'
import "./css/image.css"
export default class Image extends Component {
    state={
        imageName:"/"+(this.props.name)
    }
  render() {
    console.log(this.state.imageName)
    return (
      <div className="image">
        <img src={this.state.imageName} alt="" />
      </div>
    )
  }
}
