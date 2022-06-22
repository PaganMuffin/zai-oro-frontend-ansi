import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Tooltip,
	Typography,
} from "@mui/material";
import React from "react";

const GridSeries = ({ series }) => {
	return (
		<Box
			style={{
				padding: "15px",
				display: "grid",
				gridTemplateColumns: "repeat(auto-fill, minmax(104px, 1fr))",
				gridGap: "1rem 2rem",
				justifyItems: "center",
			}}>
			{series.map((x) => {
				return (
					<Card key={x.id} elevation={0}>
						<CardActionArea>
							<CardMedia
								style={{
									width: 120,
									height: 170,
									borderRadius: "5px",
								}}
								image={x.coverImage.large}
								title={x.title.userPreferred}
							/>
							<Tooltip title={x.title.userPreferred} placement="top">
								<Typography
									fontWeight={500}
									style={{
										overflow: "hidden",
										textOverflow: "ellipsis",
										display: "-webkit-box",
										WebkitLineClamp: "2",
										WebkitBoxOrient: "vertical",
									}}>
									{x.title.userPreferred}
								</Typography>
							</Tooltip>
						</CardActionArea>
					</Card>
				);
			})}
		</Box>
	);
};

export default React.memo(GridSeries);
