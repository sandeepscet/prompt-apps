import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Grid, MenuItem, Toolbar, Typography } from '@mui/material'

import { typography } from '@/src/Theme/typography'
import { getPrompts } from '@/src/Utils/prompt'
import { Colors } from '@/src/Theme/colors'
const Footer = () => {
  const router = useRouter()
  const SubCategoiresData = getPrompts()
  let firstfiveprompts = SubCategoiresData.slice(10, 15)
  let secondfiveprompts = SubCategoiresData.slice(15, 20)
  let thirdfiveprompts = SubCategoiresData.slice(0, 5)

  return (
    <>
      <div style={{ marginTop: 15, marginBottom: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={3}>
            <strong
              style={{
                color: Colors.GreyText,
                ...typography.body18Regular,
              }}
            >
              This project is free , open and crowd sourced. <br />
              <br />
              You can contribute by development of Features, Suggest generage use prompts , Convert
              prompts into forms , Donate GPT-Token for testing , Sponsor Development.
            </strong>
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: Colors.GreyBold,
                ...typography.body27Bold,
              }}
            >
              Navigate
            </strong>
            <br />

            <MenuItem
              style={{
                color: Colors.GreyText,
              }}
              onClick={() =>
                router.push({
                  pathname: '/',
                })
              }
            >
              Home
            </MenuItem>
            <MenuItem
              style={{
                color: Colors.GreyText,
              }}
              component={Link}
              href="https://github.com/sandeepscet/prompt-apps/"
              target="_blank"
            >
              GitHub
            </MenuItem>
            <MenuItem
              style={{
                color: Colors.GreyText,
              }}
              onClick={() => alert('Launching Soon..')}
            >
              Newsletter
            </MenuItem>
            <MenuItem
              style={{
                color: Colors.GreyText,
              }}
              component={Link}
              href="mailto:sandeep.scet@gmail.com?subject=Contacted%20for%20prompt%20Apps&body=Please%20write%20reason%20for%20contact%20here."
              target="_blank"
            >
              Contact
            </MenuItem>
          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: Colors.GreyBold,
                ...typography.body27Bold,
              }}
            >
              Apps
            </strong>
            {firstfiveprompts.map((x) => {
              return (
                <MenuItem
                  style={{
                    color: Colors.GreyText,
                  }}
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
                  style={{
                    color: Colors.GreyText,
                  }}
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
                  style={{
                    color: Colors.GreyText,
                  }}
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
