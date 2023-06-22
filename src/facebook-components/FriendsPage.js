import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {friendReq} from "../constants/Constants";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const FriendsPage = () => {

  const navigate = useNavigate();
  
  return (
    <Grid display={"flex"} direction={"column"}>
      <Grid display={"flex"} justifyContent={"space-between"}>
      <h3>Friends Request</h3> <ArrowBackIcon
            onClick={() =>  navigate(-1)}
            sx={{
              mt: 2,
              mr: 5,
              height: 35,
              width: 40,
            }}
          />
      </Grid>
      <Grid display={"flex"} direction={"row"} flexWrap={"wrap"} gap={2} textAlign={"center"} pt={1}>
      {friendReq.map((x) => {
       return <Card sx={{ borderRadius: 2, width: 170, height: 200 }}>
          <CardContent >
            <Box sx={{ width: "100%" }}>
              <Typography sx={{ mt: 5, mb: 2 ,fontSize:15}}><b>{x.name}</b></Typography>
            </Box>
          </CardContent>
          <Grid display={"flex"}  direction={"column"} sx={{pl:2}} gap={1} >
          <Button sx={{bgcolor:'#1A6ED8' ,color:'white',width:140 }}>Confirm</Button>
          <Button  sx={{bgcolor: '#D8DADF',color:'black',width:140 }}>Delete</Button>
          </Grid>
          
        </Card>;
      })}
      </Grid>
    </Grid>
  );
};
