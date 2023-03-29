import { Box, Button, Typography } from '@mui/material'
import { Colors } from '@/src/Theme/colors'
import { typography } from '@/src/Theme/typography'
const Subscription = () => {
  return (
    <Box
      sx={{
        width: '100%',
        // height:50,
        
        justifyContent:'center',
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
        style={{ ...typography.body18Regular,color:Colors.White ,paddingTop:10,paddingBottom:10}}
        onClick={() => alert('fdgderf')}
      >
        Features Prompts
        <Button  style={{ ...typography.body12Regular,color:Colors.White}}>Subscribe</Button>
      </Typography>
    </Box>
  )
}
export default Subscription
