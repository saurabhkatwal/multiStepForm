import React, { Component } from 'react'
import Steps from './Steps'
import "./css/header.css"
export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Steps page={this.props.page}/>
      </div>
    )
  }
}
