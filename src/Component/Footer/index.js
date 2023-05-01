import { AppBar, Grid, MenuItem, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

import { Colors } from "@/src/Theme/colors";
import { getPrompts } from "@/src/Utils/prompt";
import { typography } from "@/src/Theme/typography";
const Footer = () => {
	const router = useRouter();
	const SubCategoiresData = getPrompts();
	const firstfiveprompts = SubCategoiresData.slice(21, 27);
	const secondfiveprompts = SubCategoiresData.slice(27, 33);
	const thirdfiveprompts = SubCategoiresData.slice(33, 39);

	const supportActions = [
		{
			text: "Feature Development",
			action: "https://prompt-apps.canny.io/feature-requests"
		},
		{
			text: "Prompts Writer",
			action: "https://prompt-apps.canny.io/prompt-conversion"
		},
		{
			text: "Prompt to JSON",
			action: "https://github.com/sandeepscet/prompt-apps/blob/main/src/Common/promptsMetaData.json"
		},
		{
			text: "Gift GPT Tokens",
			action: "mailto:sandeep.scet@gmail.com?subject=I%20would%20like%20to%20donate%20GPT%20Tokens&body=Agent%20%3A%20Chatgpt%0D%0AAmount%20%3A%20%2412%0D%0A%0D%0AI%20would%20like%20to%20give%20you%20this%20months%20chatgpt%20premium%20sponsorship.%20Please%20share%20account.%0D%0A"
		},
		{
			text: "Sponsor Development",
			action: "https://github.com/sandeepscet/prompt-apps"
		},
		{
			text: "Report an Issue",
			action: "https://github.com/sandeepscet/prompt-apps/issues"
		}
	];

	return (
		<>
			<div style={{ marginTop: 15, marginBottom: 10 }}>
				<Grid container spacing={2}>
					<Grid item xs={2} md={2}>
						<strong
							style={{
								fontSize: 25,
								paddingLeft: 15,
								color: Colors.GreyBold,
								...typography.body27Bold
							}}
						>
							Support Us
						</strong>
						{supportActions.map((x) => {
							return (
								<MenuItem
									component={Link}
									href={x.action}
									target="_blank"
									style={{
										color: Colors.GreyText
									}}
									key={x.text}
								>
									{x.text}
								</MenuItem>
							);
						})}
					</Grid>
					<Grid item xs={2} md={2}>
						<strong
							style={{
								fontSize: 25,
								paddingLeft: 15,
								color: Colors.GreyBold,
								...typography.body27Bold
							}}
						>
							Navigate
						</strong>
						<br />

						<MenuItem
							style={{
								color: Colors.GreyText
							}}
							onClick={() =>
								router.push({
									pathname: "/"
								})
							}
						>
							Home
						</MenuItem>
						<MenuItem
							style={{
								color: Colors.GreyText
							}}
							component={Link}
							href="https://github.com/sandeepscet/prompt-apps/"
							target="_blank"
						>
							GitHub
						</MenuItem>
						<MenuItem
							style={{
								color: Colors.GreyText
							}}
							onClick={() => alert("Launching Soon..")}
						>
							Newsletter
						</MenuItem>
						<MenuItem
							style={{
								color: Colors.GreyText
							}}
							component={Link}
							href="mailto:sandeep.scet@gmail.com?subject=Contacted%20for%20prompt%20Apps&body=Please%20write%20reason%20for%20contact%20here."
							target="_blank"
						>
							Contact
						</MenuItem>
					</Grid>
					<Grid item xs={2} md={2}>
						<strong
							style={{
								fontSize: 25,
								paddingLeft: 15,
								color: Colors.GreyBold,
								...typography.body27Bold
							}}
						>
							Apps
						</strong>
						{firstfiveprompts.map((x) => {
							return (
								<MenuItem
									style={{
										color: Colors.GreyText,
										textTransform: "capitalize"
									}}
									onClick={() =>
										router.push({
											pathname: "/PromptDetails",
											query: { SubCategoryName: x.title }
										})
									}
									key={x.title}
								>
									{x.title}
								</MenuItem>
							);
						})}
					</Grid>
					<Grid item xs={2} md={2}>
						<strong
							style={{
								fontSize: 25,
								paddingLeft: 15,
								color: Colors.GreyText,
								...typography.body27Bold
							}}
						></strong>

						{secondfiveprompts.map((x) => {
							return (
								<MenuItem
									style={{
										color: Colors.GreyText,
										textTransform: "capitalize"
									}}
									onClick={() =>
										router.push({
											pathname: "/PromptDetails",
											query: { SubCategoryName: x.title }
										})
									}
									key={x.title}
								>
									{x.title}
								</MenuItem>
							);
						})}
					</Grid>
					<Grid item xs={2} md={2}>
						<strong
							style={{
								fontSize: 25,
								paddingLeft: 15,
								color: Colors.GreyText,
								...typography.body27Bold
							}}
						></strong>
						{thirdfiveprompts.map((x) => {
							return (
								<MenuItem
									style={{
										color: Colors.GreyText,
										textTransform: "capitalize"
									}}
									onClick={() =>
										router.push({
											pathname: "/PromptDetails",
											query: { SubCategoryName: x.title }
										})
									}
									key={x.title}
								>
									{x.title}
								</MenuItem>
							);
						})}
					</Grid>
				</Grid>
			</div>
			<AppBar
				position="static"
				elevation={0}
				component="footer"
				color="default"
				style={{ height: 10 }}
			>
				<Toolbar style={{ justifyContent: "center", backgroundColor: "#EFF7FD" }}>
					<Typography variant="caption">
						@2023 Prompt Apps. All rights reserved
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Footer;
