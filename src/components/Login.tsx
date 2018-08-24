import { Component } from "react";
import * as React from 'react';
import { connect } from "react-redux" /* code change */
import Input from "./Input"
import Button from "./Button"
import {checkLogin, editUserName, editPassword, functionCall} from '../Actions/LoginActions'
import {Dispatch}  from "redux";

export interface State {
  upassword: string,
  uname: string,
  loginStarted: boolean
}

interface DispatchFromProps {
  checkLogin: (uname: string, upassword: string) => void;
  editUserName: (uname: string) => void
  editPassword: (upassword: string) => void
  functionCall: () => void
}

interface Props extends State, DispatchFromProps {}

let formStyle = {
    border: '3px solid #f1f1f1',
    padding: '10px'
}

let spinStyle = {
  border: '2px solid #f3f3f3',
  borderRadius: '50%',
  borderTop: '2px solid #3498db',
  width: 30,
  height: 30,
}

export class Login extends Component<Props> {
  constructor(props: any) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCall = this.handleCall.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changePassword = this.changePassword.bind(this)
  }
  handleSubmit(event: any) {
    this.props.checkLogin(this.props.uname, this.props.upassword)
  }
  handleCall(event: any) {
    this.props.functionCall()
  }
  changeUserName(value: any) {
    this.props.editUserName(value.target.value)
  }
  changePassword(value: any) {
    this.props.editPassword(value.target.value)
  }

  render() {
    let submitButton = null
    if (this.props.loginStarted) {
      submitButton = (
        <div style={spinStyle}></div>
      )
    } else {
      submitButton = (
        <Button 
          onSubmit = {this.handleSubmit}
          value = {'submit'}
        />
      )
    }
    return (
      <div style={{width: '90%', margin: '0 auto', padding: '10px'}}>
        <form style={formStyle} >
          <Input label = 'userName'
            value={this.props.uname}
            onChange={(value: string) => this.changeUserName(value) }
            required={true}
          />
          <Input label = 'Password'
            value={this.props.upassword}
            onChange={(value: string) => this.changePassword(value) }
            type={'password'}
            required={true}
          />
          {submitButton}
          <Button
            onSubmit = {this.handleCall}
            value = {'Google Call'}
          />
          </form>
      </div>
    );
  }
}


const mapStateToProps = (state: any) => ({
  uname: state.LoginReducer.uname,
  upassword: state.LoginReducer.upassword,
  loginStarted: state.LoginReducer.loginStarted,
})
const mapDispatchToProps = (dispatch: any) => ({
  checkLogin: (uname: string, upassword: string) => dispatch(checkLogin(uname, upassword)),
  editUserName: (uname: string) => dispatch(editUserName(uname)),
  editPassword: (upassword: string) => dispatch(editPassword(upassword)),
  functionCall: () => dispatch(functionCall()),
});
export default connect<void, DispatchFromProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(Login)
