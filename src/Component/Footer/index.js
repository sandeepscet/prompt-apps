import { Info, Label, Security } from '@mui/icons-material'
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
} from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { Row } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { Colors } from '@/src/Theme/colors'
import { typography } from '@/src/Theme/typography'
import { getPrompts } from '@/src/Utils/prompt'
const Footer = () => {
  const router = useRouter()
  const SubCategoiresData = getPrompts()
  let firstfiveprompts = SubCategoiresData.slice(10, 15)
  let secondfiveprompts = SubCategoiresData.slice(15, 20)
  let thirdfiveprompts = SubCategoiresData.slice(0, 5)

  return (
    <>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={3}>
            <strong
              style={{
                color: Colors.GreyText,
                ...typography.body20Regular,
              }}
            >
              This project is free , open and crowd sourced. <br />
              <br />
              You can contribute by development of Features, Suggest generage use prompts , Convert
              prompts into forms , Donate GPT-Token for testing , Sponser Development
            </strong>
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: Colors.GreyText,
                ...typography.body27Bold,
              }}
            >
              Navigate
            </strong>
            <br />

            <MenuItem
              onClick={() =>
                router.push({
                  pathname: '/',
                })
              }
            >
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              href="https://github.com/sandeepscet/prompt-apps/"
              target="_blank"
            >
              GitHub
            </MenuItem>
            <MenuItem onClick={() => alert('Launching Soon..')}>Newsletter</MenuItem>
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: Colors.GreyText,
                ...typography.body27Bold,
              }}
            >
              Apps
            </strong>

            {firstfiveprompts.map((x) => {
              return (
                <MenuItem
                  onClick={() =>
                    router.push({
                      pathname: '/PromptDetails',
                      query: { SubCategoryName: x.title },
                    })
                  }
                >
                  {x.title}
                </MenuItem>
              )
            })}
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: Colors.GreyText,
                ...typography.body27Bold,
              }}
            ></strong>

            {secondfiveprompts.map((x) => {
              return (
                <MenuItem
                  onClick={() =>
                    router.push({
                      pathname: '/PromptDetails',
                      query: { SubCategoryName: x.title },
                    })
                  }
                >
                  {x.title}
                </MenuItem>
              )
            })}
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: Colors.GreyText,
                ...typography.body27Bold,
              }}
            ></strong>
            {thirdfiveprompts.map((x) => {
              return (
                <MenuItem
                  onClick={() =>
                    router.push({
                      pathname: '/PromptDetails',
                      query: { SubCategoryName: x.title },
                    })
                  }
                >
                  {x.title}
                </MenuItem>
              )
            })}
          </Grid>
        </Grid>
      </div>
      <AppBar
        position="static"
        elevation={0}
        component="footer"
        color="default"
        style={{ height: 10 }}
      >
        <Toolbar style={{ justifyContent: 'center', backgroundColor: '#EFF7FD' }}>
          <Typography variant="caption">@2023 Prompt Apps. All rights reserved</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Footer
