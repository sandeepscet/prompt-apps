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
import { getPrompts } from '@/src/Utils/prompt'
export const SubCategoires = () => {
  const router = useRouter()

  const SubCategoiresData = getPrompts();

  console.log('SubCategoires',SubCategoiresData)
  const RenderItem = ({ x }) => {
    return (
      <Grid item xs={3}>
        <Card
          sx={{ minWidth: 200 , height:150 }}
          style={{ backgroundColor: Colors.Color13, borderRadius: 10 }}
          elevation={5}
          spacing={10}
        >
          <CardActionArea onClick={() => router.push('/PromptDetails')}>
            <CardHeader
              style={{  color: Colors.Black,
                ...typography.body18Bold,}}
              avatar={
                <Avatar sx={{ bgcolor: x.color }} aria-label="recipe" variant="rounded">
                  <ContentCopyIcon />
                </Avatar>
              }
              title={x.title}
            />
            <CardContent>
              {/* <Typography
                style={{
                  color: Colors.Black,
                  ...typography.body18Regular,
                }}
                align="left"
              >
                {x.title}
              </Typography> */}
              <Typography
                style={{
                  color: Colors.Color8,
                  fontSize: 12,
                  paddingBottom: 10,
                }}
                align="left"
              >
                {x.description
}
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
          {SubCategoiresData.map((item) => {
            return <RenderItem x={item} />
          })}
        </Grid>
      </Box>
    </div>
  )
}
