import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

import convertedDate from "../../../../services/hooks/convertedDate";

import { IDataToMarkup } from "../../../../Interfaces/Interfaces";

import { useAppSelector } from "../../../../services/hooks/reduxHooks";

import { dataSelector } from "../../../../redux/ArticleCards/articlesSelectors";

import { ArrowIcon, CalendarIcon } from "../../../../assets";

import {
  Typography,
  Grid,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";

import {
  cardStyle,
  cardContentStyle,
  calendarBox,
  dateStyle,
  titleStyle,
  summaryStyle,
  buttonStyle,
  cardActionsStyle,
} from "./ArticleCardItemStyles";

const ArticleCardItem: FC = () => {
  const data = useAppSelector(dataSelector);
  const navigate = useNavigate();

  const markup = data.map((article: IDataToMarkup) => {
    const shortDescription =
      article.summary.length > 100
        ? article.summary.slice(0, 100) + "..."
        : article.summary;

    const date = convertedDate(article.publishedAt);

    const shortTitle = article.title.slice(0, 39) + "...";

    return (
      <Grid
        key={nanoid()}
        component="li"
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ position: "relative" }}
      >
        <Card sx={cardStyle}>
          <CardMedia
            component="img"
            alt={article.title}
            sx={{ height: 217 }}
            image={article.imageUrl}
          />
          <CardContent sx={cardContentStyle}>
            <Box sx={calendarBox}>
              <CalendarIcon sx={{ width: 16 }} />
              <Typography sx={dateStyle}>{date}</Typography>
            </Box>
            <Typography sx={titleStyle}>{shortTitle}</Typography>
            <Typography sx={summaryStyle}>{shortDescription}</Typography>
          </CardContent>
          <CardActions sx={cardActionsStyle}>
            <Button
              onClick={() => navigate(`/article/${article.id}`)}
              sx={buttonStyle}
              variant="text"
              endIcon={<ArrowIcon sx={{ width: 12 }} />}
            >
              Read more
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return <>{markup}</>;
};

export default ArticleCardItem;
