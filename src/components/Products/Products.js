import React, {Fragment} from "react"
import Product from "../Product";
import BtnAdd from "./BtnAdd"

export default function Products({products}){
  return (
    <div className="container-fluid">
      <div className="row">
        {
          products.map((product, i) => {
            // eslint-disable-next-line no-mixed-operators
            return product.price || product.special_price ?
              <div key={`product-${i}`} className="col-sm-6 col-lg-4 p-2">
                <div className="h-100 w-100 border p-1">
                  <Product
                    product={product}
                  >
                    <BtnAdd pos={i}/>
                  </Product>
                </div>
              </div>
            :
              <Fragment key={`product-${i}`}></Fragment>
          })
        }
      </div>
    </div>
  )
}