import { FC } from "react";

import { Grid } from "@mui/material";

import ArticleCardItem from "./ArticleCardItem/ArticleCardItem";

const ArticlesCardsList: FC = () => {
  return (
    <Grid component="ul" container spacing="45px">
      <ArticleCardItem />
    </Grid>
  );
};

export default ArticlesCardsList;
