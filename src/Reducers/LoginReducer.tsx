import {LOGIN_CHECK_START, LOGIN_CHECK_FINISH, EDIT_USER_NAME, EDIT_PASSWORD,
    FUNCTION_CALL_START, FUNCTION_CALL_FINISH} from '../Actions/LoginActions'

const initialState = {
  loginResult: false,
  loginStarted: false,
  uname: '',
  upasswrod: ''
}
export type State = typeof initialState

export default function LoginReducer(state: any, action: any): State {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch(action.type) {
        case LOGIN_CHECK_START:
            return {...state, loginStarted: true};
        case LOGIN_CHECK_FINISH:
            return {...state, loginStarted: false, loginResult: action.value};
        case EDIT_USER_NAME:
            return {...state, uname: action.value}
        case EDIT_PASSWORD:
            return {...state, upasswrod: action.value}
        case FUNCTION_CALL_START:
            return { ...state}
        case FUNCTION_CALL_FINISH:
            return { ...state}
        default: return {...state}
    }
}