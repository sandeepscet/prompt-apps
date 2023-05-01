import { Box, Typography } from "@mui/material";
import { Colors } from "@/src/Theme/colors";
import { typography } from "@/src/Theme/typography";
import React, { useEffect, useState } from "react";

function Subscription() {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);

	const featureActions = [
		{
			text: "Currently using free unstable version , Configure your API key for better response by clicking ⚙️ icon.",
			button: <></>
		}
	];

	const feature = featureActions[Math.floor(Math.random() * featureActions.length)];

	return (
		<Box
			sx={{
				width: "100%",
				justifyContent: "center",
				backgroundColor: Colors.Color14,
				"&:hover": {
					backgroundColor: Colors.Color14,
					opacity: [0.9, 0.8, 0.7]
				},
				paddingTop: 1
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
					paddingBottom: 10
				}}
			>
				{hydrated && feature["text"]}
				{hydrated && feature["button"]}

				{!hydrated && featureActions[0]["text"]}
				{!hydrated && featureActions[0]["button"]}
			</Typography>
		</Box>
	);
};
export { Subscription };
