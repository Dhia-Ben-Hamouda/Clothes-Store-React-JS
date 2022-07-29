import React from "react";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import test from "../assets/test.png";
import Pagination from "./Pagination.jsx";
import { useState } from "react";

const Products = ()=>{
  const [page , setPage] = useState(2);
  const [pages , setPages] = useState(7);

  return(
    <>
      <section id="products">
        <Navbar/>
        <Carousel/>
        <div className="container">
          <div className="filter-container">
            <div className="header">
              Filter by
            </div>
          </div>
          <div className="product-container">
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200</h3>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="pagination">
            <Pagination
              page={page}
              setPage={setPage}
              pages={pages}
            />
        </div>
      </section>
    </>
  )
}

export default Products;