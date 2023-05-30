import React from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Grid } from "@mui/material";

export const HeaderTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  const redirectToWatch = () => {
    navigate("/watch");
  };
  const redirectToMarket = () => {
    navigate("/market-place");
  };
  const redirectToGrops = () => {
    navigate("/group");
  };
  const redirectToFeeds = () => {
    navigate("/feed");
  };
  const redirectToHome = () => {
    navigate(``);
  };

  return (
    <Grid>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
        
          >
            <Tab label={<HomeIcon />} onClick={() => redirectToHome()}></Tab>
            <Tab
              label={<OndemandVideoIcon />}
              onClick={() => redirectToWatch()}
            />

            <Tab
              label={<StorefrontIcon />}
              onClick={() => redirectToMarket()}
            />
            <Tab label={<GroupsIcon />} onClick={() => redirectToGrops()} />
            <Tab
              label={<WorkHistoryIcon />}
              onClick={() => redirectToFeeds()}
            />
          </Tabs>
        </Box>
      </Box>
    </Grid>
  );
};
