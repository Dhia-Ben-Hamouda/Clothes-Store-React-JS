import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const InsertProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture , setPicture] = useState("");

  const theme = createTheme({
    palette: {
      primary:{
        main:"#FB9D12"
      }
    }
  })

  async function submitHandler(e) {
    e.preventDefault();

    const response = await fetch("https://clothes-store-react-js.herokuapp.com/products/insertProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name,
        price,
        gender,
        size,
        color,
        picture
      })
    })

    const data = await response.json();

    console.log(data);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <form autoComplete="off" onSubmit={submitHandler} style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
          <TextField
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            label="Name"
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            value={gender}
            onChange={(e) => { setGender(e.target.value) }}
            label="Gender"
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            value={size}
            onChange={(e) => { setSize(e.target.value) }}
            label="Size"
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            value={color}
            onChange={(e) => { setColor(e.target.value) }}
            label="Color"
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            value={price}
            onChange={(e) => { setPrice(e.target.value) }}
            label="Price"
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            value={picture}
            onChange={(e)=>{setPicture(e.target.value)}}
            label="Picture"
            style={{marginBottom:"1rem"}}
          />
          <Button style={{color:"white"}} variant="contained" type="submit">Submit</Button>
        </form>
      </ThemeProvider>
    </>
  )
}

export default InsertProduct;