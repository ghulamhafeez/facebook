import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Button, CardActions, CardHeader, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAltTwoTone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreVert";
import { getPosts } from "../services/FacebookService";
import { deletePost } from "../services/FacebookService";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfiedTwoTone";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfiedTwoTone";
export const PostCards = ({
  openPostModal,
  setValue,
  setUpdateId,
  setisEdit,
}) => {
  const [post, setPost] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, { name, _id }) => {
    console.log("asd", _id, name);
    setAnchorEl(event.currentTarget);
    setSelectedId(_id);
    setSelectedName(name);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getPosts().then((data) => setPost(data));
  };

  const handleDelete = () => {
    return deletePost(selectedId).then(() => getData());
  };

  const handleEdit = () => {
    openPostModal();
    setValue(selectedName);
    setUpdateId(selectedId);
    setisEdit(true);
  };

  return post.map((x) => {
    return (
      <Card sx={{ minWidth: 275, borderRadius: 3, mt: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: x.color }} aria-label="recipe">
              {x.avatar}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              sx={{ justifyContent: "space-between" }}
            >
              {/* <Button onClick={()=>handleDelete(x)}>Delete</Button>
            <Button onClick={()=>handleEdit(x)}>Edit</Button> */}

              <MoreHorizIcon onClick={(e) => handleClick(e, x)} />
            </IconButton>
          }
          title={x.name}
          subheader={x.time}
        />

        {/* <CardMedia>
          <img src={x.img} loading="lazy" alt="" />
        </CardMedia> */}
        <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
          {x.name}
        </Typography>
        <Box sx={{ width: "100%", display: "flex", gap: 3, mt: 1, pl: 3 }}>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Button onClick={() => handleDelete()}>Delete</Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button onClick={() => handleEdit()}>Edit</Button>
              </MenuItem>
            </Menu>
            <Grid>
              <ThumbUpOffAltIcon
                sx={{ color: "blue", height: 24, width: 28 }}
              />
              <SentimentVerySatisfiedIcon
                sx={{ color: "yellow", height: 24, width: 28 }}
              />
              <SentimentVeryDissatisfiedIcon
                sx={{ color: "red", height: 24, width: 28 }}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: -2,
                pl: 35,
              }}
            >
              <p>{x.Comments} Comments</p>

              <p>{x.shares} Shares</p>
            </Grid>
          </Grid>
        </Box>
        <hr></hr>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button size="small" color="primary">
            <ThumbUpOffAltIcon sx={{ color: "grey", height: 24, width: 28 }} />
            Like
          </Button>
          <Button size="small" color="primary">
            <ChatBubbleOutlineIcon
              sx={{ color: "grey", height: 24, width: 28 }}
            />
            Comment
          </Button>
          <Button size="small" color="primary">
            <ShareIcon sx={{ color: "grey", height: 24, width: 28 }} />
            Share
          </Button>
        </CardActions>
      </Card>
    );
  });
};
