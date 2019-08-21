import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

export default function CartCont () {
  const [totalProducts, setTotalProducts] = useState();
  const cart = useSelector(state => state.cart);


  useEffect(()=>{
    var totalProductsAux = 0;
    cart.map(product => totalProductsAux += product.quantity);

    setTotalProducts(totalProductsAux)
  }, [cart]);


  return totalProducts > 0 && <span
    className="cart-btn cart-btn-cont"
  >
    {totalProducts}
  </span>

}