import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Button, CardHeader } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircleTwoTone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhotoTwoTone";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
export const CreatePostModal = ({ open, setOpen }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 440,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      keepMounted
      open={open}
      
      closeAfterTransition
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", gap: 16, mt: -3, pl: 18 }}>
          <h2>Create Post</h2>

          <CloseIcon
          onClick={() => setOpen(false)}
            sx={{
              mt: 2,
              height: 38,
              width: 40,
              bgcolor: "#f0f2f5",
              color: "grey",
              borderRadius: 5,
            }}
          />
        </Box>
        <hr></hr>
        <CardHeader
          sx={{ ml: -3 }}
          avatar={<AccountCircleIcon sx={{ height: 42, width: 42 }} />}
          title={<h4>Hello Boy</h4>}
        />
        <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h3"
          sx={{ pb: 6 }}
        >
          What's on your mind, Boy
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid grey",
            borderRadius: 3,
            height: 50,
            width: 430 ,
            pr:1,
            pl:1,
            pb:1
          }}
        >
          <h4 style={{ mr: 2 ,pt:-2 }}>Add to your post</h4>
          <PhotoLibraryIcon
            sx={{ color: "green", height: 24, width: 28, pt: 2 }}
          />
          <ContactPageIcon
            sx={{ color: "blue", height: 24, width: 28, pt: 2 }}
          />
          <SentimentVerySatisfiedIcon
            sx={{ color: "gold", height: 24, width: 28, pt: 2 }}
          />
          <LocationOnIcon sx={{ color: "red", height: 24, width: 28, pt: 2 }} />
          <AssistantPhotoIcon
            sx={{ color: "lightblue", height: 24, width: 28, pt: 2 }}
          />

          <MoreHorizIcon sx={{ color: "grey", height: 24, width: 28, pt: 2 }} />
        </Box>
        <Button sx={{backgroundColor:'lightblue' ,width:450 , mt:3}}>Post</Button>
      </Box>
    </Modal>
  );
};
