import { Component } from "react";
import * as React from 'react';

export interface State {
  upassword: string,
  uname: string,
}

let LoginButtonStyle = {
    textAlign: 'center',
    border: 'none',
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#ff8800',
    padding: '15px 32px',
    width: '100%',
    marginBottom: '5px'
  }

 interface InputProperties {
    value: any
    onSubmit: any
 }

export default class Button extends Component<InputProperties, {}> {
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
                <input type = 'button'
                style={LoginButtonStyle}
                value={this.props.value}
                onClick={this.props.onSubmit}/>
            </div>
        )
    }
}