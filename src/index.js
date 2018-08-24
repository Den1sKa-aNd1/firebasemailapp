import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; /* code change */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {LoginReducer} from './Reducers/LoginReducer'

const store = createStore(
    LoginReducer,
    applyMiddleware(thunk)
  );

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
