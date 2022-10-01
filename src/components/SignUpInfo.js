import React, { Component } from 'react'
import "./css/signup.css"
import Buttons from './Buttons'
export default class SignUpInfo extends Component {
  // checkForm1=()=>{
  //  if(this.props.formData.firstName===""||this.props.formData.lastName===""||this.props.formData.address===""||this.props.formData.dob===""||this.props.formData.email===""){
  //   return false;
  //  }
  //  else{
  //   return true;
  //  }
  // return true;
  // }
  generateErrors=(emptyInputs)=>{
    console.log(emptyInputs)
    emptyInputs.forEach(emptyInput=>{
      this.props.changeData(null,"err"+(emptyInput).toLowerCase(),"empty value")
    })
  }
  render() {
    return (
      <div className="sign-up-section">
        <div className="firstName inputDiv">
        <label htmlFor="">First name</label>
        <input type="text" onChange={(e)=>this.props.changeData(e,"firstName",e.target.value)} value={this.props.formData.firstName}/>
        <label className="errors" htmlFor="">{this.props.formData.errfirstname}</label>
        </div>
        <div className="lastname inputDiv">
        <label htmlFor="">Last name</label>
        <input type="text" onChange={(e)=>this.props.changeData(e,"lastName",e.target.value)} value={this.props.formData.lastName}/>
        <label className="errors" htmlFor="">{this.props.formData.errlastname}</label>
        </div>
        <div className="dob inputDiv">
        <label htmlFor="">Date of birth</label>
        <input type="date" name="" id="" onChange={(e)=>this.props.changeData(e,"dob",e.target.value)} value={this.props.formData.dob}/>    
        <label className="errors" htmlFor="">{this.props.formData.errdob}</label>
        </div>
        <div className="email inputDiv">
        <label htmlFor="">Email address</label>
        <input type="email" name="" id=""onChange={(e)=>this.props.changeData(e,"email",e.target.value)} value={this.props.formData.email}/>    
        <label className="errors" htmlFor="">{this.props.formData.erremail}</label>
        </div>
        <div className="address inputDiv">
        <label htmlFor="">Address</label>
        <input type="text" name="" id=""onChange={(e)=>this.props.changeData(e,"address",e.target.value)} value={this.props.formData.address}/>    
        <label className="errors" htmlFor="">{this.props.formData.erraddress}</label>
        </div>
        <Buttons generateErrors={this.generateErrors}names={"SignUpInfo"} inputs={["firstName","lastName","email","address","dob"]} formData={this.props.formData} submitHandler={this.props.submitHandler} prevBtnHandler={this.props.prevBtnHandler} nextBtnHandler={(this.props.nextBtnHandler)} page={this.props.page}/>        
      </div>
    )
  }
}
