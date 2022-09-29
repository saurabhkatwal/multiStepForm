import React, { Component } from 'react'
import "./css/signup.css"
export default class SignUpInfo extends Component {
  render() {
    return (
      <div className="sign-up-section">
        <div className="firstName inputDiv">
        <label htmlFor="">First name</label>
        <input type="text" value={this.props.formData.firstName}/>
        </div>
        <div className="lastname inputDiv">
        <label htmlFor="">Last name</label>
        <input type="text" value={this.props.formData.lastName}/>
        </div>
        <div className="dob inputDiv">
        <label htmlFor="">Date of birth</label>
        <input type="date" name="" id="" value={this.props.formData.dob}/>    
        </div>
        <div className="email inputDiv">
        <label htmlFor="">Email address</label>
        <input type="date" name="" id="" value={this.props.formData.email}/>    
        </div>
        <div className="address inputDiv">
        <label htmlFor="">Address</label>
        <input type="text" name="" id="" value={this.props.formData.address}/>    
        </div>        
      </div>
    )
  }
}
