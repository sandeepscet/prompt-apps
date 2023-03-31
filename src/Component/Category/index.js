import React from 'react'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from '@mui/material'
import CategoryIcon from '@mui/icons-material/Category'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { useRouter } from 'next/router'
import { Colors } from '@/src/Theme/colors'
import { Row } from '@nextui-org/react'
import { typography } from '../../Theme/typography'
import { getCategoryWithPrompt, getPrompts } from '@/src/Utils/prompt'
import { stringToColor } from '@/src/Utils/common'

export const Category = () => {
  const router = useRouter()
  const Categoires = getCategoryWithPrompt()
  const colors = ['#6F56EC', '#F66213', '#D61C4E', '#1C67CA', '#247881']
  const footerColors = ['#EFEDFD', '#FEF2EB', '#FDEDF1', '#EDF4FD', '#EFF9FB']

  const RenderItem = ({ x, index }) => {
    const colorIndex = index % colors.length
    const primaryColor = colors[colorIndex]
    const secondaryColor = footerColors[colorIndex]

    return (
      <>
        <Grid item xs={3}>
          <Card
            sx={{ minWidth: 200 }}
            style={{ backgroundColor: primaryColor, borderRadius: 10 }}
            elevation={10}
            spacing={10}
          >
            <CardActionArea
              onClick={() =>
                router.push({
                  pathname: '/PromptDetails',
                  query: { categoryName: x.category.name },
                })
              }
            >
              <CardHeader
                style={{}}
                avatar={
                  <Avatar
                    sx={{ bgcolor: secondaryColor }}
                    aria-label="recipe"
                    variant="rounded"
                    style={{
                      color: primaryColor,
                      fontSize: 12,
                      borderRadius: 20,
                    }}
                  >
                    <CategoryIcon />
                  </Avatar>
                }
                title={
                  <>
                    <Typography
                      align="right"
                      style={{
                        color: Colors.White,
                      }}
                    >
                      <Chip
                        label={x.prompt.length + ' Apps'}
                        style={{
                          color: Colors.White,
                        }}
                      />
                    </Typography>
                  </>
                }
              />

              <Box style={{ paddingRight: 10 }}>
                <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <Typography
                      style={{
                        marginLeft: 16,
                        color: Colors.White,
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
                      {x.category.description}
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
                    backgroundColor: secondaryColor,
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
          {Categoires.map((item, index) => {
            return <RenderItem x={item} key={index} index={index} />
          })}
        </Grid>
      </Box>
    </div>
  )
}
