import React, {useState} from "react"

export default function Alert({type, txt}) {
  const [show, setShow] = useState(true);

  return(
    <div className={`alert alert-${type} alert-dismissible ${show ? "show" : "fade"}`} role="alert">
      {txt}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={()=>setShow(false)}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}