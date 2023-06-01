import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import MovieIcon from "@mui/icons-material/Movie";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Stories } from "./Stories";
import { Reels } from "./Reels";
import { Rooms } from "./Rooms";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};
export const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ minWidth: 275, borderRadius: 3 , }}>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" ,mt:-2 }} >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                icon={<WebStoriesIcon sx={{ height: 24  , width: 28}} />}
                label="Stories"
                {...a11yProps(0)}
                sx={{ width: 180}}
              />
              <Tab
                icon={<MovieIcon sx={{ height: 26, width: 28}}/>}
                label="Reels"
                {...a11yProps(1)}
                sx={{ width: 180}}
              />
              <Tab
                icon={<VideoCallIcon sx={{ height: 28, width: 28}} />}
                label="Rooms"
                {...a11yProps(2)}
                sx={{ width: 180}}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Stories />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Reels />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Rooms />
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
};
