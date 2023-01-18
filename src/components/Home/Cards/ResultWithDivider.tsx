import { FC } from "react";

import { Typography, Divider } from "@mui/material";

import { IDividerProps } from "../../../Interfaces/Interfaces";

const ResultWithDivider: FC<IDividerProps> = ({ postsLength }) => {
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
      <Typography sx={textStyle}>Results: {postsLength}</Typography>
      <Divider sx={{ mb: "45px", borderColor: "#EAEAEA" }} />
    </>
  );
};

export default ResultWithDivider;
