import { Paper, Box, Typography, Button } from "@mui/material";

const SubEntry = ({ data, width = "100%" }) => {
	return (
		<Paper
			style={{
				display: "flex",
				width: width,
				padding: 10,
				gap: 10,
				background: `rgb(${process.env.REACT_APP_FOREGROUND})`,
				color: `rgb(${process.env.REACT_APP_TEXT})`,
			}}>
			<div
				style={{
					backgroundImage: `url(${data.series.coverImage.medium})`,
					backgroundSize: "cover",
					height: "250px",
					aspectRatio: 8 / 11,
					borderRadius: "10px",
				}}
			/>
			<Box
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 10,
					width: "100%",
				}}>
				<Typography variant="h5">
					{data.series.title.romaji} #{data.episode}
				</Typography>
				<Box
					style={{
						display: "flex",
						flexDirection: "row",
						//justifyContent: "space-evenly",
						gap: 10,
						flex: 1,
					}}>
					<Typography variant="h6">Autor: {data.author}</Typography>
				</Box>
				<a
					href={`${process.env.REACT_APP_API_URL}/file/${data.filename}`}
					download={data.filename}
					target="_blank"
					style={{
						textDecoration: "none",
						alignSelf: "end",
						marginBottom: "0 auto",
					}}>
					<Button variant="contained" size="large">
						Pobierz
					</Button>
				</a>
			</Box>
		</Paper>
	);
};

export default SubEntry;
