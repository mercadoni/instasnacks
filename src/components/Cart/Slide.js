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
              <div key={`cart-product-${i}`} className="row no-gutters">
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <h5>{product.quantity}</h5>
                </div>
                <div className="col-11">
                  <Product product={product}>
                    <ProdDelBtn openModal={() => {openModal(); setProduct(product)}}/>
                  </Product>
                </div>
              </div>
            )
          })
        }

        <div className="w-100 d-flex">
          <button className="btn btn-lg btn-metal ml-auto mr-2">
            Buy
          </button>
        </div>
      </div>

      <ProdDelModal
        showModal={showModal}
        closeModal={closeModal}
        product={product}
      />
    </>
}