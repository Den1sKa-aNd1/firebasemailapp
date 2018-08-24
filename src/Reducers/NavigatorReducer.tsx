import {LOGIN_CHECK_FINISH} from '../Actions/LoginActions'

const initialState = {
  showingPage: 'Login'
}
export type State = typeof initialState

export default function NavigatorReducer(state = initialState, action: any): State {
    switch(action.type) {
        case LOGIN_CHECK_FINISH:
            if(action.value) {
                console.log('here')
                return {...state, showingPage: 'Main'}
            }
        default: return {...state}
    }
}