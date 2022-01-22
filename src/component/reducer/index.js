import handleChange from './handleCart';
import { combineReducers } from "redux";
const rootReducers= combineReducers({
    init:handleChange,
})
export default rootReducers;