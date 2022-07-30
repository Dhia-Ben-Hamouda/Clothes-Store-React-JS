import React from "react";
import { useState } from "react";
import { TextField , Button} from "@mui/material";

const InsertProduct = ()=>{
  const [price , setPrice] = useState("");
  const [gender , setGender] = useState("");
  const [size , setSize] = useState("");
  const [color , setColor] = useState("");

  async function submitHandler(e)
  {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/insertProduct" , {
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify({

      })
    })
    
    const data = await response.json();
  }

  return(
    <>
      <form autoComplete="off" onSubmit={submitHandler} style={{display:"flex" , flexDirection:"column" , padding:"1rem"}}>
        <TextField 
          value={gender}
          onChange={(e)=>{setGender(e.target.value)}}
          label="Gender"
          style={{marginBottom:"1rem"}}  
        />
        <TextField 
          value={size}
          onChange={(e)=>{setSize(e.target.value)}}
          label="Size"
          style={{marginBottom:"1rem"}}  
        />
        <TextField 
          value={color}
          onChange={(e)=>{setColor(e.target.value)}}
          label="Color"
          style={{marginBottom:"1rem"}}  
        />
        <TextField 
          value={price}
          onChange={(e)=>{setPrice(e.target.value)}}
          label="Price"
          style={{marginBottom:"1rem"}}  
        />
        <Button variant="contained" type="submit">Submit</Button>
      </form>  
    </>
  )
}

export default InsertProduct;