import React from "react";
import { CreatePostCard } from "./CreatePostCard";
import { Grid } from "@mui/material";
import { PostCards } from "./PostCards";
import { MediaCard } from "./MediaCard";
import { getPosts } from "../services/FacebookService";
import {useGetPostQuery} from '../services/FacebookService'
import { CreatePostDialog } from "./CreatePostDialog";
export const Home = () => {
  const [post, setPost] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const [name, setName] = React.useState("");
  const [isEdit, setisEdit] = React.useState(false);
  const openPostModal = () => {
    setOpen(true);
  };
  const setValue = (name) => {
    setName(name);
  };
  const setUpdateId = (id) => {
    setId(id);
  };
  const { data  } = useGetPostQuery();
  console.log('data' ,data)
  const getData = () => {
    // const { data =[] } = useGetPostQuery();
    getPosts().then((data) => setPost(data));
  };

  return (
    <Grid sx={{ direction: "column" }}>
      <MediaCard />
      <Grid sx={{ pt: 3 }}>
        <CreatePostCard open={open} openPostModal={openPostModal} />
        {open && (
          <CreatePostDialog
            open={open}
            getData={() => getData()}
            setOpen={setOpen}
            id={id}
            name={name}
            setisEdit={setisEdit}
            isEdit={isEdit}
          />
        )}
      </Grid>
      <Grid sx={{ pt: 3 }}>
        <PostCards
          open={open}
          setOpen={setOpen}
          openPostModal={openPostModal}
          setValue={(name) => setValue(name)}
          setUpdateId={(id) => setUpdateId(id)}
          setisEdit={setisEdit}
          getData={() => getData()}
          post={post}
        />
      </Grid>
    </Grid>
  );
};
