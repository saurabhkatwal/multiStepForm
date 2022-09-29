import React, { Component } from 'react'

export default class SignUpInfo extends Component {
  render() {
    return (
      <div className="sign-up-section">
        <div className="firstName">
        <label htmlFor="">first name</label>
        <input type="text" value={this.props.formData.firstName}/>
        </div>
        <div className="lastname">
        <label htmlFor="">last name</label>
        <input type="text" value={this.props.formData.lastName}/>
        </div>
        <div className="dob">
        <label htmlFor="">Date of birth</label>
        <input type="date" name="" id="" value={this.props.formData.dob}/>    
        </div>
        <div className="address">
        <label htmlFor="">Address</label>
        <input type="text" name="" id="" value={this.props.formData.address}/>    
        </div>        
      </div>
    )
  }
}
