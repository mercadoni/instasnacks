import React, {useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import {setState} from "../../actions/actions";
import CartIcon from "./CartIcon";
import "../../styles/cart.scss"
import CartCont from "./CartCont";
import Slide from "./Slide";
import SlideHeader from "./SlideHeader";
import SlidePrice from "./SlidePrice";
import {getData, setData} from "../../helpers/firestoreHelpers";

export default function () {
  const [showSlide, setShowSlide] = useState(false);
  const [initialize, setInitialize] = useState(false);

  const totalPrice = useSelector(state => state.totalPrice);
  const cart = useSelector(state => state.cart);

  const dispatch = useDispatch();

  useEffect(()=>{
    const thisSetState = (field, value) => dispatch(setState(field, value));

    if(!initialize)
      getData(thisSetState, setInitialize);
  }, [dispatch, initialize]);

  useEffect(() => {
    if(initialize)
      setData(totalPrice, cart);
  }, [initialize, totalPrice, cart]);

  return(
    <div id="cart">
      <CartIcon showSlide={showSlide} openSlide={()=>setShowSlide(true)}/>
      <CartCont/>

      <Slide
        show={showSlide}
      >
        <SlideHeader closeSlide={()=>setShowSlide(false)}/>
        <SlidePrice/>
      </Slide>
    </div>
  )
}