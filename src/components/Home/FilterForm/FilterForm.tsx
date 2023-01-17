import { FC } from "react";

import { TextField, InputAdornment, Typography } from "@mui/material";

import { textStyle, inputStyle } from "./FilterFormStyles";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../services/hooks/reduxHooks";

import { filterSelector } from "../../../redux/ArticleCards/articlesSelectors";
import { SearchIcon } from "../../../assets";
import { setFilter } from "../../../redux/ArticleCards/articlesSlice";

const FilterForm: FC = () => {
  const dispath = useAppDispatch();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispath(setFilter(event.currentTarget.value));
  };

  const value = useAppSelector(filterSelector);

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
