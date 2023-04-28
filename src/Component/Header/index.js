import {
	AppBar,
	Box,
	Button,
	Grid,
	Menu,
	Modal,
	TextField,
	Toolbar,
	Typography
} from "@mui/material";
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	PinterestIcon,
	PinterestShareButton,
	RedditIcon,
	RedditShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton
} from "react-share";
import { Row } from "@nextui-org/react";
import { alpha, styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import DescriptionIcon from "@mui/icons-material/Description";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import GitHubIcon from "@mui/icons-material/GitHub";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { Fragment, createRef, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";

import { Colors } from "@/src/Theme/colors";
import { getTopFiveCategoryWithPrompt, listPrompts } from "@/src/Utils/prompt";
import { stringAvatar, stringToColor } from "../../Utils/common";
import { typography } from "@/src/Theme/typography";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	marginLeft: 0,
	width: "100%",

	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto"
	}
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%"
	}
}));

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "auto",
	bgcolor: "background.paper",
	borderRadius: 3,
	boxShadow: 24,
	p: 4
};

const styles = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	borderRadius: 3,
	boxShadow: 24,
	p: 4
};

import Link from "next/link";
const Header = () => {
	const router = useRouter();
	const searchInputRef = createRef();

	const [pageURL, setPageURL] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [menuItem, setMenuitem] = useState([]);
	const [openShareModal, setOpenShareModal] = useState(false);
	const [show, setShow] = useState(false);
	const [option, setOptions] = useState("");
	const [apiKey, setApiKey] = useState(null);
	const [apiEndpoint, setApiEndpoint] = useState(null);

	const [searchResults, setSearchResults] = useState([]);
	const data1 = getTopFiveCategoryWithPrompt();

	const handleOpenShareModal = () => setOpenShareModal(true);
	const handleCloseShareModal = () => setOpenShareModal(false);

	const handleSubmit = () => {
		localStorage.setItem("apiKey", apiKey);
		localStorage.setItem("apiEndpoint", apiEndpoint);
		localStorage.setItem("option", option);
		setShow(false);
	};
	const handleCloseSettingModal = () => {
		setApiKey(localStorage.getItem("apiKey"));
		setApiEndpoint(localStorage.getItem("apiEndpoint"));
		setOptions(localStorage.getItem("option"));
		setShow(false);
	};

	useEffect(() => {
		setPageURL(window.location.href);
	}, []);

	useEffect(() => {
		if (!localStorage.getItem("option")) {
			localStorage.setItem("apiEndpoint", "https://api.pawan.krd/v1/chat/completions");
			localStorage.setItem("option", "endpoint");
			setOptions(localStorage.getItem("option"));
		}

		setOptions(localStorage.getItem("option"));
		setApiKey(localStorage.getItem("apiKey"));
		setApiEndpoint(localStorage.getItem("apiEndpoint"));
	}, []);

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuOpen = (x, e) => {
		handleClick(e);
		setMenuitem(x);
	};

	const onClickCopyUrl = () => {
		const currentUrl = window.location.href;
		navigator.clipboard.writeText(currentUrl);
	};

	const openConfig = () => {
		setShow(true);
	};

	const redirecToRepo = () => {
		const url = "https://github.com/sandeepscet/prompt-apps";
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};
	const handleSearch = (e) => {
		const searchTerm = e.target.value;
		const filteredResults = listPrompts(searchTerm);
		setSearchResults(filteredResults);
	};

	const onClickSearchResult = () => {
		const parentInp = searchInputRef.current;
		if (parentInp) {
			parentInp.querySelector("input").value = "";
		}
		setSearchResults([]);
	};

	const HadnleRadioChange = (e) => {
		const data = e.target.value;
		setOptions(data);
	};

	return (
		<>
			<Box
				sx={{
					width: "auto",
					height: 50,
					fontSize: 20,
					backgroundColor: "#fff",
					color: "black"
				}}
			>
				<AppBar style={{ backgroundColor: "white" }}>
					<Toolbar>
						<Grid
							container
							rowSpacing={1}
							style={{}}
							columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						>
							<Grid
								item
								xs={2}
								onClick={() =>
									router.push({
										pathname: "/"
									})
								}
							>
								<Typography
									align="left"
									variant="h6"
									noWrap
									sx={{
										marginLeft: 5,
										marginRight: 5,
										width: 200,
										cursor: "pointer",
										display: { xs: "none", sm: "block" }
									}}
									style={{ color: "black" }}
								>
									<Box
										component="img"
										src="logo.png"
										alt="logo"
										sx={{ height: "30px" }}
									/>
									{"    "}Prompt Apps
								</Typography>
							</Grid>
							<Grid item xs={7}>
								{data1.map((x) => {
									return (
										<Fragment key={x.category.name}>
											<Button
												style={{
													color: Colors.Color8,
													...typography.body12Bold
												}}
												onClick={(e) => {
													handleMenuOpen(x.prompt, e);
												}}
											>
												{x.category.name}
											</Button>
										</Fragment>
									);
								})}
								<Menu
									style={{ marginTop: 13, width: "auto" }}
									keepMounted
									anchorEl={anchorEl}
									onClose={handleClose}
									onBlur={handleClose}
									open={Boolean(anchorEl)}
								>
									{menuItem.map((x) => {
										return (
											<>
												<Grid container spacing={2}>
													<Grid item xs={12}>
														<Row
															style={{
																paddingLeft: 10,
																paddingRight: 10
															}}
															onClick={() =>
																router.push({
																	pathname: "/PromptDetails",
																	query: {
																		SubCategoryName: x.title
																	}
																})
															}
														>
															<Avatar
																{...stringAvatar(x.title)}
																variant="square"
																aria-label="recipe"
																style={{
																	borderRadius: 5,
																	paddingLeft: 5
																}}
															/>

															<div>
																<Typography
																	style={{
																		marginLeft: 16,
																		color: Colors.Black,
																		...typography.body18Regular
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
																		paddingBottom: 10
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
										);
									})}
								</Menu>
							</Grid>
							<Grid item xs={3}>
								<Row>
									<Button
										variant="outlined"
										onClick={openConfig}
										style={{
											minHeight: "0px",
											minWidth: "0px",
											borderRadius: 25,
											height: 40,
											width: 40,
											marginRight: 10
										}}
									>
										<SettingsIcon />
									</Button>
									<Button
										variant="outlined"
										onClick={redirecToRepo}
										style={{
											minHeight: "0px",
											minWidth: "0px",
											borderRadius: 25,
											height: 40,
											width: 40,
											marginRight: 10
										}}
									>
										<GitHubIcon />
									</Button>
									<Button
										variant="outlined"
										style={{
											minHeight: "0px",
											minWidth: "0px",
											borderRadius: 25,
											height: 40,
											width: 40
										}}
										onClick={handleOpenShareModal}
									>
										<ShareIcon />
									</Button>
									<Search
										style={{ backgroundColor: Colors.Grey, color: "black" }}
									>
										<SearchIconWrapper>
											<SearchIcon />
										</SearchIconWrapper>
										<StyledInputBase
											ref={searchInputRef}
											onChange={handleSearch}
											placeholder="Search"
											inputProps={{ "aria-label": "search" }}
										/>
										<SearchResultsBox
											results={searchResults}
											onClickSearchResult={onClickSearchResult}
										/>
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
							style={{ color: Colors.LightGrey, ...typography.body18Regular }}
							component="h6"
						>
							Tell the world about us
						</Typography>
						<div style={{ paddingTop: 6 }}>
							<FacebookShareButton
								url={pageURL}
								quote="AI with UI, not prompt. isn't is amazing?"
							>
								<FacebookIcon size={40} round />
							</FacebookShareButton>
							<TwitterShareButton
								url={pageURL}
								title="AI with UI, not prompt. isn't is amazing?"
							>
								<TwitterIcon size={40} round />
							</TwitterShareButton>
							<LinkedinShareButton
								url={pageURL}
								title="AI with UI, not prompt. isn't is amazing?"
							>
								<LinkedinIcon size={40} round />
							</LinkedinShareButton>
							<PinterestShareButton
								url={pageURL}
								description="AI with UI, not prompt. isn't is amazing?"
							>
								<PinterestIcon size={40} round />
							</PinterestShareButton>
							<RedditShareButton
								url={pageURL}
								title="AI with UI, not prompt. isn't is amazing?"
							>
								<RedditIcon size={40} round />
							</RedditShareButton>
							<WhatsappShareButton
								url={pageURL}
								title="AI with UI, not prompt. isn't is amazing?"
							>
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
										<InputAdornment
											position="end"
											style={{ color: Colors.Color12 }}
										>
											<Button onClick={onClickCopyUrl}>Copy Link</Button>
										</InputAdornment>
									)
								}}
								id="outlined-basic"
								label=""
								variant="outlined"
							/>
						</Typography>
					</Box>
				</Modal>
				<Modal
					keepMounted
					open={show}
					onClose={handleCloseSettingModal}
					aria-labelledby="keep-mounted-modal-title"
					aria-describedby="keep-mounted-modal-description"
				>
					<Box sx={styles}>
						<Typography
							style={{
								color: Colors.Black,
								...typography.body20Bold
							}}
							align="left"
						>
							API Configuration
						</Typography>
						<Typography
							style={{
								...typography.body15Regular,
								fontStyle: "italic"
							}}
							align="left"
						>
							Currently we support openAI
						</Typography>

						<Row>
							<Typography>
								<FormControl style={{ marginTop: 15 }}>
									<RadioGroup
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group"
										onChange={(e) => HadnleRadioChange(e)}
									>
										<FormControlLabel
											value="key"
											control={<Radio />}
											label="Key (Browser)"
										/>
										<FormControlLabel
											value="endpoint"
											control={<Radio />}
											label="Endpoint (Server)"
										/>
									</RadioGroup>
								</FormControl>
							</Typography>
						</Row>
						<Row>
							{option ? (
								<Typography
									style={{
										color: Colors.Black,
										...typography.body15Regular,
										marginTop: 20
									}}
								>
									{option === "key" ? "OpenAI API Key:" : "Server Endpoint:"}
								</Typography>
							) : null}
						</Row>
						{option === "key" && (
							<>
								<Typography style={{ with: "100%", marginTop: 5 }}>
									<TextField
										size="small"
										id="apiKey"
										style={{ width: "100%", paddingBottom: 1 }}
										value={apiKey ? apiKey : ""}
										onChange={(e) => setApiKey(e.target.value)}
									/>
								</Typography>
								<Typography
									style={{
										color: Colors.Color18,
										...typography.body15Regular,
										width: "100%"
									}}
								>
									You can find your Secret API key in your{" "}
									<a
										href="https://beta.openai.com/account/api-keys"
										target="_blank"
										rel="noreferrer"
									>
										User settings{" "}
									</a>
									<br />
									<br />
									For privacy and security, the keys will only be stored in the
									browser. All the data will be retrieved from the browser.
								</Typography>
							</>
						)}
						{option === "endpoint" && (
							<>
								<Typography style={{ width: "100%", marginTop: 5 }}>
									<TextField
										size="small"
										id="apiEndpoint"
										value={apiEndpoint ? apiEndpoint : ""}
										onChange={(e) => setApiEndpoint(e.target.value)}
										style={{ width: "100%", paddingBottom: 1 }}
									/>
								</Typography>
								<Typography
									style={{
										color: Colors.Color18,
										...typography.body15Regular,
										width: "100%"
									}}
								>
									You can setup server that will respond to prompt{" "}
									<a
										href="https://github.com/waylaidwanderer/node-chatgpt-api"
										target="_blank"
										rel="noreferrer"
									>
										Sample Repo
									</a>
								</Typography>
							</>
						)}
						<Row
							align="right"
							style={{ marginTop: 20, width: "100%", justifyContent: "flex-end" }}
						>
							<Button
								variant="contained"
								style={{ backgroundColor: Colors.Color19 }}
								onClick={handleCloseSettingModal}
							>
								Close
							</Button>
							<Button
								variant="contained"
								style={{ marginLeft: 10 }}
								onClick={handleSubmit}
							>
								Submit
							</Button>
						</Row>
					</Box>
				</Modal>
			</Box>
		</>
	);
};

const SearchResultsBox = ({ results, onClickSearchResult }) => {
	if (!results || results.length === 0) {
		return null;
	}

	return (
		<Box
			sx={{
				position: "absolute",
				width: "100%",
				zIndex: 2,
				backgroundColor: "background.paper",
				borderRadius: 3,
				boxShadow: 24,
				p: 2,
				marginTop: 1
			}}
		>
			{results.map((result, index) => (
				<div
					key={index}
					style={{
						marginTop: "0.5rem",
						display: "flex",
						alignItems: "center",
						gap: "15px",
						fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
					}}
				>
					<Avatar
						sx={{ bgcolor: stringToColor(result.title) }}
						aria-label="recipe"
						variant="rounded"
					>
						<DescriptionIcon />
					</Avatar>
					<Link
						href={`/PromptDetails?SubCategoryName=${result.title}`}
						onClick={onClickSearchResult}
						style={{
							color: Colors.Black,
							textDecoration: "none",
							cursor: "pointer",
							fontSize: 15
						}}
					>
						{result.title}
					</Link>
				</div>
			))}
		</Box>
	);
};

export default Header;
