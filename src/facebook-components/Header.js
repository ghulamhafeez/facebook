import React from "react";
import { HeaderTabs } from "./HeaderTabs";
import { SearchAutocomplete } from "./SearchAutocomplete";
import { SideIcons } from "./SideIcons";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Header = () => {

  return (
    <Grid display="flex" justifyContent="space-between"  borderColor={"#f0f2f5"} >
      <Grid display="flex" paddingLeft={2} pt={"1px"}>
        <FacebookIcon sx={{fontSize:50 ,color:'blue',mt:-1}}/>
        <SearchAutocomplete />
      </Grid>

      <HeaderTabs />
      <SideIcons />
    </Grid>
  );
};
