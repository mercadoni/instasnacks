import {SET_STATE, ADD_TO_CART, REMOVE_FROM_CART, SORT_LOW_TO_HIGH, SORT_HIGH_TO_LOW} from "../actions/actions";
import {compare, compareReverse} from "../helpers/compare";

const initial_state = {
  products: [],
  cart: [],
  user_name: "",
  totalPrice: 0
};

export default function reducer (state = initial_state, {payload, type}) {
  switch (type) {
    case SET_STATE:
      return set_state(state, payload);

    case ADD_TO_CART:
      return add_to_cart(state, payload);

    case REMOVE_FROM_CART:
      return remove_from_cart(state, payload);

    case SORT_LOW_TO_HIGH:
      return sort_low_to_high(state);

    case SORT_HIGH_TO_LOW:
      return sort_high_to_low(state);

    default:
      return state
  }
}

function set_state(state, payload) {
  const {field, value} = payload;
  return {
    ...state,
    [field]: value
  };
}

function add_to_cart(state, payload) {
  const {pos} = payload;
  var cart = [...state.cart];

  const product = cart.find(el => el.name === pos.name);

  if(product === undefined) {
    cart = [
      ...cart,
      {
        ...pos,
        quantity: 1
      }
    ]
  }
  else {
    const prod_index = cart.indexOf(product);
    cart = [
      ...cart.slice(0, prod_index),
      {
        ...product,
        quantity: product.quantity + 1
      },
      ...cart.slice(prod_index+1, cart.length),
    ]
  }



  return {
    ...state,
    cart
  };
}

function remove_from_cart(state, payload){
  const {pos} = payload;
  var cart = [...state.cart];

  cart = cart.filter(el => el !== pos);

  return {
    ...state,
    cart
  };
}

function sort_low_to_high(state){
  const products  = [...state.products].sort(compare);

  return {
    ...state,
    products
  }
}

function sort_high_to_low(state){
  const products  = [...state.products].sort(compareReverse);

  return {
    ...state,
    products
  }
}