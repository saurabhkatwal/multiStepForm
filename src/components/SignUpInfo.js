import React, { Component } from 'react'
import "./css/signup.css"
import Buttons from './Buttons'
export default class SignUpInfo extends Component {
  render() {
    return (
      <div className="sign-up-section">
        <div className="firstName inputDiv">
        <label htmlFor="">First name</label>
        <input type="text" onChange={(e)=>this.props.changeData(e,"firstName",e.target.value)} value={this.props.formData.firstName}/>
        </div>
        <div className="lastname inputDiv">
        <label htmlFor="">Last name</label>
        <input type="text" onChange={(e)=>this.props.changeData(e,"lastName",e.target.value)} value={this.props.formData.lastName}/>
        </div>
        <div className="dob inputDiv">
        <label htmlFor="">Date of birth</label>
        <input type="date" name="" id="" onChange={(e)=>this.props.changeData(e,"dob",e.target.value)} value={this.props.formData.dob}/>    
        </div>
        <div className="email inputDiv">
        <label htmlFor="">Email address</label>
        <input type="email" name="" id=""onChange={(e)=>this.props.changeData(e,"email",e.target.value)} value={this.props.formData.email}/>    
        </div>
        <div className="address inputDiv">
        <label htmlFor="">Address</label>
        <input type="text" name="" id=""onChange={(e)=>this.props.changeData(e,"address",e.target.value)} value={this.props.formData.address}/>    
        </div>
        <Buttons submitHandler={this.props.submitHandler} prevBtnHandler={this.props.prevBtnHandler} nextBtnHandler={this.props.nextBtnHandler} page={this.props.page}/>        
      </div>
    )
  }
}
