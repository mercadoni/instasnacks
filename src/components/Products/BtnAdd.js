import React from "react"
import {useDispatch} from "react-redux";
import {addToCart} from "../../actions/actions";

export default function BtnAdd ({pos}) {
  const dispatch = useDispatch();
  const thisAddToCart = pos => dispatch(addToCart(pos));

  return(
      <button
        className="btn btn-eggplant ml-auto fs-13"
        onClick={()=>thisAddToCart(pos)}
      >
        ADD TO CART
      </button>
  )
}