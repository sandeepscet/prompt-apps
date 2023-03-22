import { Info, Security } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div style={{ marginTop: 20 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} minHeight={160}>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
              TinyWow provides free online conversion, pdf, and other handy
              tools <br />
              to help you solve problems of all types. All files both processed{" "}
              <br />
              and unprocessed are deleted after 1 hour
            </Grid>
            <Grid display="flex" justifyContent="center" alignItems="center">
              <MenuList>
                <MenuItem>
                  <Link href="./PromptDetails">PromptDetails</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">PromptDetails</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="./PromptDetails">PromptDetails</Link>
                </MenuItem>
              </MenuList>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Grid>
            <Grid xs display="flex" justifyContent="center" alignItems="center">
              Subcategories
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
