import { Component } from "react";
import * as React from 'react';
import Navigator from "../components/Navigator"
import { Provider } from 'react-redux'; /* code change */

import configureStore from '../configureStore'

export const store = configureStore({})

export class App extends Component {
    render() {
        return (
            <div>
                <Provider store = {store} >
                    <Navigator/>
                </Provider>
            </div>
        )
    }
}