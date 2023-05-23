import React from "react";
import { Header } from "../facebook-components/Header";
import Grid from "@mui/material/Grid";
import { Facebook } from "../facebook-components/Facebook";

export const MainLayout = () => {
  return (
    <Grid>
      <Grid
        container
        flexWrap="wrap"
        bgcolor={"#CCCCCC"}
        height={"60px"}
        width={1600}
        paddingTop={"10px"}
      >
        <Header />
      </Grid>
      <Grid bgcolor={"#F0F2F5"} height={100}>
        <Facebook />
      </Grid>
    </Grid>
  );
};
