import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Tooltip,
	Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
					<Link
						to={`/series/${x.id}?author=1`}
						style={{ textDecoration: "none" }}>
						<Card
							key={x.id}
							elevation={0}
							sx={{
								backgroundColor: "rgba(0,0,0,0)",
								color: `rgb(${process.env.REACT_APP_TEXT})`,
							}}>
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
						</Card>
					</Link>
				);
			})}
		</Box>
	);
};

export default React.memo(GridSeries);
