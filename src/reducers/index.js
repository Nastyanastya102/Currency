import { combineReducers } from 'redux'
import {ratesReducer} from './getAnswer';
import getSum from './getSum';


const rootReducer = combineReducers({
   isLoad: ratesReducer,
   sum: getSum,
})

export default rootReducer;