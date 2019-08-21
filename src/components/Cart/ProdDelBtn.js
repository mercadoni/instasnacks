import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "../../styles/btndelete.scss"

export default function ProdDelBtn({openModal}) {
  return(
    <button
      id="btndelete"
      className="btn btn-sm btn-outline-danger ml-auto fs-13"
      onClick={openModal}
    >
      <FontAwesomeIcon className="" icon={faTrashAlt}/>
    </button>
  )
}