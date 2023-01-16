import { FC } from "react";

import { Typography, Divider } from "@mui/material";

import ArticleCard from "./ArticleCard";

const ArticlesCardsList: FC = () => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontWeight: 600,
          fontSize: 16,
          lineHeight: 1.25,
          color: "#363636",
          mt: 5,
          mb: 1,
        }}
      >
        Results: 6
      </Typography>
      <Divider sx={{ mb: "45px", borderColor: "#EAEAEA" }} />
      <ArticleCard />
    </>
  );
};

export default ArticlesCardsList;
