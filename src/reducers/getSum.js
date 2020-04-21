import {
    GET_SUM,
    GET_SUM_FOR_OTHER,
  } from '../actions';

const initialState={
    sum: 0,
}

export default function getSum(state = initialState, action) {
    switch(action.type) {
        case GET_SUM:
            return {
                ...state,
                sum: +(action.value1 * action.value2 * action.value3).toFixed(3)
            }
        case GET_SUM_FOR_OTHER:
            return {
                ...state,
                sum: +((100 * action.value3) / (100 * action.value2) * action.value1).toFixed(3)
            }
        default:
            return state;
    }
}