import React from "react";
import { sideBarData } from "../constants/Constants";
import { Grid } from "@mui/material";

export const LeftSideBar = () => {
  return (
    <Grid  >
      {sideBarData.map((x) => {
        return (
          <Grid display={"flex"} gap={2}  paddingLeft={3} >
             <x.Icon sx={{color:"blue" ,height:30 ,width:30 ,pt:2}} />
            <h4>{x.name}</h4>
          </Grid>
        );
      })}
    </Grid>
  );
};
