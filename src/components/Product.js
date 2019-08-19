import React from "react"

export default function Product({product, removeFromCart}) {
  const price = product.price || product.special_price ? product.price ? product.price : product.special_price : 0;
  return(
    <div className="my-1 row no-gutters">
      <div className="col-6 text-center">
        <img src={product.image_url} width="70%" alt={product.name} />
      </div>
      <div className="col-6">
        <b>{product.name}</b>
        <p>{`Precio: $${price}`}</p>
        <button style={{"top":"0", "right":"0"}} className="btn-sm btn-danger" onClick={removeFromCart}>x</button>
      </div>
    </div>
  )
}