import {
  AppBar,
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuData from '../../Common/menu.json'
import { Row } from '@nextui-org/react'
import { width } from '@mui/system'
import { getCategoriesWitPrompts, getTopFiveCategoryWithPrompt } from '@/src/Utils/prompt'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Label } from '@mui/icons-material'
import { Colors } from '@/src/Theme/colors'
import { typography } from '@/src/Theme/typography'
import ShareIcon from '@mui/icons-material/Share'
import SettingsIcon from '@mui/icons-material/Settings'
import GitHubIcon from '@mui/icons-material/GitHub'
import InputAdornment from '@mui/material/InputAdornment'
import Subscription from '../Subcription'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share'

const Header = (props) => {
  const data1 = getTopFiveCategoryWithPrompt()
  const [openShareModal, setOpenShareModal] = React.useState(false)
  const handleOpenShareModal = () => setOpenShareModal(true)
  const handleCloseShareModal = () => setOpenShareModal(false)
  const [DarkMode, setDarkMode] = React.useState(false)
  const [pageURL, setPageURL] = useState(0)
  React.useEffect(() => {
    setPageURL(window.location.href)
  })
  const menuList = data1.map((x) => x.prompt)
  const testing = menuList.map((x) => x.title)
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  // const [modalopen, setOpenmodal] = useState(false);
  const [menuItem, setMenuitem] = useState([])
  const MenuItemsData = MenuData

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuOpen = (x, e) => {
    handleClick(e)
    console.log(x, 'testing onclick')
    // const data = x.prompt;
    // console.log(data, "x");
    setMenuitem(x)
  }

  const onClickCopyUrl = () => {
    const currentUrl = window.location.href
    navigator.clipboard.writeText(currentUrl)
  }

  const openConfig = () => {
    alert('pending')
    //TODO Fill this
  }

  const redirecToRepo = () => {
    const url = 'https://github.com/sandeepscet/prompt-apps'
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  console.log('menuitem', menuItem)
  const HandleRout = () => {}
  console.log('menu list', menuItem)
  return (
    <>
      <Box
        sx={{
          width: 'auto',
          height: 50,
          fontSize: 20,
          backgroundColor: '#fff',
          color: 'black',
          // '&:hover': {
          //     backgroundColor: '#eeeee4',
          //     opacity: [0.9, 0.8, 0.7],
          // },
        }}
      >
        <AppBar style={{ backgroundColor: 'white' }}>
          <Toolbar>
            <Grid container rowSpacing={1} style={{}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={2}>
                <Typography
                  align="left"
                  variant="h6"
                  noWrap
                  // component="div"
                  sx={{
                    marginLeft: 5,
                    marginRight: 5,
                    width: 200,
                    display: { xs: 'none', sm: 'block' },
                  }}
                  style={{ color: 'black' }}
                >
                  <Box component="img" src="logo.png" alt="logo" sx={{ height: '30px' }} />
                  {'    '}Prompt Apps
                </Typography>
              </Grid>
              <Grid item xs={7}>
                {data1.map((x) => {
                  return (
                    <>
                      <Button
                        style={{ color: Colors.Color8, ...typography.body12Bold }}
                        onClick={(e) => {
                          handleMenuOpen(x.prompt, e)
                        }}
                      >
                        {x.category.name}
                      </Button>
                    </>
                  )
                })}
                <Menu
                  style={{ marginTop: 13, width: 'auto' }}
                  keepMounted
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  open={Boolean(anchorEl)}
                >
                  {menuItem.map((x) => {
                    return (
                      <>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Row style={{ paddingLeft: 10, paddingRight: 10 }}>
                              <Avatar
                                variant="square"
                                sx={{ bgcolor: 'red' }}
                                aria-label="recipe"
                                style={{ borderRadius: 5, paddingLeft: 5 }}
                              >
                                R
                              </Avatar>

                              <div>
                                <Typography
                                  style={{
                                    marginLeft: 16,
                                    color: Colors.Black,
                                    ...typography.body18Regular,
                                  }}
                                  align="left"
                                >
                                  {x.title}
                                </Typography>
                                <Typography
                                  style={{
                                    marginLeft: 16,
                                    color: Colors.Color8,
                                    fontSize: 10,
                                    paddingBottom: 10,
                                  }}
                                  align="left"
                                >
                                  {x.description}
                                </Typography>
                              </div>
                            </Row>
                          </Grid>
                        </Grid>
                      </>
                    )
                  })}
                </Menu>
              </Grid>
              <Grid item xs={3}>
                <Row>
                  <Button
                    variant="outlined"
                    // onClick={() => {
                    //   if (!DarkMode) {
                    //     setDarkMode(true)
                    //   }else{
                    //     setDarkMode(false)
                    //   }
                    // }}
                    onClick={openConfig}
                    style={{
                      minHeight: '0px',
                      minWidth: '0px',
                      borderRadius: 25,
                      height: 40,
                      width: 40,
                      marginRight: 10,
                    }}
                  >
                    <SettingsIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    // onClick={() => {
                    //   if (!DarkMode) {
                    //     setDarkMode(true)
                    //   }else{
                    //     setDarkMode(false)
                    //   }
                    // }}
                    onClick={redirecToRepo}
                    style={{
                      minHeight: '0px',
                      minWidth: '0px',
                      borderRadius: 25,
                      height: 40,
                      width: 40,
                      marginRight: 10,
                    }}
                  >
                    <GitHubIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      minHeight: '0px',
                      minWidth: '0px',
                      borderRadius: 25,
                      height: 40,
                      width: 40,
                    }}
                    onClick={handleOpenShareModal}
                  >
                    <ShareIcon />
                  </Button>
                  <Search style={{ backgroundColor: Colors.Color13, color: 'black' }}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search" inputProps={{ 'aria-label': 'search' }} />
                  </Search>
                </Row>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div style={{ paddingTop: 6 }}></div>
        <Modal
          keepMounted
          open={openShareModal}
          onClose={handleCloseShareModal}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="keep-mounted-modal-title"
              variant="h3"
              style={{ color: Colors.Black, ...typography.body20Bold }}
              component="h2"
            >
              Show Us Some Love
            </Typography>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              style={{ color: Colors.Grey, ...typography.body18Regular }}
              component="h6"
            >
              Tell the world about us
            </Typography>
            <div style={{ paddingTop: 6 }}>
              <FacebookShareButton url={pageURL} quote="AI with UI, not prompt. isn't is amazing?">
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={pageURL} title="AI with UI, not prompt. isn't is amazing?">
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <LinkedinShareButton url={pageURL} title="AI with UI, not prompt. isn't is amazing?">
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
              <PinterestShareButton
                url={pageURL}
                description="AI with UI, not prompt. isn't is amazing?"
              >
                <PinterestIcon size={40} round />
              </PinterestShareButton>
              <RedditShareButton url={pageURL} title="AI with UI, not prompt. isn't is amazing?">
                <RedditIcon size={40} round />
              </RedditShareButton>
              <WhatsappShareButton url={pageURL} title="AI with UI, not prompt. isn't is amazing?">
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>
              <EmailShareButton url={pageURL} subject="Found Amazing Tool">
                <EmailIcon size={40} round />
              </EmailShareButton>
            </div>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              <TextField
                value={pageURL}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" style={{ color: Colors.Color12 }}>
                      <Button onClick={onClickCopyUrl}>Copy Link</Button>
                    </InputAdornment>
                  ),
                }}
                id="outlined-basic"
                label=""
                variant="outlined"
              />
            </Typography>
          </Box>
        </Modal>
      </Box>
    </>
  )
}

export default Header

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 3,
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
