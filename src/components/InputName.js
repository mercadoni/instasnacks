import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import {setState} from "../actions/actions";
import Modal from "react-bootstrap/Modal";
import "../styles/app.scss"

export default function InputName() {
  const [show, setShow] = useState(true);

  const name = useSelector(state => state.name);

  const dispatch = useDispatch();
  const thisSetState = (field, value) => dispatch(setState(field, value));


  function handleSubmit(e) {
    e.preventDefault();
    setShow(false)
  }

  return (
    <>
      <Modal show={show}>
        <Modal.Body>

          <h5 className="mb-3">
            Enter your name:
          </h5>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              required
              value={name}
              onChange={e => thisSetState("user_name", e.target.value)}
            />
            <div className="w-100 mt-1 d-flex justify-content-end">
              <input className="btn btn-metal ml-auto" type="submit" value="Enviar"/>
            </div>
          </form>

        </Modal.Body>
      </Modal>
    </>
  );
}