import React from "react"
import {useSelector} from "react-redux";

export default function SlidePrice () {
  const totalPrice = useSelector(state => state.totalPrice);

  return(
    <div className="my-3 d-flex w-100 price">
      <b className="mr-auto">Precio:</b>
      ${totalPrice}
    </div>
  )
}