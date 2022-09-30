import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Buttons from './Buttons'
import SignUpInfo from './SignUpInfo'
import CheckBoxInfo from './CheckBoxInfo'
import MessageInfo from './MessageInfo'
import Title from './Title'
import "./css/formcontent.css"
export default class FormContent extends Component {
    state={
        titles:["SignUp","Message","Checkbox"]
    }
    pageDisplay=()=>{
        if(this.props.page==0){
            return <SignUpInfo formData={this.props.formData} changeData={this.props.changeData}/>
        }
        else if(this.props.page==1){
            return <MessageInfo formData={this.props.formData} changeData={this.props.changeData}/>
        }
        else{
            return <CheckBoxInfo formData={this.props.formData}/>
        }
    }
    changeState=()=>{
      this.setState(()=>{
        return 
      })
    }
  render() {
    return (
      <div className='form-content'>
        <Header onClick={this.changeState}page={this.props.page}/>
        <Title title={this.state.titles[this.props.page]} page={this.props.page}/>
        <Content >{this.pageDisplay()}</Content>
        <Buttons prevBtnHandler={this.props.prevBtnHandler} nextBtnHandler={this.props.nextBtnHandler} page={this.props.page}/>
      </div>
    )
  }
}
