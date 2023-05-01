import React from "react";
import { useRouter } from "next/router";
import {
	Avatar,
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	Chip,
	Grid,
	Typography
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Colors } from "@/src/Theme/colors";
import { Row } from "@nextui-org/react";
import { typography } from "../../Theme/typography";
import { getCategoryWithPrompt } from "@/src/Utils/prompt";

export const Category = () => {
	const router = useRouter();
	const allCategoires = getCategoryWithPrompt();
	const Categoires = allCategoires.splice(0, 12);

	const colors = ["#6F56EC", "#F66213", "#D61C4E", "#1C67CA", "#247881"];
	const footerColors = ["#EFEDFD", "#FEF2EB", "#FDEDF1", "#EDF4FD", "#EFF9FB"];

	const RenderItem = ({ x, index }) => {
		const colorIndex = index % colors.length;
		const primaryColor = colors[colorIndex];
		const secondaryColor = footerColors[colorIndex];

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
									pathname: "/CategoryPrompts",
									query: { categoryId: x.category.id }
								})
							}
						>
							<CardHeader
								style={{ paddingBottom: 0 }}
								avatar={
									<Avatar
										sx={{ bgcolor: secondaryColor }}
										aria-label="recipe"
										variant="rounded"
										style={{
											color: primaryColor,
											fontSize: 12,
											borderRadius: 20
										}}
									>
										<CategoryIcon />
									</Avatar>
								}
								title={
									<>
										<div
											style={{
												color: Colors.White
											}}
										>
											<Chip
												align="right"
												label={`${x.prompt.length} Apps`}
												style={{
													color: Colors.White
												}}
											/>
										</div>
									</>
								}
							/>

							<Box style={{ paddingRight: 10 }}>
								<Row style={{ justifyContent: "space-between" }}>
									<div>
										<Typography
											style={{
												textTransform: "capitalize",
												marginLeft: 16,
												color: Colors.White,
												...typography.body18Regular
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
												paddingBottom: 10
											}}
											align="left"
										>
											{x.category.description}
										</Typography>
									</div>
									<ArrowForwardRoundedIcon />
								</Row>
							</Box>
							<CardContent style={{ paddingTop: 0 }}>
								<Box
									sx={{ padding: 1, width: "auto" }}
									style={{
										border: "1px solid #E79668",
										borderRadius: 5,
										backgroundColor: secondaryColor
									}}
								>
									<Row>
										<Typography
											variant="body2"
											color="text.secondary"
											align="center"
											style={{ textTransform: "capitalize", ...typography.body12Regular }}
											onClick={(e) => {
												e.stopPropagation();
												router.push({
													pathname: "/PromptDetails",
													query: { SubCategoryName: x.prompt[0]?.title }
												});
											}}
										>
											Features Prompt: {x.prompt[0]?.title}
										</Typography>
									</Row>
								</Box>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</>
		);
	};

	return (
		<div style={{ backgroundColor: Colors.Color10 }}>
			<Box paddingRight={5} paddingLeft={5} paddingBottom={5} paddingTop={5}>
				<h1>Category</h1>
				<Grid container spacing={1} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					{Categoires.map((item, index) => {
						return <RenderItem x={item} key={index} index={index} />;
					})}
				</Grid>
			</Box>
		</div>
	);
};
