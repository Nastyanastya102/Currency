
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const GET_TEXT = 'GET_TEXT';
export const GET_INIT_VAL = 'GET_ITIN_VAL';
export const GET_SUM = 'GET_SUM';
export const GET_SUM_FOR_OTHER = 'GET_SUM_FOR_OTHER';
export const GET_TEXT_INPUT = 'GET_TEXT_INPUT';

export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';
export const SET_TO_CURRENCY = 'SET_TO_CURRENCY';






// Ввод суммы
export function getTextInput(value) {
    return {
        type: GET_TEXT_INPUT,
        value,
    }
}

// Подсчет суммы по базовой валюте
export function getSum(value1,value2,value3){
    return {
        type: GET_SUM,
        value1,
        value2,
        value3,
    }
}

// Подсчет суммы по другой валюте
export function getSumForOther(value1,value2,value3){
    return {
        type: GET_SUM_FOR_OTHER,
        value1,
        value2,
        value3,
    }
}

export function setBaseCur(value) {
    return {
        type: SET_BASE_CURRENCY,
        value,
    }
} 
export function setToCur(value) {
    return {
        type: SET_TO_CURRENCY,
        value,
    }
} 
export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING,
    }
}

export function fetchProductsSuccess(rates,base,date,to) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        rates,
        base,
        to,
        date,
    }
}


