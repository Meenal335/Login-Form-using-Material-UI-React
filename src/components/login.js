import React from 'react'
import {Avatar, Grid, Paper, TextField, Typography, Link}  from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@material-ui/core';




const Login=()=>{
    const paperStyle={padding: 20, height: '70vh',width:280, margin:"20px auto"}
    const avatarStyle = {backgroundColor: 'green'}
    const btnstyle = { margin:'8px 0'}

    return(
        <Grid>
            <Paper elevation={10}  style = {paperStyle}>
                <Grid  align= "center">
                <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label = 'Username' placeholder = 'Enter username' fullWidth required/>
                <TextField label = 'Password' placeholder = 'Enter password' type = 'password'  fullWidth required/>
                <FormControlLabel
            control={
              <Checkbox
               
                 name="jason" 
                 />
            }
            label="Remember me"
            />

           <Button type = 'submit' color = 'primary' variant="contained" style = {btnstyle} fullWidth >Sign in</Button>
           <Typography> <Link href="#">
               Forgot password ?
               </Link>
               </Typography>
               <Typography> Do you have an account ? 
                   <Link href="#">
                   Sign Up 
               </Link>
               </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;