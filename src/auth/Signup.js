import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button, CardActions, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp =()=>{
    console.log("called")
  }
  return (
    <Grid main sx={{ bgcolor: "#DCDCDC", textAlign: "center", height: 700 }}>
      <Typography sx={{ color: "#1877F2", mt: 5, mb: 4 }} variant="h3">
        <b>facebook</b>
      </Typography>
      <Card sx={{ maxWidth: 400, minHeight: 360, borderRadius: 2, ml: 72 }}>
        <Typography sx={{ mt: 2 }} variant="h5">
         <b>Create a new account</b> 
        </Typography>
        <Typography sx={{ mt: 1 }} variant="h6">
          It's quick and easy.
        </Typography>

        <CardContent sx={{ mt: 1 }}>
          <Box sx={{ width: "100%", display: "flex", gap: 3, mt: -1 }}>
            <Grid>
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Email"
                value={email}
                sx={{ width: 350, pb: 3 }}
                onChange={(e)=> setEmail(e.target.value)}
              />

              <TextField
                id="outlined-basic"
                variant="outlined"
                label="Password"
                value={password}
                sx={{ width: 350 }}
                type={"password"}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </Grid>
          </Box>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "space-around", pb: 2 }}
        >
          <Button
            size="medium"
            sx={{ bgcolor: "#119F16", color: "white", width: 350 }}
            onClick={()=>handleSignUp()}
          >
            <b>Sign Up</b>
          </Button>
        </CardActions>
        <Link
          onClick={() => {
            // ...process something
          }}
        >
          Already have an account?
        </Link>
      </Card>
    </Grid>
  );
};
