import React from "react";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import test from "../assets/test.png";
import Pagination from "./Pagination.jsx";
import { useState } from "react";
import { Slider } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB9D12"
    }
  }
})

const Products = () => {
  const [page, setPage] = useState(2);
  const [pages, setPages] = useState(7);
  const [priceRange, setPriceRange] = useState([0, 500]);

  return (
    <>
      <section id="products">
        <Navbar />
        <Carousel />
        <div className="container">
          <div className="filter-container">
            <div className="header">
              Filter by
            </div>
            <div className="price">
              <h1>Price</h1>
              <div className="slider">
                <ThemeProvider theme={theme}>
                  <Slider
                    value={priceRange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={500}
                    step={20}
                    onChange={(e, newValue) => { setPriceRange(newValue); console.log(newValue) }}
                  />
                </ThemeProvider>
              </div>
              <div className="price-inputs">
                <div className="low">
                  {
                    priceRange[0] + " $"
                  }
                </div>
                <div className="high">
                  {
                    priceRange[1] + " $"
                  }
                </div>
              </div>
            </div>
            <div className="gender">
              <h1>Gender</h1>
            </div>
          </div>
          <div className="product-container">
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
              </div>
              <button>Add to Cart</button>
            </div>
            <div className="item">
              <img src={test} alt="" />
              <div>
                <h3>name</h3>
                <h3>200 $</h3>
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