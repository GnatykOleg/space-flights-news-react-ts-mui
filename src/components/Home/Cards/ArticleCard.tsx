import { FC } from "react";

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

import { ArrowIcon, CalendarIcon } from "../../../assets";

const tempData = [
  {
    poster:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    id: "1",
    date: "June 29th, 2021",
    title: "The 2020 World's Most Valuable Brands",
    text: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...,",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    id: "1",
    date: "June 29th, 2021",
    title: "The 2020 World's Most Valuable Brands",
    text: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...,",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    id: "1",
    date: "June 29th, 2021",
    title: "The 2020 World's Most Valuable Brands",
    text: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...,",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    id: "1",
    date: "June 29th, 2021",
    title: "The 2020 World's Most Valuable Brands",
    text: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...,",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    id: "1",
    date: "June 29th, 2021",
    title: "The 2020 World's Most Valuable Brands",
    text: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...,",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    id: "1",
    date: "June 29th, 2021",
    title: "The 2020 World's Most Valuable Brands",
    text: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...,",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    id: "1",
    date: "June 29th, 2021",
    title: "The 2020 World's Most Valuable Brands",
    text: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...,",
  },
  {
    poster:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    id: "1",
    date: "June 29th, 2021",
    title: "The 2020 World's Most Valuable Brands",
    text: "Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra...,",
  },
];

const ArticleCard: FC = () => {
  return (
    <Grid component="ul" container spacing="45px">
      {tempData.map((el) => {
        return (
          <Grid component="li" item xs={12} sm={6} md={4}>
            <Card
              sx={{
                background: "#FFFFFF",
                border: "1px solid #EAEAEA",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
                borderRadius: "5px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 217 }}
                image={el.poster}
              />
              <CardContent
                sx={{
                  marginTop: "25px",
                  marginBottom: "20px",
                  padding: "0 25px 0 25px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "24px",
                    gap: 1,
                  }}
                >
                  <CalendarIcon sx={{ width: 16 }} />
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "#363636",
                      opacity: 0.6,
                    }}
                  >
                    {el.date}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: 24,
                    lineHeight: 1.2,
                    color: "#363636",
                    marginBottom: "20px",
                  }}
                >
                  {el.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "#363636",
                  }}
                >
                  {el.text}
                </Typography>
              </CardContent>
              <CardActions sx={{ padding: "0 25px 9px 25px" }}>
                <Button
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: 16,
                    lineHeight: 1.5,
                    color: "#363636",
                    textTransform: "initial",
                  }}
                  variant="text"
                  endIcon={<ArrowIcon sx={{ width: 12 }} />}
                >
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ArticleCard;
