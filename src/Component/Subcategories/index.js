import { Avatar, Box, Card, CardActionArea, CardHeader, Grid } from "@mui/material";
import { Colors } from "@/src/Theme/colors";
import { typography } from "@/src/Theme/typography";
import { useRouter } from "next/router";
import DescriptionIcon from "@mui/icons-material/Description";
import React from "react";
// import { getPopularPrompts } from '@/src/Utils/prompt'
import { stringToColor } from "@/src/Utils/common";
// const SubCategoiresData = getPopularPrompts()

export const SubCategoires = (props) => {
	const { SubCategoiresData } = props;
	const router = useRouter();

	const RenderItem = ({ x }) => {
		return (
			<Grid item xs={3}>
				<Card
					sx={{ minWidth: 200 }}
					style={{ backgroundColor: Colors.White, borderRadius: 10 }}
					elevation={5}
					spacing={10}
				>
					<CardActionArea
						onClick={() =>
							router.push({
								pathname: "/PromptDetails",
								query: { SubCategoryName: x.title }
							})
						}
					>
						<CardHeader
							style={{
								textTransform: "capitalize",
								color: Colors.Black,
								...typography.body18Bold
							}}
							avatar={
								<Avatar
									sx={{ bgcolor: stringToColor(x.title) }}
									aria-label="recipe"
									variant="rounded"
								>
									<DescriptionIcon />
								</Avatar>
							}
							title={x.title}
							subheader={x.description}
						/>
					</CardActionArea>
				</Card>
			</Grid>
		);
	};

	return (
		<div style={{ backgroundColor: "#eff7fd" }}>
			<Box paddingRight={5} paddingLeft={5} paddingBottom={5} paddingTop={5}>
				<div
					style={{
						marginBottom: 20
					}}
				>
					<strong
						style={{
							fontSize: 25,
							color: "black",
							...typography.body27Bold
						}}
					>
						Popular Apps
					</strong>
				</div>
				<Grid container spacing={1} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{SubCategoiresData.map((item, index) => {
						return <RenderItem x={item} key={index} />;
					})}
				</Grid>
			</Box>
		</div>
	);
};
