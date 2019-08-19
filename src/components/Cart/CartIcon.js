import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export default function CartIcon ({open, setOpen}) {
  return !open &&
    <span
      onClick={()=>setOpen(true)}
    >
      <FontAwesomeIcon icon={faShoppingCart} />
    </span>

}