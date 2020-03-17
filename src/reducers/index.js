import { combineReducers } from 'redux'
import getText from './getDate';
import {productsReducer} from './getAnswer';

const rootReducer = combineReducers({
   isLoad: productsReducer,
   random : getText
})

export default rootReducer;