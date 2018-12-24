import { combineReducers } from 'redux'
import userinfo from './userinfo'

// combineReducers可以把所有的规则合并到一起直接转发出去,然后根据这些规则生成一个store
export default combineReducers({
    userinfo
})