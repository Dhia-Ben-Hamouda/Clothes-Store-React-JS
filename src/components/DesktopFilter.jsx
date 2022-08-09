import React from "react";
import { Slider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const DesktopFilter = ({filters , setFilters , priceRange , setPriceRange , realPrice , setRealPrice}) => {

  function handleFilter(e)
  {
    const name = e.target.name;
    const value = e.target.value;

    if(e.target.checked)
    {
      let tab = filters[name];
      console.log(tab);
      tab.push(value);
      setFilters({...filters , [name] : tab});
      console.log(filters);
    }
    else
    {
      let tab = filters[name];
      console.log(tab);
      tab = tab.filter((item)=>item !== value);
      setFilters({...filters , [name] : tab});
      console.log(filters);
    }  
  }

  return (
    <>
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
              onChange={(e, newValue) => { setPriceRange(newValue); }}
              onChangeCommitted={(e)=>{setRealPrice(priceRange); }}
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
              control={<Checkbox onChange={handleFilter} name="gender" value="male" />}
              label="Male"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="gender" value="female" />}
              label="Female"
            />
          </FormGroup>
        </div>
        <div className="size">
          <h1>Size</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="size" value="S" />}
              label="S"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="size" value="M" />}
              label="M"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="size" value="L" />}
              label="L"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="size" value="XL" />}
              label="XL"
            />
          </FormGroup>
        </div>
        <div className="color">
          <h1>Color</h1>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="color" value="black" />}
              label="Black"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="color" value="white" />}
              label="White"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="color" value="red" />}
              label="Red"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="color" value="blue" />}
              label="Blue"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="color" value="yellow" />}
              label="Yellow"
            />
            <FormControlLabel
              control={<Checkbox onChange={handleFilter} name="color" value="green" />}
              label="Green"
            />
          </FormGroup>
        </div>
      </div>
    </>
  )
}

export default DesktopFilter;