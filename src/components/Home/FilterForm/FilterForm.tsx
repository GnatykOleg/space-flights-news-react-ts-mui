import { FC } from "react";

import { filterSelector } from "../../../redux/ArticleCards/articlesSelectors";
import { setFilter } from "../../../redux/ArticleCards/articlesSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../services/hooks/reduxHooks";

import { TextField, InputAdornment, Typography } from "@mui/material";

import { SearchIcon } from "../../../assets";

import { textStyle, inputStyle } from "./FilterFormStyles";

const FilterForm: FC = () => {
  const dispath = useAppDispatch();

  const value = useAppSelector(filterSelector);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispath(setFilter(event.currentTarget.value));
  };

  return (
    <>
      <Typography sx={textStyle}>Filter by keywords</Typography>
      <TextField
        onChange={onChangeInput}
        sx={inputStyle}
        id="outlined-basic"
        variant="outlined"
        value={value}
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
