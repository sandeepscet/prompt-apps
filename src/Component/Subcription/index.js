import { Box, Button, Typography } from '@mui/material'
import { Colors } from '@/src/Theme/colors'
import { typography } from '@/src/Theme/typography'
import React from 'react'

const Subscription = () => {
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => {
    setHydrated(true)
  }, [])

  const featureActions = [
    {
      text: 'Want Updates of New Prompts and Features? No Spam.',
      button: (
        <a
          target="_blank"
          href="https://github.com/sandeepscet/prompt-apps/"
          style={{ textDecoration: 'none' }}
        >
          <Button variant="secondary" style={{ ...typography.body12Regular, color: Colors.White }}>
            Subscribe
          </Button>
        </a>
      ),
    },
    {
      text: 'Free. No Sign-Up Required. No Limits.',
    },
  ]

  const feature = featureActions[Math.floor(Math.random() * featureActions.length)]

  return (
    <Box
      sx={{
        width: '100%',
        // height:50,

        justifyContent: 'center',
        backgroundColor: Colors.Color14,
        '&:hover': {
          backgroundColor: Colors.Color14,
          opacity: [0.9, 0.8, 0.7],
        },
        paddingTop: 1,
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        style={{
          ...typography.body18Regular,
          color: Colors.White,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {hydrated && feature['text']}
        {hydrated && feature['button']}

        {!hydrated && featureActions[0]['text']}
        {!hydrated && featureActions[0]['button']}
      </Typography>
    </Box>
  )
}
export default Subscription
