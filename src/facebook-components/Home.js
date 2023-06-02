import React from "react";
import { CreatePostCard } from "./CreatePostCard";
import { Grid } from "@mui/material";
import {PostCards} from "./PostCards"
import { MediaCard } from "./MediaCard";
export const Home = () => {
  return (
    <Grid sx={{ direction: "column" }}>
      <MediaCard />
      <Grid sx={{ pt: 3 }}>
        <CreatePostCard />
      </Grid>
      <Grid sx={{ pt: 3 }}>
      <PostCards />   
      </Grid>
      
    </Grid>
  );
};
