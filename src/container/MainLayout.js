import React from "react";
import { Header } from "../facebook-components/Header";
import Grid from "@mui/material/Grid";
import { Content } from "./Content";
import { LeftSideBar } from "../facebook-components/LeftSideBar";
import { RightSideBar } from "../facebook-components/RightSideBar";
export const MainLayout = () => {
  return (
    <Grid container direction={"row"} bgcolor={"#f0f2f5"}>
      <Grid
        flexWrap="wrap"
        bgcolor={"white"}
        height={"57px"}
        width={1600}
        paddingTop={1}
      >
        <Header />
      </Grid>
      <Grid paddingTop={2} display={"flex"} direction={"row"} >
        <Grid item direction={"column"} height={1200} width={530}>
          <LeftSideBar />
        </Grid>
        <Grid width={580} bgcolor={"white"} height={1200} borderRadius={3}>
          <Content />
        </Grid>
        <Grid item direction={"column"} height={1200} width={480}>
          <RightSideBar />
        </Grid>
      </Grid>
    </Grid>
  );
};
