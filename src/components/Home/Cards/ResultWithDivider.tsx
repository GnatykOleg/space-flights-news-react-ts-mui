import { FC } from "react";

import { Typography, Divider } from "@mui/material";

import { useAppSelector } from "../../../services/hooks/reduxHooks";
import {
  dataSelector,
  filterSelector,
} from "../../../redux/ArticleCards/articlesSelectors";

const ResultWithDivider: FC = () => {
  const data = useAppSelector(dataSelector);
  const filter = useAppSelector(filterSelector);

  const resultCount = filter
    ? `Results: ${data.length}`
    : `All posts: ${data.length}`;

  const textStyle = {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.25,
    color: "#363636",
    mt: 5,
    mb: 1,
  };
  return (
    <>
      <Typography sx={textStyle}>{resultCount}</Typography>
      <Divider sx={{ mb: "45px", borderColor: "#EAEAEA" }} />
    </>
  );
};

export default ResultWithDivider;
