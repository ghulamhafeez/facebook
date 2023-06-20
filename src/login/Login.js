import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button, CardActions, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography';

export const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid main sx={{bgcolor:"#DCDCDC" ,textAlign:"center" ,height:600}} >
 
        <Typography  sx={{color:'#1877F2' ,mt:5,mb:4}} variant="h3"><b>facebook</b></Typography>
      <Card sx={{ maxWidth: 400, borderRadius: 2  ,ml:72}} >
        <Typography sx={{mt:2 }} variant="h6">Log in to Facebook</Typography>
        <CardContent sx={{mt:2}}>
          <Box sx={{ width: "100%", display: "flex", gap: 3, mt: -1 }}>
            <Grid >
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Email"
                value={email}
         sx={{width:350 ,pb:3}}
              />

              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Password"
                value={password}
                sx={{width:350}}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" ,pb:2 }}>
          <Button size="medium" sx={{bgcolor:"#1877F2" ,color:"white" ,width:350}}>Log in</Button>
        </CardActions>
      </Card>   
     </Grid>
  );
};
