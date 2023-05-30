import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export const SearchAutocomplete = () => {
  return (
    <Autocomplete
   
      disablePortal
      id="combo-box-demo"
      options={["TEST 1", "TEST 1", "TEST 1", "TEST 1", "TEST 1"]}
      sx={{
        "& .MuiAutocomplete-input": {
          minWidth: "200px !important",
        },
        "& .Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white !important",
            color:"white !important",
          },
        },
        "& .MuiOutlinedInput-root": {
          height: "40px",
          padding: "0px 5px",
          color: "white",
        },
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search Facebook" />
      )}
    />
  );
};
