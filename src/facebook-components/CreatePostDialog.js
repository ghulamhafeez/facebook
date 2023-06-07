import React, { useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import { addPost } from "../services/FacebookService";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircleTwoTone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { updatePost } from "../services/FacebookService";
import { getPosts } from "../services/FacebookService";
export const CreatePostDialog = ({
  open,
  setOpen,
  name,
  isEdit,
  setisEdit,
  id,
}) => {
  console.log("ENAme", name);
  const [postValue, setPostValue] = useState(isEdit ? name : "");
  const style = {
    top: "50%",
    left: "50%",
    width: 440,
    p: 4,
  };

  const handlePost = () => {
    addPost(postValue);
    setOpen(false);
    setPostValue('')
    // getPosts()
  };
  const handleUpdate = () => {
    updatePost(postValue, id)
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    setisEdit(false);
  };

  return (
    <Dialog keepMounted open={open} closeAfterTransition>
      <Box sx={style}>
        <Box sx={{ display: "flex", gap: 16, mt: -3, pl: 16 }}>
          {isEdit ? <h2>Update Post</h2> : <h2>Create Post</h2>}
          <CloseIcon
            onClick={() => handleClose()}
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
        <DialogTitle sx={{ ml: -3, display: "flex", gap: 2 }}>
          <AccountCircleIcon sx={{ height: 42, width: 42, pt: 2 }} />
          <h4>Hello Boy</h4>
        </DialogTitle>
        <TextField
          id="standard-basic"
          label=" What's on your mind, Boy"
          variant="standard"
          sx={{ pb: 5, width: 300 }}
          value={postValue}
          onChange={(e) => setPostValue(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid grey",
            borderRadius: 3,
            height: 50,
            width: 430,
            pr: 1,
            pl: 1,
            pb: 1,
          }}
        >
          <h4 style={{ mr: 2, pt: -2 }}>Add to your post</h4>
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
            sx={{ color: "grey", height: 24, width: 28, pt: 2 }}
          />

          <MoreHorizIcon sx={{ color: "grey", height: 24, width: 28, pt: 2 }} />
        </Box>
        {isEdit ? (
          <Button
            sx={{ backgroundColor: "lightblue", width: 450, mt: 3 }}
            onClick={() => handleUpdate()}
          >
            Update
          </Button>
        ) : (
          <Button
            sx={{ backgroundColor: "lightblue", width: 450, mt: 3 }}
            onClick={() => handlePost()}
          >
            Post
          </Button>
        )}
      </Box>
    </Dialog>
  );
};
