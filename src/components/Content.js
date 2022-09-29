import React, { Component } from 'react'
import "./css/content.css"
export default class Content extends Component {
    
  render() {
    return (
      <div className='content'>
        {this.props.children}
      </div>
    )
  }
}
