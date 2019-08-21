import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export default function SlideHeader ({closeSlide}) {
  return(
    <>
      <div className="m-2">
            <span className="closebtn" onClick={closeSlide}>
              &times;
            </span>
        <h2 className="mt-3">
          <FontAwesomeIcon icon={faShoppingCart}/>
          <span className="ml-3">
                Tu Carrito
              </span>
        </h2>
      </div>
    </>
  )
}