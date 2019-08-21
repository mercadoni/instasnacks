import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export default function CartIcon ({showSlide, openSlide}) {
  return !showSlide &&
      <span
        className="cart-btn cart-btn-icon"
        onClick={openSlide}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
}