import { Box, Button, Modal, TextField, Typography } from "@mui/material";
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
import InputAdornment from "@mui/material/InputAdornment";
import React, { useEffect, useState } from "react";

import { Colors } from "@/src/Theme/colors";
import { typography } from "@/src/Theme/typography";

const ShareModal = (props) => {
	const { isOpen = false } = props;
	const [pageURL, setPageURL] = useState(0);

	const handleCloseShareModal = () => {
		props.onClose();
	};
	useEffect(() => {
		setPageURL(window.location.href);
	}, []);

	const onClickCopyUrl = () => {
		const currentUrl = window.location.href;
		navigator.clipboard.writeText(currentUrl);
	};

	return (
		<Modal
			keepMounted
			open={isOpen}
			onClose={handleCloseShareModal}
			aria-labelledby="keep-mounted-modal-title"
			aria-describedby="keep-mounted-modal-description"
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "auto",
					bgcolor: "background.paper",
					borderRadius: 3,
					boxShadow: 24,
					p: 4
				}}
			>
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
								<InputAdornment position="end" style={{ color: Colors.Color12 }}>
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
	);
};
export { ShareModal };
