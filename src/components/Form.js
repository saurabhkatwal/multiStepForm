import React, { Component } from 'react'
import Image from './Image'
import FormContent from './FormContent'
import "./css/form.css"
export default class Form extends Component {
    state={
        page:0,
            firstName:'',
            lastName:'',
            dob:'',
            email:'',
            address:'',
            message:'',
            choice1:false,
            choice2:false,
            check1:false,
            check2:false,
            errfirstname:'',
            errlastname:'',
            errdob:'',
            erremail:'',
            erraddress:'',
            errmessage:'',
        images:["image1.jpg","image2.jpg","image3.jpg"]
    }
    formVal1=()=>{
        if(this.state.firstName===""||this.state.lastName===""||this.state.dob===""||this.state.email===""||this.state.address===""){
            this.setState(()=>{
                return {
                    page:0
                }
            })
        }
    }
    prevBtnHandler=()=>{
        this.setState(prevState=>{
            return {
                page:((prevState.page-1)>=0)?(prevState.page-1):(prevState.page)
            }
        })
    }
    nextBtnHandler=()=>{
        this.setState(prevState=>{
            return {
                page:((prevState.page+1)<=3)?(prevState.page+1):(prevState.page)
            }
        })
    }
    changeData=(e,property,value)=>{
        console.log(value)
        this.setState(()=>{
            return {
                ...this.state.formData,
                [property]:value
            }
        })
    }
    // submitHandler=(e)=>{
    //     if(e.target.innerText==="Submit"){
    //         console.log("yes");
    //     }
    //     else{
    //         console.log("no");
    //     }
    //   }
  render() {
   { if(this.state.page>2){
        return (
            <div className='modal'>
                <h1>form submitted successfully</h1>
            </div>
        )
    }
    else{
        return (
            <div className='form'>
              <Image state={this.state}name={this.state.images[this.state.page]}/>
              <FormContent submitHandler={this.submitHandler} changeData={this.changeData}state={this.state} prevBtnHandler={this.prevBtnHandler} nextBtnHandler={this.nextBtnHandler} formData={this.state} page={this.state.page}/>
            </div>
          )
    }
    
  }
}
}
