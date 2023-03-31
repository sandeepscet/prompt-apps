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
import MenuData from '../../Common/menu.json'
import { getPrompts } from '@/src/Utils/prompt'
const Footer = () => {
  const router = useRouter()
  const MenuItemsData = MenuData;
  const SubCategoiresData = getPrompts();
  let firstfiveprompts = SubCategoiresData.slice(0, 5);
  let secondfiveprompts = SubCategoiresData.slice(5, 10);
  let thirdfiveprompts = SubCategoiresData.slice(10, 15);
  return (
    <>
  <div style={{ marginTop: 50 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <div>
              TinyWow provides free online conversion, pdf, and other handy tools to help you solve
              problems of all types. All files both processed and unprocessed are deleted after 1 hour
            </div>
          </Grid>
          <Grid item xs={2} md={2}>
            <MenuList style={{ color: 'Black' }}>
              <strong
                style={{
                  fontSize: 25,
                  paddingLeft: 15,
                  color: 'black',
                  ...typography.body27Bold,
                }}
              >
                Navigate
              </strong>
              <br />

              <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
              <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
              <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
              <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
              <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
            </MenuList>
          </Grid>
          <Grid item xs={2} md={2}>
            <MenuList style={{ color: 'Black' }}>
              <strong
                style={{
                  fontSize: 25,
                  paddingLeft: 15,
                  color: 'black',
                  ...typography.body27Bold,
                }}
              >
                Prompt
              </strong>
              <br />
              {
                firstfiveprompts.map((x) => {
                  return (<MenuItem onClick={() => router.push('/PromptDetails')}>{x.title}</MenuItem>)
                })
              }
            </MenuList>
          </Grid>
          <Grid item xs={2} md={2}>
            <MenuList style={{ color: 'Black' }}>
              <br />

              {
                secondfiveprompts.map((x) => {
                  return (<MenuItem onClick={() => router.push('/PromptDetails')}>{x.title}</MenuItem>)
                })
              }
            </MenuList>
          </Grid>
          <Grid item xs={2} md={2}>
            <MenuList style={{ color: 'Black' }}>
              <br />
              {
                thirdfiveprompts.map((x) => {
                  return (<MenuItem onClick={() => router.push('/PromptDetails')}>{x.title}</MenuItem>)
                })
              }
            </MenuList>
          </Grid>

        </Grid>


        <AppBar position="static" elevation={0} component="footer" color="default">
          <Toolbar style={{ justifyContent: 'center' }}>
            <Typography variant="caption">©2023</Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default Footer
