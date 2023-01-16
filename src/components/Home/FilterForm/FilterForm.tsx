import { FC } from "react";
import { TextField, InputAdornment, Typography } from "@mui/material";

import { SearchIcon } from "../../../assets";

const FilterForm: FC = () => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 600,
          fontSize: 16,
          lineHeight: 1.25,
          color: "#363636",
        }}
      >
        Filter by keywords
      </Typography>
      <TextField
        sx={{
          width: "100%",
          maxWidth: 600,
          mt: "10px",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
        }}
        id="outlined-basic"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default FilterForm;
