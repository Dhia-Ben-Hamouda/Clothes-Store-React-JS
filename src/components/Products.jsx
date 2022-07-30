import React from "react";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import test from "../assets/test.png";
import Pagination from "./Pagination.jsx";
import { useState } from "react";
import { Slider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
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
        <ThemeProvider theme={theme}>
          <div className="container">
            <div className="filter-container">
              <div className="header">
                Filter by
              </div>
              <div className="price">
                <h1>Price</h1>
                <div className="slider">

                  <Slider
                    value={priceRange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={500}
                    step={20}
                    onChange={(e, newValue) => { setPriceRange(newValue); console.log(newValue) }}
                  />

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
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Male"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Female"
                  />
                </FormGroup>
              </div>
              <div className="size">
                <h1>Size</h1>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="S"
                  />
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="M"
                  />
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="L"
                  />
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="XL"
                  />
                </FormGroup>
              </div>
              <div className="color">
                <h1>Color</h1>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="Black"
                  />
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="White"
                  />
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="Red"
                  />
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="Blue"
                  />
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="Yellow"
                  />
                  <FormControlLabel
                    control={<Checkbox/>}
                    label="Green"
                  />
                </FormGroup>
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
        </ThemeProvider>
      </section>

    </>
  )
}

export default Products;