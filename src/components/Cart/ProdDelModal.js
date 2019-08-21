import React from "react"
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../actions/actions";
import Modal from "react-bootstrap/Modal";

export default function ProdDelModal ({showModal, closeModal, product}) {

  const dispatch = useDispatch();
  const thisRemoveFromCart = product => dispatch(removeFromCart(product));

  return(
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Body>
        <p className="my-3">¿Do you want to remove the product from the cart?</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-metal" onClick={() => {thisRemoveFromCart(product); closeModal()}}>
          Ok
        </button>
        <button className="btn btn-outline-metal" onClick={closeModal}>
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  )
}