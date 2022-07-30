import React from "react";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Auth from "./Auth.jsx";
import Api from "../api/InsertProduct.jsx";
import { Routes , Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allProducts" element={<Products/>} />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/auth" element={ <Auth/> }/>
        <Route path="/api" element={ <Api/> }/>
      </Routes>
    </>
  )
}

export default App;