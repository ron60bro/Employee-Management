import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducer';
import logger from "redux-logger";


let store = createStore(rootReducers,applyMiddleware(thunk,logger));

export default store;