import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import QuickreplyIcon from "@mui/icons-material/Quickreply";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";
export const SideIcons = () => {
  return (
    <Grid
      display={"flex"}
      justifyContent={"space-around"}
      gap={4}
      paddingRight={2}
      pt={1}
    >
      <MenuIcon sx={{ fontSize: 32, bgcolor: "#f0f2f5", borderRadius: 5 }} />
      <NotificationsIcon
        sx={{ fontSize: 32, bgcolor: "#f0f2f5", borderRadius: 5 }}
      />
      <QuickreplyIcon
        sx={{ fontSize: 32, bgcolor: "#f0f2f5", borderRadius: 5 }}
      />
      <AccountCircleIcon
        sx={{ fontSize: 32, bgcolor: "#f0f2f5", borderRadius: 5 }}
      />
    </Grid>
  );
};
