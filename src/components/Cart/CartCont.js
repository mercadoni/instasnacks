import React from "react";
import {useSelector} from "react-redux";

export default function CartCont () {

  const cart = useSelector(state => state.cart);
  const cartLength = cart.length;

  return cartLength > 0 && <span
    className="cart-btn cart-btn-cont"
  >
    {cartLength}
  </span>

}