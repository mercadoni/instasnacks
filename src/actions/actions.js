export const SET_STATE = 'SET_STATE';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SORT_LOW_TO_HIGH = 'SORT_LOW_TO_HIGH';
export const SORT_HIGH_TO_LOW = 'SORT_HIGH_TO_LOW';

export function setState(field, value) {
  return {
    type: SET_STATE,
    payload: {
      field,
      value
    }
  }
}

export function addToCart(pos){
  return {
    type: ADD_TO_CART,
    payload: {
      pos
    }
  }
}

export function removeFromCart(pos){
  return {
    type: REMOVE_FROM_CART,
    payload: {
      pos
    }
  }
}

export function sortLowToHigh() {
  return {
    type: SORT_LOW_TO_HIGH,
  }
}

export function sortHighToLow() {
  return {
    type: SORT_HIGH_TO_LOW,
  }
}