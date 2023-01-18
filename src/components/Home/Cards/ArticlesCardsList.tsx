import { FC } from "react";

import { Grid } from "@mui/material";

import { useAppSelector } from "../../../services/hooks/reduxHooks";

import ResultWithDivider from "./ResultWithDivider";

import {
  dataSelector,
  filterSelector,
} from "../../../redux/ArticleCards/articlesSelectors";

import filteredPosts from "../../../services/hooks/filteredPosts";

import ArticleCardItem from "./ArticleCardItem/ArticleCardItem";

const ArticlesCardsList: FC = () => {
  const posts = useAppSelector(dataSelector);
  const filter = useAppSelector(filterSelector);
  const resultedPosts = filteredPosts(posts, filter);

  return (
    <>
      <ResultWithDivider postsLength={resultedPosts.length} />
      <Grid component="ul" container spacing="45px">
        <ArticleCardItem posts={resultedPosts} />
      </Grid>
    </>
  );
};

export default ArticlesCardsList;
