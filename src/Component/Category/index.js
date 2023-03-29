import React from 'react'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { useRouter } from 'next/router'
import { CategoiresData } from '@/src/Common/categoriesCard'
import { Colors } from '@/src/Theme/colors'
import { Row } from '@nextui-org/react'
import { typography } from '../../Theme/typography'
import { getCategoryWithPrompt } from '@/src/Utils/prompt'

export const Category = () => {
  const router = useRouter()
  const Categoires = getCategoryWithPrompt()
  console.log('Categoires', Categoires)
  const RenderItem = ({ x }) => {
    return (
      <>
        <Grid item xs={3}>
          <Card
            sx={{ minWidth: 200 }}
            style={{ backgroundColor: Colors.White, borderRadius: 10 }}
            elevation={10}
            spacing={10}
          >
            <CardActionArea onClick={() => router.push('/PromptDetails')}>
              <CardHeader
                style={{ backgroundColor: Colors.Color4 }}
                avatar={
                  <Avatar
                    sx={{ bgcolor: x.color }}
                    aria-label="recipe"
                    variant="rounded"
                    style={{
                      color: Colors.White,
                      fontSize: 12,
                      borderRadius: 20,
                    }}
                  >
                    <ContentCopyIcon />
                  </Avatar>
                }
                title={
                  <>
                    <Typography
                      align="right"
                      style={{
                        color: Colors.Black,
                      }}
                    >
                      {x.prompt.length} prompt
                    </Typography>
                  </>
                }
              />

              <Box style={{ backgroundColor: Colors.Color4, paddingRight: 10 }}>
                <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <Typography
                      style={{
                        marginLeft: 16,
                        color: Colors.Black,
                        ...typography.body18Regular,
                      }}
                      align="left"
                    >
                      {x.category.name}
                    </Typography>
                    <Typography
                      style={{
                        marginLeft: 16,
                        color: Colors.White,
                        fontSize: 12,
                        paddingBottom: 10,
                      }}
                      align="left"
                    >
                      {x.category.name}
                    </Typography>
                  </div>
                  <ArrowForwardRoundedIcon />
                </Row>
              </Box>
              <CardContent>
                <Box
                  sx={{ padding: 1, width: 'auto' }}
                  style={{
                    border: '1px solid #E79668',
                    borderRadius: 5,
                    backgroundColor: Colors.Color11,
                  }}
                >
                  <Row>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                      style={{ ...typography.body12Regular }}
                      onClick={() => alert('fdgderf')}
                    >
                      Features Prompts: {x.prompt[0]?.title}
                    </Typography>
                  </Row>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </>
    )
  }

  return (
    <div style={{ backgroundColor: Colors.Color10 }}>
      <Box paddingRight={5} paddingLeft={5} paddingBottom={5} paddingTop={5}>
        <h1>Category</h1>
        <Grid container spacing={1} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {Categoires.map((item) => {
            return <RenderItem x={item} />
          })}
        </Grid>
      </Box>
    </div>
  )
}
