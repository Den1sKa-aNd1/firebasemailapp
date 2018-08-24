import { Component } from "react";
import * as React from 'react';
import { connect } from "react-redux" /* code change */
import Input from "./Input"
import Button from "./Button"
import {checkLogin, editUserName, editPassword} from '../Actions/LoginActions'
import {Dispatch}  from "redux";


export default class Main extends Component {
  constructor(props: any) {
    super(props)
    this.state= {
      uname: '',
      upassword: '',
    }
  }


  render() {
    return (
      <div style={{width: '90%', margin: '0 auto', padding: '10px'}}>
        THIS IS MAIN PAGE
      </div>
    );
  }
}
