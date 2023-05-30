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
      <Grid paddingTop={2} display={"flex"} direction={"row"}>
        <Grid item direction={"column"} height={1000} width={550}>
          <LeftSideBar />
        </Grid>
        <Grid width={550} bgcolor={"white"} height={1000}>
          <Content />
        </Grid>
        <Grid item direction={"column"} height={1000} width={480}>
          <RightSideBar />
        </Grid>
      </Grid>
    </Grid>
  );
};
