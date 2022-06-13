import { Paper, Box, Typography, useTheme } from "@mui/material";

const AniListSeriesCard = ({
	data,
	value = null,
	setFunction = null,
	showDescription = true,
}) => {
	const theme = useTheme();
	return (
		<Paper
			onClick={() => setFunction(data)}
			elevation={5}
			style={{
				backgroundColor: data.id === value?.id ? theme.palette.info.dark : null,
				color: data.id === value?.id ? "white" : "black",
				display: "flex",
				gap: "1rem",
				padding: 5,
				cursor: "pointer",
			}}>
			<div
				style={{
					backgroundImage: `url(${data.coverImage.large})`,
					backgroundSize: "cover",
					height: "250px",
					aspectRatio: 8 / 11,
					borderRadius: "10px",
				}}
			/>
			<Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
				<Typography variant="h5" fontWeight={"bold"}>
					{data.title.userPreferred}
				</Typography>
				{showDescription == true ? (
					<Typography fontWeight={"400"} variant="h6">
						<div dangerouslySetInnerHTML={{ __html: data.description }} />
					</Typography>
				) : null}
				<Typography>
					{data.season} {data.seasonYear}
				</Typography>
			</Box>
		</Paper>
	);
};

export default AniListSeriesCard;
