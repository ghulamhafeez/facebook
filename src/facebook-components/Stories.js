import React from 'react'
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import {StoriesData} from "../constants/Constants";
import Typography from "@mui/material/Typography";

export const Stories = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} slidesPerView={4}>
    {StoriesData.map((x) => {
        console.log("x",x)
      return (
        <SwiperSlide >
          <Card sx={{ width: 140 ,height:200}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                src={x.src}
                alt="green iguana"
              />
              <CardContent
                sx={{ backgroundColor: "#ffff", minHeight: 20 }}
              >
                <Typography
                  sx={{
                    fontSize: 14,
                    textAlign: "center",
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  {x.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
      );
    })}
  </Swiper>
  )
}
