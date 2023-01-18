import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

import convertedDate from "../../../../services/hooks/convertedDate";

import { ICardItemProps } from "../../../../Interfaces/Interfaces";

import { useAppSelector } from "../../../../services/hooks/reduxHooks";

import { filterSelector } from "../../../../redux/ArticleCards/articlesSelectors";

import { ArrowIcon, CalendarIcon } from "../../../../assets";

import Highlighter from "react-highlight-words";

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
  cardInfoStyle,
} from "./ArticleCardItemStyles";

const ArticleCardItem: FC<ICardItemProps> = ({ posts }) => {
  const navigate = useNavigate();

  const filter = useAppSelector(filterSelector);

  const markup = posts.map(({ summary, publishedAt, title, imageUrl, id }) => {
    const shortDescription =
      summary.length > 100 ? summary.slice(0, 100) + "..." : summary;

    const date = convertedDate(publishedAt);

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
            alt={title}
            sx={{ height: 217 }}
            image={imageUrl}
          />
          <Box sx={cardInfoStyle}>
            <CardContent sx={cardContentStyle}>
              <Box sx={calendarBox}>
                <CalendarIcon sx={{ width: 16 }} />
                <Typography sx={dateStyle}>{date}</Typography>
              </Box>
              <Typography sx={titleStyle}>
                <Highlighter
                  searchWords={filter.split(" ")}
                  textToHighlight={title}
                />
              </Typography>
              <Typography sx={summaryStyle}>
                <Highlighter
                  searchWords={filter.split(" ")}
                  textToHighlight={shortDescription}
                />
              </Typography>
            </CardContent>
            <CardActions sx={cardActionsStyle}>
              <Button
                onClick={() => navigate(`/article/${id}`)}
                sx={buttonStyle}
                variant="text"
                endIcon={<ArrowIcon sx={{ width: 12 }} />}
              >
                Read more
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    );
  });

  return <>{markup}</>;
};

export default ArticleCardItem;
