import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS,SET_BASE_CURRENCY,SET_TO_CURRENCY,GET_TEXT_INPUT} from '../actions';


export const initialState = {
    pending: false,
    rates: [],
    base: '',
    to: '',
    date: '',
    inputText: 1,
}

export function ratesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                rates: action.rates,
                base: action.base,
                date: action.date,
                to: action.to,
            }
            case GET_TEXT_INPUT:
            return {
                ...state,
                inputText: +action.value
                }
            case SET_BASE_CURRENCY:
                return {
                    ...state,
                    base: action.value
                }
            case SET_TO_CURRENCY:
                return {
                    ...state,
                    to: action.value
                }
        default: 
            return state;
    }
}
