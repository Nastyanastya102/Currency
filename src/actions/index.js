
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const GET_TEXT = 'GET_TEXT';
export const GET_INIT_VAL = 'GET_ITIN_VAL';
export const GET_SUM = 'GET_SUM';
export const GET_SUM_FOR_OTHER = 'GET_SUM_FOR_OTHER';
export const GET_TEXT_INPUT = 'GET_TEXT_INPUT';

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


// Установить валюту
export function setToCur(value,id) {
    return {
        type: SET_TO_CURRENCY,
        value,
        id,
    }
} 

// Загрузка данных
export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING,
    }
}

// Получение данных
export function fetchProductsSuccess(rates,base,date,to) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        rates,
        base,
        to,
        date,
    }
}

// Ошибка получения данных
export function fetchProductsError() {
    return {
        type: FETCH_PRODUCTS_ERROR,
    }
}