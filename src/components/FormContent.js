import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Buttons from './Buttons'
import SignUpInfo from './SignUpInfo'
import CheckBoxInfo from './CheckBoxInfo'
import MessageInfo from './MessageInfo'
export default class FormContent extends Component {
    pageDisplay=()=>{
        if(this.props.page==0){
            return <SignUpInfo formData={this.props.formData}/>
        }
        else if(this.props.page==1){
            return <MessageInfo formData={this.props.formData}/>
        }
        else{
            return <CheckBoxInfo formData={this.props.formData}/>
        }
    }
  render() {
    return (
      <div className='form-content'>
        <Header/>
        <Content>{this.pageDisplay()}</Content>
        <Buttons prevBtnHandler={this.props.prevBtnHandler} nextBtnHandler={this.props.nextBtnHandler} page={this.props.page}/>
      </div>
    )
  }
}
