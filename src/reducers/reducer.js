import {SET_STATE, ADD_TO_CART, REMOVE_FROM_CART, SORT_LOW_TO_HIGH, SORT_HIGH_TO_LOW} from "../actions/actions";
import {quickSort} from "../helpers/quickSort";

const initial_state = {
  products: [],
  cart: [],
  user_name: ""
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

  if(!state.cart.includes(pos))
    cart = [...cart, pos];

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
  const products  = quickSort([...state.products]);

  return {
    ...state,
    products
  }
}
function sort_high_to_low(state){
  const products_aux  = quickSort([...state.products]);
  var products = [];
  products_aux.map(product => products = [product, ...products]);


  return {
    ...state,
    products
  }
}