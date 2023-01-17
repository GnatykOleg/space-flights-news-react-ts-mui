import { FC } from "react";
import { Container, Box } from "@mui/material";

import {
  FilterForm,
  ArticlesCardsList,
  ResultWithDivider,
} from "../../components";

const HomePage: FC = () => {
  return (
    <Box component="main" pt="50px" pb="63px">
      <Container>
        <FilterForm />
        <ResultWithDivider />
        <ArticlesCardsList />
      </Container>
    </Box>
  );
};

export default HomePage;
