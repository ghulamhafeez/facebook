import React from 'react'
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';
export const SideIcons = () => {
  return (
    <Grid>
<MenuIcon sx={{fontSize:32}}/>
<NotificationsIcon sx={{fontSize:32}}/>
<QuickreplyIcon sx={{fontSize:32}}/>
<AccountCircleIcon sx={{fontSize:32}}/>
    </Grid>
  )
}
