import React from "react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { StoriesData } from "../constants/Constants";
import Typography from "@mui/material/Typography";

export const Stories = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={4}>
      {StoriesData.map((x) => {
        return (
          <SwiperSlide>
            <Card sx={{ width: 120, maxHeight: 200 }}>
              <CardMedia>
                <img src={x.src} loading="lazy" alt="" />
              </CardMedia>
            </Card>
            <Typography
              sx={{
                fontSize: 14,
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {x.title}
            </Typography>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
