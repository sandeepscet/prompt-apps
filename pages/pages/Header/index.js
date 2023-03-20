import {
  AppBar,
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useStyleRegistry } from "styled-jsx";
import { styled, alpha } from "@mui/material/styles";
import styles from "./Button.module.css";
import { shadows } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
 
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
     
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <Box
        sx={{
          width: "auto",
          height: 50,
          fontSize: 20,
          backgroundColor: "#fff",
          color: "black",
          // '&:hover': {
          //     backgroundColor: '#eeeee4',
          //     opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <AppBar style={{ backgroundColor: "white" }} >
          <Toolbar>
            <Typography
              align="left"
              variant="h6"
              noWrap
              // component="div"
              sx={{ marginLeft:20,width:200 ,display: { xs: "none", sm: "block" } }}
              style={{ color: "black" }}
              

            >
              Prompt2UI
            </Typography>
            <Typography align="left"  variant="div">
            <Button
              variant="text"
              // className={styles.menu}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              // aria-haspopup="true"
              onMouseOver={handleClick}
            >
              tal
            </Button>

            </Typography>
            <Button
              variant="text"
              // className={styles.menu}
              aria-owns={anchorEl ? "simple-menu" : undefined}
              // aria-haspopup="true"
              onMouseOver={handleClick}
            >
              tal
            </Button>
            <Search style={{ backgroundColor: "#F6F6F6 ",color:"black" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <div style={{ paddingTop: 6 }}></div>
        <Menu style={{marginTop:13}}
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
        >
          <MenuItem onClick={handleClose}>Programing</MenuItem>
          <MenuItem onClick={handleClose}>Legal</MenuItem>
          <MenuItem onClick={handleClose}>Personal Assistent</MenuItem>
        </Menu>
      </Box>
    </>
  );
};

export default Header;
