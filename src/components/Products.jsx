import React from "react";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import Pagination from "./Pagination.jsx";
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from "react";
import Product from "./Product.jsx";
import DesktopFilter from "./DesktopFilter.jsx";
import { FaSearch } from "react-icons/fa";
import { Skeleton } from "@mui/material";

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: "#fff"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#FB9D12"
    }
  }
})

const Products = () => {
  const [loading , setLoading ] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    gender: [],
    size: [],
    color: []
  })

  let skeletons = (
    <>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={350}/>
      <Skeleton variant="rectangular" height={350}/>
    </>
  )

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:5000/products/getAllProducts?page=${page}&filters=${JSON.stringify(filters)}`);
      const data = await response.json();

      await new Promise(r => setTimeout(r, 3000));
      
      setLoading(false);

      setProducts(data);
    }
    fetchData();
  }, [page, filters]);

  return (
    <>
      <section id="products">
        <Navbar />
        <div className="mobile-filter">
          <button>Filter By</button>
          <div className="filter-search">
            <FaSearch color="#777"/>
            <input
              placeholder="Search for products"
            />
          </div>
        </div>
        <Carousel />
        <ThemeProvider theme={theme}>
          <div className="wrapper">
            <DesktopFilter
              filters={filters}
              setFilters={setFilters}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
            <div className="product-container">
              {
                loading ? skeletons : products.map((product, index) => {
                  return (
                    <Product
                      key={product._id}
                      id={product._id}
                      name={product.name}
                      price={product.price}
                      picture={product.picture}
                      color={product.color}
                      size={product.size}
                      gender={product.gender}
                      product={product}
                    />
                  )
                })
              }
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