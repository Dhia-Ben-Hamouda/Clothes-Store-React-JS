import React from "react";
import { FaTimes } from "react-icons/fa";

const MobileFilter = ()=>{

  function clickHandler()
  {
    document.querySelector(".filter").classList.toggle("opened");
  }

  return(
    <>
      <div className="filter">
        <div className="header">
          <FaTimes onClick={clickHandler} color="white"/>
        </div>
      </div>
    </>
  )
}

export default MobileFilter;