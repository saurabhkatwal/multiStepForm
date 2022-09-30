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
            choice:'',
            checkbox:'',
        images:["image1.jpg","image2.jpg","image3.jpg"]
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
                page:((prevState.page+1)<=2)?(prevState.page+1):(prevState.page)
            }
        })
    }
    changeData=(e,property,value)=>{
        console.log(e.target.value)
        console.log(value)
        this.setState(()=>{
            return {
                ...this.state.formData,
                [property]:value
            }
        })
    }
  render() {
    return (
      <div className='form'>
        <Image state={this.state}name={this.state.images[this.state.page]}/>
        <FormContent changeData={this.changeData}state={this.state} prevBtnHandler={this.prevBtnHandler} nextBtnHandler={this.nextBtnHandler} formData={this.state} page={this.state.page}/>
      </div>
    )
  }
}
