import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_ERROR,SET_TO_CURRENCY,GET_TEXT_INPUT} from '../actions';


export const initialState = {
    pending: false,
    error: false,
    rates: [],
    formGridFrome: '',
    formGridTo: '',
    date: '',
    inputText: '',
}

export function ratesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true,
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                rates: action.rates,
                formGridFrome: action.base,
                date: action.date,
                formGridTo: action.to,
                pending: false,
            }
        case FETCH_PRODUCTS_ERROR: 
            return {
                ...state,
                error: true,
            }
        case GET_TEXT_INPUT:
            return {
                ...state,
                inputText: +action.value
            }
        case SET_TO_CURRENCY:
            return {
                ...state,
                [action.id] : action.value
            }
        default: 
            return state;
    }
}
