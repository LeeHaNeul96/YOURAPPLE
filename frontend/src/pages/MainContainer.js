import * as React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Routes ,Route } from "react-router-dom";
import LayOut from "./LayOut";
import Login from "./login/Login";


export default function MainContainer(){
    return (
    <>
     <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
      <Box sx={{ bgcolor: 'rgb(183, 190, 210)', height: '105vh',textAlign: "center" , overflowY: 'auto' , paddingBottom : "10%"}}>
     
      <Routes>
      <Route path="/*" element={<LayOut/>}/>
      <Route path="/Login" element={<Login/>}/>
        </Routes>
      
       
        </Box>
      </Container>
    </React.Fragment>
    </>
    );
}