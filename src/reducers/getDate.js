import {
    GET_TEXT,
    GET_TEXT_INPUT
  } from '../actions';
const initialState={
    inputText: '',
    formGridFrome:{
        value: '',
        price: '',
    },
    formGridTo:{
        value: '',
        price: '',
    },
}

export default function getText(state = initialState, action) {
    switch(action.type) {
        case GET_TEXT:
            return {
                ...state,
                [action.name]: {
                    value : action.value,
                    price : action.price
                }
            }
        case GET_TEXT_INPUT:
            return {
                ...state,
                inputText: action.value
                }
        default:
            return state;
    }
}