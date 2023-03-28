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
const Footer = () => {
  const router = useRouter()
  const MenuItemsData = MenuData
  console.log('dfdffdsffdff', MenuItemsData)
  return (
    <>
      <div style={{ marginTop: 50 }}>
        <Row style={{ justifyContent: 'flex-start' }}>
          <div style={{ width: '30%' }}>
            TinyWow provides free online conversion, pdf, and other handy tools to help you solve
            problems of all types. All files both processed and unprocessed are deleted after 1 hour
          </div>
          <Row style={{ justifyContent: 'flex-start' }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
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
                  <MenuItem
                    style={{ marginTop: 3 }}
                    onClick={() => router.push('/PromptDetails')}
                  ></MenuItem>
                  <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                  <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                  <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                  <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                  <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                </MenuList>
              </Grid>
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
                <MenuItem
                  style={{ marginTop: 3 }}
                  onClick={() => router.push('/PromptDetails')}
                ></MenuItem>
                <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
                <MenuItem onClick={() => router.push('/PromptDetails')}>PromptDetails</MenuItem>
              </MenuList>
            </Grid>
          </Row>
        </Row>
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
