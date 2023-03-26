import {
  AppBar,
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuData from "../../Common/menu.json";
import { Row } from "@nextui-org/react";
import { width } from "@mui/system";

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

const Header = (props) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const [modalopen, setOpenmodal] = useState(false);
  const [menuItem, setMenuitem] = useState([]);
  const MenuItemsData = MenuData;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuOpen = (x, e) => {
    handleClick(e);
    const data = x.prompt;
    console.log(data, "x");
    setMenuitem(data);
  };

  console.log("menuitem", menuItem);
  const HandleRout = () => {};
  console.log("menu list", menuItem);
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
        <AppBar style={{ backgroundColor: "white" }}>
          <Toolbar>
            <Grid
              container
              rowSpacing={1}
              style={{}}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3}>
                {" "}
                <Typography
                  align="left"
                  variant="h6"
                  noWrap
                  // component="div"
                  sx={{
                    marginLeft: 5,
                    marginRight: 5,
                    width: 200,
                    display: { xs: "none", sm: "block" },
                  }}
                  style={{ color: "black" }}
                >
                  Prompt2UI
                </Typography>
              </Grid>
              <Grid item xs={6}>
                {MenuItemsData.map((x) => {
                  return (
                    <>
                      <Button
                        onClick={(e) => {
                          handleMenuOpen(x, e);
                        }}
                      >
                        {x.name}
                      </Button>
                    </>
                  );
                })}
                <Menu
                  style={{ marginTop: 13,width:'auto' }}
                  keepMounted
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  open={Boolean(anchorEl)}
                >
                  {menuItem.map((x) => {
                    return (
                      <>
                        <MenuItem style={{paddingRight:30,paddingLeft:30}}>{x}</MenuItem>
                      </>
                    );
                  })}
                </Menu>
              </Grid>
              <Grid item xs={3}>
                <Search style={{ backgroundColor: "#F6F6F6 ", color: "black" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div style={{ paddingTop: 6 }}></div>
      </Box>
    </>
  );
};

export default Header;
