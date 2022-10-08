import {createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducer'
const rootReducer = combineReducers({reducer})

export const store =createStore(rootReducer, composeWithDevTools)