
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const GET_TEXT = 'GET_TEXT';
export const GET_TEXT_INPUT = 'GET_TEXT_INPUT';


export function getText(value,name) {
    return {
        type: GET_TEXT,
        value,
        name,
    }
}
export function getTextInput(value) {
    return {
        type: GET_TEXT_INPUT,
        value,
    }
}
export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING,
    }
}

export function fetchProductsSuccess(rates) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        rates: rates,
    }
}


