import React from "react";
import { HeaderTabs } from "./HeaderTabs";
import { SearchAutocomplete } from "./SearchAutocomplete";
import { SideIcons } from "./SideIcons";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
export const Header = () => {
  return (
    <Grid display="flex"  justifyContent="space-between">
     <Grid display="flex" paddingBottom={10}><FacebookIcon sx={{ fontSize: 60 , color:"blue"  }}  /> 
     <SearchAutocomplete />  </Grid> 

     <HeaderTabs />
   <SideIcons />
      
    </Grid>
  );
};
