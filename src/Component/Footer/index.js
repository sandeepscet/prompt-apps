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
      <div style={{ marginTop: 50, marginBottom: 50 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <strong
              style={{
                fontSize: 25,
                color: 'black',
                ...typography.body15Regular,
              }}
            >
              TinyWow provides free online conversion, pdf, and other handy tools to help you solve
              problems of all types. All files both processed and unprocessed are deleted after 1 hour
            </strong>
          </Grid>
          <Grid item xs={2} md={2}>

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

            <MenuItem >Home</MenuItem>


          </Grid>
          <Grid item xs={2} md={2}>

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

            {
              firstfiveprompts.map((x) => {
                return (<MenuItem onClick={() => router.push({
                  pathname: '/PromptDetails',
                  query: { SubCategoryName: x.title },
                })}>{x.title}</MenuItem>)
              })
            }

          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: 'black',
                ...typography.body27Bold,
              }}
            >

            </strong>

            {
              secondfiveprompts.map((x) => {
                return (<MenuItem onClick={() => router.push({
                  pathname: '/PromptDetails',
                  query: { SubCategoryName: x.title },
                })}>{x.title}</MenuItem>)
              })
            }

          </Grid>
          <Grid item xs={2} md={2}>
            <strong
              style={{
                fontSize: 25,
                paddingLeft: 15,
                color: 'black',
                ...typography.body27Bold,
              }}
            >

            </strong>
            {
              thirdfiveprompts.map((x) => {
                return (<MenuItem onClick={() => router.push({
                  pathname: '/PromptDetails',
                  query: { SubCategoryName: x.title },
                })}>{x.title}</MenuItem>)
              })
            }

          </Grid>

        </Grid>
      </div>
    </>
  )
}

export default Footer
