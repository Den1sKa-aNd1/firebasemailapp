import {Dispatch}  from "redux";
import axios from 'axios'

let firebase = require("firebase/app")
require("firebase/database")

export const LOGIN_CHECK_START = 'LOGIN_CHECK_START'
export const LOGIN_CHECK_FINISH = 'LOGIN_CHECK_FINISH'
export const EDIT_USER_NAME = 'EDIT_USER_NAME'
export const EDIT_PASSWORD = 'EDIT_PASSWORD'

export const FUNCTION_CALL_START = 'FUNCTION_CALL_START'
export const FUNCTION_CALL_FINISH = 'FUNCTION_CALL_FINISH'

const checkLoginStarted = () => {
    return{ type: LOGIN_CHECK_START}
}
const checkLoginFinished = (result: any) => {
    return{ type: LOGIN_CHECK_FINISH, value: result}
}

const functionCallStarted = () => {
    return{ type: FUNCTION_CALL_START}
}
const functionCallFinished = (result: any) => {
    console.log('here:', result)
    return { type: FUNCTION_CALL_FINISH, value: result}
}

export const editUserName = (uname: string) => {
    return {type: EDIT_USER_NAME, value: uname}
}

export const editPassword = (uname: string) => {
    return {type: EDIT_PASSWORD, value: uname}
}

const getDataFromFirebase = (uname: string, upassword: string) => {
    if (!firebase.apps.length) {
        let config = {
            apiKey: "AIzaSyAFNOiOgvgz73M_4CQhUGmulrTeFIeUyvs",
            authDomain: "html-test-13e6c.firebaseapp.com",
            databaseURL: "https://html-test-13e6c.firebaseio.com",
            projectId: "html-test-13e6c",
            storageBucket: "html-test-13e6c.appspot.com",
            messagingSenderId: "296281881225"
        }
        firebase.initializeApp(config)
    }
    upassword = '123'
    let result = false
    return (dispatch: any) => {
        firebase.database().ref('/users/' + uname).once('value').then(
            function(snapshot: any) {
                if(snapshot.val() && snapshot.val() !== undefined) {
                    if( snapshot.val().password && snapshot.val().password !== undefined) {
                        if( snapshot.val().password === upassword) {
                            dispatch(checkLoginFinished(true))
                        } else {
                            dispatch(checkLoginFinished(false))
                        }
                    } else {
                        dispatch(checkLoginFinished(false))
                    }
                } else {
                    dispatch(checkLoginFinished(false))
                }
            }
        )
    }
}
export const checkLogin = (uname: string, upassword: string) => {
    return (dispatch: any) => {
        dispatch(checkLoginStarted())
        dispatch(getDataFromFirebase(uname, upassword))
    }
}

const url = 'https://us-central1-html-test-13e6c.cloudfunctions.net/helloWorld'
const urlTest = 'http://httpbin.org/ip'
export const functionCall = () => {
    return (dispatch: any) => {
        dispatch(functionCallStarted())
        dispatch(httpGetAsync())
    }
}

export function httpGetAsync()
{
    return (dispatch: any) => {
        axios.get(urlTest)
            .then((response: any) => {
                functionCallFinished(response)})
            .catch((error: any) => {
                dispatch(functionCallFinished(error))})
    }
}
