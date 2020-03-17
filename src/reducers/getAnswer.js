import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS} from '../actions';


export const initialState = {
    pending: false,
    rates: [],
}

export function productsReducer(state = initialState, action) {
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
                rates: action.rates
            }
        default: 
            return state;
    }
}
