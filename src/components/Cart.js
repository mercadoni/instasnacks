import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {removeFromCart} from "../actions/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "../styles/cart.scss"
import CartIcon from "./Cart/CartIcon";
import Product from "./Product";

export default function Cart () {
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const thisRemoveFromCart = pos => dispatch(removeFromCart(pos));

  useEffect(()=>{
    setTotal(0);
    var total_aux = 0;
    // eslint-disable-next-line array-callback-return
    cart.map(pos => {
      const price = products[pos].price ? products[pos].price : 0;
      total_aux += price;
    });
    setTotal(total_aux)
  },[cart, products]);

  return(
    <div id="cart">
      <CartIcon open={open} setOpen={setOpen}/>

      {
        open &&
          <>
            <div className={`overlay ${open && `overlay-open`}`}/>
              <div className={`sidenav ${open && `sidenav-open`} p-1`}>
                <div className="m-2">
                  <span className="closebtn" onClick={()=>setOpen(false)}>
                    &times;
                  </span>
                  <h2 className="mt-3">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <span className="ml-3">
                      Tu Carrito
                    </span>
                  </h2>
                </div>

                <div className="my-3 d-flex w-100 price">
                  <b className="mr-auto">Precio:</b>
                  ${total}
                </div>

                {
                  cart.map((pos, i) => {
                    return <Product key={`cart-product-${i}`} product={products[pos]} removeFromCart={()=>thisRemoveFromCart(pos)}/>
                  })
                }
              </div>
          </>
      }
    </div>
  )
}