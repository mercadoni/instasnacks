import React from "react"
import logo from "../images/logo.png"
import Cart from "./Cart/Cart";
import "../styles/app.scss"
import "../styles/body.scss"

export default function Body () {
  return(
    <div id="body" className="d-flex justify-content-center align-middle bg-caribbean-dark">
      <Cart/>
      <img src={logo} alt="logo InstaSnaks"/>
    </div>
  )
}