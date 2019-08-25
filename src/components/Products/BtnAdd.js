import React from "react"
import {useDispatch} from "react-redux";
import {addToCart} from "../../actions/actions";

export default function BtnAdd ({product}) {
  const dispatch = useDispatch();
  const thisAddToCart = product => dispatch(addToCart(product));

  return <button
          className="btn btn-eggplant ml-auto fs-13"
          onClick={()=>thisAddToCart(product)}
        >
          ADD TO CART
        </button>
}