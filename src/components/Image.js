import React, { Component } from 'react'
import "./css/image.css"
export default class Image extends Component {
  render() {
    // console.log(this.state.imageName)
    return (
      <div className="image">
        <img src={"/"+this.props.name} alt="" />
      </div>
    )
  }
}
