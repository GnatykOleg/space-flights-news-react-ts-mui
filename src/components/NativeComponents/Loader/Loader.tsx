import { FC } from "react";

import { Container, CircularProgress } from "@mui/material";

const Loader: FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={80} />
    </Container>
  );
};

export default Loader;
