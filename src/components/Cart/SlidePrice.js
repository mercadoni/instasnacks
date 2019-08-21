import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {setState} from "../../actions/actions";

export default function SlidePrice () {
  const totalPrice = useSelector(state => state.totalPrice);
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();


  useEffect(()=>{
    const thisSetState = (field, value) => dispatch(setState(field, value));

    var total_aux = 0;
    // eslint-disable-next-line array-callback-return
    cart.map(product => {
      const price = product !== undefined ? ( product.special_price ? product.special_price : product.price ) : 0; //TODO
      total_aux += price * product.quantity;
    });
    thisSetState("totalPrice", total_aux)

  },[dispatch, cart]);

  return(
    <div className="my-3 d-flex w-100 price">
      <b className="mr-auto">Precio:</b>
      ${totalPrice}
    </div>
  )
}