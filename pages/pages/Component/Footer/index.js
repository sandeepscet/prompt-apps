import { Info, Security } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
    <div style={{marginTop:20}}>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} minHeight={160}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Avatar src="/static/images/avatar/1.jpg" />
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Avatar src="/static/images/avatar/2.jpg" />
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Avatar src="/static/images/avatar/3.jpg" />
          </Grid>
        </Grid>
      </Box>
      <AppBar
        position="static"
        elevation={0}
        component="footer"
        color="default"
      >
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="caption">©2023</Typography>
        </Toolbar>
      </AppBar>
    </div>
    
    </>
  );
};

export default Footer;
