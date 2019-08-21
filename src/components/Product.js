import React from "react"
import "../styles/btndelete.scss"

export default function Product({product, children}) {
  const price = product.special_price ?
                  product.special_price
                :
                  product.price;

  return(
    <div id="product" className="my-1 row no-gutters">
      <div className="col-6 text-center">
        <img src={product.image_url} width="70%" alt={product.name} />
      </div>
      <div className="d-flex flex-column col-6">
        <div className="w-100">
          <p>{product.name}</p>
          <h6>{`Precio: $${price}`}</h6>
        </div>
        <div className="h-100"/>
        {children}
        {/*<button style={{"top":"0", "right":"0"}} className="btn-sm btn-danger" onClick={removeFromCart}>x</button>*/}
      </div>
    </div>
  )
}