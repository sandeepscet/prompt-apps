import { Box, Chip, Typography } from "@mui/material";
import { Colors } from "@/src/Theme/colors";
import { typography } from "@/src/Theme/typography";
import { useRouter } from "next/router";
import React from "react";

import { getRecentPrompts } from "./../../Utils/prompt";

function RecentHeader() {
	const recentPrompts = getRecentPrompts();
	const router = useRouter();

	return (
		<Box
			sx={{
				width: "100%",
				justifyContent: "center",
				paddingTop: 1
			}}
		>
			<Typography
				variant="body2"
				color="text.secondary"
				align="center"
				style={{
					...typography.body18Regular,
					color: Colors.Black,
					paddingTop: 10,
					paddingBottom: 10
				}}
			>
				Recent : {"   "}
				{recentPrompts.map((item, index) => {
					return (
						<Chip
							label={item.title}
							component="a"
							onClick={() =>
								router.push({
									pathname: "/PromptDetails",
									query: { SubCategoryName: item.title }
								})
							}
							color="primary"
							key={index}
							style={{
								...typography.body15Regular,
								color: "#1a8fe3",
								backgroundColor: "#E3F1FB",
								marginRight: 10
							}}
							variant="outlined"
							size="small"
						/>
					);
				})}
			</Typography>
		</Box>
	);
};
export { RecentHeader };
