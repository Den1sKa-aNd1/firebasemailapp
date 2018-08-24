import { Component } from "react";
import * as React from 'react';

export interface State {
  upassword: string,
  uname: string,
}

let inputType ={
  width: '100%',
  padding: '12px 20px',
  display: 'inline-block',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  marginBottom: '10px',
}

 interface localState {
  uname: '',
  value: '',
 }
 interface InputProperties {
    label?: string
    value: any
    onChange: any
    placeHolder?: string
    type?: string
    required?: boolean
 }

export default class Input extends Component<InputProperties, localState> {
    constructor(props: any) {
        super(props)
        this.state = {
            uname: '',
            value: this.props.value,
        }

    }
  
    render() {
        return (
            <div style={{}}>
                <label><b>{this.props.label}</b></label>
                <input type={this.props.type? this.props.type : 'text'}
                    placeholder={this.props.placeHolder}
                    name="textInput"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    key="uname"
                    style={inputType}
                    required={this.props.required? true: false}
                    />
            </div>
        )
    }
}