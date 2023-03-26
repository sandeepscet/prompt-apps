import { Info, Label, Security } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
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
import { Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Colors } from "@/src/Theme/colors";
import { typography } from "@/src/Theme/typography";
import MenuData from "../../Common/menu.json";
const Footer = () => {
  const router = useRouter();
  const MenuItemsData = MenuData;
  console.log("dfdffdsffdff", MenuItemsData);
  return (
    <>
      <div style={{ marginTop: 20 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            rowSpacing={1}
            style={{}}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              TinyWow provides free online conversion, pdf, and other handy
              tools <br />
              to help you solve problems of all types. All files both processed{" "}
              <br />
              and unprocessed are deleted after 1 hour
            </Grid>
            <Grid item xs={6}>
              <Row>
                <MenuList style={{ color: "Black" }}>
                  <strong
                    style={{
                      fontSize: 25,
                      paddingLeft: 15,
                      color: "black",
                      ...typography.body27Bold,
                    }}
                  >
                    Navigate
                  </strong>
                  <br />

                  <MenuItem
                    style={{ marginTop: 3 }}
                    onClick={() => router.push("/PromptDetails")}
                  ></MenuItem>
                  <MenuItem onClick={() => router.push("/PromptDetails")}>
                    PromptDetails
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/PromptDetails")}>
                    PromptDetails
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/PromptDetails")}>
                    PromptDetails
                  </MenuItem>
                </MenuList>
              </Row>
            </Grid>
            <Grid item xs={2}>
              <Row>
                <MenuList style={{ color: "Black" }}>
                  <strong
                    style={{
                      fontSize: 25,
                      paddingLeft: 15,
                      color: Colors.Black,
                      ...typography.body27Bold,
                    }}
                  >
                    Prompts
                  </strong>
                  <br />
                  <MenuItem
                    style={{ marginTop: 3, color: Colors.Black }}
                    onClick={() => router.push("/PromptDetails")}
                  >
                    PromptDetails
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/PromptDetails")}>
                    PromptDetails
                  </MenuItem>
                  <MenuItem onClick={() => router.push("/PromptDetails")}>
                    PromptDetails
                  </MenuItem>
                </MenuList>
              </Row>
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
