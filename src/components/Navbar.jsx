import React from "react";
import logo from "../assets/logo.png";

const Navbar = ()=>{
  return(
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </nav>
  )
}

export default Navbar;