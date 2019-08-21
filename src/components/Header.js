import React from "react"
import logo from "../images/logo.png"
import "../styles/app.scss"
import "../styles/header.scss"

export default function Header () {
  return(
    <div id="header" className="d-flex justify-content-center align-middle bg-caribbean-dark">
      <img src={logo} alt="logo InstaSnaks"/>
    </div>
  )
}