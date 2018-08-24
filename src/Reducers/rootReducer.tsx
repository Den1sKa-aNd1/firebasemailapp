import { combineReducers } from 'redux';
import NavigatorReducer from './NavigatorReducer'
import LoginReducer from './LoginReducer'

const rootReducer = combineReducers({
    NavigatorReducer : NavigatorReducer,
    LoginReducer: LoginReducer,
})

export default rootReducer