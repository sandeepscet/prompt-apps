import React from 'react'
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useRouter } from 'next/router'
import { Data } from '@/src/Common/card'
import { Colors } from '@/src/Theme/colors'
import { typography } from '@/src/Theme/typography'
export const SubCategoires = () => {
  const router = useRouter()

  const RenderItem = ({ x }) => {
    return (
      <Grid item xs={3}>
        <Card
          sx={{ minWidth: 200 }}
          style={{ backgroundColor: '#ffffff', borderRadius: 10 }}
          elevation={0}
          spacing={10}
        >
          <CardActionArea onClick={() => router.push('/PromptDetails')}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: x.color }} aria-label="recipe" variant="rounded">
                  <ContentCopyIcon />
                </Avatar>
              }
            />
            <CardContent>
              <Typography
                style={{
                  color: Colors.Black,
                  ...typography.body18Regular,
                }}
                align="left"
              >
                {x.name}
              </Typography>
              <Typography
                style={{
                  color: Colors.Color8,
                  fontSize: 12,
                  paddingBottom: 10,
                }}
                align="left"
              >
                {x.Desc}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )
  }

  return (
    <div style={{ backgroundColor: '#eff7fd' }}>
      <Box paddingRight={5} paddingLeft={5} paddingBottom={5} paddingTop={5}>
        <div
          style={{
            marginBottom: 20,
          }}
        >
          <strong
            style={{
              fontSize: 25,
              color: 'black',
              ...typography.body27Bold,
            }}
          >
            Prompt
          </strong>
        </div>
        <Grid container spacing={1} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Data.map((item) => {
            return <RenderItem x={item} />
          })}
        </Grid>
      </Box>
    </div>
  )
}
