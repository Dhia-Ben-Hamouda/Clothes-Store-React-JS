import React from "react";
import logo from "../assets/logo.png";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav>
      <a className="logo" href="/">
        <img src={logo} alt="" />
        <h1>Clothes Store</h1>
      </a>
      <div className="container">
        <div className="search-container">
          <FaSearch size="1.25rem" color="#777" />
          <input
            placeholder="Search for products"
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
          />
        </div>
        <div>
          <a href="/auth">
            <FaUser className="icon" />
          </a>
          <a href="/cart">
            <FaShoppingCart className="icon cart" />
            <div className="count">
              0
            </div>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;