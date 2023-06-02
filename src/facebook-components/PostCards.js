import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { PostData } from "../constants/Constants";
import { Button, CardActions, CardMedia, CardHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAltTwoTone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreVert";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfiedTwoTone";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";
export const PostCards = () => {
  return PostData.map((x) => {
    return (
      <Card sx={{ minWidth: 275, borderRadius: 3, mt: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: x.color }} aria-label="recipe">
              {x.avatar}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title={x.title}
          subheader={x.time}
        />
        <CardMedia>
          <img src={x.img} loading="lazy" alt="" />
        </CardMedia>
        <Box sx={{ width: "100%", display: "flex", gap: 3, mt: 1, pl: 3 }}>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid>
              <ThumbUpOffAltIcon
                sx={{ color: "blue", height: 24, width: 28 }}
              />
              <SentimentVerySatisfiedIcon
                sx={{ color: "yellow", height: 24, width: 28 }}
              />
              <SentimentVeryDissatisfiedIcon
                sx={{ color: "red", height: 24, width: 28 }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: -2,
                pl: 35,
              }}
            >
              <p>{x.Comments} Comments</p>
              {""}
              <p>{x.shares} Shares</p>
            </Grid>
          </Grid>
        </Box>
        <hr></hr>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button size="small" color="primary">
            <ThumbUpOffAltIcon sx={{ color: "grey", height: 24, width: 28 }} />
            Like
          </Button>
          <Button size="small" color="primary">
            <ChatBubbleOutlineIcon
              sx={{ color: "grey", height: 24, width: 28 }}
            />
            Comment
          </Button>
          <Button size="small" color="primary">
            <ShareIcon sx={{ color: "grey", height: 24, width: 28 }} />
            Share
          </Button>
          {/* <AccountCircleIcon
            sx={{ pt: 1, height: 30, width: 30, color: "#606266" }}
          /> */}
        </CardActions>
      </Card>
    );
  });
};