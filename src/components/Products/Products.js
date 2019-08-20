import React from "react"
import Product from "../Product";
import BtnAdd from "./BtnAdd"
import Filters from "./Filters";

export default function Products({products}){
  return (
    <div className="container-fluid">
      <Filters/>

      <div className="row">
        {
          products.map((product, i) => {
            // eslint-disable-next-line no-mixed-operators
            return(
              <div key={`product-${i}`} className="col-sm-6 col-lg-4 p-2">
                <div className="h-100 w-100 border p-1">
                  <Product
                    product={product}
                  >
                    <BtnAdd product={product}/>
                  </Product>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}