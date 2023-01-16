import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Container, Typography, Button } from "@mui/material";

import { ArrowIcon } from "../../assets";

const ArticleDetail: FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ pb: "45px" }}>
      <img
        style={{
          width: "100%",
          height: 245,
          objectFit: "cover",
        }}
        src="https://cdn.pixabay.com/photo/2023/01/10/09/51/sand-dunes-7709400_960_720.jpg"
        //   изменить альт
        alt="article im"
      />
      <Container fixed>
        <Box
          sx={{
            pt: "35px",
            pb: "50px",
            px: "75px",

            position: "relative",
            top: "-100px",

            background: " #FFFFFF",
            border: "1px solid #EAEAEA",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: 24,
              lineHeight: 1.2,
              color: "#363636",
              mb: "50px",
              textAlign: "center",
            }}
          >
            The 2020 World's Most Valuable Brands
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.5,
              color: "#000000",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus
            id. Blandit habitasse volutpat id dolor pretium, sem iaculis.
            Faucibus commodo mauris enim, turpis blandit. Porttitor facilisi
            viverra mi lacus lacinia accumsan. Pellentesque gravida ligula
            bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi
            pharetra urna. Vel facilisis amet placerat ultrices lobortis proin
            nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl.
            Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget
            iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum,
            placerat vel convallis nulla orci, nunc etiam. Elementum risus
            facilisi mauris diam amet et sed. At aliquet id amet, viverra a
            magna lorem urna. Nibh scelerisque quam quam massa amet,
            sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas
            massa vitae nibh. Nec ullamcorper amet tortor, velit. Dictum
            pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque
            semper mattis aliquet ornare. Cursus maecenas massa, arcu ac
            adipiscing odio facilisis ac eu. In eget ipsum, sed ultrices tempor
            consequat, elementum cras porta. Sagittis etiam dictumst at duis
            praesent a. Malesuada odio amet aenean diam. Tincidunt lorem
            faucibus neque aliquet lobortis feugiat sed aliquam pulvinar.
            Praesent aliquet ut tempus feugiat placerat quis duis mauris nibh.
            Eu ullamcorper id feugiat sit risus turpis mi. Tristique posuere sed
            convallis magna eu vulputate. Cum sit in hac felis blandit. Cursus
            eu porta lectus mollis nisi, consectetur ac. Ornare vitae lectus
            iaculis nibh ac et. Adipiscing amet in parturient etiam fames.
            Facilisi id eu sem in elementum. Lacus, ipsum morbi vel purus ut
            arcu laoreet id eu. Libero, tincidunt aliquet parturient dolor
            sapien faucibus nunc. In ipsum suscipit nec pharetra non vitae
            sagittis aenean sit. Consequat integer sit netus pellentesque
            scelerisque ut. Elit augue dui viverra facilisi varius. Volutpat
            iaculis eu ipsum ut. Dui, ut viverra ut amet magna in in varius.
            Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu non
            massa donec sit duis. Libero nascetur mauris, ac in aliquet cras
            duis donec. Sit porttitor sociis aliquam aliquet odio arcu a
            viverra. Proin convallis bibendum venenatis non orci id proin vitae.
            Faucibus eleifend fermentum sit dictum sagittis fermentum. At id
            nisi, aliquet ut sagittis proin enim. Eget in aenean mi a elit
            viverra amet urna, diam. Cursus id viverra amet adipiscing. Pretium,
            amet amet mi mauris urna, maecenas. Risus ut sit quis donec. Lacinia
            elementum, amet gravida convallis elementum, metus cras. Adipiscing
            suspendisse etiam tellus tellus arcu. At accumsan rhoncus, fringilla
            ut scelerisque consectetur. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Interdum ornare convallis non etiam tincidunt
            tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id
            dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis
            blandit. Porttitor facilisi viverra mi lacus lacinia accumsan.
            Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac
            faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat
            ultrices lobortis proin nulla.{" "}
          </Typography>
          <Button
            onClick={() => navigate("/")}
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 700,
              fontSize: 16,
              lineHeight: 1.5,
              color: "#363636",
              textTransform: "initial",
              position: "absolute",

              bottom: "-85px",
            }}
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
