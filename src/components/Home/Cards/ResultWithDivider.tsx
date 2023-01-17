import { FC } from "react";

import { Typography, Divider } from "@mui/material";

const ResultWithDivider: FC = () => {
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
      <Typography sx={textStyle}>Results: 6</Typography>
      <Divider sx={{ mb: "45px", borderColor: "#EAEAEA" }} />
    </>
  );
};

export default ResultWithDivider;
