import { FC } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../services/hooks/reduxHooks";

import { dataSelector } from "../../redux/ArticleCards/articlesSelectors";

import { Box, Container, Typography, Button } from "@mui/material";

import {
  buttonStyle,
  descriptionStyle,
  titleStyle,
  contentWrapperStyle,
} from "./ArticleDetailStyles";

import { ArrowIcon } from "../../assets";

const ArticleDetail: FC = () => {
  const { articleId } = useParams();

  const navigate = useNavigate();

  const data = useAppSelector(dataSelector);

  const detailInfo = data?.find(({ id }) => id === Number(articleId));

  useEffect(() => {
    if (!detailInfo) {
      navigate("/notFound");
    }
  }, [detailInfo, navigate]);

  return (
    <Box sx={{ pb: "45px" }}>
      <img
        style={{
          width: "100%",
          height: 245,
          objectFit: "cover",
        }}
        src={detailInfo?.imageUrl}
        alt={detailInfo?.title}
      />
      <Container fixed>
        <Box sx={contentWrapperStyle}>
          <Typography component="h2" sx={titleStyle}>
            {detailInfo?.title}
          </Typography>
          <Typography sx={descriptionStyle}>{detailInfo?.summary} </Typography>
          <Button
            onClick={() => navigate("/")}
            sx={buttonStyle}
            variant="text"
            startIcon={<ArrowIcon sx={{ width: 12, rotate: "-180deg" }} />}
          >
            Back to homepage
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ArticleDetail;
