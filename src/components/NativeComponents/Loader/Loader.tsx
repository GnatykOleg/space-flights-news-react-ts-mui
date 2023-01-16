import { FC } from "react";

import { Container, CircularProgress } from "@mui/material";

const Loader: FC = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Container>
  );
};

export default Loader;
