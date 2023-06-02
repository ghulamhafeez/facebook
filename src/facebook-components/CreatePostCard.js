import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircleTwoTone";
import { CreatePostDialog } from "./CreatePostDialog";
import { Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
export const CreatePostCard = () => {
  const [open, setOpen] = React.useState(false);
  const openPostModal = () => {
    setOpen(true);
  };
  return (
    <Grid>
      <Card sx={{ minWidth: 275, borderRadius: 3 }}>
        <CardContent>
          <Box sx={{ width: "100%", display: "flex", gap: 3, mt: -1 }}>
            <AccountCircleIcon sx={{ pt: 2, height: 42, width: 42 }} />
            <Grid
              sx={{
                // pt: -1,
                backgroundColor: "#f0f2f5",
                borderRadius: 5,
                fontSize: 18,
                width: 460,
                height: 40,
                mt: 2,
              }}
            >
              <p style={{ pt: 9 }} onClick={() => openPostModal()}>
                {" "}
                What's on your mind, Boy?
              </p>
            </Grid>
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button size="small" color="primary">
            <VideoCameraBackIcon sx={{ color: "red", height: 24, width: 28 }} />{" "}
            Live video
          </Button>
          <Button size="small" color="primary"   onClick={() => openPostModal()}>
            <PhotoLibraryIcon
              sx={{ color: "green", height: 24, width: 28 }}
            
            />
            Photo/video
          </Button>
          <Button size="small" color="primary">
            <SentimentVerySatisfiedIcon
              sx={{ color: "yellow", height: 24, width: 28 }}
            />
            Feeling/activity
          </Button>
        </CardActions>
      </Card>

      <CreatePostDialog open={open} setOpen={setOpen} />
    </Grid>
  );
};
