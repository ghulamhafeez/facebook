import React from "react";
import { CreatePostCard } from "./CreatePostCard";
import { Grid } from "@mui/material";
import { PostCards } from "./PostCards";
import { MediaCard } from "./MediaCard";
export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState();
  const [name, setName] = React.useState("");
  const [isEdit, setisEdit] = React.useState(false);
  const openPostModal = () => {
    setOpen(true);
  };
  const setValue = (name) => {
    console.log("name", name);
    setName(name);
  };
  const setUpdateId = (id) => {
    console.log("update",id ,name)

    setId(id);
  };
  
  return (
    <Grid sx={{ direction: "column" }}>
      <MediaCard />
      <Grid sx={{ pt: 3 }}>
        <CreatePostCard
          open={open}
          setOpen={setOpen}
          openPostModal={openPostModal}
          name={name}
          id={id}
          isEdit={isEdit}
          setisEdit={setisEdit}
        />
      </Grid>
      <Grid sx={{ pt: 3 }}>
        <PostCards
          open={open}
          setOpen={setOpen}
          openPostModal={openPostModal}
          setValue={(name) => setValue(name)}
          setUpdateId={(id)=>setUpdateId(id)}
          setisEdit={setisEdit}
        />
      </Grid>
    </Grid>
  );
};
