import React from "react";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import { Routes , Route } from "react-router-dom";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allProducts" element={<Products/>} />
      </Routes>
    </>
  )
}

export default App;