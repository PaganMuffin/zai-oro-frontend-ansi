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
			onClick={() => {
				if (setFunction != null) setFunction(data);
			}}
			elevation={5}
			style={{
				backgroundColor:
					data.id === value?.id
						? theme.palette.info.dark
						: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				color:
					data.id === value?.id
						? `rgb(${process.env.REACT_APP_TEXT_LIGHTER})`
						: `rgb(${process.env.REACT_APP_TEXT})`,
				display: "flex",
				gap: "1rem",
				padding: 5,
				cursor: setFunction == null ? null : "pointer",
			}}>
			<div
				style={{
					backgroundImage: `url(${data.coverImage.medium})`,
					backgroundSize: "cover",
					height: "250px",
					aspectRatio: 8 / 11,
					borderRadius: "10px",
				}}
			/>
			<Box style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
				<Typography
					variant="h5"
					fontWeight={"bold"}
					style={{ flexGrow: showDescription ? null : "1" }}>
					{data.title.romaji}
				</Typography>
				{showDescription == true ? (
					<Typography fontWeight={"400"} variant="h6" style={{ flexGrow: "1" }}>
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
