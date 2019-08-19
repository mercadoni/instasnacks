import {SET_STATE, ADD_TO_CART, REMOVE_FROM_CART, SORT_LOW_TO_HIGH} from "../actions/actions";

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

/*function compare(a, b){
  if (a &gt; b) return 1;
  if (b &gt; a) return -1;

  return 0;
}*/

function sort_low_to_high(state){
  //arr.sort(compare);
  return {
    ...state
  }
}