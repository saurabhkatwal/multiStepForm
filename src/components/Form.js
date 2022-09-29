import React, { Component } from 'react'
import Image from './Image'
import FormContent from './FormContent'
export default class Form extends Component {
    state={
        page:0,
        formData:{
            firstName:'',
            lastName:'',
            dob:'',
            email:'',
            address:'',
            message:'',
            choice:'',
            checkbox:''
        },
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
  render() {
    return (
      <div className='form'>
        <Image name={this.state.images[this.state.page]}/>
        <FormContent prevBtnHandler={this.prevBtnHandler} nextBtnHandler={this.nextBtnHandler} formData={this.state.formData} page={this.state.page}/>
      </div>
    )
  }
}
