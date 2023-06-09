import React from "react";
import { sideBarData } from "../constants/Constants";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LeftSideBar = () => {

  const navigate = useNavigate();

const redirectToFriends =({name})=>{
  console.log("nam" ,name)
  if (name == "Friends") {
   return navigate('/friends-page')
  } 
}
  return (
    <Grid  >
      {sideBarData.map((x) => {
        return (
          <Grid display={"flex"} gap={2}  paddingLeft={3}  >
             <x.Icon sx={{color:"blue" ,height:30 ,width:30 ,pt:2}} />
            <h4 onClick={()=> redirectToFriends(x)}>{x.name}</h4>
          </Grid>
        );
      })}
         <hr></hr>
      <h3 style={{ color: "#606266", paddingLeft: 25 }}>Your Shourtcuts</h3>
      <Grid display={"flex"} gap={2} paddingLeft={1}>
      <AddShoppingCartIcon sx={{ height: 32, width: 32, color:'blue' , pl: 2 ,pt:2  }} />
      <h4 style={{ color: "#181818" }}>Online Center</h4>
      </Grid>
    </Grid>
  );
};
