import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const SearchBar = ({ searchBar, handleSearch }) => {
  return (
    <TextField
      label={searchBar.label}
      type={searchBar.type}
      variant="standard"
      onChange={(e) => handleSearch(e)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
