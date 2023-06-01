import { Grid } from "@mui/material";
import { Pages } from "../constants/Constants";
import { Contacts } from "../constants/Constants";
import { Icon } from "../constants/Constants";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GroupsIcon from "@mui/icons-material/GroupsTwoTone";
import React from "react";

export const RightSideBar = () => {
  return (
    <Grid>
      <Grid display={"flex"} gap={19}>
      <h3 style={{ color: "#606266", paddingLeft: 90 }}>
        Your Pages and Profiles
      </h3>
      <MoreHorizIcon sx={{ height: 20, width: 20, color:'gray' , pt: 3  }} />
      </Grid>
     
      {Pages.map((x) => {
        return (
          <Grid display={"flex"} gap={2} paddingLeft={12}>
            <x.Icon sx={{ color: "gray", height: 23, width: 23, pt: 2 }} />
            <h5 style={{ color: "gray" }}>{x.name}</h5>
          </Grid>
        );
      })}
      <hr></hr>
      <Grid display={"flex"} direction={"row"}>
        <h3 style={{ color: "#606266", paddingLeft: 90 }}>Contacts</h3>
        {Icon.map((x) => {
          return (
            <Grid  paddingLeft={10}>
              <x.Icon sx={{ color: "#606266", height: 22, width: 22, pt: 2 }} />
            </Grid>
          );
        })}
      </Grid>

      {Contacts.map((x) => {
        return (
          <Grid display={"flex"} gap={2} paddingLeft={11}>
            <x.Icon sx={{ color: "#606266", height: 32, width: 32, pt: 2 }} />
            <h4 style={{ color: "#606266" }}>{x.name}</h4>
          </Grid>
        );
      })}
      <hr></hr>
      <h3 style={{ color: "#606266", paddingLeft: 90 }}>Group Conversations</h3>
      <Grid display={"flex"} gap={3} paddingLeft={10}>
      <GroupsIcon sx={{ height: 32, width: 32, color:'gray' , pl: 2 ,pt:2  }} />
      <h4 style={{ color: "#606266" }}>Car Dealers</h4>
      </Grid>

    </Grid>
  );
};
