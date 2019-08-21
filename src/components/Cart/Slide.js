import React, {useState} from "react"
import {useSelector} from "react-redux";
import Product from "../Product";
import ProdDelBtn from "./ProdDelBtn";
import ProdDelModal from "./ProdDelModal";

export default function Slide ({show, children}) {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);

  const cart = useSelector(state => state.cart);

  function closeModal() {setShowModal(false)}

  function openModal() {setShowModal(true)}

  return show &&
    <>
      <div className={`overlay ${show && `overlay-open`}`}/>
      <div className={`sidenav ${show && `sidenav-open`} p-1`}>

        {
          children
        }

        {
          cart.map((product, i) => {
            return(
              <Product key={`cart-product-${i}`} product={product}>
                <ProdDelBtn openModal={() => {openModal(); setProduct(product)}}/>
              </Product>
            )
          })
        }
      </div>

      <ProdDelModal
        showModal={showModal}
        closeModal={closeModal}
        product={product}
      />
    </>
}