import React from "react"
import "../styles/loader.scss"

export default function Loader() {
  return(
    <div className="w-100 p-5 d-flex justify-content-center">
      <div className="lds-ripple">
        <div/>
        <div/>
      </div>
    </div>

  )
}