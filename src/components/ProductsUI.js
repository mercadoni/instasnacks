import React from "react"
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/actions";

export default function ProductsUI({products}){
  const dispatch = useDispatch();
  const thisAddToCart = pos => dispatch(addToCart(pos));
  return (

    <div className="container-fluid">
      <div className="row">
        {
          products.map((product, i) => {
            return(
              <div key={`product-${i}`} className="col-sm-6 col-lg-3 p-2">
                <div className="h-100 w-100 border">
                  <div className="row no-gutters">
                    <div className="col-6">
                      <img className="w-100" src={product.image_url} alt={product.name} />
                    </div>
                    <div className="col-6">
                      {product.name}
                      {product.price}
                      <p>{product.special_price}</p>
                      <button
                        className="btn btn-dark"
                        onClick={()=>thisAddToCart(i)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}